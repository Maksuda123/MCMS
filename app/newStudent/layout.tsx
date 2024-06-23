import React, { ReactNode } from "react";


interface RootLayoutProps {
  children: ReactNode;
}
export const metadata = {
  title: "New Student",
  description: "New Student page",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
