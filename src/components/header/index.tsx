import styles from './header.module.css'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
export function Header(){
    return(
        <header className={styles.container}>
            <Link to="/" className={styles.title}>Crypto App</Link>
           
        </header>
    )
}