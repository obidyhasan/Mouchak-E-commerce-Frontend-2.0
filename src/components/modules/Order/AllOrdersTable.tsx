import { useEffect } from "react";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { setLoading } from "@/redux/features/loadingSlice";
import {
  useGetAllOrdersQuery,
  useUpdateOrderMutation,
} from "@/redux/features/order/order.api";
import { SquareDashedBottom } from "lucide-react";
import { useDispatch } from "react-redux";
import { format } from "date-fns";
import { toast } from "sonner";
import type { IErrorResponse } from "@/types";

export const AllOrdersTable = () => {
  const { data: orders, isLoading: ordersLoading } =
    useGetAllOrdersQuery(undefined);
  const dispatch = useDispatch();
  const [updateOrder] = useUpdateOrderMutation();

  useEffect(() => {
    dispatch(setLoading(ordersLoading));
  }, [ordersLoading, dispatch]);

  const handleStatusUpdate = async (value: string, id: string) => {
    const toastId = toast.loading("Updating status...");
    try {
      const res = await updateOrder({
        updateInfo: { status: value },
        id,
      }).unwrap();
      if (res.success) {
        toast.success("Status updated successfully", { id: toastId });
      }
    } catch (err: any) {
      console.error(err);
      toast.error(
        err?.data?.message ||
          (err as IErrorResponse).message ||
          "Something went wrong"
      );
    }
  };

  const handlePaymentStatusUpdate = async (value: string, id: string) => {
    const toastId = toast.loading("Updating payment status...");
    try {
      const res = await updateOrder({
        updateInfo: { paymentStatus: value },
        id,
      }).unwrap();
      if (res.success) {
        toast.success("Payment Status updated successfully", { id: toastId });
      }
    } catch (err: any) {
      console.error(err);
      toast.error(
        err?.data?.message ||
          (err as IErrorResponse).message ||
          "Something went wrong"
      );
    }
  };

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>User</TableHead>
            <TableHead>Order Id</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Payment Status</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders?.map((order: any, idx: number) => (
            <TableRow className="space-x-2" key={idx}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-medium">{order?.user?.name}</div>
                    <span className="text-muted-foreground mt-0.5 text-xs">
                      {order?.user?.email}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="flex items-start flex-col gap-0.5">
                <span>
                  {format(
                    new Date(order?.createdAt),
                    "MMMM dd, yyyy - hh:mm a"
                  )}
                </span>
                <span className="text-muted-foreground text-xs">
                  {order?.orderId}
                </span>
              </TableCell>
              <TableCell>
                <Select
                  defaultValue={order?.status}
                  onValueChange={(e) => handleStatusUpdate(e, order?._id)}
                >
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Status</SelectLabel>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="Confirm">Confirm</SelectItem>
                      <SelectItem value="Picked">Picked</SelectItem>
                      <SelectItem value="InTransit">InTransit</SelectItem>
                      <SelectItem value="Delivered">Delivered</SelectItem>
                      <SelectItem value="Cancelled">Cancelled</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>
                <Select
                  defaultValue={order?.paymentStatus}
                  onValueChange={(e) =>
                    handlePaymentStatusUpdate(e, order?._id)
                  }
                >
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="payment" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Payment</SelectLabel>
                      <SelectItem value="PAID">PAID</SelectItem>
                      <SelectItem value="UNPAID">UNPAID</SelectItem>
                      <SelectItem value="REFUND">REFUND</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>
                <span className="text-base font-medium">
                  Tk. {order?.totalAmount}
                </span>
              </TableCell>

              <TableCell className="text-right flex justify-end gap-2 flex-wrap">
                <Button size="icon">
                  <SquareDashedBottom />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <UpdateAlertDialog
        onConfirm={handleConfirmOrderUpdate}
        open={open}
        onOpenChange={setOpen}
      /> */}
    </div>
  );
};
