import Submit from "../components/Submit/Submit";
import "./Authentification.css";
import "../FirstPage/FirstPage.css";
export default function Authentification(){

         return (
         <div className="page-container">
             <div className="custom-container">
                 <div className="logo">
                     <img src="/Logo/logoBlanc.png" alt="App logo"  />
                 </div>
                 <div className="content-wrapper">
                     <div className="image-wrapper">
                         {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                         <img src="/Pictures/login.jpg" alt="enter"/>
                     </div>
                     <div className="form-wrapper">
                         <h1 className="title">CONNEXION / INSCRIPTION</h1>
                         < Submit />
                     </div>
                 </div>
             </div>
         </div>
    );
 }
