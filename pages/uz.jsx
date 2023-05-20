import React from 'react'
import Nav from '@/components/Nav/Nav'
import UniredMobile from '@/components/uniredMobile/UniredMobile'
import MoneyTransfers from '@/components/MoneyTransfers/MoneyTransfers'
import HeaderPhone from '@/components/HeaderPhone/HeaderPhone'
import Payment from '@/components/Payment/Payment'
import Opportunity from '@/components/Opportunity/Opportunity'
import Footer from '@/components/Footer/Footer'

function uz() {
  return (
    <>
    <header className='bg-headerBg relative z-10'>
        <Nav />
        <div className="container text-center mt-[130px] lg:mt-[100px] md:mt-[80px]">
          <h1 className='text-[#F5F5F5] text-[96px] leading-[131px] font-[700] font-["Open_Sans"] lg:text-[90px] lg:leading-[120px] md:text-[70px] md:leading-[100px]'>Unired - qulaylik va ishonch sizning hamkoringiz!</h1>
          <p className='text-[#F5F5F5] text-[28px] leading-[43px] font-[600] mt-[50px] mb-[103px] opacity-70 font-["Open_Sans"] lg:text-[25px] lg:leading-[39px] md:text-[20px] md:leading-[30px] md:mt-[30px] md:mb-[70px]'>Rossiyadan O'zbekistonga pul qulay va oson o'tkazmalarini amalga <br /> oshirish uchun shunchaki bizning ilovani yulab oling.</p>
        </div>
          <HeaderPhone/>
      </header>
      <UniredMobile />
      <MoneyTransfers/>
      <Payment/>
      <Opportunity/>
      <Footer/>
    </>
  )
}

export default uz