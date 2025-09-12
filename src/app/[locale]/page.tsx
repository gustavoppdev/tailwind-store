import Collections from "@/components/sections/Collections";
import Discount from "@/components/sections/Discount";
import { Hero } from "@/components/sections/hero";
import Testimonials from "@/components/sections/Testimonials";
import { TrendingProducts } from "@/components/sections/trendingProducts";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <TrendingProducts />
      <Collections />
      <Discount />
      <Testimonials />
    </>
  );
};

export default Home;
