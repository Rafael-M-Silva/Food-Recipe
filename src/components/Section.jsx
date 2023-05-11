import Styles from './Section.module.css'

let Section = ({children}) => {
  return(
    <section className={Styles.section}>
      {children}
    </section>
  )
}

export default Section