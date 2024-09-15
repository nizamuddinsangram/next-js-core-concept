"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link
      className={`${pathName === link.path ? "text-green-500" : ""}`}
      key={link.path}
      href={link.path}
    >
      {link.title}
    </Link>
  );
};

export default Nav;
