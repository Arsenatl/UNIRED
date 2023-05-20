import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { link } from './linkNavRu'
import Image from 'next/image'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useRouter } from 'next/router';
import MenuIcon from '@mui/icons-material/Menu';
import { Contexts } from '@/components/Context/Context';


function NavRu() {
    const router = useRouter();
    const [language, setLanguage] = useState(false)
    const{xsNav,setXsNav}=useContext(Contexts)
    console.log(xsNav);
    return (
        <nav className='pt-[13px] xs:pt-[20px]'>
            <div className="container flex justify-between items-center xs:block">
                <div className="flex items-center gap-[80px] md:gap-[40px] xs:justify-between sm:gap-[15px]">
                    <Link href={'/'} className='font-[700] text-[#F5F5F5] text-[64px] leading-[67px] lg:text-[58px] lg:leading-[55px] md:text-[40px] md:leading-[30px] sm:text-[20px] sm:leading-[20px] xs:text-[32px] xs:leading-[39px]'>Unired</Link>
                    <div onClick={()=>setXsNav(!xsNav)} className='hidden xs:block text-white text-[24px]'>
                        <MenuIcon />
                    </div>
                    <div className='flex items-center gap-[40px] xs:hidden'>

                        {
                            link?.map((element, value) => {
                                return (
                                    <Link className='text-[#F5F5F5] text-[18px] leading-[25px] font-[700] font-["Open_Sans"] lg:text-[18px] lg:leading-[20px] md:text-[12px] md:leading-[20px] sm:text-[10px] sm:leading-[15px]' href={'/'} key={value}>{element.logo}</Link>
                                )
                            })
                        }
                    </div>
                </div>
                
                <div className='flex gap-[10px] items-center'>
                    {/* <Image
                        src={'/images/russia-flag-icon.svg'}
                        width={20}
                        height={20}
                        alt='flag of Russian'
                    /> */}
                    <div className='relative xs:hidden'>

                        <div onClick={() => setLanguage(!language)} className='cursor-pointer sm:text-[12px] flex gap-2 text-white items-center'>
                            <p>Русский</p>
                            <div >
                                <ArrowDropDownIcon />
                            </div>
                        </div>
                        {
                            language && <div className='text-white sm:text-[10px] border-2 rounded-[10px] absolute top-[33px] left-[-10px] border-white '>
                                <div onClick={() => router.push('/')} className='cursor-pointer border-b-2 border-white py-[5px] px-[15px]'>
                                    <p>O'zbekcha</p>
                                </div>
                                <div onClick={() => setLanguage(!language)} className='cursor-pointer py-[5px] px-[15px]'>
                                    <p>Русский</p>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className={` ${xsNav?'translate-x-[0px]':'translate-x-[-10000px]'} duration-500 hidden xs:flex justify-center items-center fixed top-0 bg-[#ac413d] h-[100vh] z-20 w-[60%]`}>
                    <div className=' flex flex-col text-center gap-[20px]'>

                        {
                            link?.map((element, value) => {
                                return (
                                    <Link className='text-[#F5F5F5] text-[18px] leading-[25px] font-[700] font-["Open_Sans"]' href={'/'} key={value}>{element.logo}</Link>
                                )
                            })
                        }
                        <div className='relative'>

                            <div onClick={() => setLanguage(!language)} className='cursor-pointer flex gap-2 text-white justify-center items-center'>
                                <p>Русский</p>
                                <div >
                                    <ArrowDropDownIcon />
                                </div>
                            </div>
                            {
                                language && <div className='text-white border-2 rounded-[10px] absolute top-[33px] left-[25px] border-white '>
                                    <div onClick={() => router.push('/uz')} className='cursor-pointer border-b-2 border-white py-[5px] px-[15px]'>
                                        <p>O'zbekcha</p>
                                    </div>
                                    <div onClick={() => setLanguage(!language)} className='cursor-pointer py-[5px] px-[15px]'>
                                        <p>Русский</p>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
        </nav>
    )
}

export default NavRu
900299204