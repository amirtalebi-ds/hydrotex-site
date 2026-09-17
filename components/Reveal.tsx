import type { HTMLAttributes, ReactNode } from "react";
type RevealProps = HTMLAttributes<HTMLElement> & { as?: "section" | "div" | "article"; children: ReactNode };
export function Reveal({ as: Tag = "section", className = "", children, ...props }: RevealProps) {
 return <Tag className={className} {...props}>{children}</Tag>;
}
