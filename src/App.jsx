import React from 'react';
import './App.css';
import UserCard from './UserCard';
import GreetingForm from './GreetingForm';

function App() {
  return (
    <div className="App flex items-center p-6">
      <div className='border mx-auto p-6 rounded-lg'>
        <h1 className="text-3xl font-bold mb-6 text-[#FF5733]"> kunochdigi React Assessment</h1>
        <div>
          <UserCard name="Chukwuebuka Osuji" email="chukwuebuka@example.com" />
          <GreetingForm />
        </div>
      </div>
    </div>
  );
}

export default App;
