import ProductCard from "./ProductCard";

const ProductsSection = () => {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
  );
};

export default ProductsSection;
