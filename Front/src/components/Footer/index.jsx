import React from 'react';
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '../../constants';
import Logo from '../../assets/public/logoo.svg';
import Facebook from '../../assets/public/facebook.svg';
import Instragam from '../../assets/public/instagram.svg';
import Twitter from '../../assets/public/twitter.svg';
import Youtube from '../../assets/public/youtube.svg';

const Footer = () => {
  return (
    <footer className="flexCenter mb-24 mt-60">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          
            <a className="mb-10">
            <img src={Logo} alt="logo" width={74} height={29} />
            </a>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn key={columns.title} title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <li key={link}>
                
                        <a>{link}</a>
                      
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                 
                    <a className="flex gap-4 md:flex-col lg:flex-row">
                      <p className="whitespace-nowrap">{link.label}:</p>
                      <p className="medium-14 whitespace-nowrap text-blue-70">{link.value}</p>
                    </a>
                 
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  
                    <li>
                  
                        <a>
                          <img src={Facebook} alt="logo" width={24} height={24} />

                        </a>
                      
                    </li>
                    <li>
                  
                        <a>
                          <img src={Instragam} alt="logo" width={24} height={24} />
                          
                        </a>
                      
                    </li>
                    <li>
                    <a>
                          <img src={Twitter} alt="logo" width={24} height={24} />
                          
                        </a>
                      
                    </li>
                    <li>
                    <a>
                          <img src={Youtube} alt="logo" width={24} height={24} />
                          
                        </a>
                      
                    </li>
              
              
              
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">Obrigado por visitar nosso site! Estamos dedicados a proporcionar a melhor experiência possível.
        <p>Entre em contato conosco para qualquer dúvida!!</p> </p>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
