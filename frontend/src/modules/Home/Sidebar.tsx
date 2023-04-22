import UserCircleIcon from "@heroicons/react/24/solid/UserCircleIcon";
import Link from "next/link";

const Sidebar = () => {
  return (
    <header className="sticky top-0  h-14 w-full border-b border-slate-300 px-4 backdrop-blur">
      <div className="flex h-14 justify-between">
        <Link href={"/home"}>
          <div className=" flex h-full items-center"></div>
        </Link>
        <div className="flex items-center">
          <UserCircleIcon className="m-4 h-8 w-8 cursor-pointer text-slate-400 transition-colors hover:text-slate-500"></UserCircleIcon>
        </div>
      </div>
    </header>
  );
};

export { Sidebar };

// const link ={[href:"/home",title:"home",icon:]}
