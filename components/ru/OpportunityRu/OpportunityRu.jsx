import { Contexts } from '@/components/Context/Context'
import Image from 'next/image'
import React, { useContext } from 'react'

function OpportunityRU() {
    const { xsNav, setXsNav } = useContext(Contexts)
    return (
        <section onClick={() => setXsNav(false)} className='mt-[680px] lg:mt-[400px] mb-[100px] md:mt-[200px] sm:mt-[120px] sm:mb-[50px] xs:mt-[50px]  xs:mb-[50px] '>
            <div className="container">
                <h2 className='text-[#CDCDCD] text-[36px] leading-[49px] font-[800] font-["Open_Sans"] md:text-[30px] md:leading-[40px] sm:text-[25px] sm:leading-[30px] xs:text-[24px] xs:leading-[32px]'>Испытайте <span className='text-[#EF2B23B2] font-[700] uppercase'>ВОЗМОЖНОСТИ <br /></span> нашего
                    приложения  <br /></h2>
            </div>
            <div className='bg-opportunityBg py-[150px] lg:py-[70px] lg:mt-[30px] mt-[40px] md:py-[55px]  sm:py-[25px] xs:mt-[100px] xs:py-[50px]'>
                <div className="container flex xs:block justify-between items-center">
                    <div className='xs:mb-[50px]'>


                        <h2 className='text-[#FFFFFF] text-[36px] leading-[36px] font-[700] font-["Open_Sans"] mb-[50px] lg:text-[30px] lg:leading-[30px] md:text-[28px] md:leading-[28px] sm:text-[24px] sm:leading-[24px] xs:text-[36px] xs:leading-[49px] '>Оплаты из России <br /> в Узбекистан</h2>
                        <p className='text-[#FFFFFF] opacity-70 text-[28px] leading-[42px] font-[400] font-["Open_Sans"] lg:text-[22px] lg:leading-[40px] md:text-[20px] md:leading-[30px] sm:text-[16px] sm:leading-[24px] xs:hidden'>- Государственные услуги и делать это без привязки к <br /> стране, то есть приложение можно использовать на <br /> территории России и Узбекистана, а оплату проводить с <br /> карты любого из этих государств. Для жителей <br /> Узбекистана, а также его нерезидентов, держателей карт <br /> узбекистанских банков, доступны выгодные денежные <br /> переводы и платежи между картами Uzcard и Humo.</p>
                        <p className='text-[#FFFFFF] opacity-70 font-[400] font-["Open_Sans"] text-[18px] leading-[27px] hidden xs:block break-normal'>- Государственные услуги и делать это без привязки к стране, то есть приложение можно использовать на территории России и Узбекистана, а оплату проводить с карты любого из этих государств. Для жителей  Узбекистана, а также его нерезидентов, держателей карт узбекистанских банков, доступны выгодные денежные  переводы и платежи между картами Uzcard и Humo.</p>
                    </div>
                    <div className=''>
                        <Image
                            width={326}
                            height={660}
                            src={'/images/iPhone 12 Pro 1.png'}
                            className='lg:w-[300px]'
                            alt='rasm'

                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OpportunityRU