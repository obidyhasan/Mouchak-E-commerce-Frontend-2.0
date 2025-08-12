import bannerImage from "@/assets/images/banner-4.jpg";
import FAQAccordion from "@/components/modules/Home/FAQAccordion";
import GallerySlider from "@/components/modules/Home/GallerySlider";
import ProductsSection from "@/components/modules/Home/ProductsSection";
import SectionHeader from "@/components/modules/Home/SectionHeader";

const Home = () => {
  return (
    <div>
      <header>
        <img
          src={bannerImage}
          alt="Banner Image"
          className="w-full h-full object-cover "
        />
      </header>
      {/* Product Section */}
      <section className="my-12 max-w-7xl mx-auto px-4 w-full">
        <SectionHeader
          title="Our Sweet Collection"
          subTitle="Explore our range of pure, golden honey—fresh from the hive and packed with natural goodness."
        />
        <ProductsSection />
      </section>
      {/* FAQ Section */}
      <section>
        <SectionHeader
          title="Frequently Asked Questions"
          subTitle="Find quick answers to the most common questions about our honey, sourcing, and delivery."
        />
        <FAQAccordion />
      </section>
      {/* Gallery Section */}
      <section>
        <SectionHeader
          title="From Hive to Home"
          subTitle="Take a peek into our honey-making journey, from buzzing hives to the jars on your table."
        />
        <GallerySlider />
      </section>
    </div>
  );
};

export default Home;
