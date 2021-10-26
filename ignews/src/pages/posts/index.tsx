import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts(){
    return(
        <>
        <Head>
            <title> Histories</title>
        </Head>
        <main className={styles.container}>
            <div className={styles.posts}>
                <a href="">
                    <time>12 de março de 2021</time>
                    <strong> A bela e o monstro</strong>
                    <p>Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Velit fugiat, debitis aliquam 
                        reprehenderit facilis fuga. Error ad magnam illum assumenda!
                         Ipsum placeat
                         vel magnam laboriosam temporibus debitis, 
                         architecto ea sint!</p>
                </a>
                <a href="">
                    <time>12 de março de 2021</time>
                    <strong> A bela e o monstro</strong>
                    <p>Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Velit fugiat, debitis aliquam 
                        reprehenderit facilis fuga. Error ad magnam illum assumenda!
                         Ipsum placeat
                         vel magnam laboriosam temporibus debitis, 
                         architecto ea sint!</p>
                </a>
                <a href="">
                    <time>12 de março de 2021</time>
                    <strong> A bela e o monstro</strong>
                    <p>Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Velit fugiat, debitis aliquam 
                        reprehenderit facilis fuga. Error ad magnam illum assumenda!
                         Ipsum placeat
                         vel magnam laboriosam temporibus debitis, 
                         architecto ea sint!</p>
                </a>
            </div>
        </main>
        </>

    )
}