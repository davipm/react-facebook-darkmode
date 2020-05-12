import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: String;
    colors: {
      primary: string;
      textColor: string;
      bgAccent: string;
      bgColor: string;
    };
  }
}
