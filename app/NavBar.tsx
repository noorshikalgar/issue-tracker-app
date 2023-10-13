"use client";
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBug } from "react-icons/fa";
import classnames from "classnames";

function NavBar() {
  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/issues", label: "Issues" },
  ];

  const currentPath = usePathname();

  return (
    <nav className="flex space-x-6 border-b px-5 h-14 items-center">
      <Link href="/">
        {" "}
        <FaBug />{" "}
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li
            className={classnames({
              "text-zinc-900": link.href === currentPath,
              "text-zinc-500": !(link.href === currentPath),
              "hover:text-zinc-800 transition-colors": true,
            })}
            key={link.href}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
