type ArtistNameProps = {
  className?: string;
  /** Section background — paints over the i dot before the heart */
  coverColor?: string;
};

export function ArtistName({ className = "", coverColor }: ArtistNameProps) {
  return (
    <span className={className} aria-label="Mai Nguy">
      Ma
      <span className="relative inline-block">
        i
        <span
          className="pointer-events-none absolute left-1/2 top-[0.2em] z-[1] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
          aria-hidden
        >
          {coverColor && (
            <span
              className="absolute rounded-full"
              style={{
                width: "0.4em",
                height: "0.4em",
                backgroundColor: coverColor,
              }}
            />
          )}
          <span className="relative text-[0.3em] leading-none text-[#1a1816]">
            ♥
          </span>
        </span>
      </span>{" "}
      Nguy
    </span>
  );
}
