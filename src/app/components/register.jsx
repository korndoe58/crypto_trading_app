

export default function Register() {
    return <div className="  text-black w-full h-[50vh] p-4 flex flex-col justify-around md:px-20 md:h-[30vh] ">
        
        {/* text container */}
        <div className="flex flex-col gap-4" >
            <h1 className=" text-3xl font-bold ">A Platform for Crypto Derivative Traders</h1>
            <p className="text-base">KDCOIN users can confidently engage in trading, assured of the safety of their funds and equipped with the necessary products and tools essential for maximizing profitability.</p>
        </div>
        {/* register form */}
        <div className=" flex flex-col w-full gap-2 md:flex-row ">
            <input className=" p-2 ring-1 ring-blue-100 rounded md:flex-1  " type="email" placeholder="Your email address " />
            <button className="bg-[#814dea] text-[#ffffff] p-2 rounded md:flex-2">Register</button>
        </div>
        {/* div */}
        <div className="hidden lg:block"></div>
    </div>
  }