import React from 'react';
import Menu from '../../Components/Menu/index';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../Components/BannerMain';
import Carousel from '../../Components/Carousel';
import Footer from '../../Components/Footer';

function Home() {
  return (
    <div style={{ background:"black" }}>
      
      <Menu/>

      <BannerMain 
        videoTitle={dadosIniciais.categorias[3].videos[1].titulo}
        url={dadosIniciais.categorias[3].videos[1].url}
        videoDescription={"Você conhece o novo som que está procurando? Bem, ouça isso! O futuro inteiro de Marty McFly se baseia em ser capaz de tocar violão na dança Enchantment Under the Sea de seus pais, desde 1955. Assista a ele tocando Earth Angel e Johnny B. Goode!"}
      />

      <Carousel 
        // ignoreFirstVideo
        category={dadosIniciais.categorias[3]}
      />


      <Footer/>

    </div>
  );
}

export default Home;
