/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { useForm } from "react-hook-form";

const Profile = () => {
  const form = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <div className="border p-4 rounded-md mt-6 space-y-3">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-10">
        <div>
          <h1 className="font-medium text-lg md:text-xl ">Profile</h1>

          <div className="border p-4 rounded-md mt-6 space-y-3">
            <div className="border-b pb-2">
              <p className="text-sm mb-1 text-muted-foreground">Name</p>
              <h2>Obidy Hasan Naim</h2>
            </div>
            <div className="border-b pb-2">
              <p className="text-sm mb-1 text-muted-foreground">Email</p>
              <h2>obidyhasan@gmail.com</h2>
            </div>
            <div className="border-b pb-2">
              <p className="text-sm mb-1 text-muted-foreground">Phone Number</p>
              <h2>01925658596</h2>
            </div>
            <div className="border-b pb-2">
              <p className="text-sm mb-1 text-muted-foreground">Division</p>
              <h2>Khulna</h2>
            </div>
            <div className="">
              <p className="text-sm mb-1 text-muted-foreground">Address</p>
              <h2>Rampal, Foyla, Bagerhat</h2>
            </div>
          </div>

          {/* Dialog */}
          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button className="mt-5">Edit Profile</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when
                    you&apos;re done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
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
                              <Input
                                placeholder="Jon Deo"
                                type="text"
                                {...field}
                              />
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

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="pb-1">Division</FormLabel>
                            <FormControl className="">
                              <Select {...field}>
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
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="pb-1">Address</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Delivery address"
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
                    </form>
                  </Form>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Profile;
