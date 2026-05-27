import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCar } from "../../api";

export default function AdminPanel() {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        img: "",
        price_day1: "",
        price_day1_3: "",
        price_day3_plus: ""
    });

    const handleLogin = (e) => {
        e.preventDefault();
        
        if (password === "admin123") {
            setIsAuthenticated(true);
        } else {
            alert("Неверный пароль!");
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const result = await addCar(formData);
            alert("Машина добавлена!");
            setFormData({
                name: "",
                description: "",
                img: "",
                price_day1: "",
                price_day1_3: "",
                price_day3_plus: ""
            });
        } catch (error) {
            console.error("Ошибка:", error);
            alert("Ошибка при добавлении");
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="admin__login">
                <div className="admin__form">
                    <h2>Вход в админ-панель</h2>
                    <form onSubmit={handleLogin}>
                        <input
                            type="password"
                            placeholder="Введите пароль"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit">Войти</button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="admin__panel">
            <div className="admin__container">
                <h2>Добавить новый автомобиль</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Название машины (например: BMW M4 Competition)"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="description"
                        placeholder="Описание"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="img"
                        placeholder="Путь к картинке (например: /img/10.png)"
                        value={formData.img}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="number"
                        name="price_day1"
                        placeholder="Цена на 1 сутки"
                        value={formData.price_day1}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="number"
                        name="price_day1_3"
                        placeholder="Цена на 1-3 суток"
                        value={formData.price_day1_3}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="number"
                        name="price_day3_plus"
                        placeholder="Цена на 3+ суток"
                        value={formData.price_day3_plus}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Добавить машину</button>
                </form>
                <button onClick={() => navigate("/")}>На главную</button>
            </div>
        </div>
    );
}