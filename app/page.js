import Navbar from "@/components/Navbar.js";
import Sidebar from "@/components/Sidebar.js";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex">
      <Sidebar/>
      <div className=" fixed top-0 left-[280px]  h-full w-[calc(100vw-280px)] flex flex-col items-center  ">
        <div className="h-full w-fit ">

        <Navbar/>
        </div>
      </div>

      
    </main>
  );
}
