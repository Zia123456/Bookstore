import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { statusChecker } from '../../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categoriesReducer);
  return (
    <div>
      <h1 className="status-text">{status}</h1>
      <button
        className="status-button"
        onClick={() => dispatch(statusChecker())}
        type="button"
      >
        Check status
      </button>
    </div>
  );
};

export default Categories;
