'use client';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import TablaRelaciones from './Componentes/TablaRelaciones';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './page.css'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

export default function Home() {
  return (
    <main>
      <h1>aaa</h1>
      
    <div className='DivMayor'>
      <div className='divGrid' id='divGrid'>
      <TablaRelaciones titulo="Fuego" imagen="/imagenes/Fuego.png" tipo="fire" />
      <TablaRelaciones titulo="Lucha" imagen="/imagenes/Lucha.png" tipo="fighting"/>
      <TablaRelaciones titulo="Tierra" imagen="/imagenes/Tierra.png" tipo="ground" />
      <TablaRelaciones titulo="Psíquico" imagen="/imagenes/Psiquico.png" tipo="psychic" />
      <TablaRelaciones titulo="Eléctrico" imagen="/imagenes/Electrico.png" tipo="electric" />
      <TablaRelaciones titulo="Roca" imagen="/imagenes/Roca.png" tipo="rock" />
      <TablaRelaciones titulo="Bicho" imagen="/imagenes/Bicho.png" tipo="bug" />
      <TablaRelaciones titulo="Planta" imagen="/imagenes/Planta.png" tipo="grass" />
      <TablaRelaciones titulo="Hielo" imagen="/imagenes/Hielo.png" tipo="ice" />
      <TablaRelaciones titulo="Acero" imagen="/imagenes/Acero.png" tipo="steel" />
      <TablaRelaciones titulo="Agua" imagen="/imagenes/Agua.png" tipo="water" />
      <TablaRelaciones titulo="Vuelo" imagen="/imagenes/Vuelo.png" tipo="flying" />
      <TablaRelaciones titulo="Dragón" imagen="/imagenes/Dragon.png" tipo="dragon" />
      <TablaRelaciones titulo="Veneno" imagen="/imagenes/Veneno.png" tipo="poison" />
      <TablaRelaciones titulo="Hada" imagen="/imagenes/Hada.png" tipo="fairy" />
      <TablaRelaciones titulo="Fantasma" imagen="/imagenes/Fantasma.png" tipo="ghost" />
      <TablaRelaciones titulo="Siniestro" imagen="/imagenes/Siniestro.png" tipo="dark" />
      <TablaRelaciones titulo="Normal" imagen="/imagenes/Normal.png" tipo="normal" />
      </div>
    </div>
      
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      
      <div className="container">
      <h1 className="heading">Flower Gallery</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        navigation={true}
        slidesPerView={'auto'}
        spaceBetween={5}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='tarjetapokebola'>
        <div>
        <h2 className='Titulopokebola'>Poke Ball</h2>
        <img src="./pokeballs/Poke_Ball.png" className='imagenpokebola'/>
        <h4>Capture ratio: 1</h4>
        <p>It is used to capture Pokémon. It is considered the most common ball.</p>
        </div>
        </SwiperSlide>

        <SwiperSlide className='tarjetapokebola'>
        <div>
        <h2 className='Titulopokebola'>Super Ball</h2>
        <img src="./pokeballs/Super_Ball.png" className='imagenpokebola'/>
        <h4>Capture ratio: 1.5</h4>
        <p>It is used to capture Pokémon, with a higher success rate than the Poké Ball, but less than the Ultra Ball. Therefore, it is intermediate in general use.</p>
        </div>
        </SwiperSlide>

        <SwiperSlide className='tarjetapokebola'>
        <div>
        <h2 className='Titulopokebola'>Ultra Ball</h2>
        <img src="./pokeballs/Ultra_Ball.png" className='imagenpokebola'/>
        <h4>Capture ratio: 2</h4>
        <p>It is used to capture Pokémon, with a higher success rate than the Super Ball. Therefore, it is the most effective in general use.</p>
        </div>
        </SwiperSlide>

        <SwiperSlide className='tarjetapokebola'>
        <div>
        <h2 className='Titulopokebola'>Master Ball</h2>
        <img src="./pokeballs/Master_Ball.png" className='imagenpokebola'/>
        <h4>Capture ratio: 255</h4>
        <p>It is used to capture Pokémon in only one use, being the best ball of all, since it never fails.</p>
        </div>
        </SwiperSlide>

        <SwiperSlide className='tarjetapokebola'>
        <div>
        <h2 className='Titulopokebola'>Level Ball</h2>
        <img src="./pokeballs/Level_Ball.png" className='imagenpokebola'/>
        <h4>Capture ratio:</h4>
        <p>
          - x1 when the level of the trainer's Pokémon is equal to or lower than the level of the target's level.
          - x2 when the level of the trainer's Pokémon is higher than the target's level.
          - x4 when the level of the trainer's Pokémon is twice or more than the target's level.
          - x8 when the level of the trainer's Pokémon is four times or more than the target's level.</p>
        </div>
        </SwiperSlide>

        <SwiperSlide className='tarjetapokebola'>
        <div>
        <h2 className='Titulopokebola'>Rapid Ball</h2>
        <img src="./pokeballs/Rapid_Ball.png" className='imagenpokebola'/>
        <p>
          It is used to capture Pokémon that flee with ease or with high speed
          - if used against a Pokémon with a base speed of 100 or more, the capture ratio will be x4 .
          - if used against a Pokémon with a base speed less than 100, the capture ratio will be x1 .
        </p>
        </div>
        </SwiperSlide>

        <SwiperSlide className='tarjetapokebola'>
        <div>
        <h2 className='Titulopokebola'>Quick Ball</h2>
        <img src="./pokeballs/Quick_Ball.png" className='imagenpokebola'/>
        <h4>Capture ratio:</h4>
        <p>
          If used on the first turn of a combat, the ratio multiplier is x5.
          If used on subsequent turns, the ratio multiplier is x1.
        </p>
        </div>
        </SwiperSlide>

        <SwiperSlide className='tarjetapokebola'>
        <div>
        <h2 className='Titulopokebola'>Love Ball</h2>
        <img src="./pokeballs/Love_Ball.png" className='imagenpokebola'/>
        <h4>Capture ratio: 8</h4>
        <p>Increases the chance of capturing a Pokémon of the same species as the one used by the user, as long as they are of the opposite gender.</p>
        </div>
        </SwiperSlide>

      </Swiper>
    </div>
    </main>
  )
}
