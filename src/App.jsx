import Hero from "./components/Hero";
import Menu from "./components/Menu";
import PromoShowcase from "./components/PromoShowcase";
import BrandStory from "./components/BrandStory";

function StickerBar() {
  return (
    <div className="sticky top-0 z-40 w-full bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 text-sm">
        <a href="#menu" className="rounded-full bg-[#F7ECDB] px-3 py-1 font-bold text-[#CD3728] shadow">Cheese Pull!</a>
        <a href="#menu" className="rounded-full bg-[#F7ECDB] px-3 py-1 font-bold text-[#CD3728] shadow">Best Seller!</a>
        <a href="#about" className="rounded-full bg-[#F7ECDB] px-3 py-1 font-bold text-[#CD3728] shadow">Halal OK!</a>
        <a href="#contact" className="rounded-full bg-[#CD3728] px-3 py-1 font-bold text-white shadow">Order Now</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-['Manrope',_Inter,_system-ui]">
      <StickerBar />
      <Hero />
      <Menu />
      <PromoShowcase />
      <BrandStory />
      <footer className="bg-[#733F1A] py-10 text-[#F7ECDB]">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-lg font-semibold">Join the Cheese Squad 💛</p>
          <p className="mt-2 text-sm opacity-80">© {new Date().getFullYear()} YangYang Corndog — Semarang, Indonesia</p>
        </div>
      </footer>
    </div>
  );
}
