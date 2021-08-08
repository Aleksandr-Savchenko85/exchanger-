/* eslint-disable prefer-const */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

const FormControl = ({ form, field, isShowPass, setIsShowPass, title, ...props }) => {
  let errors = form.errors[field.name];
  let touched = form.touched[field.name];

  return (
    <div className={`input ${errors && touched && 'input--error'}`}>
      <label>
        {title && <p>{title}</p>}
        <div className="input__inside">
          {props.children}
          {setIsShowPass && (
            <div className="show-password" onClick={() => setIsShowPass(!isShowPass)} />
          )}
        </div>
        {errors && touched && (
          <div className="input__notification">
            <p>{errors && touched && errors}</p>
          </div>
        )}
      </label>
    </div>
  );
};

export const Input = props => {
  return (
    <FormControl {...props}>
      <input
        {...props.field}
        type={props.type}
        placeholder={props.placeholder}
        inputMode={props.inputMode || null}
      />
    </FormControl>
  );
};

const styleSelect = {
  border: '1px solid #f2f2f2',
  width: '100%',
  height: '54px',
  fontSize: '14px',
  padding: '0 16px',
  transition: '.3s',
  color: 'grey',
  borderRadius: '4px',
  boxSizing: 'border-box',
};

export const InputSelect = props => {
  const options = ['EN', 'PT', 'ES'];
  switch (props.typeOfSelect) {
    case 'leguage':
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i <= options.length; i++) {
        options.push(i);
      }
      break;
    default:
      break;
  }
  return (
    <FormControl {...props}>
      <select className="select-input" {...props.field}>
        {options.map((o, i) => (
          <option key={i} value={o}>
            {o}
          </option>
        ))}
      </select>
    </FormControl>
  );
};

export const InputError = props => {
  // eslint-disable-next-line react/destructuring-assignment
  return <div className="input__notification">{props.children}</div>;
};

export const CheckboxError = props => {
  // eslint-disable-next-line react/destructuring-assignment
  return <div className="checkbox__notification">{props.children}</div>;
};
