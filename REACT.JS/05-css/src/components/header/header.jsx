import  Styles from './header.module.css'

const Header = () => {
  return (
    <div>
        <button className={Styles.btn} >header</button>
        <div className={Styles.div} > hello world  </div>
    </div>
  )
}

export default Header