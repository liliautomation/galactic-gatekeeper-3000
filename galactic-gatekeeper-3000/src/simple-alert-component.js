import React from 'react';

const Alert = ({ children, type }) => {
  const backgroundColor = type === 'success' ? '#d4edda' : '#f8d7da';
  const textColor = type === 'success' ? '#155724' : '#721c24';
  const borderColor = type === 'success' ? '#c3e6cb' : '#f5c6cb';

  const alertStyle = {
    padding: '10px',
    margin: '10px 0',
    border: `1px solid ${borderColor}`,
    borderRadius: '4px',
    backgroundColor: backgroundColor,
    color: textColor,
  };

  return <div style={alertStyle}>{children}</div>;
};

export default Alert;
