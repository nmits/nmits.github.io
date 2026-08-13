export const Footer = () => {
  return (
    <footer className="px-6 pb-12">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 border-t border-[var(--pax-line)] pt-8 text-sm text-[var(--pax-ink-mute)] sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Noah Mitsuhashi</p>
        <p>Los Angeles</p>
      </div>
    </footer>
  );
};
