import {AppProps} from "next/app"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import {Provider as NextAuthProvider} from 'next-auth/client'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
  <Header/>  
 < Component {...pageProps} />
 <Footer/> 
 </NextAuthProvider>

  )
}

export default MyApp
