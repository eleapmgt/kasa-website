import { useState } from 'react';
import Arrow from '../../assets/arrow.svg';

function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  const display = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="collapse">
      <div className="collapse__header">
        <h3 className="collapse__title">{title}</h3>
        <button className="collapse__button" onClick={display}>
          <img
            src={Arrow}
            alt={isOpen ? 'Expand' : 'Collapse'}
            className={`collapse__arrow ${isOpen ? 'rotate' : ''}`}
          />
        </button>
      </div>
      <div
        className={`collapse__content collapse__content${isOpen ? '--open' : '--close'}`}
      >
        <p>{text}</p>
      </div>
    </article>
  );
}

export default Collapse;
