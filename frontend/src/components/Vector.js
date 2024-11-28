import React from 'react';

const Vector = ({ left, right, top, bottom }) => {
  const style = {
    position: 'absolute',
    left: `${left}%`,
    right: `${right}%`,
    top: `${top}%`,
    bottom: `${bottom}%`,
    backgroundColor: '#2377D7',
    opacity: 0.5,
    transform: 'rotate(-180deg)',
  };

  return <div style={style} className="rounded-lg"></div>;
};

export default Vector;
