import Hero from "../components/Hero";
import Features from "../components/Features";
import Categories from "../components/Categories";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import ContactForm from "../components/ContactForm";

function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Categories/>
      <Testimonials/>
      <CTA/>
      <ContactForm/>
    </div>
  );
}

export default Home;