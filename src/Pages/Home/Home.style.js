import styled from "styled-components";
import { CommonButton, FlexboxStyle } from "../../styles/common.style";

export const Headerstyle = styled.article`
  background-image: url("./image/header.jpeg");
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .banner {
    ${FlexboxStyle({
      justify: "space-around",
    })}
  }
  .banerimg {
    margin-top: 15rem;
    padding-bottom: 7rem;

    img {
      border-radius: 1rem;

      width: 47rem;
    }
  }

  .heading {
    width: 50rem;
    margin-top: 15rem;
    h1 {
      font-size: 5rem;
      font-weight: 700;
    }
  }

  .btn {
    ${CommonButton}
  }
`;
export const Cardstyle = styled.article`
  display: flex;
  justify-content: center;
  .card {
    box-shadow: ${(p) => p.theme.shadows.shadowLite};
    background: ${(p) => p.theme.colors.WHITE_COLOR};
    border: none;
    width: 25rem;
    padding: 2rem;
    border-radius: 3rem;
  }
`;

export const Featurestyle = styled.article`
  margin-top: 6rem;

  ${FlexboxStyle({
    justify: "space-around",
  })}

  img {
    width: 60rem;
  }

  .heading {
    width: 50rem;
  }
`;

export const Contentstyle = styled.article`
  margin-top: 6rem;
  background-image: url("./image/background.jpeg");
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  ${FlexboxStyle({
    justify: "space-around",
  })}

  img {
    width: 45rem;
  }

  .heading {
    width: 50rem;
    margin-bottom: 15rem;
    color: ${(p) => p.theme.colors.WHITE_COLOR};
  }
`;

export const Faqstyle = styled.article`
  margin-top: 8rem;

  ${FlexboxStyle({
    justify: "space-around",
  })}

  .togle {
    width: 50rem;
  }

  .icon {
    width: 2rem;
    position: absolute;
    margin-left: 45rem;
    margin-top: -3rem;
  }

  h2 {
    padding: 1rem;
    background: ${(p) => p.theme.colors.PRIMARY_COLOR};
    border-radius: 0.5rem;
    font-size: 1.8rem;

    font-weight: bold;
    color: ${(p) => p.theme.colors.WHITE_COLOR};
  }

  .text {
    display: none;

    &.show-text {
      display: block;
    }
  }

  img {
    width: 40rem;
    border-radius: 1rem;
  }
`;

export const Counterstyle = styled.article`
  background: ${(p) => p.theme.colors.PRIMARY_COLOR};
  width: 50%;
  margin: auto;
  border-radius: 2rem;
  margin-top: 6rem;
  padding: 4rem;

  .counter {
    ${FlexboxStyle({
      justify: "space-around",
    })}
  }

  p {
    text-align: center;
    color: ${(p) => p.theme.colors.WHITE_COLOR};
    font-size: 1.5rem;
    font-weight: 900;
  }
  .btn {
    ${CommonButton({
      colors: "white",
    })}

    margin-left: 22rem;
    margin-top: 3rem;
  }
  h1 {
    position: relative;

    &.line::after {
      content: "";
      position: absolute;
      top: 50%;
      right: -2rem;
      transform: translateY(-50%);

      width: 0.03rem;
      height: 4rem;

      background: ${(p) => p.theme.colors.WHITE_COLOR};
    }
    &.line::before {
      content: "";
      position: absolute;
      top: 50%;
      left: -2rem;
      transform: translateY(-50%);

      width: 0.03rem;
      height: 4rem;

      background: ${(p) => p.theme.colors.WHITE_COLOR};
    }
  }
`;
