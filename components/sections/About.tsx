"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-32">
      <div className="grid md:grid-cols-12 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-4"
        >
          <h2 className="text-sm text-muted-foreground mb-8">About</h2>

          <div className="aspect-[3/4] bg-cream rounded-md mb-6">
            {/* Photo placeholder */}
          </div>

          <div className="space-y-1 text-sm">
            <p className="text-muted-foreground">Based in</p>
            <p>Davao City, Philippines</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-8 md:col-start-6"
        >
          <p className="text-2xl md:text-3xl font-medium leading-snug mb-12">
            I'm a design engineer who believes the best work happens when you can see the full picture—from user needs to production code.
          </p>

          <div className="space-y-6 text-muted-foreground">
            <p>
              Started as an intern at Tactiv Studios, grew into a lead over three years. Built design systems, shipped mobile apps, and learned why designs fail in development.
            </p>
            <p>
              Now I design and build products. Typid Events is mine—an event platform I created from scratch. I use Flutter, React, and whatever gets the job done.
            </p>
            <p>
              I use AI as a tool, not a replacement. The eye that judges still matters.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border">
            <div>
              <p className="text-3xl font-medium">6+</p>
              <p className="text-sm text-muted-foreground mt-1">Products shipped</p>
            </div>
            <div>
              <p className="text-3xl font-medium">3</p>
              <p className="text-sm text-muted-foreground mt-1">Years experience</p>
            </div>
            <div>
              <p className="text-3xl font-medium">1</p>
              <p className="text-sm text-muted-foreground mt-1">Product I own</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
