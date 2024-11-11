import React from 'react';

const UserCard = ({ name, email }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-md max-w-xs mx-auto">
      <h3 className="text-xl text-gray-600  font-semibold ">{name}</h3>
      <p className="text-gray-500 text-xs mt-3">{email}</p>
    </div>
  );
};

export default UserCard;
