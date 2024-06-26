import React from 'react';


const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {/* Replace with your custom image component (if needed) */}
            {/* {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
              />
            ))} */}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Pescaria em Alto Mar"
          subtitle="Guarujá,SP"
        />
        <CampSite backgroundImage="bg-bg-img-2" title="" subtitle="" peopleJoined="" />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-blue-70 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Bora pescar </strong> Já pensou nos beneficos da Pesca?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            A pesca em alto mar oferece uma experiência emocionante e enriquecedora, conectando os pescadores com a natureza e promovendo o crescimento pessoal. Respeitando as regulamentações ambientais para garantir a preservação dos recursos marinhos.
          </p>
          {/* Replace with your custom image component (if needed) */}
          {/* <Image src="/quote.svg" alt="camp-2" width={186} height={219} className="camp-quote" /> */}
        </div>
      </div>
    </section>
  );
};

export default Camp;