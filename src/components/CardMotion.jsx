import { useEffect, useState, useRef } from "react";

import '../styles/cardMotion.css'


export default function CardMotion(){
    const [data, setData] = useState([]);
    const carousel = useRef(null);
    
    useEffect(() => {
        fetch('http://localhost:3000/static/cards.json')
        .then((response) => response.json())
        .then(setData)
    }, []);

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handleRightClick = (e) => {
        e.preventDefault();

        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    if (!data || !data.length) return null;

    return(
        <div className="container">
            <div className="carousel" ref={carousel}>
                {data.map((item) => {
                    const{id, name, description, image} = item;
                    return(
                        <div className="item" key={id}>
                            <div className="image">
                                <img src={image} alt={name} />
                            </div>
                            <div className="info">
                                <span className="name">{name}</span>
                                <span className="description">{description}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};