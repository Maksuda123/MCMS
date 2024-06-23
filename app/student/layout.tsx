import React, { ReactNode } from "react";

// Define the props for the RootLayout component
interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Admitted Student",
  description: "Admitted Student page",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
