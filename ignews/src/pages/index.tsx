import  Head  from "next/head"
import { SubscribeButton } from "../components/SubscribeButton"
import styles from './home.module.scss'


export default function Home() {
  return (
   
    <> 
       <Head>
       <title>Home | immi.news</title>
    </Head>   
    <main className={styles.contentContainer}>
      <section  className={styles.hero}>
        <span>👏 Hey , welcome </span>
        <h1>News about <span>Immigration</span> around World</h1>
        <p>
          Get acess to all News <br />
          <span>for $1.99 month</span>
        </p>
        <SubscribeButton/>
      </section>
      <img src="/images/person.svg" alt="Immigrant"/>
      
    </main>
    
   </>
  )
}
