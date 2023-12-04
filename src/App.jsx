import { useState, useEffect } from 'react';
import './App.css';
import profileImage from './assets/IMG_0442k.jpg'; 
import CoinFlip from './Components/CoinFlip';

function App() {
  const [timeElapsed, setTimeElapsed] = useState('');

  useEffect(() => {
    const targetDate = new Date('2023-06-24T21:32:00'); 

    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const difference = currentDate - targetDate;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      const elapsedTime = ` ${days}d ${hours}h ${minutes}m ${seconds}s`;
      setTimeElapsed(elapsedTime);
    }, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="card w-[40rem] h-[40rem]  flex flex-col gap-10  ">
        <div className="business-card rounded-lg  shadow-lg justify-center w-full p-28   ">
          <img
            src={profileImage}
            alt="Your Profile"
            className="rounded-full w-40 h-40 mb-4 object-cover shadow-lg "
          />
          <h2 className="text-xl font-bold">Rina und Lind</h2>
          <p>{timeElapsed}</p>
          
        </div>
        <CoinFlip />
      </div>
    </>
  );
}

export default App;