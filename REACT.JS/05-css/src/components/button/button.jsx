import  Styles from './button.module.css'

const Button = () => {
  return (
    <div>
        <button className={Styles.btn} >button</button>
        <div className={Styles.div} > hello world  </div>

    </div>
  )
}

export default Button