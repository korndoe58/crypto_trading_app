import Image from "next/image";

export default function News() {
  const featuredProducts = [
    {
      id: 1,
      title: "Bitcoin Slips Below $27K",
      desc: `While Bitcoin (BTC) continues its trend of avoiding losses in September, a slight retreat before a potential federal government shutdown could threaten the gains made this month.`,
      img: "/p1.jpg",
      price: 249,
      
    },
    {
        id: 2,
        title: "Bitcoin Slips Below $27K",
        desc: `While Bitcoin (BTC) continues its trend of avoiding losses in September, a slight retreat before a potential federal government shutdown could threaten the gains made this month.`,
        img: "/p1.jpg",
        price: 249,
        
    },
    { 
      id: 3,
      title: "Bitcoin Slips Below $27K",
      desc: `While Bitcoin (BTC) continues its trend of avoiding losses in September, a slight retreat before a potential federal government shutdown could threaten the gains made this month.`,
      img: "/p1.jpg",
      price: 249,
      
    },  
    {
      id: 4,
      title: "Bitcoin Slips Below $27K",
      desc: `While Bitcoin (BTC) continues its trend of avoiding losses in September, a slight retreat before a potential federal government shutdown could threaten the gains made this month.`,
      img: "/p1.jpg",
      price: 2999,
        
    },
    {
      id: 5,
      title: "Bitcoin Slips Below $27K",
      desc: `While Bitcoin (BTC) continues its trend of avoiding losses in September, a slight retreat before a potential federal government shutdown could threaten the gains made this month.`,
      img: "/p1.jpg",
      price: 149,
        
    },  
  
  
  ];
    return <div className="w-screen overflow-x-scroll text-black">
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* SINGLE ITEM */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className=" w-screen h-[50vh] flex flex-col items-center justify-around p-4 backdrop-blur-sm bg-white/10 hover:bg-white/40 transition-all duration-300 md:w-[50vw]  xl:w-[33vw] xl:h-[60vh] cursor-pointer"
          >
            {/* IMAGE CONTAINER */}
            {item.img && (
              <div className="relative flex-1 w-full hover:w-[110%] transition-all duration-500">
                <Image src={item.img} alt="" fill className="object-contain" />
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className=" flex-1  flex flex-col items-center justify-center text-center gap-4">
              <h1 className="text-2xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{item.title}</h1>
              <p className="p-4  2xl:p-8">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  }