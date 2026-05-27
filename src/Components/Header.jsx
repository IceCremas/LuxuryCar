import React from "react";
import footer from './Footer'
import { useNavigate } from "react-router-dom";



export default function Header(){
    

    const navigate = useNavigate();
    return(
        <div>
        <header>
            <div className="container"> 
                <div className="header_content">

                <div className="logo">
                    <img src="./img/logo.png" alt="#" /></div>
                <ul className="nav__menu">
                    <li><a href="#" onClick={() => navigate('/catalog')}>НАШ АВТОПАРК</a></li>
                     <li><a href="#" onClick={() => navigate('/booking')}>ЗАБРАНИРОВАТЬ</a></li>
                </ul>
                <div className="phone__number"><p>+971 52 389 89 89</p></div>
                </div>
            </div>
        </header> 

        <section className="hero">
           <div className="container">
            <div className="hero__content">

             <div className="hero__info">
                <h1>Покорите дороги за рулём легендарных автомобилей!</h1>
                <p>От эксклюзивных спорткаров до гоночных шедевров — выбирайте мечту, садитесь за руль и ощутите мощь премиального авто на полную!</p>
                <button className="hero__button" onClick={() => navigate('/catalog')}>Посмотреть автомобили</button>
            </div>
            <div className="hero__image">
                <img src="./img/website-logo.png" alt="Luxury car" />
            </div>
            </div>
           </div>
        </section>  
        </div>            
    )
}