// src/components/StyledButton/buttonStyles.ts
import { css } from '@emotion/css';

export const baseStyle = css`
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition:
    background-color 0.2s ease-in-out,
    transform 0.1s ease;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const primaryVariantStyle = css`
  background-color: #007bff;

  &:hover {
    background-color: #0056b3;
    opacity: 1;
  }
`;

export const dangerVariantStyle = css`
  background-color: #dc3545;

  &:hover {
    background-color: #c82333;
    opacity: 1;
  }
`;
