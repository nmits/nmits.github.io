
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center glass-card p-8 rounded-xl max-w-md">
          <div className="text-8xl font-bold text-gradient mb-6">404</div>
          <h1 className="text-2xl font-medium mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
