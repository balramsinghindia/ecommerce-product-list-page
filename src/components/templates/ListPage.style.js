import { css } from "styled-components";

export default css`
  text-align: center;
  .Home-logo {
    animation: logo-spin infinite 20s linear;
    height: 80px;
  }

  .Home-header {
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
  }

  .Home-intro {
    font-size: large;
  }

  .Home-resources {
    list-style: none;
  }

  .Home-resources > li {
    display: inline-block;
    padding: 1rem;
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;
