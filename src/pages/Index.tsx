import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import About from "@/components/About";
import Locations from "@/components/Locations";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Categories />
        <FeaturedProducts />
        <About />
        <Locations />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
