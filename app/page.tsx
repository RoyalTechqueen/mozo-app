import Header from "./components/header";
import Hero from "./components/hero";
import Features from "./components/benefits";

export default function Home() {
  return (
    <div className="bg-blue-50 min-h-screen">
      <Header />
      <Hero />
      <Features />
    </div>
  );
}
