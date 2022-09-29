

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img1 from '../../images/photo-1620638306111-521756a2522f.jpg';

const User = (props) => {
    const notyfy=()=>toast("Successfully send ...!!");
    const {time}=props;
    console.log(time)

    const handleAddBreakTime=()=>{
       console.log("clicked")
     }

    return (
        
       
        <div style={{marginTop:"200px",marginLeft:"20vw",textAlign:"center",backgroundColor:"white",marginRight:"2vw",boxShadow:"3px 4px 5px gray"}}>
       <div>
        
       </div>
       <div style={{marginTop:"-160x"}}>
        <img style={{width:"100%",height:"200px"}} src={img1} alt="" srcset="" />
        </div>

        <div>
            <h1>Md.Rizwanul Wahid</h1>
            <p>Dhaka</p>
        </div>
        <br />
        <div style={{display:"flex" ,justifyContent:"center"}}>
            <div className='bg-base-200' style={{border:"2px solid black",display:"flex",gap:"14px"}}>
            <div>
            <h1>76kg</h1>
            <h1>Weight</h1>
            </div>
            <div>
            <h1>6.8</h1>
            <h1>Height</h1>
            </div> 
             <div>
             <h1>26</h1>
             <h1>Age</h1>
             </div>
            </div>     
        </div>
        <div>
            <br />
            <h1>Add A Break</h1>
            <div className='bg-base-200  rounded grid grid-cols-4 m-4 p-4'>
            {
             time.map(t=><button onClick={handleAddBreakTime} className='btn btn-accent p-4'>{t.time1}{t.time2}{t.time3}{t.time4}</button>)
             
                }
            
            </div>
            <br />
           
            <div>
                <h1>Activity Details</h1>
                
            </div>
            <br />
            <div  className='bg-base-200 rounded ' style={{display:"flex",margin:"15px",justifyContent:"space-around"}}>
                <h1>Activity time:</h1>
                <h1>70 </h1>
            </div>
            <br />
            <div className='bg-base-200 rounded' style={{display:"flex",margin:"15px",justifyContent:"space-around"}}>
                <h1>Break time:</h1>
                <h1>50</h1>
            </div>
            <br />
            <button style={{marginBottom:"20px"}} onClick={notyfy} className="btn btn-active btn-primary">Activity Completed</button>
            <ToastContainer/>
        </div>
       

    </div>
    );
};

export default User;