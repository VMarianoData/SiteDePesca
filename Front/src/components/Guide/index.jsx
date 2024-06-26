import React from "react";
import Logo from '../../assets/public/logoo.svg';
import Boat from '../../assets/public/boat.png';
import Meter from '../../assets/public/meter.svg';


const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <img src={Logo} alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-black">
          Por que Pescar em Alto Mar 
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Importância de Pescar
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Pescar é uma experiência que nos conecta com a natureza,
            proporcionando momentos de tranquilidade e satisfação. É uma
            oportunidade para relaxar, explorar novos lugares e criar memórias
            com amigos e familiares. A sensação de capturar um peixe e a
            conexão com o ambiente ao nosso redor tornam essa atividade
            verdadeiramente especial.
          </p>
        </div>
      </div>
      <div className="flexCenter max-container relative w-full">
        <img
          src={Boat}
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-blue-70 py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <img
            src={Meter}
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-white">Guarujá</p>
                <p className="bold-16 text-white">70 km</p>
              </div>
              <p className="bold-20 text-white mt-2">Perequê</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-white">São Paulo</p>
              <h4 className="bold-20 mt-2 text-white whitespace-nowrap">
                Diadema Centro
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;