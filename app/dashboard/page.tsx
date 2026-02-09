'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { BookOpen, Award, Clock, ArrowRight, LogOut } from 'lucide-react';

export default function DashboardPage() {
  useEffect(() => {
    // Check if user is authenticated, redirect to login if not
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      // In a real app, you'd check authentication
    }
  }, []);

  const enrolledCourses = [
    {
      id: 1,
      title: 'Quranic Arabic Fundamentals',
      instructor: 'Dr. Ahmed Al-Noor',
      progress: 65,
      daysLeft: 12,
      status: 'In Progress',
    },
    {
      id: 2,
      title: 'Tajweed: Rules of Quranic Recitation',
      instructor: 'Sheikh Mohammed Hassan',
      progress: 40,
      daysLeft: 28,
      status: 'In Progress',
    },
    {
      id: 3,
      title: 'Classical Arabic Grammar',
      instructor: 'Dr. Karim Al-Arabi',
      progress: 100,
      daysLeft: 0,
      status: 'Completed',
    },
  ];

  const completedCourses = 1;
  const certificatesEarned = 1;
  const hoursLearned = 24;

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/';
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Header Section */}
        <section 
          className="border-b border-border bg-gradient-to-b from-primary/80 to-primary/40 py-12 md:py-16 bg-cover bg-center relative"
          style={{
            backgroundImage: 'url(/images/hero-bg.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
          <div className="container mx-auto flex items-center justify-between px-4 md:px-6 relative z-10">
            <div>
              <h1 className="mb-2 text-3xl font-bold md:text-4xl text-white drop-shadow-lg">Welcome, Ahmed!</h1>
              <p className="text-lg text-white/90 drop-shadow">
                Continue your Islamic education journey
              </p>
            </div>
            <Button variant="outline" onClick={handleLogout} className="gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="border-b border-border py-8 md:py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-4">
              <div className="rounded-lg border border-border bg-card p-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Courses in Progress</span>
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div className="text-3xl font-bold">2</div>
                <p className="text-xs text-muted-foreground">Active enrollments</p>
              </div>

              <div className="rounded-lg border border-border bg-card p-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Completed</span>
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div className="text-3xl font-bold">{completedCourses}</div>
                <p className="text-xs text-muted-foreground">Course completed</p>
              </div>

              <div className="rounded-lg border border-border bg-card p-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Certificates</span>
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div className="text-3xl font-bold">{certificatesEarned}</div>
                <p className="text-xs text-muted-foreground">Earned</p>
              </div>

              <div className="rounded-lg border border-border bg-card p-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Hours Learned</span>
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div className="text-3xl font-bold">{hoursLearned}</div>
                <p className="text-xs text-muted-foreground">Total learning time</p>
              </div>
            </div>
          </div>
        </section>

        {/* Enrolled Courses */}
        <section className="border-b border-border py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-8 text-2xl font-bold">Your Courses</h2>

            <div className="space-y-6">
              {enrolledCourses.map((course) => (
                <div key={course.id} className="rounded-lg border border-border bg-card p-6 transition-all hover:shadow-lg">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="mb-1 text-lg font-semibold">{course.title}</h3>
                      <p className="text-sm text-muted-foreground">Instructor: {course.instructor}</p>
                    </div>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      course.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {course.status}
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm font-semibold text-primary">{course.progress}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div
                        className="h-2 rounded-full bg-primary transition-all"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {course.daysLeft > 0 ? `${course.daysLeft} days left` : 'Completed'}
                    </span>
                    <Link href={`/courses/${course.id}`}>
                      <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                        Continue
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link href="/courses">
                <Button>Browse More Courses</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Student Profile Section */}
        <section className="border-b border-border bg-card py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-8 text-2xl font-bold">Student Profile</h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-4 font-semibold">Personal Information</h3>
                <div className="space-y-3 rounded-lg border border-border bg-background p-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Full Name</p>
                    <p className="font-medium">Ahmed Ali Mohammed</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">ahmed@example.com</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Country</p>
                    <p className="font-medium">Egypt</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 font-semibold">Learning Information</h3>
                <div className="space-y-3 rounded-lg border border-border bg-background p-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Arabic Proficiency</p>
                    <p className="font-medium">Intermediate</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Islamic Knowledge Level</p>
                    <p className="font-medium">Intermediate</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Member Since</p>
                    <p className="font-medium">January 2024</p>
                  </div>
                </div>
              </div>
            </div>

            <Button variant="outline" className="mt-6 bg-transparent">
              Edit Profile
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
