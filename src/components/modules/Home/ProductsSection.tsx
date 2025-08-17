/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetProductQuery } from "@/redux/features/product/product.api";
import ProductCard from "./ProductCard";
import { useDispatch } from "react-redux";
import { setLoading } from "@/redux/features/loadingSlice";

const ProductsSection = () => {
  const { data, isLoading } = useGetProductQuery(undefined) || [];
  const dispatch = useDispatch();

  if (isLoading) {
    dispatch(setLoading(true));
  } else {
    dispatch(setLoading(false));
  }

  const products = data?.filter((product: any) => product?.status === "ACTIVE");

  return (
    <section className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      {products?.map((product: any, idx: number) => (
        <ProductCard key={idx} product={product} />
      ))}
    </section>
  );
};

export default ProductsSection;
