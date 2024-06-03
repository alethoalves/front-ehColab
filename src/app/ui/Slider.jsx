import Image from 'next/image';
import image1 from "../../public/image1.png";
import image2 from "../../public/image2.png";
import image3 from "../../public/image3.png";
import image4 from "../../public/image4.png";
import { useState, useEffect } from 'react';

export function Slider() {
    const [count, setCount] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 5000);

        return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count]); // Adicionamos count como uma dependência para o useEffect, para que ele seja reexecutado sempre que count mudar

    const nextImage = () => {
        let nextCount = count + 1;
        if (nextCount > 4) {
            nextCount = 1;
        }
        setCount(nextCount);
    };

    useEffect(() => {
        document.getElementById(`radio${count}`).checked = true;
    }, [count]); // Adicionamos count como uma dependência para este useEffect também

    return (
        <div className="slider">
            <div className='bg-gradient'></div>
            <div className="slides">
                <input type="radio" name='radio-btn' id='radio1'/>
                <input type="radio" name='radio-btn' id='radio2'/>
                <input type="radio" name='radio-btn' id='radio3'/>
                <input type="radio" name='radio-btn' id='radio4'/>
                <div className="slide first">
                    <div className='img-desc'>
                        <h4>Liberdade</h4>
                        <h3>Explore possibilidades ilimitadas</h3>
                    </div>
                    <Image src={image1} alt="image1" fill sizes="(max-width: 489px) 100vw, (max-width: 489px) 50vw, 33vw"/>
                </div>
                <div className="slide">
                    <div className='img-desc'>
                        <h4>Agilidade</h4>
                        <h3>Rápido, fácil e eficiente</h3>
                    </div>
                    <Image src={image2} alt="image2" fill sizes="(max-width: 489px) 100vw, (max-width: 489px) 50vw, 33vw"/>
                </div>
                <div className="slide">
                    <div className='img-desc'>
                        <h4>Inovação</h4>
                        <h3>Gerenciamento moderno e inovador</h3>
                    </div>
                    <Image src={image3} alt="image3" fill sizes="(max-width: 489px) 100vw, (max-width: 489px) 50vw, 33vw"/>
                </div>
                <div className="slide">
                    <div className='img-desc'>
                        <h4>Customização</h4>
                        <h3>Feito sob medida para seu evento</h3>
                    </div>
                    <Image src={image4} alt="image4" fill sizes="(max-width: 489px) 100vw, (max-width: 489px) 50vw, 33vw"/>
                </div>
                <div className="navigation-auto">
                    <div className="auto-btn1"></div>
                    <div className="auto-btn2"></div>
                    <div className="auto-btn3"></div>
                    <div className="auto-btn4"></div>
                </div>
            </div>
            {
                /****** 
                <div className="manual-navigation">
                <label for="radio1" className='manual-btn'></label>
                <label for="radio2" className='manual-btn'></label>
                <label for="radio3" className='manual-btn'></label>
                <label for="radio4" className='manual-btn'></label>
                </div>
                ******/
            }
            
        </div>
    )
  }

