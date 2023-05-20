import Image from 'next/image'

function HeaderPhoneRu() {
  

  return (
    <div  className='relative xs:hidden'>

      <div className="container flex justify-center items-center">

        <Image
          width={1150}
          height={900}
          alt='iphone'
          src={'/images/Group 2209.svg'}
          className='lg:w-[900px] md:w-[500px] sm:w-[400px]'
        />

      </div>
      <div className='flex flex-col gap-[40px] absolute bottom-[250px] md:bottom-[100px] left-[20px] sm:gap-[20px] sm:bottom-[80px]'>
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

export default HeaderPhoneRu