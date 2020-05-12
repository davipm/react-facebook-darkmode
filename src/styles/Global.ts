import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --nav-size: 60px;
    --border: 1px solid #484a4d;
    --border-radius: 8px;
    --speed: 500ms;
  }
    
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-color: ${(props) => props.theme.colors.bgColor};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  a {
    color: ${(props) => props.theme.colors.textColor};
    text-decoration: none;
  }
`;
