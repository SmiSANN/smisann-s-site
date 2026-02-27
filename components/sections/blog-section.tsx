import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaPenNib } from "react-icons/fa";

export function BlogSection() {
  return (
    <section id="blog" className="scroll-mt-16 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
          Blog
        </h2>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight hidden lg:block">Blog</h2>
        <p className="text-muted-foreground leading-relaxed">
          学んだことや試したことを記事としてアウトプットしています。技術的なメモから実験記録まで、気づきをそのまま書いています。
        </p>

        <a
          href="https://blog.smisann.net"
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/60 hover:bg-card/80 hover:shadow-md"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <FaPenNib className="h-4 w-4" />
              </div>
              <div>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  blog.smisann.net
                </p>
                <p className="text-sm text-muted-foreground mt-0.5">
                  個人ブログ — 技術 / 電子工作 / 日々の発見
                </p>
              </div>
            </div>
            <FaArrowUpRightFromSquare className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary mt-1" />
          </div>
        </a>
      </div>
    </section>
  );
}
