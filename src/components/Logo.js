import React from 'react';
import logoSrc from '../assets/logo.png';

export default function Logo({ height = 48, onClick, style = {} }) {
  return (
    <img
      src={logoSrc}
      alt="GVV Driving School"
      onClick={onClick}
      style={{
        height,
        width: 'auto',
        maxWidth: '100%',
        objectFit: 'contain',
        objectPosition: 'center',
        display: 'block',
        verticalAlign: 'middle',
        cursor: onClick ? 'pointer' : undefined,
        ...style,
      }}
    />
  );
}
