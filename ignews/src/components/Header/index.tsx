import styles from './styles.module.scss'

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/world.svg" alt="immi.news" className={styles.headerImage}/>
                <nav>
                    <a href="">Home</a>
                    <a href="">Posts</a>
                </nav>
            </div>
        </header>
    )
}