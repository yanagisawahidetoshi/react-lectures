import { css } from '@emotion/css';

export const overlay = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const content = css`
  background-color: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  min-width: 320px;
  max-width: 500px;
  width: 90%;
`;

export const closeButton = css`
  position: absolute;
  top: 10px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 1.8rem;
  font-weight: bold;
  color: #555;
  cursor: pointer;
  padding: 0;
  line-height: 1;

  &:hover {
    color: #000;
  }
`;
