import Image from 'next/image'
import React from 'react'

function UniredMobileRu() {
    return (
        <section className=' mt-[-281px] pt-[281px] pb-[400px] bg-[#F2F2F2] md:pb-[220px]'>
            <div className="container relative mt-[67px]">

                <div className="flex justify-center lg:justify-start md:justify-start">
                    <div className='text-[#1C1C1C] pr-[65px]'>
                        <h2 className='text-[24px] leading-[33px] font-[700] tracking-wider opacity-30 font-["Open_Sans"] lg:text-[20px] lg:leading-[30px] md:text-[17px] md:leading-[20px]'>О НАС</h2>
                        <h2 className='text-[72px] leading-[98px] font-[700] mt-[20px] mb-[60px] font-["Open_Sans"] lg:text-[68px] lg:leading-[90px] md:text-[55px] md:leading-[80px] md:mb-[30px]'>Unired Mobile</h2>
                        <p className='text-[28px] leading-[38px] opacity-70 font-["Open_Sans"] lg:text-[24px] lg:leading-[30px] md:text-[20px] md:leading-[26px]'>Система, позволяющая осуществлять переводы и платежи с <br /> любой карты России и Узбекистана (Uzcard и Humo) без комиссии.<br /><br />Регистрация в приложении проста и не занимает много времени. <br /> Высокий уровень безопасности приложения гаранатирует надежность <br /> и сохранность денежных средств <br />пользователя.</p>
                    </div>
                    <div className='absolute top-[100px] left-[100px]  lg:top-[100px] lg:left-[20px] md:top-[160px] md:left-[20px]'>
                        <Image
                            width={1500}
                            height={1000}
                            alt='unired mobile'
                            src={'/images/Group 2205 (1).svg'}
                            className='lg:w-[1100px] lg:h-[700px] md:w-[800px] md:h-[400px]'
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default UniredMobileRu