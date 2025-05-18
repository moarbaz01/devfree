import Cta from "@/components/pages/home/cta";
import Faq from "@/components/pages/home/faqs";
import FeatureGrid from "@/components/pages/home/features";
import { Hero } from "@/components/pages/home/hero";
import Pricing from "@/components/pages/home/pricing";
import Solutions from "@/components/pages/home/solutions";

export default function Home() {
  return (
    <main className="flex flex-col items-center mx-4 ">
      <Hero />
      <Solutions/>
      <FeatureGrid/>
      <Pricing/>
      <Faq/>
      <Cta/>
    </main>
  );
}
