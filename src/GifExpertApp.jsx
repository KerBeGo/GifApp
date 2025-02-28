import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

    /**
     * NO condicionar los HOOKS
     */
    const [categories, setCategories] = useState([])

     const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        // console.log(newCategory)
        setCategories([newCategory, ...categories ])
    }
  
  return (
    <>
        <h1>GifExpertApp</h1>


        <AddCategory onNewCategory={event => onAddCategory(event)}/>
        {/* <button onClick={onDeleteCategory}>Eliminar</button> */}
     
        { 
           categories.map( (category) => (

            <GifGrid key={category} category={category} /> 
           )) 
        }
    </>
    
  )
}
