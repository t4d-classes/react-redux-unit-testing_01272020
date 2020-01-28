import React, { useState } from 'react';

const initialColorForm = () => ({
  name: '',
});

export const ColorForm = ({ buttonText, onSubmitColor }) => {

  const [ colorForm, setColorForm ] = useState(initialColorForm());

  const change = ({ target: { value, name }}) => {
    
    setColorForm({
      ...colorForm,
      [ name ]: value,
    })

  };

  const submitColor = () => {
    onSubmitColor({ ...colorForm });
    setColorForm(initialColorForm());
  };

  return <form>
    <div>
      <label htmlFor="name-input">Color:</label>
      <input type="text" id="name-input" name="name"
        value={colorForm.name} onChange={change} />
    </div>
    <button type="button" onClick={submitColor}>{buttonText}</button>
  </form>;

};
