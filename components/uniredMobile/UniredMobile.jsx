import Image from 'next/image'
import React from 'react'

function UniredMobile() {
    return (
        <section className=' mt-[-281px] pt-[281px] pb-[400px] bg-[#F2F2F2] md:pb-[220px]'>
            <div className="container relative mt-[67px]">
                
                <div className="flex justify-center lg:justify-start md:justify-start">
                    <div className='text-[#1C1C1C]'>
                        <h2 className='text-[24px] leading-[33px] font-[700] tracking-wider opacity-30 font-["Open_Sans"] lg:text-[20px] lg:leading-[30px] md:text-[17px] md:leading-[20px] xs:text-[14px] xs:leading-[19px]'>BIZ HAQIMIZDA</h2>
                        <h2 className='text-[72px] leading-[98px] font-[700] mt-[20px] mb-[60px] font-["Open_Sans"] lg:text-[68px] lg:leading-[90px] md:text-[55px] md:leading-[80px] md:mb-[30px] xs:text-[36px] xs:leading-[49px] xs:mt-[5px] xs:mb-[30px]'>Unired Mobile</h2>
                        <p className='text-[28px] leading-[38px] opacity-70 font-["Open_Sans"] lg:text-[24px] lg:leading-[30px] md:text-[20px] md:leading-[26px]'>Rossiyaning istalgan kartalaridan O'zbekiston kartalariga <br /> komissiyasiz pul o'tkazmalarini va to'lovlarni amalga oshirish <br /> imkoniyatini beruvchi tizim. <br /> <br />

                            Rossiyaning istalgan kartalaridan O'zbekiston milliy kartalari <br /> Uzcard va HUMO kartalariga komissiyasiz pul o'tkazmalarini va <br /> to'lovlarini Unired Mobile ilovasi orqali amalga oshirish mumkin.</p>
                    </div>
                    <div className='absolute top-[100px] left-[100px]  lg:top-[100px] lg:left-[20px] md:top-[160px] md:left-[20px] xs:hidden'>
                        <Image
                        width={1500}
                        height={1000}
                        alt='unired mobile'
                        src={'/images/Group 2205 (1).svg'}
                        className='lg:w-[1100px] lg:h-[700px] md:w-[800px] md:h-[400px]'
                        />
                    </div>
                    <div className='hidden xs:block'>
                    <Image
                        width={570}
                        height={200}
                        alt='unired mobile'
                        src={'/images/Group 2205uniredmobile.svg'}
                        />
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default UniredMobile