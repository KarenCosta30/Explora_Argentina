import React from "react";
import Button from "./Button";

const Form = ({ fields, buttonText, onSubmit,className,inputClassName,children }) => {
  return (
    <div>
      <form onSubmit={onSubmit} className={className}>
        {children}
        {fields.map((field, index) => ( // fields que es la primer props recibira una lista de objetos que definiran los campos del formulario
          <input
            key={index}
            className={inputClassName}
            type={field.type}
            placeholder={field.placeholder}
            name={field.name}
            value={field.value}
            onChange={field.onChange}
          />
        ))}
         
        <Button className={"btn-search"}>{buttonText}</Button> 
      </form>
    </div>
  );
};

export default Form;
