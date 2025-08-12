import productImg from "@/assets/images/honey-2.webp";
import { Button } from "@/components/ui/button";
import { FiMinus, FiPlus } from "react-icons/fi";
import { TiDelete } from "react-icons/ti";

const CartItem = () => {
  return (
    <div className=" border-b mx-4 pb-4 flex gap-3 items-center">
      <div className="w-20 h-20">
        <img
          src={productImg}
          alt="cart item image"
          className="w-full h-full object-cover rounded-sm"
        />
      </div>
      <div className="grow space-y-0.5">
        <h1>Product Name</h1>
        <div className="flex justify-between items-center w-full">
          <p className="text-sm">Tk. 400 X 2</p>
          <p>Tk. 800</p>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center justify-center gap-3">
            <Button size={"icon"} variant={"outline"}>
              <FiMinus />
            </Button>
            <p>2</p>
            <Button size={"sm"} variant={"outline"}>
              <FiPlus />
            </Button>
          </div>
          <p>
            <TiDelete className="w-6 h-6" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
