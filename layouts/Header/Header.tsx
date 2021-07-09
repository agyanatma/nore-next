import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import {
    HeaderWrapper,
    Container,
    Nav,
    ItemLink,
    MobileNav,
    MobileMenu,
} from "./Header.styles";

import NavLink from "./NavLink/NavLink";
import Icon from "../../shared/Icon/Icon";
import ImageLink from "./ImageLink/ImageLink";
import logo from "../../assets/images/nore.png";

const Header = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <HeaderWrapper>
            <Container>
                <ImageLink src={logo} alt="Logo" />
                <Nav>
                    <NavLink href="/tentang">
                        <ItemLink>Tentang</ItemLink>
                    </NavLink>
                    <NavLink href="/layanan">
                        <ItemLink>Layanan</ItemLink>
                    </NavLink>
                    <NavLink href="/desain">
                        <ItemLink>Desain</ItemLink>
                    </NavLink>
                    <NavLink href="/portofolio">
                        <ItemLink>Portofolio</ItemLink>
                    </NavLink>
                    <NavLink href="/artikel">
                        <ItemLink>Artikel</ItemLink>
                    </NavLink>
                    <NavLink href="/kontak">
                        <ItemLink>Kontak</ItemLink>
                    </NavLink>
                </Nav>
                <MobileNav>
                    <Icon onClick={() => setOpen((prevState) => !prevState)}>
                        <MdMenu size="26px" color="white" />
                    </Icon>
                </MobileNav>
            </Container>
            <MobileMenu isOpen={isOpen}>
                <Icon onClick={() => setOpen(false)}>
                    <MdClose size="26px" color="white" />
                </Icon>
                <NavLink href="/tentang">
                    <ItemLink>Tentang</ItemLink>
                </NavLink>
                <NavLink href="/layanan">
                    <ItemLink>Layanan</ItemLink>
                </NavLink>
                <NavLink href="/desain">
                    <ItemLink>Desain</ItemLink>
                </NavLink>
                <NavLink href="/portofolio">
                    <ItemLink>Portofolio</ItemLink>
                </NavLink>
                <NavLink href="/artikel">
                    <ItemLink>Artikel</ItemLink>
                </NavLink>
                <NavLink href="/kontak">
                    <ItemLink>Kontak</ItemLink>
                </NavLink>
            </MobileMenu>
        </HeaderWrapper>
    );
};

export default Header;
