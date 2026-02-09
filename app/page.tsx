import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BookOpen, Users, Award, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="border-b border-border bg-gradient-to-b from-primary/80 to-primary/40 py-20 md:py-32 bg-cover bg-center relative"
          style={{
            backgroundImage: 'url(/images/hero-bg.jpg)',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
          <div className="container mx-auto flex flex-col items-center gap-6 px-4 text-center md:px-6 relative z-10">
            <div className="space-y-2">
              <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-white drop-shadow-lg">
                Master Islamic Knowledge and Arabic Language
              </h1>
              <p className="text-balance text-lg text-white/90 md:text-xl drop-shadow">
                Learn Quran, Hadith, Arabic, Islamic jurisprudence, and Islamic history from expert instructors worldwide.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/courses">
                <Button size="lg" className="w-full sm:w-auto">
                  Explore Courses
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="border-b border-border py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Why Choose Al-Ilm Institute?</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border border-border bg-card p-6">
                <BookOpen className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-semibold">Comprehensive Curriculum</h3>
                <p className="text-sm text-muted-foreground">
                  Structured courses from beginner to advanced levels across all Islamic sciences.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <Users className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-semibold">Expert Instructors</h3>
                <p className="text-sm text-muted-foreground">
                  Learn from qualified and experienced Islamic scholars and educators.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <Award className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-semibold">Recognized Certificates</h3>
                <p className="text-sm text-muted-foreground">
                  Earn verifiable certificates upon completion of courses.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <Zap className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-semibold">Flexible Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Study at your own pace with access to course materials and resources.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Course Categories Section */}
        <section className="border-b border-border py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Our Course Categories</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {[
                {
                  title: 'Quranic Studies',
                  icon: '📖',
                  description: 'Tajweed, memorization, and Quranic Arabic',
                  color: 'from-blue-500 to-blue-600',
                },
                {
                  title: 'Hadith Sciences',
                  icon: '📚',
                  description: 'Authentication and interpretation of Hadith',
                  color: 'from-green-500 to-green-600',
                },
                {
                  title: 'Arabic Language',
                  icon: '✍️',
                  description: 'Grammar, vocabulary, and conversation',
                  color: 'from-amber-500 to-amber-600',
                },
                {
                  title: 'Islamic Jurisprudence',
                  icon: '⚖️',
                  description: 'Islamic law and practical rulings',
                  color: 'from-purple-500 to-purple-600',
                },
                {
                  title: 'Islamic History',
                  icon: '🕌',
                  description: 'History and culture of Islamic civilization',
                  color: 'from-red-500 to-red-600',
                },
              ].map((category, idx) => (
                <Link key={idx} href={`/courses?category=${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className={`flex h-40 flex-col justify-between rounded-lg bg-gradient-to-br ${category.color} p-6 text-white transition-transform hover:scale-105 cursor-pointer`}>
                    <div className="text-4xl">{category.icon}</div>
                    <div>
                      <h3 className="font-semibold">{category.title}</h3>
                      <p className="text-sm opacity-90">{category.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-b border-border bg-primary/10 py-16 md:py-24">
          <div className="container mx-auto text-center px-4 md:px-6">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Begin Your Islamic Education Journey?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Join hundreds of students learning Islamic sciences and Arabic language
            </p>
            <Link href="/signup">
              <Button size="lg">Enroll Now</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
