import { Brain, Code2, Cpu, LineChart } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-background to-background"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-gradient bg-clip-text text-transparent">About Me</span>
          </h2>

          <div className="prose prose-invert max-w-none mb-16 fade-in-section">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              I'm a tech entrepreneur and AI specialist with a passion for building products that enhance the human experience. 
            </p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mt-6">
              Previously, I led the Health vertical for ads growth at Meta, where my work was highlighted in earnings calls as the second-largest growth area. At Portfolio Insider, as Chief of AI, I pioneered GPT-3 implementations to democratize financial data access. My journey also includes impactful roles at Google, where I improved ad relevance through ML, and at Gimbal, where I architected systems processing over 2 billion events monthly.
            </p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mt-6">
              USC Undergrad for Computer Science/Business Administration, club involvements in skiing, investing, and entrepreneurship.
              Unfortunately, didn't drop out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 fade-in-section animation-delay-100">
            <div className="bg-secondary/5 backdrop-blur-sm rounded-xl p-6 border border-secondary/10 hover:border-secondary/20 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 text-gradient bg-clip-text text-transparent">Technical Expertise</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 group">
                  <div className="relative">
                    <LineChart className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-200" />
                    <div className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 -z-10"></div>
                  </div>
                  <span className="text-foreground/80">Product Strategy & Growth</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="relative">
                    <Cpu className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-200" />
                    <div className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 -z-10"></div>
                  </div>
                  <span className="text-foreground/80">Large-Scale Data Processing</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="relative">
                    <Code2 className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-200" />
                    <div className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 -z-10"></div>
                  </div>
                  <span className="text-foreground/80">Software Architecture & Engineering</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="relative">
                    <Brain className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-200" />
                    <div className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 -z-10"></div>
                  </div>
                  <span className="text-foreground/80">Machine Learning & AI Development</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary/5 backdrop-blur-sm rounded-xl p-6 border border-secondary/10 hover:border-secondary/20 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 text-gradient bg-clip-text text-transparent">Publications</h3>
              <ul className="space-y-4">
                <li>
                  <a href="https://www.forbes.com/sites/forbestechcouncil/2021/09/22/how-ai-will-democratize-access-to-investing/" target="_blank" rel="noopener noreferrer" className="group block hover:bg-secondary/10 rounded-lg p-3 transition-all duration-200">
                    <span className="font-medium text-foreground/90 group-hover:text-primary transition-colors">Forbes Tech Council</span>
                    <p className="text-sm text-foreground/70 mt-1">How AI Will Democratize Access to Investing</p>
                  </a>
                </li>
                <li>
                  <a href="https://www.fastcompany.com/90689998/advice-on-building-great-products" target="_blank" rel="noopener noreferrer" className="group block hover:bg-secondary/10 rounded-lg p-3 transition-all duration-200">
                    <span className="font-medium text-foreground/90 group-hover:text-primary transition-colors">Fast Company</span>
                    <p className="text-sm text-foreground/70 mt-1">Advice on Building Great Products</p>
                  </a>
                </li>
                <li>
                  <a href="https://www.newsweek.com/fighting-evolutions-mistakes-ensuring-equitable-hiring-machine-learning-1634661" target="_blank" rel="noopener noreferrer" className="group block hover:bg-secondary/10 rounded-lg p-3 transition-all duration-200">
                    <span className="font-medium text-foreground/90 group-hover:text-primary transition-colors">Newsweek Expert Forum</span>
                    <p className="text-sm text-foreground/70 mt-1">Fighting Evolution's Mistakes: Ensuring Equitable Hiring with ML</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 fade-in-section animation-delay-200">
            <div className="p-6 bg-secondary/5 backdrop-blur-sm rounded-xl border border-secondary/10 hover:border-secondary/20 transition-all duration-300">
              <h4 className="text-2xl md:text-3xl font-bold text-[#60A5FA] mb-2">2B+</h4>
              <p className="text-sm text-foreground/70">Monthly Events Processed</p>
            </div>
            <div className="p-6 bg-secondary/5 backdrop-blur-sm rounded-xl border border-secondary/10 hover:border-secondary/20 transition-all duration-300">
              <h4 className="text-2xl md:text-3xl font-bold text-[#60A5FA] mb-2">$1M</h4>
              <p className="text-sm text-foreground/70">Pre-seed Funding Raised</p>
            </div>
            <div className="p-6 bg-secondary/5 backdrop-blur-sm rounded-xl border border-secondary/10 hover:border-secondary/20 transition-all duration-300">
              <h4 className="text-2xl md:text-3xl font-bold text-[#60A5FA] mb-2">3M+</h4>
              <p className="text-sm text-foreground/70">Requests/Second</p>
            </div>
            <div className="p-6 bg-secondary/5 backdrop-blur-sm rounded-xl border border-secondary/10 hover:border-secondary/20 transition-all duration-300">
              <h4 className="text-2xl md:text-3xl font-bold text-[#60A5FA] mb-2">5+</h4>
              <p className="text-sm text-foreground/70">Published Articles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
