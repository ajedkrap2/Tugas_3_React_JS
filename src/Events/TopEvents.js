import React from 'react';

const TopEvents = () => {
  const HandleFooter = (value, e) => {
    e.preventDefault()
    alert(value)
  }

  return (
    <div>
      <a href="/" onClick={e => HandleFooter("Back to Home", e)}>
        Back To Home
        </a>
    </div>
  );
}

export default TopEvents;
