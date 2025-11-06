import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sandwich, Candy, Sparkles } from "lucide-react";

const savoryItems = [
  {
    name: "Classic YangYang",
    desc: "Meat-packed dough + mozzarella core",
    tag: "Double Delight",
    img: "https://images.unsplash.com/photo-1617195737496-7e0d7c6933bb?q=80&w=1200&auto=format&fit=crop",
    color: "from-[#F6AE1B] to-[#CD3728]",
  },
  {
    name: "Hot Chili Boom",
    desc: "Spicy glaze, crispy crunch",
    tag: "Bring the Heat",
    img: "https://images.unsplash.com/photo-1604908177639-478b47e532f8?q=80&w=1200&auto=format&fit=crop",
    color: "from-[#CD3728] to-[#733F1A]",
  },
  {
    name: "Garlic Butter Lux",
    desc: "Savory drip, buttery aroma",
    tag: "Extra Meaty",
    img: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=1200&auto=format&fit=crop",
    color: "from-[#733F1A] to-[#F6AE1B]",
  },
];

const sweetItems = [
  {
    name: "Matcha Cloud",
    desc: "Green tea glaze, sweet & earthy",
    tag: "Matcha Lovers Only!",
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6cf7?q=80&w=1200&auto=format&fit=crop",
    color: "from-emerald-400 to-[#F7ECDB]",
  },
  {
    name: "Tiramisu Kiss",
    desc: "Cocoa dust, creamy vibes",
    tag: "Soft & Dreamy",
    img: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=1200&auto=format&fit=crop",
    color: "from-orange-300 to-[#733F1A]",
  },
  {
    name: "Choco Drip",
    desc: "Dark choco glaze, sprinkles",
    tag: "Sweet Crush",
    img: "https://images.unsplash.com/photo-1551022370-1b2a1f2a0b43?q=80&w=1200&auto=format&fit=crop",
    color: "from-[#733F1A] to-pink-300",
  },
];

function Card({ item }) {
  return (
    <motion.div
      layout
      whileHover={{ y: -6 }}
      className="relative flex flex-col gap-3 rounded-3xl bg-white p-4 shadow-xl"
    >
      <div className={`rounded-2xl bg-gradient-to-br ${item.color} p-1`}> 
        <img src={item.img} alt={item.name} className="h-44 w-full rounded-2xl object-cover" />
      </div>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-[#733F1A]">{item.name}</h3>
          <p className="text-sm text-[#733F1A]/70">{item.desc}</p>
        </div>
        <span className="rounded-full bg-[#F7ECDB] px-3 py-1 text-xs font-bold text-[#CD3728] shadow">
          {item.tag}
        </span>
      </div>
      <button className="ml-auto rounded-full bg-[#CD3728] px-4 py-2 text-sm font-semibold text-white shadow-[0_4px_0_#733F1A] active:translate-y-0.5 active:shadow-[0_2px_0_#733F1A]">
        Add 🍢
      </button>
      <div className="pointer-events-none absolute -left-3 -top-3 rotate-[-8deg] select-none rounded-xl bg-white px-2 py-1 text-xs font-bold text-[#733F1A] shadow">
        Yum!
      </div>
    </motion.div>
  );
}

export default function Menu() {
  const [tab, setTab] = useState("savory");
  const items = tab === "savory" ? savoryItems : sweetItems;

  return (
    <section id="menu" className="relative bg-white py-16 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#F7ECDB] to-transparent" aria-hidden />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-extrabold text-[#733F1A] sm:text-4xl">Menu Hits</h2>
            <Sparkles className="h-6 w-6 text-[#F6AE1B]" />
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setTab("savory")}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow ${
                tab === "savory"
                  ? "bg-[#CD3728] text-white"
                  : "bg-[#F7ECDB] text-[#733F1A]"
              }`}
            >
              <Sandwich className="h-4 w-4" /> Savory
            </button>
            <button
              onClick={() => setTab("sweet")}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow ${
                tab === "sweet"
                  ? "bg-[#CD3728] text-white"
                  : "bg-[#F7ECDB] text-[#733F1A]"
              }`}
            >
              <Candy className="h-4 w-4" /> Sweet Glaze
            </button>
          </div>
        </div>

        <AnimatePresence mode="popLayout"> 
          <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <Card key={item.name} item={item} />
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex flex-wrap gap-3 text-xs">
          <span className="rounded-full bg-[#F7ECDB] px-3 py-1 font-bold text-[#CD3728]">#CheeseGoals</span>
          <span className="rounded-full bg-[#F7ECDB] px-3 py-1 font-bold text-[#CD3728]">Extra Meaty</span>
          <span className="rounded-full bg-[#F7ECDB] px-3 py-1 font-bold text-[#CD3728]">Matcha Lovers Only!</span>
        </div>
      </div>
    </section>
  );
}
