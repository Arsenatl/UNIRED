import React from 'react'
import { link } from './MoneyTransfersLink'
import Image from 'next/image'

function MoneyTransfers() {
  return (
    <section className='mt-[150px] lg:my-[100px] mb-[201px] md:my-[60px]'>
        <div className="container">
            <div>
                <h2 className='text-[24px] leading-[33px] font-[700] tracking-wider opacity-30 font-["Open_Sans"] lg:text-[20px] lg:leading-[30px] md:text-[17px] md:leading-[20px]'>PUL O’TKAZMALARI</h2>
                <h2 className='text-[72px] leading-[98px] font-[700] mt-[20px] mb-[60px] font-["Open_Sans"] lg:text-[60px] lg:leading-[85px] md:text-[50px] md:leading-[80px] md:mb-[40px]'>Rossiyadan O'zbekistonga pul <br /> o'tkazmalari</h2>
            </div>
            <div className="flex items-center justify-between">
                <div className='grid grid-cols-[repeat(2,358px)] gap-[30px] lg:grid-cols-[repeat(2,250px)] md:lg:grid-cols-[repeat(2,150px)]'>
                    {
                        link?.map((element,value)=>{
                            return(
                                <div key={value} className='hover:shadow-[0px_20px_20px_5px_rgba(0,0,0,0.05)] duration-200 cursor-pointer h-[274px] lg:h-[200px] md:h-[150px] flex items-center justify-center border-[2px] border-[#F6F7FC] rounded-[10px]'>
                                    <div>

                                    <h2 className='text-[#091A42] text-[28px] leading-[38px] font-[700] font-["Open_Sans"] lg:text-[25px] lg:leading-[30px]'>{element.logo}</h2>
                                    <p className='text-[#596484] text-[18px] leading-[32px] font-[600] font-["Open_Sans"] lg:text-[16px] lg:leading-[29px]'>{element.content} <br />{element.contentOne} <br /> {element.contentTwo}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <Image
                    width={475}
                    height={382}
                    alt='visa card'
                    src={'/images/Rectangle 216.png'}
                    className='lg:w-[300px]'
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default MoneyTransfers