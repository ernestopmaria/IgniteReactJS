import {FcGoogle} from 'react-icons/fc'
import {ImUserCheck} from 'react-icons/im'
import {FiX} from 'react-icons/fi'
import styles from './styles.module.scss'
import {signIn, useSession, signOut}from 'next-auth/client'


export function SignInButton(){
    const [session] = useSession();
    console.log(session)


    return session? 
        
        (<button type="button" className={styles.signInButton}>
        <img src={session.user.image}/>  
         {session.user.name} ! 
          <FiX color="#737380" className= {styles.closeIcon} onClick={()=>{signOut()}}/>
      </button>):
      (
        
        <button type="button" className={styles.signInButton} onClick={()=>signIn('google')}>
          <FcGoogle/>  
            Sign in
        </button>)
    
}