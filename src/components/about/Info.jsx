import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title"> Idiomas</h3>
        <span className="about__subtitle"> Ingles - Nivel intermedio</span>
      </div>
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>
        <h3 className="about__title">Logro</h3>
        <span className="about__subtitle">Quinto superior</span>
      </div>
      <div className="about__box">
        <i class="bx bx-support about__icon"></i>
        <h3 className="about__title">Soporte</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
