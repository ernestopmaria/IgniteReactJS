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

  return (
   
    <> 
       <Head>
       <title>Home | Kid'stories</title>
    </Head>   
    <main className={styles.contentContainer}>
      <section  className={styles.hero}>
        <span>👏 Hey , welcome </span>
        <h1>Here you founds <span>Kid's stories </span>to educate your children</h1>
        <p>
          Get acess to more 10M+ stories <br />
          <span>for {product.amount}/month</span>
        </p>
        <SubscribeButton priceId={product.priceId}/>
      </section>
      <img src="/images/test.jpg" alt="Immigrant"/>
      
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
