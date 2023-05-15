import axios from "axios"

const getAllMeals = (setMeal) => {
   axios.get("https://meal-plan-qb9j.onrender.com")
      .then(({ data }) => {
         console.log(data)
         setMeal(data);
      })
}

const addMeal = (title, setTitle, setMeal) => {
   axios.post("https://meal-plan-qb9j.onrender.com/saveMeals", { title })
      .then((data) => {
         console.log(data)
         setTitle("")
         getAllMeals(setMeal)
      })
}

const editMeal = (mealId, title, setTitle, setMeal, setEditing) => {
   axios.post("https://meal-plan-qb9j.onrender.com/editMeal", { _id: mealId, title })
      .then((data) => {
         console.log(data)
         setTitle("")
         setEditing(false)
         getAllMeals(setMeal)
      })
}

const deletMeal = (_id, setMeal) => {
   axios.post("https://meal-plan-qb9j.onrender.com/deletMeal", { _id })
      .then((data) => {
         console.log(data)
         getAllMeals(setMeal)
      })
}


export { getAllMeals, addMeal, editMeal, deletMeal };