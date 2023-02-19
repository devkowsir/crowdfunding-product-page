import { useContext } from 'react';
import { BackerContext } from '../store/Backer';

const amountFormatter = new Intl.NumberFormat('en-US', { currency: 'USD', style: 'currency', maximumFractionDigits: 0 });
const numberFormatter = new Intl.NumberFormat('en-US');

function Discover() {
  const { backerState } = useContext(BackerContext);

  return (
    <section id="discover" className="discoveries container">
      <div className="discoveries__discover">
        <p className="discoveries__title">{amountFormatter.format(backerState.backed)}</p>
        <p className="discoveries__description">of $100,000 backed</p>
      </div>
      <div className="discoveries__discover">
        <div className="discoveries__title">{numberFormatter.format(backerState.backers)}</div>
        <div className="discoveries__description">total backers</div>
      </div>
      <div className="discoveries__discover">
        <div className="discoveries__title">56</div>
        <div className="discoveries__description">days left</div>
      </div>
      <div className="discoveries__progress">
        <div style={{ width: `${backerState.backed / 1000}%` }}></div>
      </div>
    </section>
  );
}

export default Discover;
