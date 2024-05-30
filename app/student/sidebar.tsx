"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("Admitted Student");
  const router = useRouter();

  const links = [
    { name: "Admitted Student", href: "/student" },
    { name: "New Student", href: "/newstudent" },
    { name: "Old Student", href: "/oldstudent" },
    { name: "Payment details", href: "/payment" },
  ];

  const handleLinkClick = (linkName:any, href:any) => {
    setActiveLink(linkName);
    router.push(href); // Use router.push for navigation
  };

  return (
    <div className="bg-stone-300 min-h-screen w-60 flex flex-col items-center py-4">
      <div className="flex flex-col items-center mb-6">
        <img
          src="/logo.svg"
          alt="ATI Medical College"
          className="h-16 w-16 mb-2"
        />
        <h1 className="text-white text-center text-lg">ATI MEDICAL COLLEGE</h1>
      </div>
      <nav className="text-white text-lg" aria-label="Sidebar navigation">
        {links.map((link) => (
          <Link key={link.name} href={link.href}>
            <div
              className={`block py-2 px-4 hover:bg-stone-400 cursor-pointer ${
                activeLink === link.name ? "bg-stone-400" : ""
              }`}
              onClick={() => handleLinkClick(link.name, link.href)}
            >
              {link.name}
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
