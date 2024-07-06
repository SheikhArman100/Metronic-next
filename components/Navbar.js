import { BellRing, LayoutGrid, MessageSquareMore, Search } from "lucide-react";
import Image from "next/image.js";
import Link from "next/link.js";
import profileImage from "@/public/assets/assets/media/avatars/300-2.png";

const Navbar = () => {
  return (
    <nav className="w-full h-[70px]  flex items-center">
      <div className="flex items-center justify-center gap-x-[20rem]">
        <ul className="flex items-center gap-x-5  lg:gap-x-8">
          <li className="text-sm font-500 text-gray-700 hover:text-[#1B84FF]">
            <Link href="#">Home</Link>
          </li>
          <li className="text-sm font-500 text-gray-700 hover:text-[#1B84FF]">
            <Link href="#">Public Profiles</Link>
          </li>
          <li className="text-sm font-500 text-gray-700 hover:text-[#1B84FF]">
            <Link href="#">My Account</Link>
          </li>
          <li className="text-sm font-500 text-gray-700 hover:text-[#1B84FF]">
            <Link href="#">Network</Link>
          </li>
          <li className="text-sm font-500 text-gray-700 hover:text-[#1B84FF]">
            <Link href="#">Authentication</Link>
          </li>
          <li className="text-sm font-500 text-gray-700 hover:text-[#1B84FF]">
            <Link href="#">Help</Link>
          </li>
        </ul>
        <div className="flex items-center gap-x-5  lg:gap-x-8">
          <Link href="#" className="flex items-center justify-between ">
            <div className="rounded-full  bg-gray-200">
              <Search className="size-5 stroke-gray-500 " />
            </div>
          </Link>
          <Link href="#" className="flex items-center justify-between ">
            <div className="rounded-full  bg-gray-200">
              <MessageSquareMore className="size-5 stroke-gray-500 " />
            </div>
          </Link>
          <Link href="#" className="flex items-center justify-between ">
            <div className="rounded-full  bg-gray-200">
              <LayoutGrid className="size-5 stroke-gray-500 " />
            </div>
          </Link>
          <Link href="#" className="flex items-center justify-between ">
            <div className="rounded-full  bg-gray-200">
              <BellRing className="size-5 stroke-gray-500 " />
            </div>
          </Link>
          <Link
            href="/auth/signin"
            className="border border-green-400 rounded-full"
          >
            <Image
              height="40"
              width="40"
              src={profileImage}
              className="rounded-full"
              alt=""
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
