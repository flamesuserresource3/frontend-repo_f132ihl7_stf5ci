import { motion } from "framer-motion";
import { Flame, Star, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F7ECDB]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-[#F6AE1B]/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#CD3728]/20 blur-3xl" />
        <div className="absolute top-1/3 left-10 h-24 w-24 rotate-12 rounded-2xl bg-[#733F1A]/10" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-[#733F1A] shadow-sm backdrop-blur"
            >
              <Flame className="h-4 w-4 text-[#CD3728]" /> YangYang Corndog • Semarang
            </motion.div>

            <motion.h1
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05, duration: 0.6 }}
              className="mt-4 text-4xl font-extrabold leading-tight text-[#733F1A] sm:text-5xl md:text-6xl"
            >
              Double Delight in Every Bite!
              <span className="block bg-gradient-to-r from-[#CD3728] via-[#F6AE1B] to-[#CD3728] bg-clip-text text-transparent">
                Meat-Packed Dough × Melty Mozzarella
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-4 max-w-xl text-lg text-[#733F1A]/80"
            >
              A playful Korean street–food vibe with local pride. Crispy outside, gooey inside —
              the Jester snack that keeps the smiles coming.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 flex flex-wrap items-center gap-4"
            >
              <a
                href="#menu"
                className="rounded-full bg-[#CD3728] px-6 py-3 text-white shadow-[0_6px_0_#733F1A] transition active:translate-y-1 active:shadow-[0_3px_0_#733F1A]"
              >
                Order Now 🍴
              </a>
              <a
                href="#about"
                className="rounded-full border-2 border-[#733F1A] bg-white px-6 py-3 text-[#733F1A] shadow-[0_6px_0_#733F1A]/30 transition active:translate-y-1 active:shadow-[0_3px_0_#733F1A]/30"
              >
                Why YangYang?
              </a>
            </motion.div>

            <div className="mt-6 flex items-center gap-4 text-[#733F1A]">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm shadow">
                <CheckCircle className="h-4 w-4 text-green-600" /> Halal OK!
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm shadow">
                <Star className="h-4 w-4 text-[#F6AE1B]" /> Best Seller
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm shadow">
                🧀 Cheese Pull!
              </span>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/5] w-full max-w-md rounded-[2rem] bg-gradient-to-b from-white to-[#F7ECDB] p-4 shadow-xl sm:ml-auto"
            >
              <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(ellipse_at_top,rgba(246,174,27,0.25),transparent_60%)]" />
              <img
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop"
                alt="Cheese-pull corndog"
                className="relative z-10 h-full w-full rounded-[1.5rem] object-cover"
              />
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute -left-6 -top-6 rotate-[-8deg] rounded-2xl bg-white px-3 py-2 text-sm font-bold text-[#CD3728] shadow"
              >
                #CheeseGoals
              </motion.div>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="absolute -right-5 bottom-8 rotate-[10deg] rounded-2xl bg-[#CD3728] px-3 py-2 text-sm font-bold text-white shadow"
              >
                Extra Meaty
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
