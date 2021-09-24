import {  GetStaticProps } from "next"
import  Head  from "next/head"
import { SubscribeButton } from "../components/SubscribeButton"
import { stripe } from "../services/stripe"
import styles from './home.module.scss'


interface HomeProps{
  product:{
    priceId:string;
    amount:number
  }
}

export default function Home({product}:HomeProps) {
  console.log(product)
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
          <span>for {product.amount}/month</span>
        </p>
        <SubscribeButton priceId={product.priceId}/>
      </section>
      <img src="/images/person.svg" alt="Immigrant"/>
      
    </main>
    
   </>
  )
}

export const getStaticProps: GetStaticProps = async()=>{

  const price = await stripe.prices.retrieve("price_1JdEFkD7bL0g3xvC5RvpYiGO")

  const product={
    priceId:price.id,
    amount:new Intl.NumberFormat('en-US',{
      style:"currency",
      currency:"USD"
    }).format(price.unit_amount / 100)
  }
  return{
    props:{
      product
    
    },
    revalidate: 60 * 60 *24,
   
  }

  

}
