"use client";

import { ContentArea } from "@/components/ContentArea";
import type { Project } from "@/lib/types";
import Image from "next/image";

type ProjectSectionProps = {
  project: Project;
  index: number;
};

function ArtworkImage({
  src,
  alt,
  priority,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="flex w-full justify-center lg:justify-start">
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="(max-width: 1024px) 100vw, 75vw"
        priority={priority}
        className="h-auto max-h-[min(85vh,1100px)] w-auto max-w-full object-contain"
        style={{ width: "auto", height: "auto" }}
      />
    </div>
  );
}

export function ProjectSection({ project, index }: ProjectSectionProps) {
  const { palette } = project;

  return (
    <section
      id={project.id}
      className="relative scroll-mt-0"
      style={{
        backgroundColor: palette.bg,
        color: palette.text,
      }}
    >
      <ContentArea className="py-20 md:py-28">
        <header className="mb-12 max-w-2xl md:mb-16">
          <p
            className="mb-2 text-[11px] tracking-[0.22em] uppercase"
            style={{ color: palette.textMuted }}
          >
            {project.year}
          </p>
          <h2 className="font-serif text-3xl font-light leading-tight tracking-tight md:text-4xl lg:text-5xl">
            {project.title}
          </h2>
          <p
            className="mt-3 text-sm tracking-wide"
            style={{ color: palette.textMuted }}
          >
            {project.medium}
            {project.dimensions && (
              <span className="opacity-60"> · {project.dimensions}</span>
            )}
          </p>
        </header>

        <p className="mb-14 max-w-2xl text-[15px] leading-[1.85] md:mb-20 md:text-base">
          {project.description}
        </p>

        <div className="space-y-14 md:space-y-20">
          {project.images.map((image, i) => (
            <div key={image.src}>
              <figure className="w-full">
                <ArtworkImage
                  src={image.src}
                  alt={image.alt}
                  priority={index === 0 && i === 0}
                />
                {image.caption && (
                  <figcaption
                    className="mt-4 max-w-2xl text-[13px] leading-relaxed"
                    style={{ color: palette.textMuted }}
                  >
                    {image.caption}
                  </figcaption>
                )}
              </figure>

              {project.narrative && project.narrative[i] && (
                <p
                  className="mt-10 max-w-2xl text-[15px] leading-[1.9] md:mt-12"
                  style={{ color: palette.textMuted }}
                >
                  {project.narrative[i]}
                </p>
              )}
            </div>
          ))}

          {project.narrative &&
            project.narrative.slice(project.images.length).map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="max-w-2xl text-[15px] leading-[1.9]"
                style={{ color: palette.textMuted }}
              >
                {paragraph}
              </p>
            ))}
        </div>

        {project.descriptionVi && (
          <div
            className="mt-16 border-t pt-8 md:mt-20"
            style={{ borderColor: `${palette.accent}33` }}
          >
            <p
              className="max-w-2xl text-[15px] leading-[1.9] italic"
              style={{ color: palette.textMuted }}
            >
              {project.descriptionVi}
            </p>
          </div>
        )}

        <div className="mt-16 md:mt-20">
          <div
            className="h-px w-10"
            style={{ backgroundColor: palette.accent, opacity: 0.3 }}
          />
        </div>
      </ContentArea>
    </section>
  );
}
