import React, { useState } from "react";
import styled from "styled-components/macro";
import "../index.css";

import NavDesktop from "./NavDesktop";

const NavMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledMobileNav open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledMobileNav>
      <NavDesktop open={open} />
    </>
  );
};

export default NavMobile;

const StyledMobileNav = styled.div`
  width: 2rem;
  height: 2rem;
  position: absolute;

  -webkit-backface-visibility: hidden;
  top: 20px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    cursor: pointer;
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) =>
      open ? "var(--clr-light)" : "var(--clr-grey)"};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
