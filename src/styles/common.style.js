import { css } from "styled-components";

export const FlexboxStyle = ({ align, justify, direction }) => css`
  display: flex;
  align-items: ${align || "center"};
  justify-content: ${justify || "space-between"};
  flex-direction: ${direction || "row"};
  flex-wrap: wrap;
`;

export const CommonGridStyle = ({ columns, rowGap, columnGap, align }) => css`
  display: grid;
  grid-template-columns: ${columns || "repeat(3, 1fr)"};
  grid-row-gap: ${rowGap || "2rem"};
  grid-column-gap: ${columnGap || "2rem"};
  align-items: ${align || "center"};

  @media (max-width: ${(p) => p.theme.breakPoints.tablets}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${(p) => p.theme.breakPoints.mobiles}) {
    grid-template-columns: 1fr;
  }
`;

export const CommonSpacing = css`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

export const CustomContainer = css`
  max-width: 117rem;
  margin: 0 auto;
`;

export const CommonButton = ({ padding, colors }) => css`
  background: ${colors || "#ffb602"};
  color: ${(p) => p.theme.colors.BLACK_COLOR};
  border: 0.1rem solid ${(p) => p.theme.colors.PRIMARY_COLOR};

  padding: ${padding || "1.5rem 2.5rem"};
  border-radius: 3rem;
  font-size: 2rem;

  cursor: pointer;
  transition: ${(p) => p.theme.transitions.customTransition};

  &:hover {
    background: ${(p) => p.theme.colors.WHITE_COLOR};
    color: ${(p) => p.theme.colors.PRIMARY_COLOR};
  }
`;
