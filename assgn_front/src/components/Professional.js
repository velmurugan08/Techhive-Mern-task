

import Update from "./Update";
import Remove from "./Remove";
// import axios from "axios"
// export default function Professional(){
//            var req=axios.get('http://localhost:8081/professional');
//                 req.then((resp)=>{
//                     var arr=resp.data
//                     console.log(arr);
//                 });
//                return <div>{arr.map((el)=>{
//                     return (<div className="card ms-7" style={{margin:'10px'}}>
//                             <div className="row g-0">
//                                 <div className="col-md-4">
//                                 <img src={el.image} className="card-img" alt="fooditems"></img>
//                                 </div>
//                                 <div className="col-md-8">
//                                 <div className="card-body">
//                                     <h5 className="card-title">{el.fname}</h5>
//                                     <p className="card-text">{el.lname}</p>
//                                     <p className="card-text">Services : {el.service}</p>
//                                     <p className="card-text">${el.mobile}</p>
//                                     <p className="card-text">${el.email}</p>
//                                     <button
//                                         className="btn btn-primary">
//                                         Book Now
//                                     </button>
//                                 </div>
//                                 </div>
//                             </div>
//                           </div>)
//                 })}</div>;

//             }
               
//     return <div>
//         <div className="card mb-3"  style={{maxWidth:"540px"}}>
//             <div className="row g-0">
//                 <div className="col-md-4">
//                 <img src="..." className="img-fluid rounded-start" alt="..."/>
//                 </div>
//                 <div className="col-md-8">
//                 <div className="card-body">
//                     <h5 className="card-title">Card title</h5>
//                     <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                     <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//                 </div>
//                 </div>
//             </div>
//         </div>
//     </div>
 //}



 import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet} from "react-router-dom"

export default function Professional() {
  const [professionalData, setProfessionalData] = useState([]);

  useEffect(() => {
    fetchProfessionalData();
  }, []);

  const fetchProfessionalData = async () => {
    try {
      const response = await axios.get("http://localhost:8082/professional");
      console.log(response.data);
      setProfessionalData(response.data);
    } catch (error) {
      console.error("Error fetching professional data:", error);
    }
  };
  const remove=async(a)=>{
    await axios.delete("http://localhost:8082/professional/delete/"+a)
    fetchProfessionalData();
  }

  return (
    <div>
      {professionalData.map((el) => (
        <div className="card ms-7 " style={{ margin: "10px" }} key={el._id}>
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{el.fname}</h5>
                <p className="card-text">{el.lname}</p>
                <p className="card-text">{el.dept}</p>
                <p className="card-text">{el.regno}</p>
                <p className="card-text">{el.mobile}</p>
                <p className="card-text">{el.email}</p>
                <button className="btn btn-primary"><Link to={"/Update/"+el._id} style={{textDecoration:"none",color:"white"}}>Update</Link></button>
                <button className="btn btn-primary" onClick={(ev) => {remove(el._id); ev.preventDefault();}}>Remove</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>


  );
  <Outlet/>
}
