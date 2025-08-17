/* eslint-disable @typescript-eslint/no-explicit-any */
import CheckoutItemCard from "@/components/modules/Checkout/CheckoutItemCard";
import { CheckoutOTPDialog } from "@/components/modules/Checkout/CheckoutOTPDialog";
import SectionHeader from "@/components/modules/Home/SectionHeader";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { divisions } from "@/constants/divisions";
import {
  useLoginMutation,
  useUpdateUserMutation,
  useUserInfoQuery,
} from "@/redux/features/auth/auth.api";
import { useAddCartMutation } from "@/redux/features/cart/cart.api";
import { clearCart, selectCarts } from "@/redux/features/cart/CartSlice";
import { useAddOrderMutation } from "@/redux/features/order/order.api";
import { useAppDispatch } from "@/redux/hook";
import type { IErrorResponse } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import z from "zod";

const userSchema = z.object({
  name: z
    .string("Name field required")
    .min(1, { message: "Name must be at least 1 characters" }),
  email: z.email("Invalid Email"),
  phone: z
    .string("Phone number must be string")
    .regex(/^(?:\+8801\d{9}|01\d{9})$/, {
      message:
        "Phone number must be valid for Bangladesh, Format: +8801XXXXXXXXX",
    }),
  division: z
    .string("Division field required")
    .min(2, { message: "Division field required" }),
  address: z
    .string("Address field required")
    .min(5, { message: "Address must be at least 5 characters" }),
});

const Checkout = () => {
  const { data, isLoading } = useUserInfoQuery(undefined);
  const userInfo = data?.data;
  const [login] = useLoginMutation();
  const [updateUser] = useUpdateUserMutation();
  const [buttonDisable, setButtonDisable] = useState(false);
  // dialog
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const carts = useSelector(selectCarts);
  const [addCart] = useAddCartMutation();
  const [addOrder] = useAddOrderMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      division: "",
      address: "",
    },
  });

  useEffect(() => {
    if (userInfo) {
      form.reset({
        name: userInfo?.name,
        email: userInfo?.email,
        phone: userInfo?.phone,
        division: userInfo?.division,
        address: userInfo?.address,
      });
    }
  }, [userInfo, form]);

  if (isLoading) return;

  const onSubmit = async (data: z.infer<typeof userSchema>) => {
    setButtonDisable(true);
    if (userInfo?.email) {
      const toastId = toast.loading("Your Order is processing...");
      await updateUser({
        userInfo: data,
        id: userInfo?._id,
      }).unwrap();

      handleConfirmOrder(toastId);
    } else {
      const toastId = toast.loading("Sending otp...");
      try {
        const res = await login(data).unwrap();
        if (res.success) {
          toast.success(res.message, { id: toastId });
          setEmail(data.email);
          setOpen(true);
        }
      } catch (err: unknown) {
        console.error(err);
        toast.error((err as IErrorResponse).message || "Something went wrong", {
          id: toastId,
        });
        setButtonDisable(false);
      }
    }
  };

  // calculate total price
  const totalPrice = carts.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  const shippingCost = 120;

  const handleConfirmOrder = async (toastId: any) => {
    try {
      const cartIds = [];

      for (const item of carts) {
        const res = await addCart({
          product: item?.id,
          quantity: item?.quantity,
        }).unwrap();
        cartIds.push(res?.data?._id);
      }

      const orderResult = await addOrder({ carts: cartIds }).unwrap();
      if (orderResult.success) {
        toast.success("You Order is Confirmed", { id: toastId });
        dispatch(clearCart());
        navigate("/", { replace: true });
      }
    } catch (err: unknown) {
      console.error(err);
      toast.error((err as IErrorResponse).message || "Something went wrong");
    }

    setButtonDisable(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <section className="mt-10 mb-12">
        <SectionHeader
          title={"Checkout Details"}
          subTitle={
            "Find the perfect fit for every occasion – Men, Women, Kids, and Accessories."
          }
        ></SectionHeader>
      </section>

      <div className="flex gap-5 flex-col md:flex-row my-5">
        <div className="w-full md:w-1/2 h-min">
          {/* Shipping Details */}
          <div className="my-5">
            <h2 className="text-lg font-semibold mb-5">Shipping Details</h2>

            <div>
              <Form {...form}>
                <form
                  id="confirm-order-form"
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="pb-1">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jon Deo" type="text" {...field} />
                        </FormControl>
                        <FormDescription className="sr-only">
                          This is your public display name.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="pb-1">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="jon@gmail.com"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="sr-only">
                          This is your public display email.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="pb-1">Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="01XXX-XXXXXX"
                            type="text"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="sr-only">
                          This is your phone number
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <h2 className="text-lg font-semibold mb-5">
                    Delivery Address
                  </h2>

                  <FormField
                    control={form.control}
                    name="division"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="pb-1">Division</FormLabel>
                        <FormControl className="">
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                            defaultValue={"Khulna"}
                            {...field.onBlur}
                          >
                            <FormControl className="w-full">
                              <SelectTrigger>
                                <SelectValue placeholder="Select your Division" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {divisions.map((division, idx) => (
                                <SelectItem key={idx} value={division}>
                                  {division}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormDescription className="sr-only">
                          This is your public display email.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="pb-1">Address</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Delivery address" {...field} />
                        </FormControl>
                        <FormDescription className="sr-only">
                          This is your public display email.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            </div>
          </div>
        </div>

        <CheckoutOTPDialog
          onConfirm={handleConfirmOrder}
          open={open}
          onOpenChange={setOpen}
          email={email}
        />

        {/* Your Order */}
        <div className="w-full md:w-1/2 border h-min p-4">
          <h2 className="text-lg font-semibold">Your Order</h2>
          <div>
            <div className="flex flex-col gap-3 mt-4">
              {carts?.map((item) => (
                <CheckoutItemCard key={item?.id} item={item} />
              ))}

              <div className="flex items-center justify-between gap-5 text-base font-medium">
                <p>Subtotal</p>
                <p>৳ {totalPrice}</p>
              </div>
              <div className="flex items-center justify-between gap-5 text-base font-medium">
                <p>Delivery Charges</p>
                <p>৳ {shippingCost}</p>
              </div>

              <hr className="text-base-300" />
              <div className="flex items-center justify-between gap-5 text-base font-medium">
                <p>Total</p>
                <p>৳ {Number(totalPrice + shippingCost)} </p>
              </div>
            </div>
            <div className="my-4 space-y-2">
              <h2 className="font-semibold">Cash on delivery</h2>
              <p className="text-xs text-gray-600">
                সর্বোচ্চ ৪-৫ দিন (ঢাকায়) এবং ৫-৭ দিন (ঢাকার বাহিরে) সময়ের মধ্যে
                হোম ডেলিভারী করা হয়।
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                defaultChecked={checkbox}
                onCheckedChange={() => setCheckbox(!checkbox)}
              ></Checkbox>
              <span className="font-semibold text-xs">
                I have read and agree to the website Terms and conditions *
              </span>
            </div>
            <Button
              disabled={!checkbox || buttonDisable}
              form="confirm-order-form"
              className="w-full my-4"
            >
              Confirm Order
            </Button>
            <p className="text-xs">
              <span className="text-gray-500">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our{" "}
              </span>
              <Link to={"/"}>Privacy policy</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
