import { Contexts } from '@/components/Context/Context'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'

function FooterRu() {
  const { xsNav, setXsNav } = useContext(Contexts)
  return (
    <footer onClick={() => setXsNav(false)} className='bg-[#1C1C1C] py-[50px] sm:py-[20px] xs:py-[40px]'>
      <div className="container text-center text-[#F5F5F5]">
        <h3 className='text-[#F5F5F5] text-[24px] font-[600] leading-[43px] font-["Open_sans"] lg:text-[20px] lg:leading-[35px] sm:text-[18px] sm:leading-[30px] xs:text-[24px] xs:leading-[43px] '>Следите за нами в социальных сетях</h3>
        <div className="flex xs:block items-center justify-center gap-[81px] my-[30px] sm:gap-[35px]">
          <div className="flex flex-col gap-[50px] xs:gap-[35px] xs:mb-[60px]">
            <div className='flex items-center gap-[50px] lg:gap-[35px] xs:justify-center'>
              <Link href={''}>
                <Image
                  width={36}
                  height={36}
                  src={'/images/global.svg'}
                  className='lg:w-[30px] sm:w-[32px]'
                  alt='rasm'

                />
              </Link>
              <Link href={''}>
                <Image
                  width={36}
                  height={36}
                  src={'/images/facebook1.svg'}
                  className='lg:w-[30px] sm:w-[32px]'
                  alt='rasm'

                />
              </Link>
              <Link href={''}>
                <Image
                  width={36}
                  height={36}
                  src={'/images/instagram1.svg'}
                  className='lg:w-[30px] sm:w-[32px]'
                  alt='rasm'

                />
              </Link>
              <Link href={''}>
                <Image
                  width={36}
                  height={36}
                  src={'/images/telegram 1 (1).svg'}
                  className='lg:w-[30px] sm:w-[32px]'
                  alt='rasm'

                />
              </Link>
            </div>
            <Link href={'+998 71 200-11-10'} className='text-[#F5F5F5] text-[24px] leading-[43px] font-[600] lg:text-[20px] lg:leading-[35px] sm:text-[17px] sm:leading-[30px] xs:text-[24px] xs:leading-[43px]'>+998 71 200-11-10</Link>
          </div>
          <Image
            width={250}
            height={145}
            src={'/images/unired mobile.svg'}
            alt='rasm'
            className='xs:mx-auto'
          />
        </div>
        <div className='text-start flex justify-center mb-[30px]'>

          <p className='text-[#F5F5F5] text-[18px] leading-[27px] font-[400] lg:text-[15px] lg:leading-[22px] sm:text-[14px] sm:leading-[20px] xs:text-[16px] xs:leading-[24px]'>©2019 "Универсалбанк" лицензия АТБ от 14.07.2018 №68. в<br /> <br />

            Валютные операции Министерства иностранных дел Республики Узбекистан на 27 июня 2015 года Сделай это<br />Генеральная лицензия № 77 выдана на</p>
        </div>
        <p className='text-[#F5F5F5] text-[18px] leading-[27px] font-[400] lg:text-[15px] lg:leading-[22px] sm:text-[13px] sm:leading-[20px] xs:text-[15px] xs:leading-[18px] xs:font-[600]'>© 2021. Все права защищены.  </p>
      </div>
    </footer>
  )
}

export default FooterRu