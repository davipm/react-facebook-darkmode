import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --bg: #242526;
    --bg-accent: #484a4d;
    --text-color: #dadce1;
    --nav-size: 60px;
    --border: 1px solid #484a4d;
    --border-radius: 8px;
    --speed: 500ms;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-color: #151616;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  a {
    color: var(--text-color);
    text-decoration: none;
  }
`;
