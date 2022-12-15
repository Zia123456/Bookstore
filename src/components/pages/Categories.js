import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { statusChecker } from '../../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categoriesReducer);
  return (
    <div>
      <h1>{status}</h1>
      <button onClick={() => dispatch(statusChecker())} type="button">
        Check status
      </button>
    </div>
  );
};

export default Categories;
