# Al-Ilm Islamic Institute - Complete Educational Platform

A modern, professional educational website for an Arabic Islamic institution offering comprehensive courses in Quranic studies, Hadith sciences, Arabic language, Islamic jurisprudence, and Islamic history.

## 🌟 Features

### Core Features Implemented

- **Home Page**: Compelling landing page with hero section, course categories, and featured content
- **Course Directory**: Browse and filter courses by category, level, and search terms
- **Course Details**: Comprehensive course pages with syllabus, requirements, instructor info, and reviews
- **Teacher Profiles**: Detailed instructor profiles showcasing qualifications and expertise
- **Student Authentication**: Secure signup and login system
- **Student Dashboard**: Personal learning dashboard showing progress and enrolled courses
- **Contact Form**: Multi-field contact form with inquiry type selection
- **About Page**: Institution mission, vision, values, and statistics
- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop

### Course Categories

1. **Quranic Studies** - Tajweed, memorization, and Quranic Arabic
2. **Hadith Sciences** - Authentication and interpretation of Hadith
3. **Arabic Language** - Grammar, vocabulary, and conversation skills
4. **Islamic Jurisprudence (Fiqh)** - Islamic law and practical rulings
5. **Islamic History & Culture** - History of Islamic civilization

## 🗄️ Database Schema

### Tables

- **Categories** - Course categories (Quranic Studies, Hadith, Arabic, etc.)
- **Teachers** - Instructor information and qualifications
- **Courses** - Course details, descriptions, and metadata
- **Students** - Student profiles linked to authentication
- **Enrollments** - Student course enrollments with progress tracking
- **Course Materials** - Video, PDF, and other learning resources
- **Contact Inquiries** - Form submissions from the contact page
- **Assessments** - Quizzes, assignments, and exams
- **Student Assessments** - Student submissions and grades

### Security Features

- Row Level Security (RLS) enabled on all tables
- Secure authentication with password protection
- Student data privacy with role-based access control

## 🎨 Design System

### Color Palette

- **Primary Color**: Islamic Green (#2d7a4a) - Represents tradition and Islamic heritage
- **Secondary Color**: Warm Gold (#d4a574) - Represents warmth and scholarship
- **Neutrals**: White, grays, and dark tones for accessibility
- **Accents**: Additional supporting colors for highlights

### Typography

- **Headings**: Bold, clear fonts for hierarchy
- **Body Text**: Readable sans-serif for comfortable learning
- **Maximum 2 font families** for visual consistency

## 📱 Pages & Routes

### Public Pages

- `/` - Home page
- `/courses` - Courses directory with filters
- `/courses/[id]` - Individual course details
- `/teachers` - Teacher profiles
- `/about` - About the institution
- `/contact` - Contact form
- `/signup` - Student registration
- `/login` - Student login

### Protected Pages

- `/dashboard` - Student learning dashboard

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Modern web browser
- Internet connection

### Installation

1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables in `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   ```

### Running Locally

```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

### Build for Production

```bash
npm run build
npm start
```

## 🔧 Technology Stack

- **Frontend**: React 19, Next.js 16
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Icons**: Lucide React

## 📚 Content Management

### Adding New Courses

Courses are managed through the Supabase database. To add a new course:

1. Add a new category if needed
2. Create the course record with:
   - Title, description, level
   - Category and instructor references
   - Duration, pricing, and prerequisites
   - Course image and syllabus

### Managing Teachers

Edit teacher profiles directly in the Supabase dashboard with:
- Name, email, specialization
- Qualifications, experience, bio
- Profile image URL

### Course Materials

Upload course materials through the course management interface:
- Videos, PDFs, documents
- Quizzes and assignments
- Audio files and resources

## 🔐 Security

- All authentication handled securely through Supabase Auth
- Passwords hashed with bcrypt
- Row Level Security (RLS) policies protect student data
- HTTPS required for all connections
- Regular security updates recommended

## 🌍 Internationalization

The platform is designed with Arabic support in mind:
- Arabic language course content
- Support for RTL (right-to-left) layout if needed
- Multilingual content capabilities

## 📈 Future Enhancements

- Live streaming and video playback
- Interactive quizzes and assessments
- Student certificates and achievements
- Payment integration for premium courses
- Discussion forums and community features
- Notifications and email reminders
- Analytics dashboard for teachers
- Mobile app versions

## 🤝 Support & Contact

- Email: info@alilm.edu
- Phone: +1 (234) 567-8900
- Website: https://alilm.edu

## 📄 License

This project is proprietary to Al-Ilm Islamic Institute.

## 🙏 Acknowledgments

Built with care for Islamic education and community learning.

---

**Al-Ilm Islamic Institute** - Empowering Islamic Education Worldwide
