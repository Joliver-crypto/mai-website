import { SITE } from "@/lib/content";
import { CONTENT_INSET } from "@/lib/layout";

type SiteFooterProps = {
  className?: string;
};

export function SiteFooter({ className = "" }: SiteFooterProps) {
  return (
    <footer className={`mt-auto w-full ${className}`}>
      <div className="w-full border-t border-black/[0.08]" />
      <div className={`${CONTENT_INSET} pt-6 pb-10 md:pt-8 md:pb-12`}>
        <p className="text-[12px] text-black/35">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
