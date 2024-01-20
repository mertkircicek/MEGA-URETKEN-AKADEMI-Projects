import React from 'react';
import "./About.css";
import images from '../../constants/images';

const About = () => {
  return (
    <section className='about section-p bg-dark' id = "about">
        <div className='container'>
            <div className='about-content grid text-center'>
                <div className = "content-left">
                    <img src = {images.about_main_img} alt = "" />
                </div>
                <div className='content-right'>
                    <div className='section-t'>
                        <h3>BELEDİYE HAKKINDA</h3>
                    </div>
                    <p className = "text">Konya Büyükşehir Belediyesine bağlı olarak Konya Meram ilçesindeki bölgelerden sorumlu belediyedir.</p>
                    <p className='text'>Meram Belediye Başkanı Mustafa Kavuş'tur. 
                    Meramın daha yaşanabilir olması için ve halkın ihtiyaçlarına göre çalışmalar yapan belediyemiz çalışmalarını devam ettirmektedir.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About