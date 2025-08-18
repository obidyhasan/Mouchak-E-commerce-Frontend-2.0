import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { clearCart } from "@/redux/features/cart/CartSlice";

import successImg from "@/assets/images/success_img.png";
import { useDispatch } from "react-redux";

interface IProps {
  open: boolean;
}

export function OrderConfirmDialog({ open }: IProps) {
  const dispatch = useDispatch();

  const handleBackToHome = () => {
    dispatch(clearCart());
  };

  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader className="space-y-2">
          <img
            src={successImg}
            className="w-20 h-20 mx-auto"
            alt="success image"
          />
          <AlertDialogTitle className="text-center">
            Thank you for your order! 🎉
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            Your order has been successfully placed and is being processed.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className="mx-auto" onClick={handleBackToHome}>
            Go To Home
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
