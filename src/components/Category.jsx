import React, { useState } from 'react';

export default function Category(props) {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const createCategory = () => {
    const newCategory = {
      id: categories.length + 1,
      name: categoryName,
    };
    setCategories([...categories, newCategory]);
  };
  console.log('categories', categories);
  const categoriesOptions = categories.map((category) => (
    <option key={category.id} value={category.name}>
      {category.name}
    </option>
  ));
  return (
    <div>
      <label htmlFor='category'>Category:</label>
      <select name='category' defaultValue='' onChange={props.handleChange}>
        <option value=''>Select a category</option>
        {categoriesOptions}
      </select>
      <input
        type='text'
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <button type='button' onClick={createCategory}>
        Add category
      </button>
    </div>
  );
}
