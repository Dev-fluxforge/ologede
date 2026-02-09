import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, Users, Globe, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="border-b border-border bg-linear-to-b from-primary/80 to-primary/40 py-12 md:py-16 bg-cover bg-center relative"
          style={{
            backgroundImage: 'url(/images/learning-bg.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/30" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl text-white drop-shadow-lg">About Daarul Falaah Islamic Institute</h1>
            <p className="text-lg text-white/90 drop-shadow">
              Empowering learners worldwide with authentic Islamic education and Arabic language instruction
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="border-b border-border py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
                <p className="mb-4 text-muted-foreground">
                  At Daarul Falaah Islamic Institute, our mission is to provide accessible, high-quality Islamic education and Arabic language instruction to students of all ages and backgrounds around the world.
                </p>
                <p className="mb-4 text-muted-foreground">
                  We believe that authentic Islamic knowledge is a treasure that should be available to everyone. Through our carefully curated courses and experienced instructors, we strive to help students develop a deep understanding of the Quran, Hadith, Arabic language, Islamic jurisprudence, and Islamic history.
                </p>
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-bold">Our Vision</h2>
                <p className="mb-4 text-muted-foreground">
                  We envision a world where individuals have the opportunity to learn Islamic sciences and Arabic language at their own pace, guided by qualified scholars and using modern educational technology.
                </p>
                <p className="mb-4 text-muted-foreground">
                  Our vision is to create a global community of learners who are committed to understanding Islam, mastering the Arabic language, and applying Islamic principles in their daily lives for personal and societal betterment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="border-b border-border bg-card py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-12 text-center text-2xl font-bold md:text-3xl">Our Core Values</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <CheckCircle className="h-12 w-12 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">Authenticity</h3>
                <p className="text-sm text-muted-foreground">
                  We prioritize authentic Islamic teachings based on the Quran and Sunnah
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">Community</h3>
                <p className="text-sm text-muted-foreground">
                  We foster a supportive learning community where students help each other grow
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <Globe className="h-12 w-12 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">Accessibility</h3>
                <p className="text-sm text-muted-foreground">
                  We make quality Islamic education accessible to students worldwide
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <Zap className="h-12 w-12 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  We maintain the highest standards in curriculum and instruction quality
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="border-b border-border py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-12 text-2xl font-bold md:text-3xl">Why Choose Daarul'Falaah ?</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Expert Instructors</h3>
                  <p className="text-muted-foreground">
                    Our courses are taught by qualified Islamic scholars with years of experience in Islamic education and language instruction.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Structured Curriculum</h3>
                  <p className="text-muted-foreground">
                    Our courses are carefully designed to guide students from basic to advanced levels with clear learning objectives and milestones.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Flexible Learning</h3>
                  <p className="text-muted-foreground">
                    Study at your own pace with lifetime access to course materials, allowing you to balance your studies with other responsibilities.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Community Support</h3>
                  <p className="text-muted-foreground">
                    Connect with fellow learners, participate in forums, and benefit from a supportive learning community.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                    5
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Recognized Certificates</h3>
                  <p className="text-muted-foreground">
                    Earn recognized certificates upon course completion that demonstrate your commitment to Islamic education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="border-b border-border bg-primary/10 py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 text-center md:grid-cols-4">
              <div>
                <div className="text-4xl font-bold text-primary">5000+</div>
                <p className="mt-2 text-muted-foreground">Active Students</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">50+</div>
                <p className="mt-2 text-muted-foreground">Courses Available</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">25+</div>
                <p className="mt-2 text-muted-foreground">Expert Instructors</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">15+</div>
                <p className="mt-2 text-muted-foreground">Countries Reached</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto text-center px-4 md:px-6">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Ready to Start Learning?</h2>
            <p className="mb-8 text-muted-foreground">
              Join our community of learners and begin your Islamic education journey today
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link href="/courses">
                <Button>Explore Courses</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">Get in Touch</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
