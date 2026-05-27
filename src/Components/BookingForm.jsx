    import {  useState } from "react";
    import { useNavigate, useLocation } from "react-router-dom";
    import { createBooking } from "../../api";


    export default function BookingForm(){
        const navigate = useNavigate();
        const location = useLocation();
        const carName = location.state?.car?.name || 'не выбрана';

        const [formData, setFormData] = useState({
            name:'',
            phone: '',
            email: '',
            car: carName
        });
const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const bookingData = {
            car_name: carName,
            customer_name: formData.name,
            phone: formData.phone,
            email: formData.email,
            days: '1',
            total_price: 0
        };
        
        const result = await createBooking(bookingData);
        alert(result.message);
        navigate('/');
    } catch (error) {
        console.error('Ошибка:', error);
        alert('Ошибка при бронировании');
    }
};
        const  handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };
        return (
        <>
            <div className="booking__page">
        <div className="booking__logo">
            <img src="./img/order-car.png" alt="#"/>
        </div>
                <div className="booking__form">
                    <h2>Забронируйте автомобиль: <strong>{carName}</strong></h2>
                    <p>Заполните контактные данные, и мы перезвоним вам для обсуждения деталей и подтверждения бронирования</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Ваше имя"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Номер телефона"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    <div className="booking__buttons">
                        <button type="submit">Забранировать</button>
                        <button onClick={() => navigate("/")}>Назад к машинам</button>
                    </div>
                    </form>
                </div>
            </div>
            </>
        );
    }