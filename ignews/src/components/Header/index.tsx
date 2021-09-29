import { SignInButton } from '../SignInButton'
import styles from './styles.module.scss'

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/baby.svg" alt="immi.news" className={styles.headerImage}/>
                <nav>
                    <a href="" className={styles.active}>Home</a>
                    <a href="">Posts</a>
                </nav>
                <SignInButton/>
            </div>
        </header>
    )
}