"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-32 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-12 gap-12"
      >
        <div className="md:col-span-6">
          <p className="text-sm text-muted-foreground mb-4">Let's work together</p>
          <a
            href="mailto:nathanmuyx@gmail.com"
            className="text-3xl md:text-4xl font-medium hover:text-muted-foreground transition-colors"
          >
            nathanmuyx@gmail.com
          </a>
        </div>

        <div className="md:col-span-3">
          <p className="text-sm text-muted-foreground mb-4">Links</p>
          <div className="space-y-2">
            <a
              href="https://linkedin.com/in/nathanielmuyco"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm hover:text-muted-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://dribbble.com/nathanielmuyco"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm hover:text-muted-foreground transition-colors"
            >
              Dribbble
            </a>
            <a
              href="https://github.com/nathanielmuyco"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm hover:text-muted-foreground transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="text-sm text-muted-foreground mb-4">Location</p>
          <p className="text-sm">Davao City, Philippines</p>
          <p className="text-sm text-muted-foreground mt-1">GMT+8</p>
        </div>
      </motion.div>

      <div className="mt-24 pt-8 border-t border-border flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nathaniel Muyco
        </p>
        <p className="text-sm text-muted-foreground">
          Design Engineer
        </p>
      </div>
    </footer>
  );
}
