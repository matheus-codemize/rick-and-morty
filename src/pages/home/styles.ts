import css from 'styled-jsx/css';

const styles = css`
  .container {
    flex: 1;
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .title {
    top: 0;
    left: 0;
    position: absolute;
  }

  form {
    gap: 32px;
    display: flex;
    padding: 32px;
    margin: 48px 0 0;
    overflow: hidden;
    min-width: 300px;
    max-width: 600px;
    border-radius: 5px;
    background: #21212180;
    flex-direction: column;
  }

  form .input {
    height: 60px;
    display: flex;
    align-items: flex-end;
  }
`;

export default styles;
