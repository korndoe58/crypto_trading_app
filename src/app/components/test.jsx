
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
    
    return <main className=' w-full p-4 py-10 text-black flex flex-col justify-center items-center md:px-20  '>
        {/* container */}
        <div className=' p-4  w-full rounded-xl flex flex-col gap-4 backdrop-blur-sm bg-white/10 md:p-10  '>
            {/* Text container */}
            <div className=' flex flex-col gap-4 '>
                <h2 className=' text-lg font-bold md:text-xl'>Market trends</h2>
                <div className=' flex gap-3 '>
                    <button className=' px-2 py-1 rounded-xl text-white bg-[#814dea] '>Spot</button>
                    <button className=' px-2 py-1 rounded-xl text-black  backdrop-blur-sm bg-white/10 '>Derivatives</button>
                </div>
            </div>
            {/*  market data */}
            <table  className="table-fixed text-left  ">
              <thead >
                <tr  >
                  <th className='hidden md:table-cell text-left p-3 backdrop-blur-sm bg-white/10 '>NAME</th>
                  <th className='hidden md:table-cell text-right backdrop-blur-sm bg-white/10'>PRICE</th>
                  <th className='hidden md:table-cell text-right backdrop-blur-sm bg-white/10'>24H CHANGE</th>
                  <th className='hidden md:table-cell text-right backdrop-blur-sm bg-white/10'>24H VOLUME</th>
                  <th className='hidden md:table-cell text-right backdrop-blur-sm bg-white/10 '></th>
                </tr>
              </thead>
              
              <tbody>
                {items.map((item)=>(
                <tr  key={item.id}>
                  <td className='py-4 border-b-[1px]'>{item.name}</td>
                  <td className='text-right border-b-[1px]' >${item.quote.USD.price.toFixed(2)}</td>
                  <td
                  className='text-right border-b-[1px]'
                  style={{
                    color: item.quote.USD.percent_change_24h >=0 ? "green" : "red",
                  }}
                  >{item.quote.USD.percent_change_24h.toFixed(2)}%</td>
                  <td className='hidden md:table-cell text-right border-b-[1px]'>{item.quote.USD.volume_24h.toFixed(0)}</td>
                  <td className='hidden md:table-cell text-xs text-right border-b-[1px]'><button className='p-3 py-2  rounded-lg text-white bg-[#814dea]'>TRADE NOW</button></td>
                </tr>
                ))}
              </tbody>
              
            </table>
            
        </div>
    </main>
   
        
    
  }