import React from 'react'

const PersonForm = ({onSubmit,newName,handleNameChange,newNumber,handleNumberChange})=>
<form onSubmit={onSubmit}>
    <div>
        name: <input value={newNumber} onChange={handleNameChange}/>
    </div>

    <div>
        <button type="submit">add</button>
    </div>
</form>

export default PersonForm