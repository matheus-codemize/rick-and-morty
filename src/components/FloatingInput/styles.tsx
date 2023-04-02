import css from 'styled-jsx/css';

const styles = css`
  .floating-input {
    z-index: 2;
    width: 100%;
    position: relative;
  }

  label {
    top: 50%;
    left: 12px;
    cursor: inherit;
    font-size: 1rem;
    user-select: none;
    position: absolute;
    transform: translateY(-50%);
    transition: all 0.2s ease-out;
    color: var(--color-placeholder);
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    display: block;
    font-size: 1rem;
    padding: 30px 12px 12px;
    color: var(--color-font);
    transition: all 0.2s ease-out;
    background: rgba(80, 84, 95, 0.7);
    box-shadow: 1px 1px 2px var(--color-primary);
  }

  input:hover {
    box-shadow: 0 0 5px var(--color-primary);
  }

  input:focus {
    padding-top: 12px;
    box-shadow: 1px 1px 2px var(--color-primary);
  }

  .floating-input:not(.empty) label {
    top: 8px;
    transform: none;
  }

  .floating-input:not(.empty):not(:focus-within) label {
    font-size: 0.8rem;
  }

  .floating-input:focus-within label {
    top: -28px;
    transform: none;
    font-weight: 500;
    color: var(--color-font);
  }

  .icon-close {
    top: 50%;
    right: 12px;
    cursor: pointer;
    position: absolute;
    transform: translateY(-50%);
  }

  .options {
    width: 100%;
    max-height: 0;
    display: flex;
    cursor: pointer;
    overflow: hidden;
    overflow-y: auto;
    list-style: none;
    position: absolute;
    flex-direction: column;
    transform: translateY(4px);
    box-shadow: 0 0 5px #212121;
    transition: all 0.2s ease-in-out;
    background-color: var(--color-background);
  }

  .options.show {
    max-height: 300px;
  }

  .options li {
    padding: 8px 12px;
  }

  .options li:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export default styles;
