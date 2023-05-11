import Food from "./components/Food";
import Section from "./components/Section";
import { useState } from "react";
import Styles from "./components/form.module.css";

import "./App.css";

function App() {
  const [food, setFood] = useState("");
  const [arrayFoods, setArrayFoods] = useState([])
  
  // Fetch API - pegando os dados e tranformando em json
  async function getApi() {
    const YOUR_APP_ID = "d34ebf94"
    const YOUR_APP_KEY = "4c088ada1614260e523702c152835666"
    
    const foods = await fetch(`https://api.edamam.com/search?q=${food}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}
    `)
    .then(response => response.json())

    // passando a resposta para função allFoods
    setArrayFoods(foods.hits)
  }

  let handleSubmit = (e) => {
    // Tirando o comportamendo padrão
    e.preventDefault();
    // Resetando o campo do input
    setFood("");
    getApi()
  };

  return (
    <>
      <div className={Styles.form}>
        <h1>Food</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setFood(e.target.value)}
            type="text"
            value={food}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <Section>
       {
        // Caso o array seja 0 vai apresentar faça sua busca, caso não exista nenhum item na API, também vai ser apresentado o mesmo
       arrayFoods.length == 0 ? <h1 className="erro">Faça sua busca!</h1> :  arrayFoods.map((food, index) => (
        <Food
        key={index}
        name={food.recipe.label} 
        img= {food.recipe.image}
        calorias= {Math.floor(food.recipe.calories)}
        />
      ))
       }
      </Section>
    </>
  );
}

export default App;
