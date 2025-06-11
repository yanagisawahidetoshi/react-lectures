import { css } from '@emotion/css';

export const table = css({
  width: '100%',
  borderCollapse: 'collapse',

  'th, td': {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  },
});

export const completedContainer = css({
  display: 'flex',
  textDecoration: 'underline',
});

export const completed = css({
  border: 'none',
  backgroundColor: 'transparent',
  padding: 0,
  marginTop: 8,
});
