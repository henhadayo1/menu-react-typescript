import styled from "styled-components";

interface StyledMenuProps {
  depth: number;
  show?: boolean;
}

export const StyledMenu = styled.div<StyledMenuProps>`
  min-width: 200px;
  max-width: 200px;
  left: 200px;
  top: 0;
  position: ${(props) => (props.depth > 0 ? "absolute" : "initial")};

  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  opacity: ${(props) => (props.show ? 1 : 0)};
  pointer-events: ${(props) => (props.show ? "all" : "none")};
  transform: ${(props) => (props.show ? "translateX(10px)" : "translateX(0)")};
  transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;
`;

export const StyledMenuItem = styled.div`
  position: relative;
  padding: 8px 16px;
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  &:last-child {
    border-bottom: none;
  }
`;

export default StyledMenu;
