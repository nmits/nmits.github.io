import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Link } from "react-router-dom";
import { useEffect } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

export const Projects = () => {
  const projects = [
    {
      title: "Meta GenAI and Telco",
      description: "Returned to previous role to own Telecommunications and GenAI monetization (Creative, Agents) building AI generated ad creative, moved to core ads quality improvement through improved understanding of advertiser preferences and feature development, owned Tech advertisers",
      tags: ["AI/ML", "Growth", "Ads Platform"],
      link: "https://www.facebook.com/business/news/generative-ai-features-for-ads-coming-to-all-advertisers",
    },
    {
      title: "Favs – Close Friends Social Network",
      description:
        "Co-founded a social network focused on strengthening real-life friendships by limiting online engagement to just minutes per day. Raised ~$1M in pre-seed funding and preparing for launch in early 2024.",
      tags: ["Social Networking", "iOS Development", "Product Strategy"],
      link: "https://investitin.com/stealth-startup-favs-raises-1-million-for-its-close-friends-only-social-network/",
    },
    {
      title: "Meta Health Vertical Growth",
      description:
        "Led the Health vertical for ads growth at Meta, contributing to the second-largest growth area (highlighted in 2022 Q4 and 2023 Q1 earnings calls). Co-built a U.S. program optimizing dynamic ads with AI.",
      tags: ["AI/ML", "Growth", "Ads Platform"],
      link: "https://investor.fb.com/home/default.aspx",
    },
    {
      title: "Portfolio Insider AI Platform",
      description:
        "As Chief of AI, pioneered GPT-3 implementations to democratize financial data access. Built AI tools to eliminate jargon barriers and provide accessible stock-picking recommendations.",
      tags: ["GPT-3", "FinTech", "AI Development"],
      link: "https://www.portfolioinsider.com/",
    },
    {
      title: "Gimbal Data Pipeline",
      description:
        "Architected high-performance data pipelines processing 2+ billion events monthly and 3M+ requests/sec at petabyte scale. Implemented location analytics and consumer trend discovery algorithms.",
      tags: ["Big Data", "Microservices", "Analytics"],
      link: "https://www.infillion.com/",
    },
    {
      title: "Google Ads Relevance",
      description:
        "Enhanced ad relevance through machine learning on Google's Ads team. Built scalable data pipelines and cleaning processes for AI-driven advertising products.",
      tags: ["Machine Learning", "Data Engineering", "Ads"],
      link: "https://ads.google.com/",
    },
    {
      title: "Investment Analysis Platform",
      description:
        "Designed a system analyzing 1,000+ investment opportunities using custom heuristic algorithms. Generated personalized portfolio recommendations for 100+ clients, facilitating $2B+ in transactions.",
      tags: ["Financial Analysis", "Algorithms", "Python"],
      link: "https://pitchbook.com/profiles/advisor/719029-54#overview",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".fade-in-section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">
            <span className="text-gradient">Featured Work</span>
          </h2>
          <p className="text-center text-foreground/80 mb-12">
            A collection of impactful projects and achievements from my career
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-secondary/10 rounded-lg p-6 hover:bg-secondary/20 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 text-foreground/50 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
                <p className="text-foreground/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-secondary/20 rounded-full text-foreground/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
