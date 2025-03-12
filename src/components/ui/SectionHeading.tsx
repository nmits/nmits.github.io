
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeading = ({ 
  title, 
  subtitle, 
  className 
}: SectionHeadingProps) => {
  return (
    <div className={cn("text-center mb-12", className)}>
      <h2 className="text-2xl md:text-3xl font-medium text-gradient mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
