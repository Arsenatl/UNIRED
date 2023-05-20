import { Contexts } from '@/components/Context/Context'
import '@/styles/globals.css'
import { useState } from 'react'

export default function App({ Component, pageProps }) {
  const[xsNav,setXsNav]=useState(false)
  return (
    <Contexts.Provider value={{xsNav,setXsNav}}>

  <Component {...pageProps} />
    </Contexts.Provider>
  )
}
