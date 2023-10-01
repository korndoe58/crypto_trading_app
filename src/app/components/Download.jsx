import Image from "next/image"

export default function Download() {
    return <div className=" w-full h-[50vh] p-4 md:px-20 md:h-[35vh] lg:px-30 xl:px-40   ">
        {/* wrapper */}
        <div className=" w-full h-full p-4 flex flex-col justify-around items-start backdrop-blur-sm bg-white/10 rounded-lg md:p-10 md:gap-4">
            {/* text container */}
            <div className="flex flex-col gap-6">
                <h1 className="text-3xl font-bold">Download Now</h1>
                <p className="text-base">Obtain the most sophisticated trading platform for cryptocurrencies on your device.</p>
            </div>
            {/* button */}
            <div className=" flex flex-col items-start gap-2 md:gap-4">
                <button><Image src={'/appbutton.png'} alt='logo' width={150} height={50} /></button>
                <button><Image src={'/gbutton.png'} alt='logo' width={150} height={100} /></button>
            </div>
        </div>
    </div>
  }