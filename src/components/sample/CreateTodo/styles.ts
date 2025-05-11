import { css } from '@emotion/css';

export const container = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

export const label = css`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const submit = css`
  padding: 8px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 8px;

  &:hover {
    background-color: #0056b3;
  }
`;
