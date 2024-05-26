// components/Sidebar.tsx
"use client";
import { useState } from "react";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("Admission");

  const links = [
    { name: "Admission", href: "/admission" },
    { name: "New Student", href: "/newstudent" },
    { name: "Old Student", href: "/oldstudent" },
  ];

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
          <a
            key={link.name}
            href={link.href}
            className={`block py-2 px-4 hover:bg-stone-400 ${
              activeLink === link.name ? "bg-stone-400" : ""
            }`}
            onClick={() => setActiveLink(link.name)}
          >
            {link.name}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
