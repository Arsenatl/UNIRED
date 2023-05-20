import React, { useContext } from 'react'
import { link } from './MoneyTransfersLinkRu'
import Image from 'next/image'
import { Contexts } from '@/components/Context/Context'

function MoneyTransfersRu() {
    const{xsNav,setXsNav}=useContext(Contexts)
  return (
    <section onClick={()=>setXsNav(false)} className='mt-[150px] lg:my-[100px] mb-[201px] md:my-[60px] sm:my-[20px] xs:mt-[50px] xs:mb-[100px]'>
        <div className="container">
            <div>
                <h2 className='text-[24px] leading-[33px] font-[700] tracking-wider opacity-30 font-["Open_Sans"] lg:text-[20px] lg:leading-[30px] md:text-[17px] md:leading-[20px] sm:text-[14px] sm:leading-[18px] xs:text-[14px] xs:leading-[19px]'>Денежные переводы</h2>
                <h2 className='text-[72px] leading-[98px] font-[700] mt-[20px] mb-[60px] font-["Open_Sans"] lg:text-[60px] lg:leading-[85px] md:text-[50px] md:leading-[80px] md:mb-[40px] sm:text-[34px] sm:leading-[70px] sm:my-[20px]  xs:text-[36px] xs:leading-[49px] xs:mt-[5px] xs:mb-[50px]'>Денежные переводы из России в Узбекистан</h2>
            </div>
            <div className="flex items-center justify-between md:justify-center sm:justify-center xs:block">
                <div className='grid grid-cols-[repeat(2,358px)] gap-[30px] lg:grid-cols-[repeat(2,250px)] md:grid-cols-[repeat(2,300px)] sm:grid-cols-[repeat(2,230px)] xs:grid-cols-[repeat(1,1fr)]'>
                    {
                        link?.map((element,value)=>{
                            return(
                                <div key={value} className='hover:shadow-[0px_20px_20px_5px_rgba(0,0,0,0.05)] duration-200 cursor-pointer h-[274px] sm:h-[150px] lg:h-[200px] md:h-[150px] flex items-center justify-center border-[2px] border-[#F6F7FC] rounded-[10px] xs:h-[244px]'>
                                    <div>

                                    <h2 className='text-[#091A42] text-[28px] leading-[38px] font-[700] font-["Open_Sans"] lg:text-[25px] lg:leading-[30px] md:text-[22px] md:leading-[25px] sm:text-[20px] sm:leading-[24px] xs:text-[28px] xs:leading-[38px] xs:text-[#091A42]'>{element.logo}</h2>
                                    <p className='text-[#596484] text-[18px] leading-[32px] font-[600] font-["Open_Sans"] lg:text-[16px] lg:leading-[29px] md:text-[14px] md:leading-[22px] sm:text-[12px] sm:leading-[22px] xs:text-[18px] xs:leading-[32px] xs:text-[#596484]'>{element.content} <br />{element.contentOne} <br /> {element.contentTwo}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='md:hidden sm:hidden xs:hidden'>
                    <Image
                    width={475}
                    height={382}
                    alt='visa card'
                    src={'/images/Rectangle 216.png'}
                    className='lg:w-[300px]'
                    />
                </div>
            </div>
            <div className='hidden md:flex sm:flex xs:flex xs:mt-[30px] justify-center'>
                    <Image
                    width={400}
                    height={100}
                    alt='visa card'
                    src={'/images/Rectangle 216.png'}
                    className='lg:w-[300px] xs:w-full'
                    />
                </div>
        </div>
    </section>
  )
}

export default MoneyTransfersRu