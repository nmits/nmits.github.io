export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="text-center text-sm text-muted-foreground">
          <p> {currentYear} Noah Mitsuhashi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
