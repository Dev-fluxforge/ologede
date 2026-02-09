# Al-Ilm Islamic Institute - Setup Guide

## Quick Start

This is a complete Islamic educational platform built with Next.js, React, Tailwind CSS, and Supabase. Follow these steps to get started.

## Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager
- A Supabase account (free tier available)

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Supabase

1. Create a free account at [supabase.com](https://supabase.com)
2. Create a new project
3. Get your API credentials:
   - Visit your project settings
   - Copy your **Project URL** and **Anon Key**

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

### 4. Set Up Database Schema

The database schema is already defined in `/scripts/setup-database.sql`.

To set it up manually:
1. Go to your Supabase project
2. Click "SQL Editor"
3. Copy the contents of `/scripts/setup-database.sql`
4. Paste and execute in the SQL editor
5. Confirm all tables are created

### 5. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

## Project Structure

```
/app
  /page.tsx              # Home page
  /about/page.tsx        # About page
  /contact/page.tsx      # Contact page
  /courses
    /page.tsx            # Courses listing
    /[id]/page.tsx       # Course details
  /teachers/page.tsx     # Teachers directory
  /login/page.tsx        # Login page
  /signup/page.tsx       # Signup page
  /dashboard/page.tsx    # Student dashboard
  /globals.css           # Global styles & design tokens
  /layout.tsx            # Root layout

/components
  /header.tsx            # Navigation header
  /footer.tsx            # Footer component
  /ui/                   # shadcn UI components

/scripts
  /setup-database.sql    # Database schema
```

## Key Pages

### Public Pages

| Route | Purpose |
|-------|---------|
| `/` | Home page with featured content |
| `/courses` | Browse all courses with filters |
| `/courses/:id` | Individual course details |
| `/teachers` | View all instructors |
| `/about` | About the institution |
| `/contact` | Contact form |
| `/signup` | Student registration |
| `/login` | Student login |

### Protected Pages

| Route | Purpose |
|-------|---------|
| `/dashboard` | Student learning dashboard |

## Database Tables Overview

### Students
Stores student profile information linked to Supabase auth users.

### Courses
Contains course information including title, description, category, instructor, and pricing.

### Teachers
Stores instructor profiles with qualifications and specializations.

### Enrollments
Tracks which students are enrolled in which courses and their progress.

### Course Materials
Stores videos, PDFs, assignments, and other learning resources.

### Contact Inquiries
Saves form submissions from the contact page.

### Categories
Lists course categories (Quranic Studies, Hadith, Arabic, etc.).

### Assessments & Student Assessments
For quizzes, assignments, and grading.

## Features

### Course Management
- Browse courses by category and level
- Search functionality
- Filter by difficulty (Beginner, Intermediate, Advanced)
- Detailed course pages with syllabus

### Student Features
- User registration and authentication
- Enrollment in courses
- Progress tracking
- Student dashboard with enrolled courses
- Profile management

### Teacher Management
- Teacher profiles with qualifications
- Course assignments
- Student management

### Contact & Communication
- Contact form with multiple inquiry types
- Admin inquiry management
- Email notifications

## Design System

### Colors
- **Primary**: Islamic Green (#2d7a4a)
- **Secondary**: Warm Gold (#d4a574)
- **Neutrals**: Grays and whites
- **Accents**: Supporting colors

### Fonts
- Headings: Geist (sans-serif)
- Body: Geist (sans-serif)
- Code: Geist Mono

### Responsive Breakpoints
- Mobile: 0-640px
- Tablet: 641-1024px
- Desktop: 1024px+

## Common Tasks

### Add a New Course

1. Go to Supabase dashboard
2. Open the `courses` table
3. Click "Insert" and add:
   - title, description, category_id
   - teacher_id, level, duration_hours
   - max_students, course_image_url

### Add a New Teacher

1. Open the `teachers` table in Supabase
2. Insert new record with:
   - name, email, qualifications
   - specialization, years_of_experience
   - bio, profile_image_url

### Create a Course Category

1. Open the `categories` table
2. Add new category with name and slug

## Authentication

The app uses Supabase Authentication for:
- User registration
- Password hashing
- Session management
- Row-level security

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Deploy to Other Platforms

The app can be deployed to any Node.js host (AWS, Heroku, etc.):

```bash
npm run build
npm start
```

## Troubleshooting

### Database Connection Issues
- Verify Supabase URL and key in `.env.local`
- Check Supabase project is active
- Ensure RLS policies are correctly configured

### Authentication Errors
- Clear browser cookies
- Check email format in signup
- Verify password meets requirements (8+ chars)

### Course Filtering Not Working
- Ensure courses have proper category_id values
- Check browser console for errors
- Verify course level values match options

## Performance Optimization

- All images should be optimized
- Use next/image for image optimization
- Enable caching headers
- Minify CSS and JavaScript (automatic in production)

## Security Checklist

- [ ] Set environment variables on production
- [ ] Enable HTTPS
- [ ] Configure CORS properly
- [ ] Review RLS policies
- [ ] Regular security updates
- [ ] Backup database regularly

## Support & Contact

For issues or questions:
- Email: support@alilm.edu
- Website: https://alilm.edu

## Next Steps

1. Customize course content
2. Add actual images and videos
3. Set up payment system (if needed)
4. Configure email notifications
5. Deploy to production
6. Set up analytics

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.io/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)

---

Happy teaching and learning!
