import { personalInfo } from "@/config/personal-info";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function LinksSection() {
  return (
    <section id="links" className="scroll-mt-16 lg:scroll-mt-24">
      <div className="flex flex-wrap gap-2">
        {personalInfo.links.map((link, index) => (
          <Button asChild key={index} variant="outline">
            <Link href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </Link>
          </Button>
        ))}
      </div>
    </section>
  );
}