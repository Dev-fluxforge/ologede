'use client';

import React from "react"

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { AlertCircle, CheckCircle } from 'lucide-react';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);

      // Reset form
      setFormData({
        email: '',
        password: '',
      });

      // Redirect after 2 seconds
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 2000);
    } catch (error) {
      console.error('Error logging in:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main 
        className="flex-1 bg-cover bg-center bg-fixed relative"
        style={{
          backgroundImage: 'url(/images/quran-bg.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40" />
        <div className="container mx-auto flex min-h-[calc(100vh-180px)] items-center px-4 md:px-6 relative z-10">
          <div className="mx-auto w-full max-w-md space-y-6 py-12 rounded-lg bg-card/95 backdrop-blur-sm shadow-xl p-8">
            {/* Header */}
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground">Welcome Back</h1>
              <p className="mt-2 text-muted-foreground">
                Sign in to access your courses and progress
              </p>
            </div>

            {isSuccess && (
              <div className="flex gap-3 rounded-lg border border-green-200 bg-green-50 p-4">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-600" />
                <div>
                  <p className="font-semibold text-green-800">Success!</p>
                  <p className="text-sm text-green-700">Logging in... Redirecting to dashboard.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.email ? 'border-red-500' : 'border-border bg-card'
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 flex items-center gap-1 text-sm text-red-600">
                    <AlertCircle className="h-4 w-4" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <Link href="#" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.password ? 'border-red-500' : 'border-border bg-card'
                  }`}
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <p className="mt-1 flex items-center gap-1 text-sm text-red-600">
                    <AlertCircle className="h-4 w-4" />
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            {/* Signup Link */}
            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{' '}
              <Link href="/signup" className="text-primary hover:underline">
                Sign up here
              </Link>
            </p>

            {/* Demo Credentials */}
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-xs font-semibold text-muted-foreground">DEMO CREDENTIALS</p>
              <p className="mt-2 text-sm">
                <span className="font-medium">Email:</span> demo@alilm.edu
              </p>
              <p className="text-sm">
                <span className="font-medium">Password:</span> demo1234
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
