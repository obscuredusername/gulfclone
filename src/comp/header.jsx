import React, { useState, useEffect } from 'react';

function Header({title}) {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);

  }, []);

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{title}</h1>
      <p>{formattedDate}</p>
    </div>
  );
}

export default Header;
