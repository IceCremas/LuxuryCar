import {useNavigate} from 'react-router-dom'

export default function Items({ item }) { 
    
    const navigate = useNavigate();
    const hendleBooking = () => {
        navigate('/booking', {state: {car: item}})
    }
    return (
        <>
        <div className="item"> {/* flex */}
            <img src={item.img} alt={item.name} />
            <div className="info"> {/* flex / grid */}
                <div className="info__text">
                     <h1>{item.name}</h1>
                    <p>{item.description}</p>
                </div>
                
               <div>
                 <div className="prices"> {/* grid */}
                    <div className="price__item">
                        <div className="car__price">на 1 сутки</div>
                        <strong>{item.prices.day1} $</strong>
                    </div>
                    <div className="price__item">
                        <div className="car__price">на 1-3 суток</div>
                        <strong>{item.prices.day1_3} $ /сут</strong>
                    </div>
                    <div className="price__item">
                        <div className="car__price">на 3+ суток</div>
                        <strong>{item.prices.day3_plus} $ /сут</strong>
                    </div>
                </div>
                <button className="book__button" onClick={hendleBooking}>Забронировать</button>
               </div>
            </div>
        </div>  
        </>      
    );
}