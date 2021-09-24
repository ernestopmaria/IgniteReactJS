import {FcGoogle} from 'react-icons/fc'
import {ImUserCheck} from 'react-icons/im'
import {FiX} from 'react-icons/fi'
import styles from './styles.module.scss'

export function SignInButton(){
    const isUserLoggedIn =false;


    return isUserLoggedIn? (
        
        <button type="button" className={styles.signInButton}>
          <FcGoogle/>  
            Sign in
        </button>)
        :
        (<button type="button" className={styles.signInButton}>
        <ImUserCheck color="#6246ea"/>  
          Welcome Ernesto ! 
          <FiX color="#737380" className= {styles.closeIcon}/>
      </button>)
    
}