import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[80svh] items-end px-6 pb-24 pt-32">
        <div className="mx-auto max-w-5xl">
          <p className="eyebrow mb-4">404</p>
          <h1 className="display text-6xl text-[var(--pax-ink)]">
            That page isn&apos;t here.
          </h1>
          <Link
            to="/"
            className="mt-8 inline-block text-[var(--pax-gold)] hover:underline"
          >
            Back home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
