import { useEffect, useState } from 'react';
import { getAllMeals, addMeal, editMeal, deletMeal } from './FetchMeals';
import './App.css';
import { MyMeals } from './MyMeals';

function App() {

  const [myMeal, setMeal] = useState([]);
  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(false);
  const [mealId, setMealId] = useState("")

  useEffect(() => {
    getAllMeals(setMeal)
  }, [])

  const updatingInInput = (_id, title) => {
    setEditing(true)
    setTitle(title)
    setMealId(_id)
  }

  return (
    <div >
      <h1>Meal plan</h1>

      <input
        type="text" placeholder="Add a meal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        disabled={!title}
        onClick=
        {editing ? () => editMeal(mealId, title, setTitle, setMeal, setEditing) : () => addMeal(title, setTitle, setMeal)}>
        {editing ? "Edit" : "Add"}
      </button>

      {/* <MyMeals text="WE GOT HERE" />*/}

      {myMeal.map((meal) => <MyMeals text={meal.title} key={meal._id}
        updatingInInput={() => updatingInInput(meal._id, meal.title)}
        deletMeal={() => deletMeal(meal._id, setMeal)} />
      )}
    </div>
  );
}

export default App;
