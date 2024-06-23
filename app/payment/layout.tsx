
import React, { ReactNode } from "react";


interface RootLayoutProps {
  children: ReactNode;
}
export const metadata = {
  title: "Payment Details",
  description: "Payment details page",
};

export default function RootLayout({ children}: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
