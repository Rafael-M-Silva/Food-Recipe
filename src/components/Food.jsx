import Styles from './Food.module.css'
let Food = ({name, calorias, img}) => {
  return (
    <div className={Styles.card}> 
      <img src={img}/>
     <div className={Styles.description}>
      <h2>{name}</h2>
      <p>Total Amount Of Calories: <span>{calorias}</span></p>
      <button>Buy</button>
     </div>
    </div>
  )
}

export default Food