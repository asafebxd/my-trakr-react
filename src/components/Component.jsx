import React, { useRef, useState } from 'react';

export default function Component() {
  const radioRef = useRef();
  const [selected, setSelected] = useState();
  const handleChange = (e) => {
    console.log('value', e.target.value);
    radioRef.current = e.target;
    setSelected(e.target.value);
  };
  console.log('render', radioRef.current);
  return (
    <>
      <div onChange={handleChange} ref={radioRef}>
        <input type='radio' name='test' id='' value={1} />
        <input type='radio' name='test' id='' value={2} />
        <input type='radio' name='test' id='' value={3} />
      </div>
      {radioRef.current && radioRef.current.value === '1' && (
        <h1>Selected 1</h1>
      )}
      {radioRef.current && radioRef.current.value === '2' && (
        <h1>Selected 2</h1>
      )}
      {radioRef.current && radioRef.current.value === '3' && (
        <h1>Selected 3</h1>
      )}
    </>
  );
}
