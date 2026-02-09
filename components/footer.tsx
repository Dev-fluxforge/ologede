'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          {/* About Section */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                ع
              </div>
              <span className="font-bold">Al-Ilm Institute</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Premier Islamic education platform dedicated to teaching Quran, Hadith, Arabic language, and Islamic sciences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/courses" className="text-muted-foreground transition-colors hover:text-foreground">
                Courses
              </Link>
              <Link href="/teachers" className="text-muted-foreground transition-colors hover:text-foreground">
                Teachers
              </Link>
              <Link href="/about" className="text-muted-foreground transition-colors hover:text-foreground">
                About Us
              </Link>
              <Link href="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
                Contact
              </Link>
            </nav>
          </div>

          {/* Courses */}
          <div>
            <h4 className="mb-4 font-semibold">Course Categories</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/courses?category=quranic-studies" className="text-muted-foreground transition-colors hover:text-foreground">
                Quranic Studies
              </Link>
              <Link href="/courses?category=hadith" className="text-muted-foreground transition-colors hover:text-foreground">
                Hadith Sciences
              </Link>
              <Link href="/courses?category=arabic" className="text-muted-foreground transition-colors hover:text-foreground">
                Arabic Language
              </Link>
              <Link href="/courses?category=fiqh" className="text-muted-foreground transition-colors hover:text-foreground">
                Islamic Jurisprudence
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href="mailto:ismailabdulazeez536@gmail.com" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
                <Mail className="h-4 w-4" />
                ismailabdulazeez536@gmail.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
                <Phone className="h-4 w-4" />
                +234 704 759 4864
              </a>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Open and Distance Learning (ODL) </span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex items-center justify-between border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">
            © 2024 Al-Ilm Islamic Institute. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
