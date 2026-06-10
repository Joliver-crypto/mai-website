"use client";

import { ContentArea } from "@/components/ContentArea";
import { SiteFooter } from "@/components/SiteFooter";
import { ARTIST_STATEMENT, SITE } from "@/lib/content";
import Image from "next/image";

export function AboutSection() {
  const paragraphs = ARTIST_STATEMENT.split("\n\n").filter(Boolean);

  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col bg-[#f2f0ec] text-[#1a1816]"
    >
      <ContentArea className="flex-1 py-20 md:py-28">
        <div className="scroll-mt-8">
          <p className="mb-3 text-[11px] tracking-[0.22em] text-black/35 uppercase">
            About the Artist
          </p>
          <h2 className="font-serif text-3xl font-light md:text-4xl lg:text-5xl">
            {SITE.name}
          </h2>
        </div>

        <div className="mt-12 flex flex-col gap-14 md:mt-16 lg:flex-row lg:gap-16">
          <div className="w-full shrink-0 lg:w-[240px]">
            <Image
              src={SITE.headshot}
              alt={`Portrait of ${SITE.name}`}
              width={0}
              height={0}
              sizes="240px"
              className="h-auto max-h-[400px] w-auto max-w-full object-contain"
              style={{ width: "auto", height: "auto" }}
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="space-y-5">
              {paragraphs.map((paragraph, i) => (
                <p key={i} className="max-w-2xl text-[15px] leading-[1.9] text-black/60">
                  {paragraph}
                </p>
              ))}
            </div>

            <div id="cv" className="mt-10 max-w-xs scroll-mt-8">
              <a
                href={SITE.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 border border-black/15 px-5 py-2.5 text-[11px] tracking-[0.12em] text-black/70 uppercase hover:border-black/30 hover:bg-white/50"
              >
                <span>View CV</span>
                <span>→</span>
              </a>
            </div>

            <div id="contact" className="mt-6 max-w-xs scroll-mt-8">
              <p className="text-[11px] tracking-[0.18em] text-black/40 uppercase">
                Contact
              </p>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-1.5 block text-[13px] leading-relaxed text-black/65 hover:text-black"
              >
                {SITE.email}
              </a>
            </div>
          </div>
        </div>
      </ContentArea>

      <SiteFooter className="mt-auto bg-[#f2f0ec]" />
    </section>
  );
}
