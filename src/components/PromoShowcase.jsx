import { motion } from "framer-motion";
import { Megaphone, Percent } from "lucide-react";

export default function PromoShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#F7ECDB] py-16 sm:py-24">
      <div className="absolute inset-0 opacity-30" aria-hidden>
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#CD3728] blur-3xl" />
        <div className="absolute left-10 top-10 h-36 w-36 rotate-12 rounded-2xl bg-[#F6AE1B] blur-xl" />
        <div className="absolute bottom-10 right-10 h-36 w-36 -rotate-12 rounded-2xl bg-[#733F1A] blur-xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-xl sm:p-10">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#F7ECDB] px-4 py-2 text-sm font-bold text-[#CD3728]">
                <Megaphone className="h-4 w-4" /> CFD Semarang Special Deal!
              </div>
              <h3 className="mt-4 text-3xl font-extrabold text-[#733F1A] sm:text-4xl">
                Buy 2 Get 1 + Free Cheese Drizzle
              </h3>
              <p className="mt-2 text-[#733F1A]/80">
                Weekend special at the YangYang booth. Snap a pic, tag us, and unlock extra toppings.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a className="rounded-full bg-[#CD3728] px-6 py-3 font-semibold text-white shadow-[0_6px_0_#733F1A] active:translate-y-1 active:shadow-[0_3px_0_#733F1A]" href="#contact">Claim Now</a>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#F7ECDB] px-3 py-2 text-sm font-bold text-[#733F1A]">
                  <Percent className="h-4 w-4" /> Limited Time
                </span>
              </div>
            </motion.div>

            <motion.div initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-[#F6AE1B] via-[#F7ECDB] to-white p-2 shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1604908554049-1e7e3d2931cd?q=80&w=1200&auto=format&fit=crop"
                  alt="Promo poster corndog"
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
              <div className="pointer-events-none absolute -right-4 -top-4 rotate-6 rounded-xl bg-white px-3 py-1 text-sm font-bold text-[#CD3728] shadow">
                Best Seller!
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
