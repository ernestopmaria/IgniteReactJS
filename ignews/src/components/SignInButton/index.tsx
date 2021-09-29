import {FcGoogle} from 'react-icons/fc'
import {FiX} from 'react-icons/fi'
import styles from './styles.module.scss'
import {signIn, useSession, signOut}from 'next-auth/client'


export function SignInButton(){
    const [session] = useSession();
      
    return session? 
        
        (<button type="button" className={styles.signInButton}>
        <img src={session.user.image}/>  
         {session.user.name} ! 
          <FiX color="#172c66" className= {styles.closeIcon} onClick={()=>{signOut()}}/>
      </button>):
      (
        
        <button type="button" className={styles.signInButton} onClick={()=>signIn('google')}>
          <FcGoogle/>  
            Sign in with Google
        </button>)
    
}