import { CONTENT_COLUMN } from "@/lib/layout";

type ContentAreaProps = {
  children: React.ReactNode;
  className?: string;
};

export function ContentArea({ children, className = "" }: ContentAreaProps) {
  return <div className={`${CONTENT_COLUMN} ${className}`}>{children}</div>;
}
