import React, { useState, useEffect } from 'react';
import './home.css';
import axios from 'axios';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://670f95893e71518616588f5e.mockapi.io/Items`);
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []); 
  return (
    <div className='parent'>
      {data.map((el) => (
        <div className='box' key={el.id}>
          <img src={el.image} alt="" />
          <h2>{el.title && el.title.length > 20 
            ? el.title.substr(0, 27).trim() + '...' 
            : el.title}</h2>
          <p>{el.description && el.description.length > 0 
            ? el.description.substr(0, 300).trim() + '...' 
            : el.description}</p>
            <b><strong>{el.price}$</strong></b>
        </div>
      ))}
    </div>
  );
}
