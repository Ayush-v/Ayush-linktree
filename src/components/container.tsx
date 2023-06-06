import { ReactNode } from "react";

export default function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto mt-20 max-w-7xl pb-20 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}