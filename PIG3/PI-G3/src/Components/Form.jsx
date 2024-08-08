import React from "react";
import Button from "./Button";

const Form = ({ fields, buttonText, onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        {fields.map((field, index) => ( // fields que es la primer props recibira una lista de objetos que definiran los campos del formulario
          <input
            key={index}
            className="input-form"
            type={field.type}
            placeholder={field.placeholder}
          />
        ))}
         
        <Button className={"btn-search"}>{buttonText}</Button> 
      </form>
    </div>
  );
};

export default Form;
