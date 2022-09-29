import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Carts.css';

const Carts = () => {
    const [carts,setCarts]=useState([]);
    console.log(carts);
    useEffect(()=>{
        fetch("fakedata.json")
        .then(res=>res.json())
        .then(data=>setCarts(data));
    },[]);
    return (
        <div className='grid gap-8 lg:grid-cols-3 sm:grid-cols-2'>
            {
                carts.map(cart=>(
                  <Cart 
                  cart={cart}
                  key={cart.id}
                  setCarts={setCarts}
                  ></Cart>
                ))
            }
          
</div>
    );
};

export default Carts;