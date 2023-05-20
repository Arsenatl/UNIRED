import Image from 'next/image'
import React from 'react'

function OpportunityRU() {
    return (
        <section className='mt-[680px] lg:mt-[400px] mb-[100px]'>
            <div className="container">
                <h2 className='text-[#CDCDCD] text-[36px] leading-[49px] font-[800] font-["Open_Sans"]'>Испытайте <span className='text-[#EF2B23B2] font-[700] uppercase'>ВОЗМОЖНОСТИ <br /></span> нашего
приложения  <br /></h2>
            </div>
            <div className='bg-opportunityBg py-[150px] lg:py-[70px] lg:mt-[30px] mt-[40px]'>
                <div className="container flex justify-between items-center">
                    <div>


                    <h2 className='text-[#FFFFFF] text-[36px] leading-[36px] font-[700] font-["Open_Sans"] mb-[50px] lg:text-[30px] lg:leading-[30px]'>Оплаты из России <br /> в Узбекистан</h2>
                    <p className='text-[#FFFFFF] opacity-70 text-[28px] leading-[42px] font-[400] font-["Open_Sans"] lg:text-[22px] lg:leading-[40px]'>- Государственные услуги и делать это без привязки к <br /> стране, то есть приложение можно использовать на <br /> территории России и Узбекистана, а оплату проводить с <br /> карты любого из этих государств. Для жителей <br /> Узбекистана, а также его нерезидентов, держателей карт <br /> узбекистанских банков, доступны выгодные денежные <br /> переводы и платежи между картами Uzcard и Humo.</p>
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

export default OpportunityRU