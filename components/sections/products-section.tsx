import { personalInfo } from "@/config/personal-info";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function ProductsSection() {
  return (
    <section id="products" className="scroll-mt-16 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
          Products
        </h2>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight hidden lg:block">Products</h2>
        <div className="space-y-4">
          {personalInfo.products.map((product, index) => {
            const isGithub = product.url.includes("github.com");
            return (
              <Card
                key={index}
                className={cn(
                  "transition-colors",
                  product.featured && "border-primary/50 ring-1 ring-primary/20"
                )}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {product.name}
                    {product.featured && (
                      <Badge variant="secondary" className="text-[10px] uppercase tracking-wide">
                        Featured
                      </Badge>
                    )}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                {product.tags && product.tags.length > 0 && (
                  <CardContent>
                    <div className="flex flex-wrap gap-1.5">
                      {product.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                )}
                <CardFooter className="gap-2">
                  <Button asChild>
                    <Link href={product.url} target="_blank" rel="noopener noreferrer">
                      {isGithub ? (
                        <>
                          <FaGithub className="size-4" />
                          View on GitHub
                        </>
                      ) : (
                        "View Product"
                      )}
                    </Link>
                  </Button>
                  {product.repoUrl && (
                    <Button asChild variant="outline">
                      <Link href={product.repoUrl} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="size-4" />
                        Source
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
