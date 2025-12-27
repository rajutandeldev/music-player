import Image from "next/image";
import Navbar from "./ui/maincontent/navbar/Navbar";
import { MdSearch } from "react-icons/md";

export default function Home() {
  return (
    <div className="bg-white/10
      backdrop-blur-xl
      rounded-2xl
      border border-white/10
      shadow-2xl
      flex-5
      p-3
      flex
      flex-col
      ">
        <Navbar />
    </div>
  );
}
