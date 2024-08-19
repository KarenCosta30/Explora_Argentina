import React from "react";
import Button from "./Button";

const Form = ({ fields, buttonText, onSubmit, className, inputClassName, children , paragraphText  }) => {
  return (
    <div>
      <form onSubmit={onSubmit} className={className}>
        {children}
        {fields.map((field, index) => {
          if (field.type === "group") {
            // Si el field es un grupo, renderiza un div con la clase especificada
            return (
              <div key={index} className={field.className}>
                {field.fields.map((subField, subIndex) => (
                  <input
                    key={subIndex}
                    className={inputClassName}
                    type={subField.type}
                    placeholder={subField.placeholder}
                    name={subField.name}
                    value={subField.value}
                    onChange={subField.onChange}
                  />
                ))}
              </div>
            );
          } else {
            // Si el field no es un grupo, renderiza un input normal
            return (
              <input
                key={index}
                className={inputClassName}
                type={field.type}
                placeholder={field.placeholder}
                name={field.name}
                value={field.value}
                onChange={field.onChange}
              />
            );
          }
        })}
        {paragraphText && <p className="form-paragraph">{paragraphText}</p>}
        <Button className={"btn-search"}>{buttonText}</Button>
      </form>
    </div>
  );
};

export default Form;
