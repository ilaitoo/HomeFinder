import React from "react";

export default function Container({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="mx-[75px]">{children}</div>;
}
