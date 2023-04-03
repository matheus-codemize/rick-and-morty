import css from 'styled-jsx/css';

const root = {
  '--profile-border-radius': '8px',
};

export const styles = css`
  .container {
    flex: 1;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
  }

  .container.mobile {
    height: calc(100% - 132px);
  }

  .header {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: flex-end;
  }

  .header form {
    gap: 32px;
    top: 60px;
    z-index: 2;
    width: 100%;
    display: none;
    position: absolute;
    flex-direction: column;
    align-items: flex-end;
    transition: all 0.5s ease-in-out;
  }

  .header button {
    gap: 4px;
    z-index: 2;
    border: none;
    display: flex;
    outline: none;
    color: inherit;
    padding: 8px 16px;
    font-size: inherit;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border-bottom: 2px solid transparent;
  }

  .header.active form {
    display: flex;
  }

  .header.active form::before {
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 32px;
    position: fixed;
    background-color: #8e8e8ecc;
  }

  .header.active button {
    border-color: var(--color-primary);
  }

  .body {
    flex: 1;
    gap: 16px;
    padding: 8px;
    display: grid;
    margin: 8px -8px;
    overflow: hidden;
    overflow-y: auto;
    position: relative;
    grid-template-columns: 1fr;
  }

  .body.empty::before {
    content: 'Empty';
    top: 0;
    bottom: 0;
    left: 8px;
    right: 8px;
    display: flex;
    color: inherit;
    position: absolute;
    align-items: center;
    justify-content: center;
    font-size: var(--font-size-h5);
    background-color: var(--color-backgroundOpacity);
    border-radius: ${root['--profile-border-radius']};
  }

  .profile {
    height: 280px;
    display: flex;
    cursor: pointer;
    user-select: none;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.5s;
  }

  .profile > div {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    background-size: cover;
    backface-visibility: hidden;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: 0 0 10px var(--color-background);
    border-radius: ${root['--profile-border-radius']};
  }

  .front:hover::after {
    content: 'Click-me';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    background: var(--color-backgroundOpacity);
  }

  .back {
    display: flex;
    padding: 8px 16px;
    flex-direction: column;
    transform: rotateY(180deg);
    justify-content: space-evenly;
  }

  .back::after {
    content: '';
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(80, 84, 95, 0.7);
  }

  .back .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .favorite {
    padding: 4px;
    display: flex;
    cursor: pointer;
    margin: 0 -4px 0 0;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out;
  }

  .favorite:hover {
    transform: scale(1.2);
    box-shadow: 0 0 10px #212121;
  }

  .back .row {
    width: 100%;
    display: grid;
    margin: 2px 0;
    align-items: baseline;
    justify-content: space-between;
    grid-template-columns: 1fr 1fr;
  }

  .profile.flipped {
    transform: rotateY(180deg);
  }

  .profile-name {
    bottom: 0;
    width: 100%;
    padding: 8px;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    background: rgba(80, 84, 95, 0.7);
  }

  .profile-species {
    top: 0;
    right: 0;
    padding: 4px 16px;
    position: absolute;
    background: var(--color-accent);
    box-shadow: -1px 1px 5px var(--color-background);
    border-bottom-left-radius: ${root['--profile-border-radius']};
  }

  .profile-species.alien {
    background: var(--color-contrast);
  }

  .profile-species.humanoid {
    background: var(--color-emphasis);
  }

  .profile-species.cronenberg {
    background: var(--color-primary);
  }

  .profile-species.unknown {
    display: none;
  }

  .footer {
    display: flex;
    padding: 8px 0;
    user-select: none;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  .footer.empty {
    display: none;
  }

  .footer button {
    border: none;
    padding: 4px;
    margin: 0 8px;
    display: flex;
    color: inherit;
    cursor: pointer;
    border-radius: 5px;
    align-items: center;
    background-color: transparent;
    transition: all 0.2s ease-in-out;
  }

  .footer button:disabled {
    opacity: 0.5;
    cursor: default;
  }

  .pagination {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .pagination ul {
    gap: 6px;
    display: flex;
    list-style: none;
    flex-direction: row;
  }

  .pagination li {
    cursor: pointer;
    font-weight: 600;
    padding: 4px 12px;
    border-radius: 5px;
    position: relative;
    color: var(--color-font);
    box-shadow: 0 0 10px #212121;
    transition: all 0.2s ease-in-out;
    background-color: rgba(80, 84, 95, 0.8);
  }

  .pagination li:hover,
  .footer button:not(:disabled):hover,
  .pagination li.selected {
    color: #212121;
    background-color: rgba(255, 255, 255, 0.5);
  }

  .pagination li.fixed:first-child {
    margin: 0 20px 0;
  }

  .pagination li.fixed:last-child {
    margin: 0 0 0 20px;
  }

  .pagination li.fixed:first-child::after,
  .pagination li.fixed:last-child::before {
    content: '...';
    top: 50%;
    position: absolute;
    pointer-events: none;
    color: var(--color-font);
    background-color: transparent;
  }

  .pagination li.fixed:first-child::after {
    right: 0;
    transform: translateY(calc(-50% - 4px)) translateX(20px);
  }

  .pagination li.fixed:last-child::before {
    left: 0;
    transform: translateY(calc(-50% - 4px)) translateX(-20px);
  }

  @media only screen and (min-width: 844px) {
    .header form {
      top: 0;
      gap: 8px;
      padding: 0;
      display: flex;
      position: relative;
      flex-direction: row;
    }

    .header form::before {
      content: '';
      display: none;
    }

    .header button {
      display: none;
    }

    .footer {
      flex-direction: row;
    }
  }

  @media only screen and (min-width: 555px) {
    .body {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media only screen and (min-width: 1000px) {
    .body {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media only screen and (min-width: 1200px) {
    .body {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }

  @media only screen and (min-width: 1400px) {
    .body {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  }
`;

const characterStyle = () => <style jsx>{styles}</style>;

export default characterStyle;
