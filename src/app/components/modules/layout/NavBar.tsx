"use client";

import clsx from "clsx";
import { ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavOption = {
  key: string;
  label: string;
  href: string;
};

export const navOptions: NavOption[] = [
  {
    key: "home",
    label: "HOME",
    href: "/home",
  },
  {
    key: "product",
    label: "PRODUCT",
    href: "/products",
  },
  {
    key: "about",
    label: "ABOUT",
    href: "/about",
  },
  {
    key: "news",
    label: "NEWS",
    href: "/news",
  },
  {
    key: "contact",
    label: "CONTACT",
    href: "/contact",
  },
];

export const NavBar = () => {
  const pathname = usePathname();
  const activePage = pathname.split("/")[1];
  console.log(activePage);

  return (
    <div className="flex items-center justify-between px-20 ">
      <Link href="/home">
        <Image
          src="/company-logo.png"
          alt="ECDS Logo"
          width={150}
          height={110}
          className="w-auto h-auto"
          loading="eager"
        />
      </Link>

      <div className="flex items-center gap-14">
        {navOptions.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className={clsx(
              "text-sm font-semibold tracking-wide transition-colors",
              activePage === item.key
                ? "text-primary"
                : "text-black hover:text-primary",
            )}
          >
            {item.label}
          </Link>
        ))}

        <button type="button" className="transition hover:text-primary">
          <ShoppingCart size={20} strokeWidth={2.5} />
        </button>

        <button type="button" className="transition hover:text-primary">
          <User size={20} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};
