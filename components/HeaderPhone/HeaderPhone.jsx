import Image from 'next/image'
import React from 'react'

function HeaderPhone() {
  return (
    <div className='relative'>

      <div className="container flex justify-center items-center">

        <Image
          width={1150}
          height={900}
          alt='iphone'
          src={'/images/Group 2209.svg'}
          className='lg:w-[900px] md:w-[500px]'
        />

      </div>
      <div className='flex flex-col gap-[40px] absolute bottom-[250px] md:bottom-[100px] left-[20px]'>
              <Image
                width={36}
                height={36}
                alt='facebook'
                src={'images/facebook.svg'}
                className='md:w-[25px]'
              />
              <Image
                width={36}
                height={36}
                alt='facebook'
                src={'images/instagram.svg'}
                className='md:w-[25px]'
              />
              <Image
                width={36}
                height={36}
                alt='facebook'
                src={'images/telegram 1.svg'}
                className='md:w-[25px]'
              />
            </div>
    </div>
  )
}

export default HeaderPhone