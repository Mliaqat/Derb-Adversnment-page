import styled from "styled-components";
import { FlexboxStyle } from "../../styles/common.style";

export const Footerstyle = styled.article`
  ${FlexboxStyle({
    justify: "space-between",
  })}
  margin-top: 3rem;
  padding: 1rem;
  background: ${(p) => p.theme.colors.PRIMARY_COLOR};
  color: ${(p) => p.theme.colors.WHITE_COLOR};
  h4 {
    margin-right: 1rem;
  }

  .links {
    ${FlexboxStyle}
  }
`;
