import css from 'styled-jsx/css';

const styles = css`
  .divider {
    width: 4px;
    height: 100%;
    display: none;
    position: absolute;
    border-radius: 5px;
  }

  .divider.show {
    display: inline;
  }

  h1 {
    font-size: var(--font-size-h1);
  }

  h2 {
    font-size: var(--font-size-h2);
  }

  h3 {
    font-size: var(--font-size-h3);
  }

  h4 {
    font-size: var(--font-size-h4);
  }

  h5 {
    font-size: var(--font-size-h5);
  }

  h6 {
    font-size: var(--font-size-h6);
  }
`;

export default styles;
