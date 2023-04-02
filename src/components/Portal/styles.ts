import css from 'styled-jsx/css';

const styles = css`
  .portal {
    width: 100px;
    height: 100px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/portal.png');

    animation-name: spin;
    animation-duration: 20s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .portal.disabled {
    animation-name: none;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default styles;
