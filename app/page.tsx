import { AiFillCheckCircle, AiOutlineMenu } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import Menu from "./components/Menu";
import Image from "next/image";

export default function Home() {
  return (
    <div className='h-full w-full flex justify-center'>
      <Menu />
      <div className="w-full md:w-[40rem] flex flex-col items-center p-8 gap-8">
        <div className="w-full flex items-center justify-between text-primarry text-center">
          <div>Filtres</div>
          <AiOutlineMenu 
          className="cursor-pointer"
          />
        </div>
        <div className="w-full border-2 border-primarry p-4 grid place-items-center">
          <Image 
          src={'/images/placeholder.jpg'}
          alt="Placeholder"
          width={500}
          height={500}
          objectFit="contain"
          className="rounded-full"
          />
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="w-10 h-10 rounded-full grid place-items-center text-red-500">
            <MdCancel 
            size={50}
            />
          </div>
          <div className="w-10 h-10 rounded-full grid place-items-center text-green-700">
            <AiFillCheckCircle 
            size={50}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
