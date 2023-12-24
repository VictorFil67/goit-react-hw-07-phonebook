// import { Component } from 'react';
import { useDispatch } from 'react-redux';
import s from './SearchFilter.module.css';
import { setFilterAction } from 'store/contactsSlice';

export const SearchFilter = ({ filter }) => {
  const dispatch = useDispatch();

  const handleSetFilter = e => {
    dispatch(setFilterAction(e.target.value));
  };

  return (
    <>
      <p className={s.text}>Find contacts by name</p>
      <input
        className={s.input}
        onChange={handleSetFilter}
        value={filter}
        name="search"
        type="text"
      />
    </>
  );
};
