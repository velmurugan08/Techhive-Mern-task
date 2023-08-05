// import {  Field, Form, Formik,ErrorMessage } from "formik";
// export default function Update(){
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
//                 name="Name"
//                 placeholder="Update your name"
//                 class="form-control"
//                 />
//                 <ErrorMessage class="form-text text-muted" name="Name" component="div" />
//                 </div>
    
//                 <div class="form-group">
//                 <Field type="email" name="email" class="form-control" placeholder="Update email address"/>
//                 <ErrorMessage class="form-text text-muted" name="email" component="div" />
//                 </div>
    
//               <button type="submit" class="btn btn-primary" disabled={isSubmitting}>
//                 Update
//               </button>
//             </Form>
//           )}
//         </Formik> 
//       );
// }
import {  Field, Form, Formik,ErrorMessage } from "formik";
import axios from "axios";
import { useParams} from "react-router";
import { useNavigate } from "react-router";
export default function Update(){
    let { id } = useParams();
    let navigate=useNavigate();
    const submitHandler = async (values, setSubmitting) => {
        await axios.put('http://localhost:8082/professional/update/'+id,values)
        alert('User Details Updated');
        navigate("/Professional")
        // setSubmitting(false);
      };
 
      const validator=(values)=>{
        const errors = {};
        if ( values.email.indexOf("@")<0 || values.email.indexOf("@")>values.email.lastIndexOf(".")) {
          errors.email = "Invalid email address";
        }
        return errors;
      };
      return (
        <Formik
          onSubmit={submitHandler}
          initialValues={{ fname: "", lname:"",email: "" }}
          
          style={{margin:'0 auto'}}
        >
          {({ isSubmitting }) => (
            <Form className="card" style={{width:'18rem',padding:'10px',marginLeft:'auto',marginRight:'auto'}}>
                <div className="form-group">
                <Field
                type="text"
                id="fname" name="fname"
                placeholder="Update your First name"
                className="form-control"
                />
                <ErrorMessage className="form-text text-muted" name="fname" component="div" />
                </div>

                <div className="form-group">
                <Field
                type="text"
                id="lname" name="lname"
                placeholder="Update your Last name"
                className="form-control"
                />
                <ErrorMessage className="form-text text-muted" name="lname" component="div" />
                </div>
    
                <div className="form-group">
                <Field type="email" id="email" name="email" className="form-control" placeholder="Update email address"/>
                <ErrorMessage className="form-text text-muted" name="email" component="div" />
                </div>

                <div className="form-group">
                <Field type="tel" id="mobile" name="mobile" className="form-control" placeholder="Update mobile address"/>
                <ErrorMessage className="form-text text-muted" name="mobile" component="div" />
                </div>

                
    
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                Update
              </button>
            </Form>
          )}
        </Formik> 
      );
}

