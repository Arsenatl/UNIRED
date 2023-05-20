import { Contexts } from '@/components/Context/Context'
import Image from 'next/image'
import React, { useContext } from 'react'

function HeaderPhoneRuXs() {
    const { xsNav, setXsNav } = useContext(Contexts)
  return (
    <div onClick={() => setXsNav(false)} className='container'>
        <div>
            <Image
            width={600}
            height={600}
            src={'/images/Group 2194.svg'}
            />
        </div>
        <div className='my-[40px]'>
            <Image
            width={600}
            height={600}
            src={'/images/Group 2196.svg'}
            />
        </div>
        <div className='flex items-center gap-[50px] justify-center'>
        <Image
          width={36}
          height={36}
          alt='facebook'
          src={'images/facebook.svg'}
          className='md:w-[25px] sm:w-[20px]'
        />
        <Image
          width={36}
          height={36}
          alt='facebook'
          src={'images/instagram.svg'}
          className='md:w-[25px] sm:w-[20px]'
        />
        <Image
          width={36}
          height={36}
          alt='facebook'
          src={'images/telegram 1.svg'}
          className='md:w-[25px] sm:w-[20px]'
        />
      </div>
    </div>
  )
}

export default HeaderPhoneRuXs