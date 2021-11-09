import styled from "styled-components";

import {
  CommonSpacing,
  CustomContainer,
  FlexboxStyle,
} from "../../styles/common.style";

export const NavbarStyle = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  padding: 0.5rem 0;

  z-index: 10;

  .active {
    background-color: ${(p) => p.theme.colors.PRIMARY_COLOR};
    padding: 1rem;
    margin-top: -1rem;
  }
  .notactive {
    background-color: transparent;
  }

  .site-logo {
    width: 8rem;
  }

  .navbar-container {
    ${CustomContainer};
    ${CommonSpacing};
    ${FlexboxStyle};

    .logo-wrapper {
      outline: none;

      > svg {
        width: 12rem;
      }
    }
  }
`;

export const MenubarStyle = styled.ul`
  ${FlexboxStyle};

  list-style: none;

  .active {
    background-color: black;
  }
  .notactive {
    background-color: red;
  }

  .menu-tabs {
    margin-left: 4.8rem;

    &:last-child {
      .menu-item-link {
        &:after {
          display: none;
        }
      }
    }

    .menu-item-link {
      ${FlexboxStyle};

      text-decoration: none;

      position: relative;

      .profile-wrapper {
        display: block;
        width: 5rem;
        margin-right: 2rem;

        .user-img {
          max-width: 100%;
        }
      }

      .tab-text {
        color: ${(p) => p.theme.colors.BLACK_COLOR};

        font-size: 2rem;
        font-weight: 500;
      }

      .cart-icon {
        > svg {
          width: 2rem;
        }
      }

      .product-count {
        ${FlexboxStyle({ justify: "center" })};

        position: absolute;
        top: 0rem;
        right: -0.6rem;

        background: ${(p) => p.theme.colors.SECONDARY_COLOR};
        color: ${(p) => p.theme.colors.WHITE_COLOR};

        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
      }
    }
  }
`;
