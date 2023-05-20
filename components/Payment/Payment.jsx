import Image from 'next/image'
import React from 'react'

function Payment() {
    return (
        <section>
            <div className="container relative">
                <div className='text-[#1C1C1C] text-end'>
                    <h2 className='text-[24px] leading-[33px] font-[700] tracking-wider opacity-30 font-["Open_Sans"] lg:text-[20px] lg:leading-[30px]'>TO’LOVLAR</h2>
                    <h2 className='text-[72px] leading-[98px] font-[700] mt-[20px] mb-[60px] font-["Open_Sans"] lg:text-[60px] lg:leading-[70px]'>Rossiyadan O'zbekistonga <br /> to’lovlar</h2>
                    <p className='text-[28px] leading-[38px] opacity-70 font-[700] font-["Open_Sans"] lg:text-[24px] lg:leading-[32px]'>Mobil aloqa operatorlari</p>
                    <p className='text-[28px] leading-[38px] opacity-70 font-[700] font-["Open_Sans"] lg:text-[24px] lg:leading-[32px]'>Internet</p>
                    <p className='text-[28px] leading-[38px] opacity-70 font-[700] font-["Open_Sans"] lg:text-[24px] lg:leading-[32px]'>Taksi hizmati</p>
                    <p className='text-[28px] leading-[38px] opacity-70 font-[700] font-["Open_Sans"] lg:text-[24px] lg:leading-[32px]'>Kommunal to’lovalar</p>
                </div>
                <div className='absolute top-[100px] left-0'>
                    <Image
                        width={1500}
                        height={1000}
                        src={'/images/Group 2208.svg'}
                        alt='rasm'
                    />
                </div>
            </div>
        </section>
    )
}

export default Payment