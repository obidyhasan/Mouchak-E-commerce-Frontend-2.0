import { Badge } from "@/components/ui/badge";
import { Link } from "react-router";
import productImg from "@/assets/images/honey-1.webp";
import { Button } from "@/components/ui/button";

const ProductCard = () => {
  return (
    <div>
      <div className="group rounded-sm relative block overflow-hidden">
        <Link to="/product-details">
          <img
            src={productImg}
            alt=""
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
          />{" "}
        </Link>

        <div className="relative border border-gray-100 bg-background p-3">
          <Link to="/product-details">
            <div className="text-center">
              <Badge
                variant="outline"
                className="text-xs rounded-full mx-auto w-max"
              >
                Badge
              </Badge>
            </div>

            <h3 className="mt-2 text-sm sm:text-base font-semibold text-gray-900 text-center">
              সুন্দরবনের মধু / Sundarban Honey 1kg
            </h3>

            <p className="mt-1.5 text-base text-gray-700 text-center">
              Tk. 14.99
            </p>
          </Link>
          <Button className="mt-4 block text-center w-full rounded-sm bg-primary p-2 text-xs sm:text-sm font-medium transition hover:scale-103">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
