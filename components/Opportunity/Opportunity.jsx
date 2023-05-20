import Image from 'next/image'
import React from 'react'

function Opportunity() {
    return (
        <section className='mt-[680px] lg:mt-[400px] mb-[100px]'>
            <div className="container">
                <h2 className='text-[#CDCDCD] text-[36px] leading-[49px] font-[800] font-["Open_Sans"]'>Ilovamizning <span className='text-[#EF2B23B2] font-[700] uppercase'>imkoniyatlarini</span> <br />
                    sinab ko'ring</h2>
            </div>
            <div className='bg-opportunityBg py-[150px] lg:py-[70px] lg:mt-[30px] mt-[40px]'>
                <div className="container flex justify-between items-center">
                    <div>


                    <h2 className='text-[#FFFFFF] text-[36px] leading-[36px] font-[700] font-["Open_Sans"] mb-[50px] lg:text-[30px] lg:leading-[30px]'>Turli xil servislarga <br />
                        To’lovlar</h2>
                    <p className='text-[#FFFFFF] opacity-70 text-[28px] leading-[42px] font-[400] font-["Open_Sans"] lg:text-[22px] lg:leading-[40px]'>- Davlat xizmatlari uchun to‘lovlarni amalga oshirish va buni mamlakatga <br /> bog‘liq bo‘lmagan holda bajarish mumkin. Yana ham aniqrog‘i, ilovadan <br /> Rossiya va O‘zbekiston hududida foydalanish, to‘lovni esa ushbu <br /> davlatlarning istalgan kartasidan amalga oshirish mumkin. O‘zbekiston <br /> rezidentlari, shuningdek, uning norezidentlari, O‘zbekiston banklari <br /> kartalarining egalari foydali pul o‘tkazmalari hamda Uzcard va Humo <br /> kartalari o‘rtasida to‘lovlarni amalga oshirish imkoniga ega.</p>
                    </div>
                    <div>
                        <Image
                        width={326}
                        height={660}
                        src={'/images/iPhone 12 Pro 1.png'}
                        className='lg:w-[300px]'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Opportunity