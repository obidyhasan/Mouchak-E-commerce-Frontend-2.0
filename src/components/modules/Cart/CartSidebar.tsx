import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FiShoppingCart } from "react-icons/fi";
import CartItem from "./CartItem";

export function CartSidebar() {
  return (
    <Sheet>
      {/* Cart icon in navbar triggers the Sheet */}

      <SheetTrigger asChild>
        <div className="relative" aria-label="Open cart">
          <div className="p-2 hover:text-primary cursor-pointer transition-colors duration-200 h-auto rounded-full hover:bg-transparent">
            <FiShoppingCart className="w-5 h-5" />
          </div>
          <Badge className=" border-background rounded-full w-5 h-5 absolute -top-0.5 left-full text-xs -translate-x-3.5 px-1">
            4
          </Badge>
        </div>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>
            Review items in your shopping cart.
          </SheetDescription>
        </SheetHeader>

        <div className="overflow-auto">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>

        <SheetFooter>
          <div className="flex justify-between items-center font-semibold">
            <span>Total</span> <span>Tk. 1200</span>
          </div>
          <Button type="submit">Checkout</Button>
          {/* <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose> */}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
