import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Body.css'
function Body() {
  
    return (
       
                <Carousel>
    <Carousel.Item>
    <img src={require('./jaleco.webp')} alt="Imagem do carrossel" className='imagens'/>
      <Carousel.Caption>
        <h3>Aqui cuidaremos de você de verdade </h3>
        <p>Pare de perder tempo procurando bons profissionais</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src={require('./medback.webp')} alt="Imagem do carrossel" className='imagens'/>
      <Carousel.Caption>
        <h3>Temos os melhores profissionais para você</h3>
        <p>Sabe aquele medo de se consultar com um profissional desconhecido? Aqui temos os feedbacks dos profissionais que você precisa</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src={require('./media.webp')} alt="Imagem do carrossel" className='imagens'/>
      <Carousel.Caption>
        <h3>Em construção para um futuro com mais atenção para você</h3>
        <p>
          Prezamos sempre pela qualidade
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

        
  );
}

export default Body;