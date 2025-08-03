"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { 
  ArrowRight, 
  Sparkles, 
  Code, 
  Smartphone, 
  Palette, 
  Zap, 
  Shield, 
  Users, 
  Star,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronDown,
  TrendingUp,
  Clock,
  CheckCircle,
  Award,
  Globe,
  Database,
  Cloud,
  Lock,
  BarChart3,
  Target,
  Lightbulb,
  Settings,
  Cpu,
  Smartphone as Mobile,
  Monitor,
  Server,
  GitBranch,
  Layers,
  Zap as Lightning,
  Heart,
  Eye,
  Download,
  Play,
  Pause,
  SkipForward,
  SkipBack
} from "lucide-react";
import Link from 'next/link';
import { projects } from "../lib/projects";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaAws, FaGoogle, FaMicrosoft } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiMongodb, SiPostgresql, SiRedis, SiKubernetes, SiTerraform, SiJenkins, SiGithub, SiGitlab, SiSlack, SiJira, SiConfluence, SiFigma, SiAdobe, SiSketch } from 'react-icons/si';
import { usePathname } from 'next/navigation';

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your specific business requirements and drive growth.",
    features: ["Enterprise Applications", "Custom APIs", "Database Design", "System Integration"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that enhance customer engagement and business efficiency.",
    features: ["iOS & Android Apps", "Cross-platform Solutions", "App Maintenance", "Performance Optimization"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Web Design & Development",
    description: "Professional websites and web applications that establish your brand and convert visitors to customers.",
    features: ["Responsive Design", "E-commerce Solutions", "CMS Development", "SEO Optimization"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Digital Transformation",
    description: "Comprehensive digital solutions to modernize your business processes and improve operational efficiency.",
    features: ["Process Automation", "Cloud Migration", "Legacy System Updates", "Digital Strategy"],
    color: "from-orange-500 to-red-500"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "IT Consulting & Support",
    description: "Expert technology consulting and ongoing support to ensure your digital solutions perform optimally.",
    features: ["Technology Assessment", "System Maintenance", "24/7 Support", "Security Audits"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Business Solutions",
    description: "End-to-end business solutions including CRM, ERP, and custom management systems.",
    features: ["CRM Implementation", "ERP Systems", "Business Intelligence", "Workflow Automation"],
    color: "from-teal-500 to-cyan-500"
  }
];

const technologies = [
  { name: "React", icon: <FaReact className="w-8 h-8" />, category: "Frontend" },
  { name: "TypeScript", icon: <SiTypescript className="w-8 h-8" />, category: "Frontend" },
  { name: "Node.js", icon: <FaNodeJs className="w-8 h-8" />, category: "Backend" },
  { name: "Python", icon: <FaPython className="w-8 h-8" />, category: "Backend" },
  { name: "Java", icon: <FaJava className="w-8 h-8" />, category: "Backend" },
  { name: "MongoDB", icon: <SiMongodb className="w-8 h-8" />, category: "Database" },
  { name: "PostgreSQL", icon: <SiPostgresql className="w-8 h-8" />, category: "Database" },
  { name: "Redis", icon: <SiRedis className="w-8 h-8" />, category: "Database" },
  { name: "Docker", icon: <FaDocker className="w-8 h-8" />, category: "DevOps" },
  { name: "Kubernetes", icon: <SiKubernetes className="w-8 h-8" />, category: "DevOps" },
  { name: "AWS", icon: <FaAws className="w-8 h-8" />, category: "Cloud" },
  { name: "Google Cloud", icon: <FaGoogle className="w-8 h-8" />, category: "Cloud" },
  { name: "Azure", icon: <FaMicrosoft className="w-8 h-8" />, category: "Cloud" },
  { name: "Terraform", icon: <SiTerraform className="w-8 h-8" />, category: "DevOps" },
  { name: "Jenkins", icon: <SiJenkins className="w-8 h-8" />, category: "DevOps" },
  { name: "GitHub", icon: <SiGithub className="w-8 h-8" />, category: "Tools" },
  { name: "GitLab", icon: <SiGitlab className="w-8 h-8" />, category: "Tools" },
  { name: "Slack", icon: <SiSlack className="w-8 h-8" />, category: "Tools" },
  { name: "Jira", icon: <SiJira className="w-8 h-8" />, category: "Tools" },
  { name: "Figma", icon: <SiFigma className="w-8 h-8" />, category: "Design" },
  { name: "Adobe", icon: <SiAdobe className="w-8 h-8" />, category: "Design" },
  { name: "Sketch", icon: <SiSketch className="w-8 h-8" />, category: "Design" }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We analyze your requirements, define project scope, and create a comprehensive roadmap.",
    icon: <Lightbulb className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    step: "02",
    title: "Design & Architecture",
    description: "Our team creates detailed designs, user interfaces, and technical architecture.",
    icon: <Palette className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500"
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "We build your solution using modern technologies with continuous testing and quality assurance.",
    icon: <Code className="w-8 h-8" />,
    color: "from-green-500 to-emerald-500"
  },
  {
    step: "04",
    title: "Deployment & Launch",
    description: "We deploy your solution to production with monitoring and support systems in place.",
    icon: <Zap className="w-8 h-8" />,
    color: "from-orange-500 to-red-500"
  },
  {
    step: "05",
    title: "Support & Maintenance",
    description: "Ongoing support, updates, and maintenance to ensure your solution continues to perform optimally.",
    icon: <Shield className="w-8 h-8" />,
    color: "from-indigo-500 to-purple-500"
  }
];

const statistics = [
  { number: "50+", label: "Projects Completed", icon: <CheckCircle className="w-6 h-6" /> },
  { number: "25+", label: "Happy Clients", icon: <Heart className="w-6 h-6" /> },
  { number: "3+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
  { number: "99%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> }
];

const testimonials = [
  {
    name: "Himanshu Jain",
    role: "Founder, Tree Nuts",
    content: "Shivkara Digitals delivered an exceptional e-commerce platform that transformed our business. Their attention to detail and technical expertise exceeded our expectations.",
    rating: 5,
    avatar: "/placeholder-user.jpg",
    company: "Tree Nuts"
  },
  {
    name: "Nikki Moolchandani",
    role: "Founder, NikkiFashion",
    content: "The custom website and e-commerce solution they built for our fashion brand has significantly increased our online sales and customer engagement.",
    rating: 5,
    avatar: "/placeholder-user.jpg",
    company: "NikkiFashion"
  },
  {
    name: "Sawai Singh",
    role: "Owner, Vehicle On Rent",
    content: "Their vehicle rental management system has streamlined our operations and improved customer satisfaction. The platform is user-friendly and highly efficient.",
    rating: 5,
    avatar: "/placeholder-user.jpg",
    company: "Vehicle On Rent"
  }
];

const team = [
  {
    name: "Vansh Gehlot",
    role: "Lead Developer",
    avatar: "/placeholder-user.jpg",
    skills: ["Mobile Development", "Flutter", "AWS"],
    experience: "3+ years",
    linkedin: "#"
  },
  {
    name: "Shubham Dadhich",
    role: "Senior Developer",
    avatar: "/placeholder-user.jpg",
    skills: ["Full-Stack Development", "React", "Node.js", "Firebase", "UI/UX"],
    experience: "4+ years",
    linkedin: "#"
  },
  {
    name: "Virender Parihar",
    role: "Senior Developer",
    avatar: "/placeholder-user.jpg",
    skills: [ "UI/UX", "Graphic Design"],
    experience: "3+ years",
    linkedin: "#"
  },
];

function Typewriter({ texts, speed = 50, pause = 2000 }: { texts: string[], speed?: number, pause?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(0);

  useEffect(() => {
    if (!texts.length) return;
    
    if (char < texts[index].length) {
      const timeout = setTimeout(() => setChar(c => c + 1), speed);
      setDisplayed(texts[index].slice(0, char + 1));
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setChar(0);
        setIndex(i => (i + 1) % texts.length);
      }, pause);
      return () => clearTimeout(timeout);
    }
  }, [char, index, texts, speed, pause]);

  return <span>{displayed}</span>;
}

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Scrollspy logic
      const sections = [
        { id: 'home', offset: 0 },
        { id: 'services', offset: 0 },
        { id: 'projects', offset: 0 },
        { id: 'about', offset: 0 },
        { id: 'contact', offset: 0 },
      ];
      let current = 'home';
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 80;
          if (window.scrollY >= top) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-200' 
          : 'bg-white/30 backdrop-blur-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ boxShadow: isScrolled ? '0 8px 32px 0 rgba(80, 0, 120, 0.10)' : undefined }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-lavender to-pink rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">SD</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-lavender to-pink bg-clip-text text-transparent">
              Shivkara Digitals
            </span>
          </motion.div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item, idx) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-gray-700 font-medium transition-colors px-2 py-1 rounded-lg ${
                  activeSection === item.toLowerCase()
                    ? 'bg-gradient-to-r from-lavender to-pink text-white shadow-md'
                    : 'hover:text-lavender'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx, duration: 0.5 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <motion.button
              className="bg-gradient-to-r from-lavender to-pink text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Get Started
            </motion.button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 mt-1 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 mt-1 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4 py-4 border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-gray-700 font-medium transition-colors px-2 py-1 rounded-lg ${
                    activeSection === item.toLowerCase()
                      ? 'bg-gradient-to-r from-lavender to-pink text-white'
                      : 'hover:text-lavender'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}

function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-very-light-pink via-white to-light-pink"
      style={{ opacity }}
    >
      {/* Enhanced Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-teal/20 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-72 h-72 bg-pink/20 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          scale: [2, 1, 1, 2, 2],
          rotate: [360, 270, 180, 90, 0],
        }}
        transition={{
          duration: 25,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div
        className="absolute -bottom-8 left-20 w-72 h-72 bg-light-blue/20 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 30,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-lavender/30 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-6 h-6 bg-pink/30 rounded-full"
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-gray-200 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Sparkles className="w-5 h-5 text-teal" />
            <span className="text-gray-700 font-medium">Transforming Businesses Digitally</span>
          </motion.div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-lavender via-teal to-pink bg-clip-text text-transparent">
            Shivkara Digitals
          </span>
          <br />
          <span className="text-gray-900">Your Technology Partner</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Typewriter
            texts={[
              "We deliver custom software solutions that transform businesses.",
              "From e-commerce platforms to enterprise systems, we build it all.",
              "Let's accelerate your digital transformation journey."
            ]}
            speed={50}
            pause={2000}
          />
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.button
            className="bg-gradient-to-r from-teal to-pink text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Explore Our Work</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            className="bg-white text-gray-700 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 flex items-center space-x-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Let's Talk</span>
            <Phone className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
            >
              <div className="flex justify-center mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-lavender to-pink rounded-full flex items-center justify-center text-white">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </motion.div>
    </motion.section>
  );
}

function TechnologyStack() {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = ['all', 'frontend', 'backend', 'database', 'devops', 'cloud', 'tools', 'design'];

  const filteredTechnologies = activeCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category.toLowerCase() === activeCategory);

  return (
    <motion.section
      className="py-20 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-lavender to-pink bg-clip-text text-transparent">Technology Stack</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We leverage cutting-edge technologies to build robust, scalable, and innovative solutions for our clients.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-lavender to-pink text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {filteredTechnologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div className="text-gray-600 group-hover:text-lavender transition-colors mb-4">
                {tech.icon}
              </div>
              <h3 className="font-semibold text-gray-900">{tech.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{tech.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function Process() {
  return (
    <motion.section
      className="py-20 bg-very-light-pink"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-lavender to-pink bg-clip-text text-transparent">Development Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a proven methodology that ensures quality, transparency, and successful project delivery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Connection line */}
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-lavender to-pink z-0" style={{ width: 'calc(100% + 2rem)' }} />
              )}
              
              <div className="relative z-10 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-lavender/10">
                <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center text-white mb-6 mx-auto`}>
                  {step.icon}
                </div>
                
                <div className="text-center">
                  <div className="text-sm font-bold text-lavender mb-2">{step.step}</div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function Services() {
  return (
    <motion.section
      id="services"
      className="py-20 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-lavender to-pink bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive software solutions tailored to meet your business needs and drive digital transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-lavender rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <motion.section
      id="projects"
      className="py-20 bg-very-light-pink"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-lavender to-pink bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our portfolio of innovative solutions that have transformed businesses across various industries.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {['all', 'web', 'mobile', 'enterprise', 'ai'].map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-lavender to-pink text-white shadow-lg'
                    : 'bg-very-light-pink text-gray-700 hover:bg-light-pink border border-lavender/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              className="group bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-lavender/10 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.04, boxShadow: '0 8px 32px 0 rgba(80, 0, 120, 0.15)' }}
            >
              <div className="h-48 bg-gradient-to-br from-lavender/20 to-pink/20 flex items-center justify-center relative">
                <div className="text-4xl">🚀</div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <Link href={project.link} passHref legacyBehavior>
                    <a className="px-6 py-2 bg-gradient-to-r from-lavender to-pink text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-transform">View Details</a>
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-lavender font-medium">{project.type}</span>
                  <Link href={project.link} passHref legacyBehavior>
                    <motion.a
                      href={project.link}
                      className="text-gray-400 hover:text-lavender transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </Link>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-lavender/20 to-pink/20 text-gray-700 text-sm rounded-full border border-lavender/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function Testimonials() {
  return (
    <motion.section
      className="py-20 bg-white/95"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="bg-gradient-to-r from-lavender to-pink bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-lavender/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-lavender to-pink rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function Team() {
  return (
    <motion.section
      id="about"
      className="py-20 bg-very-light-pink"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="bg-gradient-to-r from-lavender to-pink bg-clip-text text-transparent">Expert Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced team of software engineers, designers, and business analysts work together to deliver innovative solutions that drive business growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center border border-lavender/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-lavender to-pink rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                {member.name.charAt(0)}
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-gray-900">{member.name}</h3>
              <p className="text-lavender font-medium mb-4">{member.role}</p>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-very-light-pink text-gray-700 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 2000);
  };

  return (
    <motion.section
      id="contact"
      className="py-20 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="bg-gradient-to-r from-lavender to-pink bg-clip-text text-transparent">Start Your Project</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with custom software solutions? Get in touch with us and let's discuss how we can help accelerate your digital transformation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="flex items-center space-x-4 p-6 bg-gradient-to-r from-lavender/5 to-pink/5 rounded-xl border border-lavender/10"
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-lavender to-pink rounded-xl flex items-center justify-center text-white">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Phone</h3>
                <p className="text-gray-600">+91 7877218473</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-4 p-6 bg-gradient-to-r from-lavender/5 to-pink/5 rounded-xl border border-lavender/10"
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-lavender to-pink rounded-xl flex items-center justify-center text-white">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Email</h3>
                <p className="text-gray-600">info@shivkaradigitals.com</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-4 p-6 bg-gradient-to-r from-lavender/5 to-pink/5 rounded-xl border border-lavender/10"
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-lavender to-pink rounded-xl flex items-center justify-center text-white">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Office</h3>
                <p className="text-gray-600">12th B Rd, opposite Talwalkars Gym,<br />Sardarpura, Jodhpur, Rajasthan 342001</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.form
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent transition-all duration-300"
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>
            
            <div className="relative">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent transition-all duration-300"
              />
            </div>
            
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows={6}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent resize-none transition-all duration-300"
              ></textarea>
            </div>
            
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300 ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-lavender to-pink text-white hover:shadow-xl'
              }`}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </div>
              ) : (
                'Send Message'
              )}
            </motion.button>

            {submitStatus === 'success' && (
              <motion.div
                className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Thank you! Your message has been sent successfully. We'll get back to you soon.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
}

function Features() {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Development",
      description: "We use modern technologies and agile methodologies to deliver projects quickly without compromising quality.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Reliable",
      description: "Your data and applications are protected with enterprise-grade security and 99.9% uptime guarantee.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Our experienced developers and designers work closely with you to understand your unique requirements.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Scalable Solutions",
      description: "We build solutions that grow with your business, ensuring long-term success and ROI.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance to keep your systems running smoothly.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Assured",
      description: "Rigorous testing and quality assurance processes ensure your software meets the highest standards.",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <motion.section
      className="py-20 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="bg-gradient-to-r from-lavender to-pink bg-clip-text text-transparent">Shivkara Digitals</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise with business acumen to deliver solutions that drive real results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function CallToAction() {
  return (
    <motion.section
      className="py-20 bg-gradient-to-r from-lavender to-pink relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-black/10" />
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-24 h-24 bg-white/20 rounded-full"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Ready to Transform Your Business?
        </motion.h2>
        
        <motion.p
          className="text-xl text-white/90 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let's discuss your project and explore how we can help you achieve your digital goals. 
          Get in touch with us today for a free consultation.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            className="bg-white text-lavender px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            className="bg-transparent text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white hover:bg-white hover:text-lavender transition-all duration-300 flex items-center space-x-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Schedule a Call</span>
            <Phone className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}

function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-lavender to-pink rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">SD</span>
              </div>
              <span className="text-xl font-bold">Shivkara Digitals</span>
            </div>
            <p className="text-gray-400">
              Your trusted partner for custom software development, digital transformation, and business solutions that drive growth and efficiency.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-lavender transition-colors cursor-pointer"
                >
                  Custom Software Development
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-lavender transition-colors cursor-pointer"
                >
                  Mobile App Development
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-lavender transition-colors cursor-pointer"
                >
                  Web Design & Development
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-lavender transition-colors cursor-pointer"
                >
                  Digital Transformation
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-lavender transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-lavender transition-colors cursor-pointer"
                >
                  Our Team
                </button>
              </li>
              <li>
                <a 
                  href="mailto:shivkaradigitals@gmail.com?subject=Career%20Opportunity"
                  className="hover:text-lavender transition-colors cursor-pointer"
                >
                  Careers
                </a>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-lavender transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <div className="flex space-x-4 mt-2">
              <a href="https://linkedin.com/company/shivkara-digitals" target="_blank" rel="noopener noreferrer" className="hover:text-lavender transition-colors text-2xl">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/shivkaradigital" target="_blank" rel="noopener noreferrer" className="hover:text-lavender transition-colors text-2xl">
                <FaTwitter />
              </a>
              <a href="https://github.com/shivkara-digitals" target="_blank" rel="noopener noreferrer" className="hover:text-lavender transition-colors text-2xl">
                <FaGithub />
              </a>
              <a href="https://instagram.com/shivkaradigitals" target="_blank" rel="noopener noreferrer" className="hover:text-lavender transition-colors text-2xl">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        
        <motion.div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.2 }}>
          <p>&copy; 2025 Shivkara Digitals. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TechnologyStack />
      <Process />
      <Services />
      <Features />
      <Projects />
      <Testimonials />
      <Team />
      <Contact />
      <CallToAction />
      <Footer />
    </div>
  );
}
