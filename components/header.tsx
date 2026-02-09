'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
            ع
          </div>
          <span className="hidden font-bold text-lg md:inline-block">Al-Ilm Institute</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden gap-8 md:flex">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/courses" className="text-sm font-medium transition-colors hover:text-primary">
            Courses
          </Link>
          <Link href="/teachers" className="text-sm font-medium transition-colors hover:text-primary">
            Teachers
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden gap-3 md:flex">
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link href="/signup">
            <Button>Enroll Now</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-border bg-card md:hidden">
          <nav className="flex flex-col gap-4 p-4">
            <Link href="/" className="text-sm font-medium">
              Home
            </Link>
            <Link href="/courses" className="text-sm font-medium">
              Courses
            </Link>
            <Link href="/teachers" className="text-sm font-medium">
              Teachers
            </Link>
            <Link href="/about" className="text-sm font-medium">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium">
              Contact
            </Link>
            <div className="flex flex-col gap-2 border-t border-border pt-4">
              <Link href="/login" className="w-full">
                <Button variant="outline" className="w-full bg-transparent">
                  Login
                </Button>
              </Link>
              <Link href="/signup" className="w-full">
                <Button className="w-full">Enroll Now</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
