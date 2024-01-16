import SectionSale from "./components/section-sale";
import SectionCarousal from "./components/section-carousal";
import SectionCategory from "./components/section-category";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RSMall | Home",
}

const Home = () => {
  return (
    <>
      <SectionSale/>
      <SectionCarousal/>
      <SectionCategory/>
    </>
  )
}

export default Home;
