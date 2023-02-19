import { useContext } from 'react';

import About from './components/About';
import Banner from './components/Banner';
import Discover from './components/Discover';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import PledgeList from './components/PledgeList';
import { PledgeModalContext } from './store/PledgeModalProvider';

import './App.css';

function App() {
  const { pledgeModal, pledgeModalToggler } = useContext(PledgeModalContext);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Banner />
        <Discover />
        <About />
        {pledgeModal && (
          <Modal onClose={pledgeModalToggler}>
            <PledgeList isModal={true} />
          </Modal>
        )}
      </main>
    </>
  );
}

export default App;
