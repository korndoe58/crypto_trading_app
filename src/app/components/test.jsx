
import React from 'react'

async function getData() {
    const res = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=5',{
        headers: {
          'X-CMC_PRO_API_KEY': 'fa8ec470-d879-4818-89f9-6e3377998de8',
        },
      } )
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }


  export default async function Page() {
    const data = await getData()
    const items = data.data;
    
    return <main className=' w-full p-4 py-10 text-black flex flex-col justify-center items-center  '>
        {/* container */}
        <div className=' p-4  w-full rounded-xl flex flex-col gap-4 backdrop-blur-sm bg-white/10 '>
            {/* Text container */}
            <div className=' flex flex-col gap-4 '>
                <h2 className=' text-lg font-bold'>Market trends</h2>
                <div className=' flex gap-3 '>
                    <button className=' px-2 py-1 rounded-xl text-white bg-[#814dea] '>Spot</button>
                    <button className=' px-2 py-1 rounded-xl text-white bg-[#814dea]'>Derivatives</button>
                </div>
            </div>
            {/*  market data */}
            <div className=''>
                {items.map((item)=>(
                <div className=' border-b-[1px]  py-3  flex justify-between items-center  ' key={item.id}>
                    <span className=' font-bold'>{item.name}</span>
                    {/* price/24hchange */}
                    <div className=' flex flex-col text-xs items-end '>
                        <span >${item.quote.USD.price.toFixed(2)}</span>
                        <span 
                        style={{
                            color: item.quote.USD.percent_change_24h >= 0 ? "#90EE90" : "#FB4346",
                          }}
                        >{item.quote.USD.percent_change_24h.toFixed(2)}%</span>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </main>
   
        
    
  }