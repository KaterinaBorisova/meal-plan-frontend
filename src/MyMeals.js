import { AiFillEdit, AiFillDelete } from "react-icons/ai";

export const MyMeals = ({ text, updatingInInput, deletMeal }) => {
   return (
      <div>
         <p>{text}</p>
         <AiFillEdit onClick={updatingInInput}></AiFillEdit>
         <AiFillDelete onClick={deletMeal}></AiFillDelete>
      </div>
   )
}