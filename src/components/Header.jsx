import React, { useState } from 'react';
import { StyledHeader } from './styles/Header.styles';

export default function Header() {
  const [show, setShow] = useState(true);
  return (
    <StyledHeader color='green' show={show}>
      <h1>
        My Trakr React <span>span</span>
      </h1>
    </StyledHeader>
  );
}
