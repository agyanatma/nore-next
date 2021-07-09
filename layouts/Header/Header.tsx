import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import media from "styled-media-query";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

import NavLink from "./NavLink/NavLink";
import Container from "../../shared/Container/Container";
import logo from "../../assets/images/nore.png";
import { useEffect } from "react";
import Icon from "../../shared/Icon/Icon";

interface Props {}

const Header = (props: Props) => {
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        console.log(`isOpen`, isOpen);
    }, [isOpen]);

    return (
        <StyledHeader>
            <StyledContainer>
                <NavLink href="/">
                    <StyledAnchor>
                        <Image src={logo} alt="Logo" />
                    </StyledAnchor>
                </NavLink>
                <StyledNav>
                    <NavLink href="/tentang">
                        <StyledAnchor>Tentang</StyledAnchor>
                    </NavLink>
                    <NavLink href="/layanan">
                        <StyledAnchor>Layanan</StyledAnchor>
                    </NavLink>
                    <NavLink href="/desain">
                        <StyledAnchor>Desain</StyledAnchor>
                    </NavLink>
                    <NavLink href="/portofolio">
                        <StyledAnchor>Portofolio</StyledAnchor>
                    </NavLink>
                    <NavLink href="/artikel">
                        <StyledAnchor>Artikel</StyledAnchor>
                    </NavLink>
                    <NavLink href="/kontak">
                        <StyledAnchor>Kontak</StyledAnchor>
                    </NavLink>
                </StyledNav>
                <MobileNav>
                    <Icon onClick={() => setOpen((prevState) => !prevState)}>
                        <MdMenu size="26px" color="white" />
                    </Icon>
                </MobileNav>
            </StyledContainer>
            <MobileMenu isOpen={isOpen}>
                <Icon onClick={() => setOpen(false)}>
                    <MdClose size="26px" color="white" />
                </Icon>
                <NavLink href="/tentang">
                    <StyledAnchor>Tentang</StyledAnchor>
                </NavLink>
                <NavLink href="/layanan">
                    <StyledAnchor>Layanan</StyledAnchor>
                </NavLink>
                <NavLink href="/desain">
                    <StyledAnchor>Desain</StyledAnchor>
                </NavLink>
                <NavLink href="/portofolio">
                    <StyledAnchor>Portofolio</StyledAnchor>
                </NavLink>
                <NavLink href="/artikel">
                    <StyledAnchor>Artikel</StyledAnchor>
                </NavLink>
                <NavLink href="/kontak">
                    <StyledAnchor>Kontak</StyledAnchor>
                </NavLink>
            </MobileMenu>
        </StyledHeader>
    );
};

export default Header;

interface MobileMenuProps {
    isOpen: boolean;
}

const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.primary};
    box-shadow: 0px 2px 10px 0px rgb(0 0 0 / 10%);
    height: 80px;
    position: relative;
    z-index: 99;
`;

const StyledContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* mobile */
    ${media.lessThan("medium")`
        display: none;
    `}
`;

const MobileNav = styled.nav`
    display: none;

    /* mobile */
    ${media.lessThan("medium")`
        display: block;
    `}

    & button {
        padding: 16px;
    }
`;

const StyledAnchor = styled.a`
    color: #ffffff;
    padding: 10px;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;

    :hover {
        color: ${({ theme }) => theme.secondary};
    }
`;

const MobileMenu = styled.div<MobileMenuProps>`
    background-color: ${({ theme }) => theme.primary};
    position: fixed;
    width: 50vw;
    height: 100%;
    top: 0%;
    right: ${({ isOpen }) => (isOpen ? "0%" : "-50%")};
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
