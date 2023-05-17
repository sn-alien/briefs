import Image from "next/image";
import Link from "next/link";
import UserCircleIcon from "@heroicons/react/24/solid/UserCircleIcon";
import { NavbarLink } from "./NavbarLink";
const Navbar = () => {
  return (
    <header className="sticky top-0 flex h-14  w-full justify-center  border-b border-slate-300 px-4 backdrop-blur">
      <div className=" container flex h-14 justify-between">
        <Link href={"/"}>
          <div className=" flex h-full items-center">
            <Image alt="" src="/briefs.svg" height="44" width="90" />
          </div>
        </Link>
        <div className="flex content-center items-center">
          {links.map((link, key) => (
            <NavbarLink key={key} href={link.href}>
              {link.text}
            </NavbarLink>
          ))}
        </div>

        <div className="flex items-center">
          <UserCircleIcon className="m-4 h-8 w-8 cursor-pointer text-slate-400 transition-colors hover:text-slate-500"></UserCircleIcon>
        </div>
      </div>
    </header>
  );
};

export { Navbar };

const links = [
  {
    href: "/dashboard",
    text: "Dashboard",
  },
  // {
  //   href: "/form/form-components",
  //   text: "Form Components",
  // },
  {
    href: "/form/form-dummy",
    text: "Form Dummy",
  },
  {
    href: "/form/form-generated",
    text: "Form Generator",
  },
];
