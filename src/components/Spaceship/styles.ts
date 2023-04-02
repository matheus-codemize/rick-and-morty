import css from 'styled-jsx/css';

const styles = css`
  .spaceship {
    width: 120px;
    height: 120px;
    position: relative;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/spaceship.png');

    animation-name: turb;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .spaceship.disabled {
    animation-name: none;
  }

  @keyframes turb {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(-5deg) translate(-5px);
    }
    66% {
      transform: rotate(5deg) translate(-5px);
    }
    100% {
      transform: rotate(0) translate(0);
    }
  }
`;

export default styles;
