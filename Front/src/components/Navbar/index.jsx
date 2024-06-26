import React from 'react';
import Button from '../../components/Button';
import { NAV_LINKS } from '../../constants';
import Logo from '../../assets/public/logoo.svg';
import Menu from '../../assets/public/menu.svg';
import User from '../../assets/public/user.svg';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <a>
          <img src={Logo} alt="logo" width={74} height={29} />
        </a>

      <ul className="hidden h-full gap-12 lg:flex">
        
          <li>
           
              <a onClick={() => {navigate('/') }} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                Home
              </a>
            
          </li>
          <li>
           
           <a onClick={() => {navigate('/') }} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
             Ajuda
           </a>
         
       </li>
       <li>
           
           <a onClick={() => {navigate('/') }} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
             Entrar em Contato
           </a>
         
       </li>
       <li>
           
           <a onClick={() => {navigate('/') }} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
             Quem Somos?
           </a>
         
       </li>
     
     
        
      </ul>

      <div className="lg:flexCenter hidden">
        <Button 
          onClick={() => {navigate('/login') }}
          type="button"
          title="Login"
          icon={User}
          variant="btn_dark_green"
        />
      </div>

      <img
        src={Menu}
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
