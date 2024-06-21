import { useState } from 'react';
import UpArrow from '../../assets/up-arrow.svg';
import DownArrow from '../../assets/down-arrow.svg';

function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  const display = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="collapse">
      <div className="collapse__header">
        <h2 className="collapse__title">{title}</h2>
        <button className="collapse__button" onClick={display}>
          <img
            src={isOpen ? UpArrow : DownArrow}
            alt={isOpen ? 'Collapse' : 'Expand'}
            className="collapse__arrow"
          />
        </button>
      </div>
      <div className={`collapse__content${isOpen ? '--open' : '--close'}`}>
        {text}
      </div>
    </article>
  );
}

export default Collapse;
