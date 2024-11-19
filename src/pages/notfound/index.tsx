import styles from './notfound.module.css'
export function NotFound() {
    return (
      <div className={styles.container}>
        <h1>Error 404</h1>
        <h1>Esta página não existe!</h1>
      </div>
    )
  }
  
  export default NotFound
  