import Form from "../components/Form/Form";
import "./Authentication.css";
export default function Authentication({authentication}){


         return (
         <div className="page-container">
             <div className="custom-container">
                 <div className="content-wrapper">
                     <div className="image-wrapper">
                         {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                         <img src="/Pictures/login.jpg" alt="enter"/>
                     </div>
                     <div className="form-wrapper">
                         <h1 className="title">{authentication}</h1>
                         {
                             authentication
                                 ? <div>CONNEXION</div>
                                 : <div>ENREGISTREZ-VOUS</div>
                         }

                         <Form authentication={authentication}/>

                     </div>
                 </div>
             </div>
         </div>
    );
 }
