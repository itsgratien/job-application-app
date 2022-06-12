import React from 'react';
import style from './Style.module.scss';
import classname from 'classnames';
import { InputPropsT } from '@/generated/Applicants';
import BeatLoader from 'react-spinners/BeatLoader';

export const Input = ({
  labelName,
  type,
  placeholder,
  value,
  name,
  onChange,
  error,
  filePlaceholder,
  fileLoading,
}: InputPropsT) => {
  return (
    <div
      className={style.input}
      style={{ borderBottom: error ? '2px solid red' : '1px solid black' }}
    >
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
        <div className="flex items-center justify-between">
          <button
            type="button"
            className={classname('flex items-center justify-center', style.fileBtn)}
            disabled={fileLoading}
            style={{ cursor: fileLoading ? 'not-allowed' : 'pointer', opacity: fileLoading ? '0.5': '1' }}
          >
            <span className="text-15 font-bold">
              {filePlaceholder || 'Select File From Your Device'}
            </span>
            {fileLoading && (
              <span className="mt-1 ml-2">
                <BeatLoader size={10} />
              </span>
            )}
          </button>
        </div>
      )}
    </div>
  );
};
