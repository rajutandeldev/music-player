import Image from "next/image";
import Navbar from "./ui/maincontent/navbar/Navbar";
import { MdSearch } from "react-icons/md";
import Tabs from "./ui/component/Tab";

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
        <div className="flex justify-between gap-4 p-5 h-2/4">
          <div className="flex-1 flex flex-col gap-2 rounded-2xl  items-center p-4  bg-gradient-to-r from-[#63434EFF] to-[#493742FF]  backdrop-blur-xl
        rounded-xl">
            <span className="text-[10px] text-white/50">69 songs,4 hours,37 minutes</span>
            <h2 className="font-bold text-1xl text-white/70">Playlist of the day</h2>
            <Image src="/portrait-man-working-as-musician.jpg"  className="rounded-2xl border-2 border-white/50" alt="" width='100' height={100}/>
          </div>
          <div className=" flex flex-6 w-full overflow-hidden relative">
            <iframe  src="/video.mp4" className="w-2/4 h-full rounded-2xl border-2 border-white/50" title="video"/>
          </div>
        </div>
        <Tabs/>
    </div>
  );
}
