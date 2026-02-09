'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Search, Filter } from 'lucide-react';

const coursesData = [
  {
    id: 1,
    title: 'Quranic Arabic Fundamentals',
    category: 'Quranic Studies',
    level: 'Beginner',
    duration: '8 weeks',
    instructor: 'Dr. Ahmed Al-Noor',
    description: 'Learn the fundamentals of Quranic Arabic and essential vocabulary.',
    price: '$49',
    students: 245,
    rating: 4.8,
    image: 'bg-blue-500',
  },
  {
    id: 2,
    title: 'Tajweed: Rules of Quranic Recitation',
    category: 'Quranic Studies',
    level: 'Intermediate',
    duration: '10 weeks',
    instructor: 'Sheikh Mohammed Hassan',
    description: 'Master the proper pronunciation and rules of Quran recitation.',
    price: '$59',
    students: 189,
    rating: 4.9,
    image: 'bg-blue-600',
  },
  {
    id: 3,
    title: 'Hadith Sciences 101',
    category: 'Hadith Sciences',
    level: 'Beginner',
    duration: '6 weeks',
    instructor: 'Dr. Fatima Al-Zahra',
    description: 'Introduction to the classification and authentication of Hadith.',
    price: '$45',
    students: 156,
    rating: 4.7,
    image: 'bg-green-500',
  },
  {
    id: 4,
    title: 'Classical Arabic Grammar',
    category: 'Arabic Language',
    level: 'Intermediate',
    duration: '12 weeks',
    instructor: 'Dr. Karim Al-Arabi',
    description: 'Comprehensive study of Arabic grammar rules and syntax.',
    price: '$69',
    students: 267,
    rating: 4.8,
    image: 'bg-amber-500',
  },
  {
    id: 5,
    title: 'Islamic Jurisprudence Principles',
    category: 'Islamic Jurisprudence',
    level: 'Intermediate',
    duration: '10 weeks',
    instructor: 'Sheikh Abdullah Al-Ghamdi',
    description: 'Study the principles and methodology of Islamic law.',
    price: '$59',
    students: 134,
    rating: 4.6,
    image: 'bg-purple-500',
  },
  {
    id: 6,
    title: 'History of Early Islam',
    category: 'Islamic History & Culture',
    level: 'Beginner',
    duration: '8 weeks',
    instructor: 'Dr. Hassan Al-Mansouri',
    description: 'Explore the fascinating history of Islam from the 7th century.',
    price: '$49',
    students: 198,
    rating: 4.7,
    image: 'bg-red-500',
  },
];

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const categories = ['All', ...new Set(coursesData.map((c) => c.category))];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = coursesData.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Header Section */}
        <section 
          className="border-b border-border bg-gradient-to-b from-primary/80 to-primary/40 py-12 md:py-16 bg-cover bg-center relative"
          style={{
            backgroundImage: 'url(/images/quran-bg.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl text-white drop-shadow-lg">Our Courses</h1>
            <p className="text-lg text-white/90 drop-shadow">
              Explore our comprehensive collection of Islamic and Arabic courses
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="border-b border-border py-6">
          <div className="container mx-auto px-4 md:px-6">
            {/* Search Bar */}
            <div className="mb-6 flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2">
              <Search className="h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search courses..."
                className="flex-1 border-none bg-transparent outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter Options */}
            <div className="flex flex-col gap-4 md:flex-row">
              {/* Category Filter */}
              <div className="flex-1">
                <label className="mb-2 block text-sm font-medium">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Level Filter */}
              <div className="flex-1">
                <label className="mb-2 block text-sm font-medium">Level</label>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm"
                >
                  {levels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            {filteredCourses.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredCourses.map((course) => (
                  <div key={course.id} className="overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-lg">
                    {/* Course Image */}
                    <div className={`h-40 ${course.image} bg-gradient-to-br`} />

                    {/* Course Content */}
                    <div className="p-6">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {course.level}
                        </span>
                        <span className="text-sm text-muted-foreground">{course.duration}</span>
                      </div>

                      <h3 className="mb-2 text-xl font-semibold">{course.title}</h3>
                      <p className="mb-4 text-sm text-muted-foreground">{course.description}</p>

                      <div className="mb-4 flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{course.instructor}</span>
                        <span className="text-sm font-medium">⭐ {course.rating}</span>
                      </div>

                      <div className="mb-4 flex items-center justify-between border-t border-border pt-4">
                        <span className="text-sm text-muted-foreground">{course.students} students</span>
                        <span className="text-lg font-bold text-primary">{course.price}</span>
                      </div>

                      <Link href={`/courses/${course.id}`} className="w-full">
                        <Button className="w-full">View Course</Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-border bg-card p-12 text-center">
                <Filter className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                <h3 className="mb-2 text-lg font-semibold">No courses found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your filters or search terms
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
