import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export default function Category(props) {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const selectCategoryRef = useRef();
  useEffect(() => {
    axios.get('/categories').then((res) => {
      console.log('get categories data', res.data);
      setCategories(res.data);
    });
  }, []);
  const createCategory = () => {
    axios
      .post('/categories', { newCategory: categoryName })
      .then((response) => {
        console.log('post category', response.data);
        const newCategories = [...categories, response.data];
        setCategories(newCategories);
      });
  };
  console.log('select ref', selectCategoryRef.current);
  return (
    <div>
      <label htmlFor='category'>Category:</label>
      <select
        name='category'
        onChange={props.handleChange}
        defaultValue=''
        ref={selectCategoryRef}>
        <option value=''>Select a category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
        <option value='add-new'>Add new category</option>
      </select>
      {selectCategoryRef.current &&
        selectCategoryRef.current.value === 'add-new' && (
          <div>
            <input
              type='text'
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
            <button type='button' onClick={createCategory}>
              Add category
            </button>
          </div>
        )}
    </div>
  );
}
