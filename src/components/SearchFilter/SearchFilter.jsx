// import { Component } from 'react';
import s from './SearchFilter.module.css';

export const SearchFilter = ({ onChangeSearch, filter }) => {
  return (
    <>
      <p className={s.text}>Find contacts by name</p>
      <input
        className={s.input}
        onChange={onChangeSearch}
        value={filter}
        name="search"
        type="text"
      />
    </>
  );
};
