import React from "react";
import Button from "./Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = ({ fields, buttonText, onSubmit, className, inputClassName, children, paragraphText }) => {

  return (
    <div>
      <form onSubmit={onSubmit} className={className}>
        {children}
        {fields.map((field, index) => {
          if (field.type === "group") {
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
          } else if (field.type === "select") {
            return (
              <select
                key={index}
                className={inputClassName}
                name={field.name}
                value={field.value}
                onChange={field.onChange}
              
              >
                {field.options && field.options.map((option, idx) => (
                  <option key={idx} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            );
          } else if (field.type === "custom") {
            return (
              <div key={index} className={inputClassName}>
                {field.render()}
              </div>
            );
          } else {
            return (
              <input
                key={index}
                className={inputClassName}
                type={field.type}
                placeholder={field.placeholder}
                name={field.name}
                value={field.value}
                onChange={field.onChange}
                autoComplete={field.autoComplete}
                required
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
