import { Contexts } from '@/components/Context/Context'
import FooterRu from '@/components/ru/FooterRu/FooterRu'
import HeaderPhoneRu from '@/components/ru/HeaderPhoneRu/HeaderPhoneRu'
import HeaderPhoneRuXs from '@/components/ru/HeaderPhoneRuXs/HeaderPhoneRuXs'
import MoneyTransfersRu from '@/components/ru/MoneyTransfersRu/MoneyTransfersRu'
import NavRu from '@/components/ru/NavRu/NavRu'
import OpportunityRU from '@/components/ru/OpportunityRu/OpportunityRu'
import PaymentRu from '@/components/ru/PaymentRu/PaymentRu'
import UniredMobileRu from '@/components/ru/uniredMobileRu/UniredMobileRu'

import { Inter } from 'next/font/google'
import Head from 'next/head'
import React, { useContext } from 'react'


const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const{xsNav,setXsNav}=useContext(Contexts)
  return (
    <>
    <Head>
      <title>rus</title>
    </Head>
      <header className='bg-headerBg relative xs:pb-[40px]'>
        <NavRu />
        <div onClick={()=>setXsNav(false)} className="container text-center mt-[130px] lg:mt-[100px] md:mt-[80px] sm:mt-[50px] xs:mt-[50px]">
          <h1 className='text-[#F5F5F5] text-[60px] leading-[90px] font-[700] font-["Open_Sans"] lg:text-[50px] lg:leading-[80px] md:text-[40px] md:leading-[70px] sm:text-[26px] sm:leading-[70px] xs:mt-[50px] xs:text-[39px] xs:leading-[49px]'>Чтобы осуществлять удобные и легкие денежные переводы из России в Узбекистан просто скачайте наше приложение.</h1>
          <p className='text-[#F5F5F5] text-[28px] leading-[43px] font-[600] mt-[50px] mb-[103px] opacity-70 font-["Open_Sans"] lg:text-[25px] lg:leading-[39px] md:text-[20px] md:leading-[30px] md:mt-[30px] md:mb-[70px] sm:text-[18px] sm:my-[30px]  xs:mt-[30px] xs:mb-[50px] xs:text-[16px] xs:leading-[20px]'>Unired Mobile — универсальный доступ к
            неограниченным возможностям!</p>
        </div>
        <HeaderPhoneRu/>
        <HeaderPhoneRuXs/>
      </header>
      <UniredMobileRu />
      <MoneyTransfersRu />
      <PaymentRu />
      <OpportunityRU />
      <FooterRu />
    </>
  )
}
