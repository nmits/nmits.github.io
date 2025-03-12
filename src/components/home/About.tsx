import { Brain, Code2, Cpu, LineChart } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-gradient">About Me</span>
          </h2>

          <div className="prose prose-invert max-w-none mb-16">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm a tech entrepreneur and AI specialist with a passion for building products that enhance human connections. 
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mt-4">
              Previously, I led the Health vertical for ads growth at Meta, where my work was highlighted in earnings calls as the second-largest growth area. At Portfolio Insider, as Chief of AI, I pioneered GPT-3 implementations to democratize financial data access. My journey also includes impactful roles at Google, where I improved ad relevance through ML, and at Gimbal, where I architected systems processing over 2 billion events monthly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-secondary/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Technical Expertise</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  <span>Machine Learning & AI Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-primary" />
                  <span>Software Architecture & Engineering</span>
                </li>
                <li className="flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-primary" />
                  <span>Large-Scale Data Processing</span>
                </li>
                <li className="flex items-center gap-2">
                  <LineChart className="h-5 w-5 text-primary" />
                  <span>Product Strategy & Growth</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Publications</h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://www.forbes.com/sites/forbestechcouncil/2021/09/22/how-ai-will-democratize-access-to-investing/" target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">
                    <span className="font-medium">Forbes Tech Council</span>
                    <p className="text-sm text-foreground/70">How AI Will Democratize Access to Investing</p>
                  </a>
                </li>
                <li>
                  <a href="https://www.fastcompany.com/90689998/advice-on-building-great-products" target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">
                    <span className="font-medium">Fast Company</span>
                    <p className="text-sm text-foreground/70">Advice on Building Great Products</p>
                  </a>
                </li>
                <li>
                  <a href="https://www.newsweek.com/fighting-evolutions-mistakes-ensuring-equitable-hiring-machine-learning-1634661" target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">
                    <span className="font-medium">Newsweek Expert Forum</span>
                    <p className="text-sm text-foreground/70">Fighting Evolution's Mistakes: Ensuring Equitable Hiring with ML</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-secondary/10 rounded-lg">
              <h4 className="text-2xl font-bold text-primary mb-2">2B+</h4>
              <p className="text-sm text-foreground/70">Monthly Events Processed</p>
            </div>
            <div className="p-4 bg-secondary/10 rounded-lg">
              <h4 className="text-2xl font-bold text-primary mb-2">$1M</h4>
              <p className="text-sm text-foreground/70">Pre-seed Funding Raised</p>
            </div>
            <div className="p-4 bg-secondary/10 rounded-lg">
              <h4 className="text-2xl font-bold text-primary mb-2">3M+</h4>
              <p className="text-sm text-foreground/70">Requests/Second</p>
            </div>
            <div className="p-4 bg-secondary/10 rounded-lg">
              <h4 className="text-2xl font-bold text-primary mb-2">5+</h4>
              <p className="text-sm text-foreground/70">Published Articles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
