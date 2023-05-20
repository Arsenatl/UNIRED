import Link from 'next/link'
import React, { useState } from 'react'
import { link } from './linkNav'
import Image from 'next/image'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useRouter } from 'next/router';

function Nav() {
    const router = useRouter();
    const[language,setLanguage]=useState(false)
    return (
        <nav className='pt-[13px]'>
            <div className="container flex justify-between items-center">
                <div className="flex items-center gap-[80px] md:gap-[40px]">
                    <Link href={'/'} className='font-[700] text-[#F5F5F5] text-[64px] leading-[67px] lg:text-[58px] lg:leading-[55px] md:text-[40px] md:leading-[30px]'>Unired</Link>
                    <div className='flex items-center gap-[40px]'>

                        {
                            link?.map((element, value) => {
                                return (
                                    <Link className='text-[#F5F5F5] text-[18px] leading-[25px] font-[700] font-["Open_Sans"] lg:text-[18px] lg:leading-[20px] md:text-[12px] md:leading-[20px]' href={'/'} key={value}>{element.logo}</Link>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='flex gap-[10px] items-center'>
                <Image
                        src={'/images/uzbekistan 1.svg'}
                        width={20}
                        height={20}
                        alt='flag of Uzbekistan'
                    />
                    <div className='relative'>

                        <div onClick={() => setLanguage(!language)} className=' cursor-pointer flex text-white gap-2 items-center'>
                            <p>O'zbekcha</p>
                            <div >
                                <ArrowDropDownIcon  />
                            </div>
                        </div>
                        {
                            language &&<div className='text-white border-2  rounded-[10px] absolute top-[33px] left-[-10px] border-white '>
                            <div onClick={()=> router.push('/')} className='cursor-pointer border-b-2  border-white py-[5px] px-[15px]'>
                                <p>Русский</p>
                            </div>
                            <div onClick={()=>setLanguage(!language)} className='cursor-pointer py-[5px] px-[15px]'>
                                <p>O'zbekcha</p>
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav