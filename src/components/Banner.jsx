import { useContext, useState } from 'react';
import { PledgeModalContext } from '../store/PledgeModalProvider';

function Banner() {
  const [bookmarked, setBookmarked] = useState(false);
  const { pledgeModalToggler } = useContext(PledgeModalContext);
  return (
    <section className="banner container">
      <img className="banner__logo" src="/images/logo-mastercraft.svg" alt="mastercraft logo" />
      <h1 className="banner__header">Mastercraft Bamboo Monitor Riser</h1>
      <p className="banner__description">A beautiful & handcrafted monitor strand to reduce neck and eye strain.</p>
      <div className="banner__footer">
        <button className="button--primary" type="button" onClick={pledgeModalToggler}>
          Back this project
        </button>
        <button className={`button--secondary${bookmarked ? ' button--bookmarked' : ''}`} type="button" onClick={() => setBookmarked((curr) => !curr)}>
          <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
              <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
            </g>
          </svg>
          <span>{bookmarked ? 'Bookmarked' : 'Bookmark'}</span>
        </button>
      </div>
    </section>
  );
}

export default Banner;
