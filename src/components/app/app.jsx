import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import React, { useEffect } from "react";
import getAllIngridients from "../../utils/api";

function App() {
  const [ingredients, setIngridients] = React.useState([]);
  
  useEffect(() => {
    getAllIngridients()
    .then(data => {setIngridients(data)})
    .catch(console.error)
  }, [])

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main}>

        <BurgerIngredients ingredients={ingredients}/>
        <BurgerConstructor ingredients={ingredients}/>
        
      </main>
    </div>
  );
}

export default App;
