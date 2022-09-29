import React from 'react';
import './Cart.css';


const Cart = (props) => {
    const {cart,setCarts}=props;
    const {id,image,activity,name,description}=cart;
    return (
        <div className=''>
            <div className="card w-[178px] bg-base-100 shadow-xl ml-[120px]" style={{boxShadow:"3px 4px 5px gray"}}>
           <figure className="px-1 pt-1">
          <img src={image} alt="Shoes" className="rounded-xl" />
       </figure>
        <div style={{height:"270px"}} className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <h3 className='text-5px font-bold'>Activity time: {activity}</h3>
        <div className="card-actions">
          <button className="btn btn-primary">Add to list</button>
      </div>
    </div>
  </div>
        </div>
    );
};

export default Cart;