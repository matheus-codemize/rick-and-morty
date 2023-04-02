import css from 'styled-jsx/css';

const styles = css`
  .container {
    position: relative;
  }

  /* to mobile */
  .container.row {
    width: 100%;
    max-height: 132px;
  }

  .container.row ul {
    padding: 16px 0;
    flex-direction: row;
  }

  /* to desktop */
  .container.column {
    max-width: 132px;
    height: 100%;
  }

  .container.column ul {
    gap: 60px;
    padding: 0 16px;
    flex-direction: column;
    justify-content: flex-start;
  }

  .container.column ul li:last-child {
    bottom: 0;
    position: absolute;
  }

  /* default css */
  ul {
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    list-style: none;
    position: relative;
    align-items: center;
    justify-content: space-between;
  }

  li {
    cursor: pointer;
    overflow: hidden;
    padding: 8px 16px;
    text-align: center;
    position: relative;
    font-size: var(--font-size-md);
    transition: all 0.2s ease-in-out;
  }

  li p {
    position: relative;
  }

  li.selected {
    font-size: 1rem;
    cursor: default;
  }

  li:hover p::before,
  li.selected p::before {
    content: '';
    top: -4px;
    left: -4px;
    z-index: -1;
    position: absolute;
    filter: blur(10px);
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    background: var(--color-background);
  }

  li:hover::before,
  li.selected::before {
    content: '';
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    position: absolute;
    transform: translateX(-100%);
    background: var(--color-primary);
    animation: slider 0.5s forwards linear;
  }

  @keyframes slider {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

export default styles;
