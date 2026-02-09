-- Islamic Institution Database Schema

-- Categories table
CREATE TABLE IF NOT EXISTS categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  icon TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Teachers/Instructors table
CREATE TABLE IF NOT EXISTS teachers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  bio TEXT,
  qualifications TEXT,
  specialization TEXT,
  profile_image_url TEXT,
  years_of_experience INTEGER,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Courses table
CREATE TABLE IF NOT EXISTS courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  teacher_id UUID NOT NULL REFERENCES teachers(id) ON DELETE RESTRICT,
  level TEXT CHECK (level IN ('Beginner', 'Intermediate', 'Advanced')),
  duration_hours INTEGER,
  max_students INTEGER,
  start_date DATE,
  end_date DATE,
  course_image_url TEXT,
  syllabus TEXT,
  prerequisites TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Students table (extends auth.users)
CREATE TABLE IF NOT EXISTS students (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  bio TEXT,
  profile_image_url TEXT,
  date_of_birth DATE,
  country TEXT,
  city TEXT,
  educational_background TEXT,
  islamic_knowledge_level TEXT,
  arabic_proficiency TEXT CHECK (arabic_proficiency IN ('Beginner', 'Intermediate', 'Advanced', 'Native')),
  learning_goals TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Course enrollments table
CREATE TABLE IF NOT EXISTS enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  enrollment_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT CHECK (status IN ('Active', 'Completed', 'Dropped', 'On Hold')) DEFAULT 'Active',
  progress_percentage INTEGER DEFAULT 0,
  last_accessed TIMESTAMP WITH TIME ZONE,
  completion_date TIMESTAMP WITH TIME ZONE,
  certificate_issued BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(student_id, course_id)
);

-- Course materials/resources table
CREATE TABLE IF NOT EXISTS course_materials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  material_type TEXT CHECK (material_type IN ('Video', 'PDF', 'Document', 'Audio', 'Quiz', 'Assignment')),
  file_url TEXT,
  duration_minutes INTEGER,
  order_index INTEGER,
  is_published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Contact inquiries table
CREATE TABLE IF NOT EXISTS contact_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  inquiry_type TEXT CHECK (inquiry_type IN ('General Inquiry', 'Course Question', 'Enrollment Question', 'Technical Support', 'Feedback')),
  status TEXT CHECK (status IN ('New', 'In Progress', 'Resolved', 'Closed')) DEFAULT 'New',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Assignments/Assessments table
CREATE TABLE IF NOT EXISTS assessments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  assessment_type TEXT CHECK (assessment_type IN ('Quiz', 'Assignment', 'Exam', 'Participation')),
  due_date DATE,
  max_score INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Student assessment submissions
CREATE TABLE IF NOT EXISTS student_assessments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  assessment_id UUID NOT NULL REFERENCES assessments(id) ON DELETE CASCADE,
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  submission_date TIMESTAMP WITH TIME ZONE,
  score INTEGER,
  feedback TEXT,
  status TEXT CHECK (status IN ('Not Started', 'Submitted', 'Graded')) DEFAULT 'Not Started',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(assessment_id, student_id)
);

-- Enable RLS
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE teachers ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE course_materials ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_assessments ENABLE ROW LEVEL SECURITY;

-- RLS Policies

-- Categories: Everyone can read
CREATE POLICY "Categories are viewable by everyone" ON categories
  FOR SELECT USING (TRUE);

-- Teachers: Everyone can read
CREATE POLICY "Teachers are viewable by everyone" ON teachers
  FOR SELECT USING (is_active = TRUE);

-- Courses: Everyone can read active courses
CREATE POLICY "Active courses are viewable by everyone" ON courses
  FOR SELECT USING (is_active = TRUE);

-- Students: Users can only read their own profile
CREATE POLICY "Students can read their own profile" ON students
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Students can update their own profile" ON students
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Students can insert their own profile" ON students
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Enrollments: Users can only see their own enrollments
CREATE POLICY "Users can see their own enrollments" ON enrollments
  FOR SELECT USING (auth.uid() = student_id);

CREATE POLICY "Users can create enrollments for themselves" ON enrollments
  FOR INSERT WITH CHECK (auth.uid() = student_id);

CREATE POLICY "Users can update their own enrollments" ON enrollments
  FOR UPDATE USING (auth.uid() = student_id);

-- Course materials: Everyone can read published materials
CREATE POLICY "Published materials are viewable by everyone" ON course_materials
  FOR SELECT USING (is_published = TRUE);

-- Contact inquiries: Anyone can insert
CREATE POLICY "Anyone can submit contact inquiries" ON contact_inquiries
  FOR INSERT WITH CHECK (TRUE);

-- Assessments: Everyone can read
CREATE POLICY "Assessments are viewable by enrolled students" ON assessments
  FOR SELECT USING (TRUE);

-- Student assessments: Users can only see their own
CREATE POLICY "Users can see their own assessment submissions" ON student_assessments
  FOR SELECT USING (auth.uid() = student_id);

CREATE POLICY "Users can submit their own assessments" ON student_assessments
  FOR INSERT WITH CHECK (auth.uid() = student_id);

CREATE POLICY "Users can update their own assessment submissions" ON student_assessments
  FOR UPDATE USING (auth.uid() = student_id);

-- Create indexes for performance
CREATE INDEX idx_courses_category_id ON courses(category_id);
CREATE INDEX idx_courses_teacher_id ON courses(teacher_id);
CREATE INDEX idx_courses_slug ON courses(slug);
CREATE INDEX idx_enrollments_student_id ON enrollments(student_id);
CREATE INDEX idx_enrollments_course_id ON enrollments(course_id);
CREATE INDEX idx_course_materials_course_id ON course_materials(course_id);
CREATE INDEX idx_assessments_course_id ON assessments(course_id);
CREATE INDEX idx_student_assessments_student_id ON student_assessments(student_id);
CREATE INDEX idx_student_assessments_assessment_id ON student_assessments(assessment_id);
