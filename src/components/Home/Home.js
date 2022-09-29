import React, { useEffect, useState } from 'react';
import './Home.css';
import { FaAsymmetrik } from 'react-icons/fa';
import User from '../User/User';
import Cart from '../Cart/Cart';


const Home = () => {
    // carts
    const [carts,setCarts]=useState([]);
    
    const [timeCount,setTimeCount]=useState([]);

    const [time,setTime]=useState([]);
    
    console.log(setTime)
    useEffect(()=>{
        fetch('fakedata2.json')
        .then(res=>res.json())
        .then(data=>setTime(data))
    },[])

    // console.log(carts);
    useEffect(()=>{
        fetch("fakedata.json")
        .then(res=>res.json())
        .then(data=>setCarts(data));
    },[]);

//carts

    return (
      
        
        <div className='cards mx-auto w-5/6 grid grid-cols gap-4 bg-base-200 sm:grid-cols lg:grid-cols-2'style={{marginBottom:"70px"}}>
  
        <div>
            <div className='p-6 ml-[-20px] rounded'>
                <div className='p-3 ml-[-20px] rounded bg-orange-300' style={{marginLeft:"120px",boxShadow:"3px 4px 5px gray"}}>
                <h1 className='text-4xl  bg-accent text-stone-50'><FaAsymmetrik />MY-Regular-Activity</h1>
                <h2 className=' bg-accent text-stone-50'>Select today’s exercise</h2>
                </div>
                <br />
            </div>
            
            {/* <Carts ></Carts> */}
            <div className='grid gap-8 lg:grid-cols-3 sm:grid-cols-2'>
            
            {
                carts.map(cart=>(
                  <Cart 
                  cart={cart}
                  key={cart.id}
                  setCarts={setCarts}
                  time={time}
                  setTime={setTime}
                  timeCount={timeCount}
                  setTimeCount={setTimeCount}
                  ></Cart>
                ))
            }      
    </div>
        </div>
         
           
              <User time={time}
                  key={time.id}
              
              ></User>
       
         <div style={{marginLeft:"9vw"}}>
         <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
    How does react work?
  </div>
  <div className="collapse-content"> 
    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
  </div>
</div>
<div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div className="collapse-content"> 
    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
  </div>
</div>
<div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div className="collapse-content"> 
    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
  </div>
</div>
         </div>
        </div>
    
    );
};

export default Home;