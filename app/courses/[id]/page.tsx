import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Clock, Users, Award, BookOpen, Download, Video } from 'lucide-react';

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const courseId = params.id;

  // Mock course data
  const course = {
    id: courseId,
    title: 'Quranic Arabic Fundamentals',
    category: 'Quranic Studies',
    level: 'Beginner',
    duration: '8 weeks',
    hours: '24 hours',
    instructor: 'Dr. Ahmed Al-Noor',
    price: '$49',
    rating: 4.8,
    students: 245,
    description:
      'Master the fundamentals of Quranic Arabic and build a strong foundation in understanding the language of the Quran. This course covers essential vocabulary, grammar concepts, and reading comprehension skills specific to Quranic texts.',
    longDescription:
      'This comprehensive course is designed for absolute beginners who want to understand the Quran in its original language. Through interactive lessons, quizzes, and assignments, you will develop the skills needed to comprehend Quranic texts and engage with Islamic literature.',
    syllabus: [
      'Introduction to Arabic alphabet and pronunciation',
      'Basic Arabic grammar and sentence structure',
      'Quranic vocabulary and common words',
      'Understanding Quranic text comprehension',
      'Practice reading Quranic verses',
      'Common grammatical patterns in the Quran',
    ],
    requirements: [
      'No prior Arabic knowledge required',
      'Basic computer skills for online learning',
      'Commitment to 3-4 hours per week',
    ],
    modules: [
      {
        title: 'Module 1: Arabic Alphabet & Basics',
        lessons: 5,
        materials: 12,
      },
      {
        title: 'Module 2: Fundamental Grammar',
        lessons: 6,
        materials: 15,
      },
      {
        title: 'Module 3: Quranic Vocabulary',
        lessons: 7,
        materials: 18,
      },
      {
        title: 'Module 4: Text Comprehension',
        lessons: 5,
        materials: 14,
      },
    ],
    reviews: [
      {
        author: 'Fatima M.',
        rating: 5,
        text: 'Excellent course! Dr. Ahmed explains complex concepts in a simple way.',
      },
      {
        author: 'Hassan A.',
        rating: 5,
        text: 'Very comprehensive and well-structured. Highly recommend!',
      },
      {
        author: 'Aisha K.',
        rating: 4,
        text: 'Great content and clear instruction. Could use more practice exercises.',
      },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Main Content */}
              <div className="md:col-span-2">
                <div className="mb-4 flex items-center gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {course.level}
                  </span>
                  <span className="text-sm text-muted-foreground">⭐ {course.rating} ({course.students} students)</span>
                </div>

                <h1 className="mb-4 text-4xl font-bold">{course.title}</h1>
                <p className="mb-6 text-lg text-muted-foreground">{course.description}</p>

                <div className="mb-8 grid gap-4 sm:grid-cols-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>{course.hours}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-5 w-5 text-primary" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Certificate</span>
                  </div>
                </div>

                <h3 className="mb-4 font-semibold">About this course</h3>
                <p className="mb-8 text-muted-foreground">{course.longDescription}</p>
              </div>

              {/* Sidebar */}
              <div>
                <div className="sticky top-20 rounded-lg border border-border bg-card p-6">
                  <div className="mb-6 h-40 rounded-lg bg-gradient-to-br from-primary to-primary/80" />

                  <div className="mb-6">
                    <p className="text-3xl font-bold text-primary">{course.price}</p>
                    <p className="text-sm text-muted-foreground">One-time payment</p>
                  </div>

                  <Button className="mb-3 w-full">Enroll Now</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Add to Wishlist
                  </Button>

                  <div className="mt-6 space-y-3 border-t border-border pt-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Video className="h-4 w-4 text-primary" />
                      <span>Video lectures</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Download className="h-4 w-4 text-primary" />
                      <span>Downloadable resources</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="h-4 w-4 text-primary" />
                      <span>Certificate of completion</span>
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-muted-foreground">
                    30-day money-back guarantee. Full access for life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content Sections */}
        <section className="border-b border-border py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-3">
              {/* Main Content */}
              <div className="md:col-span-2 space-y-12">
                {/* What You'll Learn */}
                <div>
                  <h2 className="mb-6 text-2xl font-bold">What You'll Learn</h2>
                  <ul className="space-y-3">
                    {course.syllabus.map((item, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-primary">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div>
                  <h2 className="mb-6 text-2xl font-bold">Requirements</h2>
                  <ul className="space-y-3">
                    {course.requirements.map((req, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-primary">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Course Modules */}
                <div>
                  <h2 className="mb-6 text-2xl font-bold">Course Modules</h2>
                  <div className="space-y-4">
                    {course.modules.map((module, idx) => (
                      <div key={idx} className="rounded-lg border border-border bg-card p-4">
                        <h3 className="font-semibold">{module.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {module.lessons} lessons • {module.materials} materials
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Reviews */}
                <div>
                  <h2 className="mb-6 text-2xl font-bold">Student Reviews</h2>
                  <div className="space-y-4">
                    {course.reviews.map((review, idx) => (
                      <div key={idx} className="rounded-lg border border-border bg-card p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <p className="font-semibold">{review.author}</p>
                          <span className="text-sm">⭐ {review.rating}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{review.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Instructor Info */}
              <div>
                <div className="rounded-lg border border-border bg-card p-6">
                  <h3 className="mb-4 font-semibold">Course Instructor</h3>
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/20 text-3xl font-bold text-primary">
                    DA
                  </div>
                  <p className="font-semibold">{course.instructor}</p>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Expert in Quranic interpretation and Arabic linguistics
                  </p>
                  <p className="text-sm text-muted-foreground">
                    20+ years of experience in Islamic education. PhD in Islamic Studies.
                  </p>

                  <Link href={`/teachers`}>
                    <Button variant="outline" className="mt-4 w-full bg-transparent">
                      View All Teachers
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/10 py-12 md:py-16">
          <div className="container mx-auto text-center px-4 md:px-6">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Ready to Enroll?</h2>
            <p className="mb-8 text-muted-foreground">
              Start learning {course.title} today and master Quranic Arabic
            </p>
            <Link href="/signup">
              <Button size="lg">Enroll Now - {course.price}</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
