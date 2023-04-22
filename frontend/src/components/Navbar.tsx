import Image from "next/image";
import Link from "next/link";
import UserCircleIcon from "@heroicons/react/24/solid/UserCircleIcon";
const Navbar = () => {
  return (
    <header className="sticky top-0  h-14 w-full border-b border-slate-300 px-4 backdrop-blur">
      <div className="flex h-14 justify-between">
        <Link href={"/"}>
          <div className=" flex h-full items-center">
            <Image alt="" src="/briefs.svg" height="44" width="90" />
          </div>
        </Link>
        <div className="flex items-center">
          <UserCircleIcon className="m-4 h-8 w-8 cursor-pointer text-slate-400 transition-colors hover:text-slate-500"></UserCircleIcon>
        </div>
      </div>
    </header>
  );
};

export { Navbar };
