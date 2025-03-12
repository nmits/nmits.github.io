
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, Link as LinkIcon } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useEffect } from "react";

// This would typically come from an API or database
const projects = [
  {
    id: "project-1",
    title: "Portfolio Website",
    description: "A sleek, minimalist developer portfolio with Apple-inspired design principles.",
    fullDescription: "This project showcases a modern developer portfolio built with React and Tailwind CSS. It features smooth animations, a responsive design, and a minimalist aesthetic inspired by Apple's design language. The site includes sections for projects, skills, and contact information, all presented in a clean and elegant interface.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
    github: "https://github.com",
    demo: "https://example.com",
    features: [
      "Responsive design that works on all devices",
      "Smooth animations and transitions",
      "Interactive project showcase",
      "Contact form with validation",
      "Optimized performance and accessibility",
    ],
  },
  {
    id: "project-2",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with modern UI and seamless checkout experience.",
    fullDescription: "This e-commerce platform provides a complete online shopping experience with product listings, cart functionality, user authentication, and secure checkout. Built with Next.js and integrated with Stripe for payments, it offers a seamless shopping experience with fast page loads and server-side rendering for optimal SEO.",
    tags: ["Next.js", "TypeScript", "Stripe"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80",
    github: "https://github.com",
    demo: "https://example.com",
    features: [
      "Product catalog with filtering and search",
      "User authentication and account management",
      "Shopping cart with persistent storage",
      "Secure checkout with Stripe integration",
      "Order tracking and history",
    ],
  },
  {
    id: "project-3",
    title: "AI-Powered Analytics Dashboard",
    description: "An intelligent analytics dashboard with predictive insights and data visualization.",
    fullDescription: "This analytics dashboard leverages AI to provide predictive insights and beautiful data visualizations. Built with React for the frontend and Node.js for the backend, it integrates with various data sources to provide a comprehensive view of business metrics. The dashboard includes real-time updates, interactive charts, and customizable widgets.",
    tags: ["React", "Node.js", "D3.js", "TensorFlow"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    github: "https://github.com",
    demo: "https://example.com",
    features: [
      "Interactive data visualizations with D3.js",
      "AI-powered predictive analytics",
      "Real-time data updates",
      "Customizable dashboard widgets",
      "Export and sharing capabilities",
    ],
  },
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The project you're looking for doesn't exist or has been removed.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative">
          <div className="h-[40vh] overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10"></div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 -mt-20 relative z-20">
            <div className="glass-card p-8 rounded-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <h1 className="text-3xl font-bold">{project.title}</h1>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 text-foreground hover:bg-secondary/70 transition-colors duration-200"
                    >
                      <Github className="h-4 w-4" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
                    >
                      <LinkIcon className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full bg-secondary/30 text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground mb-6">{project.fullDescription}</p>
              <div>
                <h2 className="text-xl font-medium mb-4">Key Features</h2>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block h-2 w-2 rounded-full bg-primary mt-2 mr-3"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-between">
            <Link
              to="/#projects"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Projects</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetail;
