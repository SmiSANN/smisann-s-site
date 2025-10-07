import { personalInfo } from "@/config/personal-info";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function LinksSection() {
  return (
    <section id="links" className="scroll-mt-16 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
          Links
        </h2>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight hidden lg:block">Links</h2>
        <div className="flex flex-wrap gap-2">
          {personalInfo.links.map((link, index) => (
            <Button asChild key={index} variant="outline">
              <Link href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}