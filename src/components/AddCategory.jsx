import { useState } from 'react';

export const AddCategories = ( { setCategories } )=>{
    const [inputValue, setinputValue] = useState('One punch')
    const onInputChange = (event)=>{
        setinputValue( event.target.value )
    }

    const onSubmit = (event)=>{
       event.preventDefoult();
       if( inputValue.trim().length <= 1 ) return;
       setCategories([ inputValue, ...categories,]);
    }

    return( 
    <form onSubmit={(event)=> onSubmit(event)}>
        <input 
        type="text "
        placeholder="Buscar gif"
        value={inputValue}
        onChange={ (event) => onInputChange( event) }
        />
    </form>
        
    )
}
