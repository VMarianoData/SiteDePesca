import React from 'react';
import Logo from '../../assets/public/logoo.svg';

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[50px]">
          {/* Add your content here (optional) */}
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <img
              src={Logo}
              alt="logoo"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Sobre a Pesca</h2>
            <p className="text-gray-20">Na Praia do Perequê, no Guarujá, a pesca é uma atividade tradicional e essencial. Suas águas tranquilas são ricas em diversidade marinha, proporcionando aos pescadores tanto iniciantes quanto experientes uma oportunidade única de capturar uma variedade de peixes. Além disso, a praia é conhecida por seus peixes frescos, que são apreciados localmente em pratos deliciosos nos restaurantes da região.</p> {/* Adiciona o texto "Pesca" em preto */}
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {/* Aqui você pode adicionar os itens dinâmicos de acordo com os seus dados */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
