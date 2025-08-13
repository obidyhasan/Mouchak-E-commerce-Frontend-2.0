/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { cn } from "@/lib/utils";
import logo from "@/assets/icons/logo-icon.svg";
import { Dot } from "lucide-react";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router";

// const formSchema = z.object({
//   pin: z.string().min(6, {
//     message: "Your one-time password must be 6 character.",
//   }),
// });

const Verify = () => {
  // const location = useLocation();
  // const navigate = useNavigate();
  // const [email] = useState(location.state);
  // const [confirmed, setConfirmed] = useState(false);
  // const [sendOtp] = useSendOtpMutation();
  // const [verifyOtp] = useVerifyOtpMutation();
  const [timer] = useState(60);

  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     pin: "",
  //   },
  // });

  const form = useForm();

  // const handleSendOTP = async () => {
  //   const toastId = toast.loading("Sending OTP to your email.");

  //   try {
  //     const res = await sendOtp({ email: email }).unwrap();

  //     if (res.success) {
  //       toast.success("OTP sent", { id: toastId });
  //       setConfirmed(true);
  //       setTimer(60);
  //     }
  //   } catch (error: any) {
  //     console.log(error);
  //     toast.error(error?.data?.message, { id: toastId });
  //   }
  // };

  // const onSubmit = async (data: z.infer<typeof formSchema>) => {
  //   const toastId = toast.loading("Verifying OTP");
  //   const userInfo = {
  //     email,
  //     otp: data.pin,
  //   };

  //   try {
  //     const res = await verifyOtp(userInfo).unwrap();
  //     if (res.success) {
  //       toast.success("OTP verified", { id: toastId });
  //       navigate("/login", { replace: true });
  //     }
  //   } catch (error: any) {
  //     console.log(error);
  //     toast.error(error?.data?.message, { id: toastId });
  //   }
  // };

  // useEffect(() => {
  //   if (!email || !confirmed) {
  //     return;
  //   }

  //   if (timer === 0) {
  //     return;
  //   }

  //   const timerId = setInterval(() => {
  //     setTimer((prev) => (prev > 0 ? prev - 1 : 0));
  //     console.log("Tick", timer);
  //   }, 1000);

  //   return () => clearInterval(timerId);
  // }, [email, confirmed, timer]);

  // // check if user have validate route
  // useEffect(() => {
  //   if (!email) {
  //     navigate("/", { replace: true });
  //   }
  // }, [email, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card>
        <CardHeader className="space-y-1">
          <Link replace to={"/"}>
            <img src={logo} className="mx-auto mb-3" />
          </Link>
          <CardTitle className="text-xl text-center">Verify Email </CardTitle>
          <CardDescription className="text-center">
            Please enter the 6-digit code we sent to <br />{" "}
            <span className="font-medium">email</span>
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form id="otp-form" className="space-y-6">
              <FormField
                control={form.control}
                name="pin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>One-Time Password</FormLabel>
                    <FormControl>
                      <InputOTP maxLength={6} {...field}>
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                        </InputOTPGroup>
                        <InputOTPGroup>
                          <InputOTPSlot index={1} />
                        </InputOTPGroup>
                        <InputOTPGroup>
                          <InputOTPSlot index={2} />
                        </InputOTPGroup>
                        <Dot />
                        <InputOTPGroup>
                          <InputOTPSlot index={3} />
                        </InputOTPGroup>
                        <InputOTPGroup>
                          <InputOTPSlot index={4} />
                        </InputOTPGroup>
                        <InputOTPGroup>
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormDescription>
                      <Button
                        // onClick={handleSendOTP}
                        type="button"
                        variant="link"
                        disabled={timer !== 0}
                        className={cn("p-0 m-0", {
                          "cursor-pointer": timer === 0,
                          "text-gray-500": timer !== 0,
                        })}
                      >
                        Resend OTP:
                      </Button>
                      <span className="pl-2">{timer}s</span>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>

        <CardFooter className="flex justify-end">
          <Button form="otp-form" type="submit">
            Submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Verify;
