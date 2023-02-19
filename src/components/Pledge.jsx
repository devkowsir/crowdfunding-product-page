import { useContext } from 'react';
import { PledgeContext } from '../store/Pledge';
import { PledgeModalContext } from '../store/PledgeModalProvider';

function Pledge({ data: { id, title, description, amount, left }, isModal, onSubmit } = props) {
  const { selectedPledge, setSelectedPledge } = useContext(PledgeContext);
  const { pledgeModalToggler } = useContext(PledgeModalContext);

  const classes = `pledge${left === 0 ? ' pledge--disabled' : ''}${selectedPledge === id ? ' pledge--selected' : ''}${isModal ? ' pledge--modal' : ''}`;

  if (!isModal && amount === 0) return null;

  const selectBtnClickHandler = () => {
    pledgeModalToggler();
    setSelectedPledge(id);
  };

  const pledgeClickHandler = (e) => {
    e.stopPropagation();
    if (left === 0 && amount !== 0) {
      return;
    }
    setSelectedPledge(id);
  };

  return (
    <div className={classes}>
      <div className="pledge__header" onClick={pledgeClickHandler}>
        <h3>{title}</h3>
        {amount > 0 && <p>Pledge ${amount} or more</p>}
      </div>
      <div className="pledge__body">
        <p>{description}</p>
        {amount > 0 && (
          <div>
            <span>{left}</span>
            <span>left</span>
          </div>
        )}
      </div>
      {!isModal && (
        <div className="pledge__footer">
          {left === 0 ? (
            <button className="button--primary" type="button" disabled>
              Out of Stock
            </button>
          ) : (
            <button className="button--primary" type="button" onClick={selectBtnClickHandler}>
              Select Rewards
            </button>
          )}
        </div>
      )}
      {isModal && selectedPledge === id && (
        <div className="pledge__footer">
          <p>Enter your pledge</p>
          <form onSubmit={onSubmit}>
            <div>
              <input type="number" min={amount} defaultValue={amount} />
            </div>
            <button className="button--primary" type="submit">
              Continue
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Pledge;
