import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X, Mail, Linkedin, Github, Download, ExternalLink, Code, Database, Server, Layers, ChevronRight, Sparkles, Rocket, Award, Monitor, Wrench, Cpu } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact']
      const scrollPosition = window.scrollY + 100

      setScrolled(window.scrollY > 50)

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

const skills = {
  languages: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3','C++','Python'],
  frameworks: ['React.js', 'Next.js', 'Redux Toolkit', 'Context API'],
  frontend: ['Tailwind CSS', 'Bootstrap 5', 'SASS'],
  tools: ['Git & GitHub', 'Vite', 'pnpm / npm', 'Figma'],
  architecture: ['Responsive Design', 'Component-Based Architecture', 'State Management', 'Performance Optimization']
}
const experiences = [
    {
      title: 'Frontend Developer Trainee',
      company: 'Digital Egypt Pioneers Initiative (DEPI) - رواد مصر الرقمية',
      period: 'January 2026 – May 2026 (Expected)',
      achievements: [
        'Mastering advanced Frontend technologies including React.js, Tailwind CSS, and state management.',
        'Developing real-world projects with a focus on high-performance UI and pixel-perfect design.',
        'Collaborating in an intensive technical program focused on modern web architecture and Agile methodologies.'
      ]
    },
    {
      title: 'Frontend Member',
      company: 'ZagEng Student Activity - Zagazig University',
      period: '2026 – Present',
      achievements: [
        'Contributing to the development of web projects and landing pages within the student community.',
        'Implementing responsive designs using Bootstrap and CSS Grid/Flexbox for various university-related events.',
        'Participating in technical workshops to share knowledge and stay updated with the latest Frontend trends.'
      ]
    }
  ]
  const projects = [
    {
      title: 'Electronic Tech-Store (CRUD)',
      subtitle: 'Inventory Management System',
      description: 'Built a dynamic product management dashboard for an electronics store. Implemented full CRUD operations with persistent data handling.',
      technologies: ['HTML','CSS','SweetAlert2', 'Local Storage', 'JavaScript'],
      github: 'https://github.com/aya-shoman/Crud_Website',
      live: 'https://crud-website-rho.vercel.app/',
      highlights: ['Full CRUD Operations', 'Responsive Dashboard', 'Real-time Search & Filtering']
    },
    {
      title: 'Fokir - Creative Portfolio',
      subtitle: 'Modern UI/UX Showcase',
      description: 'A pixel-perfect, fully responsive personal portfolio template designed with a focus on modern aesthetics.',
      technologies: ['HTML5', 'CSS3', 'Google Fonts', 'FontAwesome'],
      github: 'https://github.com/aya-shoman/fokir_website', 
      live: 'https://fokir-website-five.vercel.app/',
      highlights: ['Fully Responsive Design', 'Custom Iconography', 'Professional Typography']
    },
    {
      title: 'Yummy - Global Recipe Finder',
      subtitle: 'API-Driven Content Platform',
      description: 'A dynamic web application that fetches and displays real-time culinary data from a RESTful API.',
      technologies: ['REST API (MealDB)', 'JavaScript', 'CSS', 'Fetch API'],
      github: 'https://github.com/aya-shoman/food_api_website',
      live: 'https://food-api-website-five.vercel.app/',
      highlights: ['Asynchronous Data Fetching', 'Real-time Search', 'API Integration']
    },
    {
      title: 'Daniel - Personal Portfolio',
      subtitle: 'Clean & Minimalist Portfolio',
      description: 'A professional, single-page portfolio designed for high-impact visual storytelling.',
      technologies: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript'],
      github: 'https://github.com/aya-shoman/daniel-website',
      live: 'https://daniel-website-zeta.vercel.app/',
      highlights: ['Single Page Architecture', 'Smooth Scrolling UI', 'Filterable Project Gallery']
    },
    {
      title: 'Magic Bakery',
      subtitle: 'Premium Pastry Landing Page',
      description: 'A high-end, visual-focused landing page for a bakery. Featuring elegant design, responsive product galleries, and modern animations.',
      technologies: ['HTML5', 'CSS3', 'Responsive Design', 'Vercel Deployment'],
      github: 'https://github.com/aya-shoman/bakery-page', 
      live: 'https://bakery-page-sand.vercel.app/',
      highlights: ['Visual Storytelling', 'Premium UI Design', 'Smooth Layout Transitions']
    },
    {
      title: 'Shoe Hub',
      subtitle: 'Modern E-commerce Interface',
      description: 'A stylish and responsive landing page for a footwear store. Focused on clean product presentation and intuitive navigation.',
      technologies: ['HTML5', 'CSS3', 'Responsive Design'],
      github: 'https://github.com/aya-shoman/shoes_shop', 
      live: 'https://shoes-shop-lac.vercel.app/',
      highlights: ['Product Showcase', 'Modern UI/UX', 'Mobile-First Design']
    },
    {
      title: 'Smart Login System',
      subtitle: 'Secure Authentication Interface',
      description: 'A professional login and registration system with form validation, interactive UI feedback, and secure session simulation.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Form Validation'],
      github: 'https://github.com/aya-shoman/login_form', 
      live: 'https://login-form-kappa-seven.vercel.app/',
      highlights: ['Interactive Form Validation', 'User-Friendly UX', 'Responsive Layout']
    },
    {
      title: 'Professional Profile Showcase',
      subtitle: 'Personal Brand Identity',
      description: 'A customized professional portfolio designed to showcase individual achievements, skills, and work history with a clean, high-conversion layout.',
      technologies: ['react.js','HTML5', 'CSS3', 'Bootstrap 5', 'Responsive Design'],
      github: 'https://github.com/aya-shoman/Ahmed_Portfolio', 
      live: 'https://ahmed-portfolio-ten-chi.vercel.app/',
      highlights: ['Personal Branding', 'Custom Layout Design', 'Optimized UX']
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                <Sparkles className="inline-block w-5 h-5 mr-2 text-primary" />
                Aya Shoman
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 hover:text-primary relative group ${
                    activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>
              ))}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="ml-4 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              >
                {darkMode ? <Sun className="h-5 w-5 text-primary" /> : <Moon className="h-5 w-5 text-primary" />}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="hover:bg-primary/10 transition-all duration-300"
              >
                {darkMode ? <Sun className="h-5 w-5 text-primary" /> : <Moon className="h-5 w-5 text-primary" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="hover:bg-primary/10 transition-all duration-300"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl shadow-xl">
            <div className="px-4 py-4 space-y-3">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    activeSection === item.toLowerCase()
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
{/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <div className="container mx-auto max-w-6xl relative z-10 flex flex-col items-center text-center space-y-8">
          
          {/* 1. الصورة الشخصية */}
          <div className="relative inline-block animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <img 
              src="/aya.jpg" 
              alt="Aya Shoman"
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/20 p-1 bg-background"
            />
          </div>

          {/* 2. شارة الوظيفة تحت الصورة مباشرة */}
          <div className="inline-block animate-fade-in-up animation-delay-200">
            <Badge variant="outline" className="px-4 py-2 text-sm border-primary/50 bg-primary/5">
              <Rocket className="w-4 h-4 mr-2 inline-block text-primary" />
              Frontend Developer
            </Badge>
          </div>
          
          {/* 3. اسمك تحت الشارة */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight animate-fade-in-up animation-delay-400">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Aya Shoman
            </span>
          </h1>
          
          {/* 4. نص الوصف */}
          <p className="text-xl sm:text-2xl text-muted-foreground animate-fade-in-up animation-delay-600 max-w-3xl mx-auto leading-relaxed">
            Crafting <span className="text-primary font-semibold">modern</span>, responsive, and <span className="text-primary font-semibold">high-performance</span> web interfaces using React.js and Next.js.
          </p>

          {/* 5. أزرار الأكشن */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up animation-delay-800">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')} 
              className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-8 py-6 text-lg"
            >
              <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              View My Work
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => window.open('/Aya-Shoman-CV.pdf', '_blank')} 
              className="group border-2 border-primary/50 hover:bg-primary/10 transition-all duration-300 px-8 py-6 text-lg"
            >
              <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" /> 
              Download CV
            </Button>
          </div>

          {/* 6. روابط التواصل الاجتماعي */}
          <div className="flex items-center justify-center gap-6 pt-8 animate-fade-in-up animation-delay-1000">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open('https://github.com/aya-shoman', '_blank')}
              className="hover:scale-125 transition-all duration-300 hover:bg-primary/10 hover:text-primary w-14 h-14 rounded-full border border-primary/20"
              title="GitHub Profile"
            >
              <Github className="h-7 w-7" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open('https://www.linkedin.com/in/aya-shoman-669304349/', '_blank')}
              className="hover:scale-125 transition-all duration-300 hover:bg-primary/10 hover:text-primary w-14 h-14 rounded-full border border-primary/20"
              title="LinkedIn Profile"
            >
              <Linkedin className="h-7 w-7" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open('mailto:contact.ayaabdelhamid567@gmail.com', '_blank')}
              className="hover:scale-125 transition-all duration-300 hover:bg-primary/10 hover:text-primary w-14 h-14 rounded-full border border-primary/20"
              title="Send Email"
            >
              <Mail className="h-7 w-7" />
            </Button>
          </div>
        </div>
      </section>
 {/* About Section */}
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          
          <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 shadow-xl hover:shadow-2xl backdrop-blur-sm bg-card/50 group">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-foreground/90 group-hover:text-foreground transition-colors">
                  I am a <span className="text-primary font-semibold">Passionate Frontend Developer</span> with a strong eye for detail and a mission to create seamless user experiences. I specialize in building dynamic, responsive web applications using <span className="text-primary font-semibold">React.js</span> and modern styling tools like <span className="text-primary font-semibold">Tailwind CSS and Bootstrap 5</span>.
                </p>
                <p className="text-foreground/90 group-hover:text-foreground transition-colors">
                  My journey involves transforming complex designs into <span className="text-primary font-semibold">pixel-perfect code</span>. I have hands-on experience in managing state, consuming RESTful APIs, and optimizing web performance to ensure fast and interactive user journeys. I believe in writing clean, maintainable code that lives up to modern web standards.
                </p>
                <p className="text-foreground/90 group-hover:text-foreground transition-colors">
                  Currently pursuing my Bachelor's in Computer Science at <span className="text-primary font-semibold">Zagazig University</span> (Class of 2028), I am actively sharpening my skills through intensive programs like <span className="text-primary font-semibold">DEPI</span>. I'm always eager to collaborate on innovative projects and contribute to the ever-evolving world of web development.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

{/* Skills Section */}
      <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Dynamic Rendering for all skill categories */}
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category} className="group hover:shadow-2xl transition-all duration-500 hover:border-primary/50 border-2 border-primary/20 hover:-translate-y-2 backdrop-blur-sm bg-card/50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 group-hover:scale-110">
                      {/* بتبدلي الأيقونة بناءً على اسم القسم */}
                      {category === 'languages' && <Code className="h-7 w-7 text-primary" />}
                      {category === 'frameworks' && <Layers className="h-7 w-7 text-primary" />}
                      {category === 'frontend' && <Monitor className="h-7 w-7 text-primary" />}
                      {category === 'tools' && <Wrench className="h-7 w-7 text-primary" />}
                      {category === 'architecture' && <Cpu className="h-7 w-7 text-primary" />}
                    </div>
                    <CardTitle className="text-xl capitalize">
                      {category === 'frontend' ? 'Frontend Technologies' : category}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default text-sm py-1 px-3 hover:scale-110">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Experience & Training
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-l-4 border-l-primary hover:shadow-2xl transition-all duration-500 hover:border-primary/80 hover:-translate-x-2 backdrop-blur-sm bg-card/50 border-2 border-primary/20">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                        <Award className="w-6 h-6 text-primary" />
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-lg">
                        <span className="font-semibold text-foreground">{exp.company}</span> • {exp.period}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 group">
                        <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

{/* Projects Section */}
<section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
  <div className="container mx-auto max-w-6xl relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Selected Projects
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:border-primary/50 border-2 border-primary/20 flex flex-col hover:-translate-y-2 backdrop-blur-sm bg-card/50">
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2 flex-1">
                <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base font-medium">
                  {project.subtitle}
                </CardDescription>
              </div>
              
              {/* أيقونة الجيت هاب للكود - فوق على اليمين */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open(project.github, '_blank')}
                className="hover:scale-125 transition-all duration-300 hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20"
                title="View Code"
              >
                <Github className="h-6 w-6" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col gap-6">
            <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
              {project.description}
            </p>

            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Key Highlights
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.highlights.map((highlight, idx) => (
                  <Badge key={idx} className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 py-1 px-3">
                    {highlight}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <Code className="w-4 h-4 text-primary" />
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="outline" className="hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-110">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* الزرار الكبير للـ Live Demo - تحت خالص */}
            <Button
              className="w-full group/btn mt-auto bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 py-6 shadow-lg hover:shadow-primary/20"
              onClick={() => window.open(project.live || project.github, '_blank')}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Live Demo
              <ChevronRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

      {/* Education Section */}
      <section id="education" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          
          <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 max-w-3xl mx-auto shadow-xl hover:shadow-2xl backdrop-blur-sm bg-card/50 hover:-translate-y-2">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl mb-2">Bachelor of Computer Science</CardTitle>
                  <CardDescription className="text-lg">
                    <span className="font-semibold text-foreground">Zagazig University for Science and Technology</span>
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg">
                Expected Graduation: <span className="font-semibold text-primary text-xl">2028</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          
          <Card className="max-w-2xl mx-auto border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 shadow-xl hover:shadow-2xl backdrop-blur-sm bg-card/50">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-8">
                <p className="text-center text-lg text-muted-foreground">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>

                <div className="space-y-4">
                  <a
                    href="mailto:contact.ayaabdelhamid567@gmail.com"
                    className="flex items-center gap-4 p-5 rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Email</p>
                      <p className="text-muted-foreground">contact.ayaabdelhamid567@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/aya-shoman-669304349/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                      <Linkedin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">LinkedIn</p>
                      <p className="text-muted-foreground"> Aya Shoman</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/aya-shoman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                      <Github className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">GitHub</p>
                      <p className="text-muted-foreground">aya-shoman</p>
                    </div>
                  </a>
                </div>

                <div className="pt-6">
                 <Button 
  size="lg" 
  variant="outline" 
 
  onClick={() => window.open('/Aya-Shoman-CV.pdf', '_blank')} 
  className="group border-2 border-primary/50 hover:bg-primary/10 transition-all duration-300 px-8 py-6 text-lg"
>
  <Download className="mr-2 h-5 w-5" /> 
  Download CV
</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 sm:px-6 lg:px-8 border-t border-border bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © 2026 Aya Shoman. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open('mailto:contact.ayaabdelhamid567@gmail.com', '_blank')}
                className="hover:scale-125 transition-all duration-300 hover:bg-primary/10 hover:text-primary"
              >
                <Mail className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open('https://www.linkedin.com/in/aya-shoman-669304349/', '_blank')}
                className="hover:scale-125 transition-all duration-300 hover:bg-primary/10 hover:text-primary"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open('https://github.com/aya-shoman', '_blank')}
                className="hover:scale-125 transition-all duration-300 hover:bg-primary/10 hover:text-primary"
              >
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default App

