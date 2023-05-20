import { Contexts } from '@/components/Context/Context'
import Image from 'next/image'
import React, { useContext } from 'react'

function UniredMobileRu() {
    const{xsNav,setXsNav}=useContext(Contexts)
    return (
        <section onClick={()=>setXsNav(false)} className=' mt-[-281px] pt-[281px] pb-[400px] bg-[#F2F2F2] md:pb-[220px] sm:pb-[20px] xs:pb-[50px]'>
            <div className="container relative z-10 mt-[67px] ">

                <div className="flex justify-center w-max xs:w-full lg:justify-start md:justify-start">
                    <div className='text-[#1C1C1C] pr-[65px] md:pr-[100px]  '>
                        <h2 className='text-[24px] leading-[33px] font-[700] tracking-wider opacity-30 font-["Open_Sans"] lg:text-[20px] lg:leading-[30px] md:text-[17px] md:leading-[20px] sm:text-[15px] xs:text-[14px] xs:leading-[19px]'>О НАС</h2>
                        <h2 className='text-[72px] leading-[98px] font-[700] mt-[20px] mb-[60px] font-["Open_Sans"] lg:text-[68px] lg:leading-[90px] md:text-[55px] md:leading-[80px] md:mb-[30px] sm:text-[45px] sm:leading-[60px] sm:my-[20px] xs:text-[36px] xs:leading-[49px] xs:mt-[5px] xs:mb-[30px]'>Unired Mobile</h2>
                        <p className='text-[28px] leading-[38px] opacity-70 font-["Open_Sans"] lg:text-[24px] lg:leading-[30px] md:text-[20px] md:leading-[26px] sm:text-[16px] sm:leading-[22px] xs:text-[16px] xs:leading-[20px]'>Система, позволяющая осуществлять переводы и платежи с <br /> любой карты России и Узбекистана (Uzcard и Humo) без комиссии.<br /><br />Регистрация в приложении проста и не занимает много времени. <br /> Высокий уровень безопасности приложения гаранатирует <br /> надежность  и сохранность денежных средств пользователя.</p>
                    </div>
                    <div className='absolute xs:hidden sm:hidden top-[100px] left-[100px]  lg:top-[100px] lg:left-[20px] md:top-[160px] md:left-[80px] sm:top-[200px] sm:left-[0px]'>
                        <Image
                            width={1500}
                            height={1000}
                            alt='unired mobile'
                            src={'/images/Group 2205 (1).svg'}
                            className='lg:w-[1100px] lg:h-[700px] md:w-[800px] md:h-[400px]'
                        />
                    </div>
                </div>
                    <div className='hidden sm:block xs:block mt-[20px]'>
                    <Image
                            width={500}
                            height={100}
                            alt='unired mobile'
                            src={'/images/Group 2205uniredmobile.svg'}
                            
                        />
                    </div>

            </div>
        </section>
    )
}

export default UniredMobileRu