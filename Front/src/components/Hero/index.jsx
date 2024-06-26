import Button from "../Button"
import Pesca from '../../assets/public/pesca.svg';
import Pes from '../../assets/public/pes.svg';
import Close from '../../assets/public/closee.svg';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="max-container padding-container  flex flex-col
        gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
            <div className="hero-map" />

            {/* LEFT */}

            <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
                <img
                    src={Pesca}
                    alt="camp"
                    width={50}
                    height={50}
                    className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
                />
                <h1 className="bold-52 lg:bold-88">Pescaria Em Alto Mar</h1>
                <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
                    A pesca em alto mar é uma aventura emocionante e desafiadora, onde pescadores enfrentam a vastidão do oceano em busca de uma variedade de espécies marinhas.
                    Além da captura de peixes, a jornada envolve habilidades de navegação, segurança e preocupações com a sustentabilidade.
                    A recompensa de uma pescaria bem-sucedida inclui a sensação de conquista, camaradagem e conexão com a natureza.
                    É uma atividade que destaca a importância da preservação dos ecossistemas marinhos.
                </p>

                <div className="my-11 flex flex-wrap gap-5">
                    <div className="flex items-center gap-2">
                        {Array(5).fill(1).map((_, index) => (
                            <img
                                src={Pes}
                                key={index}
                                alt="star"
                                width={24}
                                height={24}
                            />
                        ))}
                    </div>

                    <p className="bold-16 lg:bold-20 text-blue-70">
                        Bora?
                        <span className="regular-16 lg:regular-20 ml-1">Agendar sua pesca</span>
                    </p>
                </div>
                <div className="flex flex-col w-ful gap-3 sm:flex-row">
                    <Button
                        type="button"
                        title="Procurar Barco"
                        variant="btn_green"
                        onClick={() => navigate('/boatList')}
                        style={{ color: 'white' }}
                    />
                    <Button
                        type="button"
                        title="Cadastrar Barco"
                        variant="btn_green"
                        onClick={() => navigate('/BoatForm')}
                        style={{ color: 'white' }}
                    />





                </div>
            </div>

            <div className="relative flex flex-1 items-start">
                <div className="relative z-20  flex w-[268px] flex-col gap-8 rounded-3xl bg-blue-70 px-7 py-8">


                    <div className="flex flex-col">
                        <div className="flexBetween">
                            <p className="regular-16 text-white">São Paulo-Diadema</p>
                            <img src={Close} alt="close" width={24} height={24} />
                        </div>

                        <p className="bold-20 text-white">Guarujá</p>
                    </div>

                    <div className="flexBetween">
                        <div className="flex flex-col">
                            <p className="regular-16 block text-white">Distancia</p>
                            <p className="bold-20 text-white">70 Km</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="regular-16 block text-white">Tempo Gasto</p>
                            <p className="bold-20 text-white">1hr 12min </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero  