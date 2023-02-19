import { useContext, useState } from 'react';
import { BackerContext } from '../store/Backer';
import { PledgeContext } from '../store/Pledge';
import { PledgeModalContext } from '../store/PledgeModalProvider';
import Pledge from './Pledge';

const PLEDGES = [
  {
    id: 1,
    title: 'Pledge with no reward',
    description: 'Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.',
    amount: 0,
  },
  {
    id: 2,
    title: 'Bamboo Stand',
    description: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
    amount: 25,
    left: 101,
  },
  {
    id: 3,
    title: 'Black Edition Stand',
    description: "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
    amount: 75,
    left: 64,
  },
  {
    id: 4,
    title: 'Mahogany Special Edition',
    description: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
    amount: 200,
    left: 0,
  },
];

function PledgeList({ isModal }) {
  const [isPledged, setIsPledged] = useState(false);
  const { selectedPledge, setSelectedPledge } = useContext(PledgeContext);
  const { setBackerState } = useContext(BackerContext);
  const { pledgeModalToggler } = useContext(PledgeModalContext);

  const pledgeModalCloser = (e) => {
    e.stopPropagation();

    pledgeModalToggler();
  };

  const gotItButtonClickHandler = (e) => {
    e.stopPropagation();
    setIsPledged(false);
    pledgeModalToggler();
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setIsPledged(true);
    setSelectedPledge(null);
    setBackerState((curr) => ({ backed: curr.backed + e.target[0].valueAsNumber, backers: curr.backers + 1 }));
    PLEDGES[selectedPledge - 1].left--;
  };

  if (isPledged)
    return (
      <div className="completed">
        <img src="/images/icon-check.svg" alt="pledge completed" />
        <h2>Thanks for your support!</h2>
        <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed. Got it!</p>
        <button className="button--primary" type="button" onClick={gotItButtonClickHandler}>
          Got it!
        </button>
      </div>
    );

  return (
    <>
      <div className="backing">
        {isModal && (
          <div className="backing__header">
            <div>
              <h2>Back this project</h2>
              <button onClick={pledgeModalCloser}>
                <img src="/images/icon-close-modal.svg" alt="close modal" />
              </button>
            </div>
            <p className="backing__description">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
          </div>
        )}
        <div className="backing__body">
          {PLEDGES.map((pledge) => (
            <Pledge key={pledge.id} data={pledge} onSubmit={submitHandler} isModal={isModal} />
          ))}
        </div>
      </div>
    </>
  );
}

export default PledgeList;
