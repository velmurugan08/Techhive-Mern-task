// import {  Field, Form, Formik,ErrorMessage } from "formik";
// export default function Addprofessional(){
//     const submitHandler = (values, setSubmitting) => {
//         alert(JSON.stringify(values));
//         // setSubmitting(false);
//       };
//       const validator=(values)=>{
//         const errors = {};
//         if (values.email &&
//          values.email.indexOf("@")<0 || values.email.indexOf("@")>values.email.lastIndexOf(".")
//         ) {
//           errors.email = "Invalid email address";
//         }
//         return errors;
//       };
//       return (
//         <Formik
//           onSubmit={submitHandler}
//           initialValues={{ Name: "", email: "", }}
//           validate={validator}
//           style={{margin:'0 auto'}}
//         >
//           {({ isSubmitting }) => (
//             <Form class="card" style={{width:'18rem',padding:'10px',marginLeft:'auto',marginRight:'auto'}}>
//                 <div class="form-group">
//                 <Field
//                 type="text"
//                 name="fname"
//                 placeholder="Enter First Name"
//                 class="form-control"
//                 />
//                 <ErrorMessage class="form-text text-muted" name="fname" component="div" />
//                 </div>

//                 <div class="form-group">
//                 <Field
//                 type="text"
//                 name="lname"
//                 placeholder="Enter Last Name"
//                 class="form-control"
//                 />
//                 <ErrorMessage class="form-text text-muted" name="lname" component="div" />
//                 </div>

//                 <div class="form-group">
//                 <Field
//                 type="text"
//                 name="service"
//                 placeholder="Enter Services"
//                 class="form-control"
//                 />
//                 <ErrorMessage class="form-text text-muted" name="service" component="div" />
//                 </div>

//                 <div class="form-group">
//                 <Field
//                 type="number"
//                 name="service"
//                 placeholder="Enter Services"
//                 class="form-control"
//                 />
//                 <ErrorMessage class="form-text text-muted" name="service" component="div" />
//                 </div>
    
//                 <div class="form-group">
//                 <Field type="email" name="email" class="form-control" placeholder="Update email address"/>
//                 <ErrorMessage class="form-text text-muted" name="email" component="div" />
//                 </div>
//               <button type="submit" class="btn btn-primary" disabled={isSubmitting}>
//                 Add This One
//               </button>
//             </Form>
//           )}
//         </Formik> 
//       );
// }


import {  Field, Form, Formik,ErrorMessage } from "formik";
import axios from "axios";
import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import { json } from "react-router";

export default function NewUser() {
  let navigate=useNavigate();
    
  const submitHandler = async(values, setSubmitting) => {
    alert(JSON.stringify(values));
    console.log(values);
    await axios.post('http://localhost:8082/professional/add',values)
    alert('New Professional Added');
    navigate("/Professional")
  };
  const validator=(values)=>{
    const errors = {};
    if (!values.fname) {
      errors.fname = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (
     values.email.indexOf("@")<0 || values.email.indexOf("@")>values.email.lastIndexOf(".")
    ) {
      errors.email = "Invalid email address";
    }
    return errors;
  };
  return (
    <Formik
      onSubmit={submitHandler}
      initialValues={{ fname: "", lname:"",email: ""}}
      validate={validator}
      style={{margin:'0 auto'}}
    >
      {({ isSubmitting }) => (
        <Form class="card" style={{width:'18rem',padding:'10px',marginLeft:'auto',marginRight:'auto'}}>
            


            <div class="form-group">
            <Field
            text="text"
            id="fname" name="fname"
            placeholder="Enter your First name"
            class="form-control"
            />
            <ErrorMessage class="form-text text-muted" name="fname" id="fname" component="div" />
            </div>

            <div class="form-group">
            <Field
            text="text"
            id="lname" name="lname"
            placeholder="Enter your Last name"
            class="form-control"
            />
            <ErrorMessage class="form-text text-muted" name="lname" id="lname" component="div" />
            </div>


            <div class="form-group">
            <Field
            text="text"
            id="dept" name="dept"
            placeholder="Enter your Department"
            class="form-control"
            />
            <ErrorMessage class="form-text text-muted" name="dept" id="dept" component="div" />
            </div>

            <div class="form-group">
            <Field
            text="Number"
            id="regno" name="regno"
            placeholder="Enter your Register Number"
            class="form-control"
            />
            <ErrorMessage class="form-text text-muted" name="regno" id="regno" component="div" />
            </div>


            <div class="form-group">
            <Field type="email" id="email" name="email" class="form-control" placeholder="Enter email address"/>
            <ErrorMessage class="form-text text-muted" name="email" id="email" component="div" />
            </div>

            <div class="form-group">
            <Field type="tel" id="mobile" name="mobile" class="form-control" placeholder="Enter your mobile "/>
            <ErrorMessage class="form-text text-muted" name="mobile" id="mobile" component="div" />
            </div>


          <button type="submit" class="btn btn-primary"  disabled={isSubmitting} >
            Create
          </button>
        </Form>
      )}
    </Formik>
    
  );
}