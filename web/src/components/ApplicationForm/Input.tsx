import React from 'react';
import style from './Style.module.scss';
import classname from 'classnames';
import { InputPropsT } from '@/generated/Applicants';

export const Input = ({ labelName, type, placeholder, value, name, onChange }: InputPropsT) => {
  return (
    <div className={style.input}>
      <label htmlFor="">{labelName}</label>
      <input
        type={type || 'text'}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        className={classname('outline-none focus:outline-none', type === 'file' && style.fileInput)}
      />
      {type === 'file' && (
        <button type="button" className={style.fileBtn}>
          Select file from your device
        </button>
      )}
    </div>
  );
};
