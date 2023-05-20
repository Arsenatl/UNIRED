import { Contexts } from '@/components/Context/Context'
import Image from 'next/image'
import React, { useContext } from 'react'

function PaymentRu() {
    const { xsNav, setXsNav } = useContext(Contexts)
    return (
        <section onClick={() => setXsNav(false)}>
            <div className="container relative">
                <div className='text-[#1C1C1C] text-end xs:text-start'>
                    <h2 className='text-[24px] leading-[33px] font-[700] tracking-wider opacity-30 font-["Open_Sans"] lg:text-[20px] lg:leading-[30px] md:text-[16px] md:leading-[25px] sm:text-[14px] sm:leading-[22px] xs:text-[14px] xs:leading-[19px] xs:mt-[5px] xs:mb-[30px]'>ПЛАТЕЖИ</h2>
                    <h2 className='text-[72px] leading-[98px] font-[700] mt-[20px] mb-[60px] font-["Open_Sans"] lg:text-[60px] lg:leading-[70px] md:text-[50px] md:leading-[60px] sm:text-[38px] sm:leading-[50px] sm:my-[20px] xs:text-[36px] xs:leading-[49px]'>Платежи из России <br /> в Узбекистан</h2>
                    <div className='xs:hidden'>
                        <p className='text-[28px] leading-[38px] opacity-70 font-[700] font-["Open_Sans"] lg:text-[24px] lg:leading-[32px] md:text-[20px] md:leading-[26px] sm:text-[16px] sm:leading-[22px]'>Операторы мобильной связи</p>
                        <p className='text-[28px] leading-[38px] opacity-70 font-[700] font-["Open_Sans"] lg:text-[24px] lg:leading-[32px] md:text-[20px] md:leading-[26px] sm:text-[16px] sm:leading-[22px]'>Интернет</p>
                        <p className='text-[28px] leading-[38px] opacity-70 font-[700] font-["Open_Sans"] lg:text-[24px] lg:leading-[32px] md:text-[20px] md:leading-[26px] sm:text-[16px] sm:leading-[22px]'>Служба такси</p>
                        <p className='text-[28px] leading-[38px] opacity-70 font-[700] font-["Open_Sans"] lg:text-[24px] lg:leading-[32px] md:text-[20px] md:leading-[26px] sm:text-[16px] sm:leading-[22px]'>Коммунальные платежи</p>
                    </div>
                    <div className='hidden xs:block pl-[20px]'>
                        <ul className='list-disc flex flex-col gap-[20px]'>
                            <li className='text-[#1C1C1C] text-[24px] leading-[32px] font-[700] font-["Open_Sans"] opacity-70'>Операторы мобильной связи</li>
                            <li className='text-[#1C1C1C] text-[24px] leading-[32px] font-[700] font-["Open_Sans"] opacity-70'>Интернет</li>
                            <li className='text-[#1C1C1C] text-[24px] leading-[32px] font-[700] font-["Open_Sans"] opacity-70'>Служба такси</li>
                            <li className='text-[#1C1C1C] text-[24px] leading-[32px] font-[700] font-["Open_Sans"] opacity-70' >Операторы мобильной связи</li>
                            <li className='text-[#1C1C1C] text-[24px] leading-[32px] font-[700] font-["Open_Sans"] opacity-70'>Коммунальные платежи</li>
                        </ul>
                    </div>
                </div>
                <div className='absolute top-[100px] left-0 sm:top-[75px] xs:hidden'>
                    <Image
                        width={1500}
                        height={1000}
                        src={'/images/Group 2208.svg'}
                        alt='a'
                        className='md:w-[700px] sm:w-[500px]'
                    />
                </div>
            </div>
            <div className='hidden xs:block mt-[30px]'>
                <Image
                    width={500}
                    height={500}
                    src={'/images/Снимок экрана 2023-05-20 161834.png'}
                    alt='a'
                />
            </div>
        </section>
    )
}

export default PaymentRu












