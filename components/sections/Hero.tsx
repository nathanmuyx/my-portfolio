"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end pb-24 pt-32">
      <div className="grid md:grid-cols-12 gap-8 items-end">
        <div className="md:col-span-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-muted-foreground mb-4"
          >
            Design Engineer, Davao City
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2.5rem,8vw,5.5rem)] font-medium leading-[0.95] tracking-tight"
          >
            I design it.
            <br />
            <span className="text-muted-foreground">Then I build it.</span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-4 md:text-right"
        >
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs md:ml-auto">
            Product designer who bridges strategy and execution. Currently building at Strategic Visionz.
          </p>
          <div className="mt-6 flex gap-4 md:justify-end">
            <a
              href="#work"
              className="text-sm underline underline-offset-4 hover:text-muted-foreground transition-colors"
            >
              See work
            </a>
            <a
              href="mailto:nathanmuyx@gmail.com"
              className="text-sm underline underline-offset-4 hover:text-muted-foreground transition-colors"
            >
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-6 md:left-12"
      >
        <div className="flex items-center gap-3">
          <div className="w-[1px] h-12 bg-border" />
          <span className="text-xs text-muted-foreground uppercase tracking-wider">Scroll</span>
        </div>
      </motion.div>
    </section>
  );
}
