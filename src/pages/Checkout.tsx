/* eslint-disable @typescript-eslint/no-explicit-any */
import CheckoutItemCard from "@/components/modules/Checkout/CheckoutItemCard";
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
import { useForm } from "react-hook-form";
import { Link } from "react-router";

const Checkout = () => {
  const form = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
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
          {/* Coupon section */}
          {/* <div className="border border-dashed p-4 space-y-3">
            <p className="text-sm">
              If you have a coupon code, please apply it below.
            </p>
            <div className="join w-full">
              <input
                className="input join-item w-full"
                placeholder="Coupon code"
              />
              <button className="btn join-item">Apply Coupon</button>
            </div>
          </div> */}

          {/* Shipping Details */}
          <div className="my-5">
            <h2 className="text-lg font-semibold mb-5">Shipping Details</h2>

            <div>
              <Form {...form}>
                <form
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
                          This is your public display email.
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
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="pb-1">District</FormLabel>
                        <FormControl className="">
                          <Select {...field}>
                            <FormControl className="w-full">
                              <SelectTrigger>
                                <SelectValue placeholder="Select your District" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="m@example.com">
                                m@example.com
                              </SelectItem>
                              <SelectItem value="m@google.com">
                                m@google.com
                              </SelectItem>
                              <SelectItem value="m@support.com">
                                m@support.com
                              </SelectItem>
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
                    name="phone"
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

                  <Button type="submit" className="w-full">
                    Submit
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>

        {/* Your Order */}
        <div className="w-full md:w-1/2 border h-min p-4">
          <h2 className="text-lg font-semibold">Your Order</h2>
          <div>
            <div className="flex flex-col gap-3 mt-4">
              <CheckoutItemCard></CheckoutItemCard>

              <div className="flex items-center justify-between gap-5 text-base font-medium">
                <p>Subtotal</p>
                <p>৳ subtotal</p>
              </div>
              <div className="flex items-center justify-between gap-5 text-base font-medium">
                <p>Delivery Charges</p>
                <p>৳ shipping cost</p>
              </div>

              <hr className="text-base-300" />
              <div className="flex items-center justify-between gap-5 text-base font-medium">
                <p>Total</p>
                <p>৳ subtotal + shippingCost </p>
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
              <Checkbox />
              <span className="font-semibold text-xs">
                I have read and agree to the website Terms and conditions *
              </span>
            </div>
            <Button className="w-full my-4">Confirm Order</Button>
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
