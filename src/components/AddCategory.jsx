import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = ( event ) => {
        setInputValue(event.target.value)
        //console.log(event.target.value)
    }

    const onSubmit = ( event ) => {
        event.preventDefault()
        // console.log(event)
        
        if (inputValue.trim().length == 0) return;

        onNewCategory(inputValue.trim())
        setInputValue('')
    }

    return (
        <form onSubmit={ onSubmit }>
            <input  
               type="text" 
               placeholder="Buscar gifs" 
               value={ inputValue } 
               onChange={ handleInputChange }   
            />
        </form>
  )
}
