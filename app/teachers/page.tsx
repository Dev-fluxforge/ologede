import Header from '@/components/header';
import Footer from '@/components/footer';
import { Mail, Globe, Award } from 'lucide-react';

const teachersData = [
  {
    id: 1,
    name: 'Dr. Ahmed Al-Noor',
    specialization: 'Quranic Studies',
    bio: 'Expert in Quranic interpretation and Arabic linguistics with 20+ years of experience.',
    qualifications: 'PhD in Islamic Studies, Certified Quranic Scholar',
    yearsOfExperience: 22,
    email: 'ahmed.alnoor@alilm.edu',
    courses: 5,
    students: 450,
  },
  {
    id: 2,
    name: 'Sheikh Mohammed Hassan',
    specialization: 'Tajweed & Quran Recitation',
    bio: 'Master of Quranic recitation with Ijazah in multiple Quran readers.',
    qualifications: 'Ijazah holder, Classical Islamic Education',
    yearsOfExperience: 25,
    email: 'mohammed.hassan@alilm.edu',
    courses: 4,
    students: 320,
  },
  {
    id: 3,
    name: 'Dr. Fatima Al-Zahra',
    specialization: 'Hadith Sciences',
    bio: 'Specialist in Hadith authentication and Hadith literature compilation.',
    qualifications: 'PhD in Hadith Sciences, Islamic University Graduate',
    yearsOfExperience: 18,
    email: 'fatima.zahra@alilm.edu',
    courses: 6,
    students: 380,
  },
  {
    id: 4,
    name: 'Dr. Karim Al-Arabi',
    specialization: 'Arabic Language',
    bio: 'Linguist specializing in classical and modern Arabic language instruction.',
    qualifications: 'PhD in Arabic Linguistics, University of Cairo',
    yearsOfExperience: 19,
    email: 'karim.alarabi@alilm.edu',
    courses: 7,
    students: 520,
  },
  {
    id: 5,
    name: 'Sheikh Abdullah Al-Ghamdi',
    specialization: 'Islamic Jurisprudence',
    bio: 'Islamic law expert with specialization in comparative Fiqh and contemporary issues.',
    qualifications: 'Master in Islamic Law, Al-Azhar University',
    yearsOfExperience: 20,
    email: 'abdullah.ghamdi@alilm.edu',
    courses: 5,
    students: 290,
  },
  {
    id: 6,
    name: 'Dr. Hassan Al-Mansouri',
    specialization: 'Islamic History',
    bio: 'Historian with expertise in Islamic civilization and cross-cultural studies.',
    qualifications: 'PhD in Islamic History, Oxford University',
    yearsOfExperience: 16,
    email: 'hassan.mansouri@alilm.edu',
    courses: 4,
    students: 410,
  },
];

export default function TeachersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Header Section */}
        <section 
          className="border-b border-border bg-gradient-to-b from-primary/80 to-primary/40 py-12 md:py-16 bg-cover bg-center relative"
          style={{
            backgroundImage: 'url(/images/learning-bg.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl text-white drop-shadow-lg">Our Expert Instructors</h1>
            <p className="text-lg text-white/90 drop-shadow">
              Learn from qualified Islamic scholars and experienced educators
            </p>
          </div>
        </section>

        {/* Teachers Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {teachersData.map((teacher) => (
                <div key={teacher.id} className="overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-lg">
                  {/* Header */}
                  <div className="h-32 bg-gradient-to-br from-primary to-primary/80" />

                  {/* Content */}
                  <div className="relative px-6 py-6">
                    {/* Avatar */}
                    <div className="absolute -top-12 left-6 flex h-24 w-24 items-center justify-center rounded-lg border-4 border-card bg-gradient-to-br from-primary/20 to-primary/5 text-4xl font-bold text-primary">
                      {teacher.name.split(' ')[0][0]}
                      {teacher.name.split(' ').pop()?.[0]}
                    </div>

                    <div className="pt-12">
                      <h3 className="text-xl font-semibold">{teacher.name}</h3>
                      <p className="mb-2 text-sm font-medium text-primary">{teacher.specialization}</p>
                      <p className="mb-4 text-sm text-muted-foreground">{teacher.bio}</p>

                      {/* Stats */}
                      <div className="mb-4 flex items-center justify-between border-t border-b border-border py-3">
                        <div className="text-center">
                          <div className="font-bold text-primary">{teacher.courses}</div>
                          <div className="text-xs text-muted-foreground">Courses</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-primary">{teacher.students}</div>
                          <div className="text-xs text-muted-foreground">Students</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-primary">{teacher.yearsOfExperience}+</div>
                          <div className="text-xs text-muted-foreground">Years</div>
                        </div>
                      </div>

                      {/* Qualifications */}
                      <div className="mb-4">
                        <div className="flex items-start gap-2 text-sm">
                          <Award className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span className="text-muted-foreground">{teacher.qualifications}</span>
                        </div>
                      </div>

                      {/* Contact */}
                      <a
                        href={`mailto:${teacher.email}`}
                        className="flex items-center gap-2 text-sm text-primary transition-colors hover:text-primary/80"
                      >
                        <Mail className="h-4 w-4" />
                        Contact
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-primary/10 py-12 md:py-16">
          <div className="container mx-auto text-center px-4 md:px-6">
            <h2 className="mb-4 text-2xl font-bold">Interested in Becoming an Instructor?</h2>
            <p className="mb-6 text-muted-foreground">
              We welcome qualified Islamic scholars and educators to join our platform
            </p>
            <a href="mailto:instructors@alilm.edu" className="inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              Apply to Teach
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
