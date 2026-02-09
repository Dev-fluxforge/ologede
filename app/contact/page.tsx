'use client';

import React from "react"

import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'General Inquiry',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'General Inquiry',
      });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Header Section */}
        <section 
          className="border-b border-border bg-gradient-to-b from-primary/80 to-primary/40 py-12 md:py-16 bg-cover bg-center relative"
          style={{
            backgroundImage: 'url(/images/contact-bg.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl text-white drop-shadow-lg">Contact Us</h1>
            <p className="text-lg text-white/90 drop-shadow">
              We're here to help. Get in touch with us anytime
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <h2 className="mb-6 text-2xl font-bold">Send us a Message</h2>

                {isSubmitted && (
                  <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800">
                    <p className="font-semibold">Thank you for your message!</p>
                    <p className="text-sm">We'll get back to you as soon as possible.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-border bg-card px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-border bg-card px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">Phone (Optional)</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-border bg-card px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+1 (234) 567-8900"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">Inquiry Type</label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-border bg-card px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option>General Inquiry</option>
                      <option>Course Question</option>
                      <option>Enrollment Question</option>
                      <option>Technical Support</option>
                      <option>Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-border bg-card px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Message subject"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full rounded-lg border border-border bg-card px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your message here..."
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="mb-6 text-2xl font-bold">Get in Touch</h2>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Mail className="h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-1 font-semibold">Email</h3>
                      <p className="text-muted-foreground">info@alilm.edu</p>
                      <p className="text-muted-foreground">support@alilm.edu</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-1 font-semibold">Phone</h3>
                      <p className="text-muted-foreground">+1 (234) 567-8900</p>
                      <p className="text-muted-foreground">+1 (234) 567-8901</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <MapPin className="h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-1 font-semibold">Address</h3>
                      <p className="text-muted-foreground">123 Education Street</p>
                      <p className="text-muted-foreground">Knowledge City, KC 12345</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Clock className="h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-1 font-semibold">Business Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Saturday - Sunday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-8 rounded-lg border border-border bg-card p-6">
                  <h3 className="mb-4 font-semibold">Frequently Asked Questions</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium">How long does it take to respond?</p>
                      <p className="text-muted-foreground">We typically respond within 24 hours.</p>
                    </div>
                    <div>
                      <p className="font-medium">Can I get a refund?</p>
                      <p className="text-muted-foreground">Yes, we offer a 7-day money-back guarantee.</p>
                    </div>
                    <div>
                      <p className="font-medium">Do you offer scholarships?</p>
                      <p className="text-muted-foreground">Contact us to discuss scholarship opportunities.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
