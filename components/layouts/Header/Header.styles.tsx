import styled from "styled-components";
import media from "styled-media-query";
import Container from "../../elements/Container/Container";

interface MobileMenuProps {
    isOpen: boolean;
}

export const HeaderWrapper = styled.header`
    background-color: ${({ theme }) => theme.primary};
    box-shadow: 0px 2px 10px 0px rgb(0 0 0 / 10%);
    height: 80px;
    position: relative;
    z-index: 99;
`;

export const HeaderContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* mobile */
    ${media.lessThan("medium")`
        display: none;
    `}
`;

export const MobileNav = styled.nav`
    display: none;

    /* mobile */
    ${media.lessThan("medium")`
        display: block;
    `}

    & button {
        padding: 16px;
    }
`;

export const ItemLink = styled.a`
    color: #ffffff;
    padding: 10px;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;

    :hover {
        color: ${({ theme }) => theme.secondary};
    }
`;

export const MobileMenu = styled.div<MobileMenuProps>`
    background-color: ${({ theme }) => theme.primary};
    position: fixed;
    width: 50vw;
    height: 100%;
    top: 0%;
    right: ${({ isOpen }) => (isOpen ? "0%" : "-100%")};
    transition: all 0.5s ease;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 24px;

    & button {
        height: 80px;
    }
`;
