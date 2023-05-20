import FooterRu from '@/components/ru/FooterRu/FooterRu'
import HeaderPhoneRu from '@/components/ru/HeaderPhoneRu/HeaderPhoneRu'
import MoneyTransfersRu from '@/components/ru/MoneyTransfersRu/MoneyTransfersRu'
import NavRu from '@/components/ru/NavRu/NavRU'
import OpportunityRU from '@/components/ru/OpportunityRu/OpportunityRu'
import PaymentRu from '@/components/ru/PaymentRu/PaymentRu'
import UniredMobileRu from '@/components/ru/uniredMobileRu/UniredMobileRu'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header className='bg-headerBg relative z-10'>
        <NavRu />
        <div className="container text-center mt-[130px] lg:mt-[100px] md:mt-[80px]">
          <h1 className='text-[#F5F5F5] text-[60px] leading-[90px] font-[700] font-["Open_Sans"] lg:text-[50px] lg:leading-[80px] md:text-[40px] md:leading-[70px]'>Чтобы осуществлять удобные и легкие денежные переводы из России в Узбекистан просто скачайте наше приложение.</h1>
          <p className='text-[#F5F5F5] text-[28px] leading-[43px] font-[600] mt-[50px] mb-[103px] opacity-70 font-["Open_Sans"] lg:text-[25px] lg:leading-[39px] md:text-[20px] md:leading-[30px] md:mt-[30px] md:mb-[70px]'>Unired Mobile — универсальный доступ к
            неограниченным возможностям!</p>
        </div>
        <HeaderPhoneRu />
      </header>
      <UniredMobileRu />
      <MoneyTransfersRu />
      <PaymentRu />
      <OpportunityRU />
      <FooterRu />
    </>
  )
}
