import React from 'react';

const Button = ({ type, title, icon, variant, full, onClick }) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant} ${full ? 'w-full' : ''}`}
      type={type}
      onClick={onClick}
    >
      {icon && <img src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  );
};

export default Button;
