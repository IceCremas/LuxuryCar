import { useState } from "react";
import Items from "./Items";
import Footer from "./Footer";


const cars = [
    {
        id: 1,
        name: "BMW M4 Competition",
        description: "Идеальный баланс скорости и стиля. BMW M4 Competition — 510 л.с. и драйв, созданный для покорения трасс и городских улиц.",
        img: "/img/1.png",  
        prices: {
            day1: 1450,
            day1_3: 1300,
            day3_plus: 1100
        }
    },
    {
        id: 2,
        name: "BMW M5",
        description: "Бизнес-класс с душой гонщика. BMW M5: 600 л.с., интеллектуальный полный привод и комфорт для самых требовательных.",
        img: "/img/2.png",
        prices: {
            day1: 1600,
            day1_3: 1450,
            day3_plus: 1250
        }
    },
    {
        id: 3,
        name: "Lamborghini Huracan Spyder Green",
        description: "Воплощение скорости и страсти. Зеленый Lamborghini Huracan Spyder — мощь 640 л.с. и открытый верх для ярких приключений.",
        img: "/img/3.png",
        prices: {
            day1: 3200,
            day1_3: 2900,
            day3_plus: 2600
        }
    },
    {
        id: 4,
        name: "Ferrari F8 Spider",
        description: "Мечта на колесах. Ferrari F8 Spider: 720 л.с., аэродинамика F1 и открытая кабина для тех, кто живет на полной скорости.",
        img: "/img/4.png",
        prices: {
            day1: 3500,
            day1_3: 3200,
            day3_plus: 2900
        }
    },
    {
        id: 5,
        name: "Porsche 911 Targa 4S Yellow",
        description: "Элегантная мощь в ярком цвете. Porsche 911 Targa 4S: полный привод, 450 л.с. и уникальный стиль Targa.",
        img: "/img/5.png",
        prices: {
            day1: 1800,
            day1_3: 1650,
            day3_plus: 1450
        }
    },
    {
        id: 6,
        name: "Mercedes SL 55 AMG",
        description: "Классика спортивного шика. Mercedes SL 55 AMG: роскошь, кабриолет и мощь 469 л.с. для незабываемых поездок.",
        img: "/img/6.png",
        prices: {
            day1: 1700,
            day1_3: 1550,
            day3_plus: 1350
        }
    },
    {
        id: 7,
        name: "BMW Z4",
        description: "Компактный кабриолет для стильных путешествий. BMW Z4: идеальный союз маневренности, мощности и элегантного дизайна.",
        img: "/img/7.png",
        prices: {
            day1: 1200,
            day1_3: 1100,
            day3_plus: 950
        }
    },
    {
        id: 8,
        name: "Mercedes C180 Convertible",
        description: "Идеальный выбор для солнечного дня. Mercedes C180 Convertible: кабриолет для легкого и комфортного вождения.",
        img: "/img/8.png",
        prices: {
            day1: 1000,
            day1_3: 900,
            day3_plus: 800
        }
    },
    {
        id: 9,
        name: "Chevrolet Corvette Orange",
        description: "Яркий, мощный, незабываемый. Chevrolet Corvette в оранжевом цвете: 495 л.с. и стиль, который говорит сам за себя.",
        img: "/img/9.png",
        prices: {
            day1: 1400,
            day1_3: 1250,
            day3_plus: 1100
        }
    }
];

const brands = ["Все марки", "BMW", "Mercedes", "Lamborghini", "Ferrari", "Porsche", "Chevrolet"];

export default function Catalog() {
    const [selectedBrand, setSelectedBrand] = useState("Все марки");

    const filteredCars = cars.filter(car => {
        if (selectedBrand === "Все марки") return true;
        return car.name.includes(selectedBrand);
    });

    return (
        <>
        <div className="catalog__page">
            <ul className="catalog__filter">
                {brands.map(brand => (
                    <li 
                        key={brand}
                        className={selectedBrand === brand ? "active" : ""}
                        onClick={() => setSelectedBrand(brand)}
                    >
                        {brand}
                    </li>
                ))}
            </ul>

            <div className="cars__grid">
                {filteredCars.map(item => (
                    <Items key={item.id} item={item} />
                ))}
            </div>
        </div>
        <Footer/>
        </>
    );
}