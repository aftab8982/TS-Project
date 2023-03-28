import './App.css';
import React, { useState } from'react';

function App() {
const [data, setData] = useState('');

const handleChange = (e) => {
  setData(e.target.value)
  // console.log(data)
}

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(data)
};

  return (
    <form className="header">
    <h2>Hello world!</h2>
     <input placeholder="user name" name='user' value={data.user} type="text" onChange={handleChange}></input>
     <input type="password" placeholder="password" value={data.password} onChange={handleChange}></input>
      <button type='submit' onClick={handleSubmit} >Submit</button>
     <h3>{data}</h3>
    </form>
  );
}

export default App;
