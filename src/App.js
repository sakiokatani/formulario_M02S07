
import './App.css';
import { useState } from 'react';

//importação de componentes
import Form from './components/Form'
import Header from './components/Header';
import Card from './components/Card'

function App() {
  const [showCard, setShowCard] = useState(false);

  const handleButtonClick = () => {
    setShowCard(true);
  };

  return (
<>
    <div className="header-wrapper">
      <Header/>
      </div>

      <div className='body-wrapper'>
      <Form onButtonClick={handleButtonClick} />
      <Card />
    </div>

</>
  );
}

export default App;
