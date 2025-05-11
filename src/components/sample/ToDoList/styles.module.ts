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
