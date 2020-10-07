import React from 'react';

const section = [
  "Home",
  "Product",
  "Kontak",
  "Tentang Kami"
]

const Header = () => {

  return (
    <div className="header">
      {section.map((value, index) => {
        if (index > 0) {
          return "| " + value + " "
        } else return value + " "
      })}
    </div>
  );
}


export default Header;
