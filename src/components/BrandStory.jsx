import { motion } from "framer-motion";
import { Instagram, Phone, MapPin, ArrowRight } from "lucide-react";

export default function BrandStory() {
  return (
    <section id="about" className="relative bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-3xl font-extrabold text-[#733F1A] sm:text-4xl">Local Heart, K-Vibes</h3>
            <p className="mt-3 text-[#733F1A]/80">
              Born in Semarang, YangYang Corndog blends Indonesian warmth with Korean street-food energy. Our
              Double Delight recipe fuses meat-packed dough with a melty mozzarella core for maximum smile power.
            </p>

            <div className="mt-6 space-y-5">
              <TimelineItem year="2019" title="Recipe R&D" desc="Testing the crispiest, cheesiest pull." />
              <TimelineItem year="2021" title="Pop-up Debut" desc="First booth at local events — sold out!" />
              <TimelineItem year="2024" title="Cheese Squad" desc="Community collabs and limited drops." />
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4" id="contact">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F6AE1B] to-[#CD3728] px-5 py-3 font-semibold text-white shadow-[0_6px_0_#733F1A] active:translate-y-1 active:shadow-[0_3px_0_#733F1A]"
              >
                <Instagram className="h-5 w-5" /> Follow on Instagram
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#733F1A] bg-white px-5 py-3 font-semibold text-[#733F1A] shadow-sm"
              >
                <Phone className="h-5 w-5" /> WhatsApp Order
              </a>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-[#F7ECDB] p-4 shadow-xl"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <InfoCard title="Packaging Glow" badge="New" img="https://images.unsplash.com/photo-1601050690597-9b11f18df717?q=80&w=1200&auto=format&fit=crop" />
                <InfoCard title="Booth Vibes" badge="Fun" img="https://images.unsplash.com/photo-1562059390-a761a084768e?q=80&w=1200&auto=format&fit=crop" />
                <InfoCard title="Cheese Pull" badge="Iconic" img="https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop" />
                <InfoCard title="Sweet Glaze" badge="Dessert" img="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1200&auto=format&fit=crop" />
              </div>
              <div className="mt-4 flex items-center justify-between rounded-2xl bg-white p-4 text-[#733F1A]">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#CD3728]" />
                  <span>Find us at local events around Semarang</span>
                </div>
                <ArrowRight className="h-5 w-5" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ year, title, desc }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 h-6 w-6 rounded-full bg-[#CD3728] text-center text-xs font-bold leading-6 text-white">
        {year}
      </div>
      <div>
        <p className="font-semibold text-[#733F1A]">{title}</p>
        <p className="text-sm text-[#733F1A]/70">{desc}</p>
      </div>
    </div>
  );
}

function InfoCard({ img, title, badge }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white shadow">
      <img src={img} alt={title} className="h-40 w-full object-cover" />
      <div className="absolute left-2 top-2 rounded-full bg-[#CD3728] px-3 py-1 text-xs font-bold text-white shadow">
        {badge}
      </div>
      <div className="p-3">
        <p className="text-sm font-semibold text-[#733F1A]">{title}</p>
      </div>
    </div>
  );
}
