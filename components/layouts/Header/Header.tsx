import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import {
    HeaderWrapper,
    HeaderContainer,
    Nav,
    ItemLink,
    MobileNav,
    MobileMenu,
} from "./Header.styles";

import NavLink from "./NavLink/NavLink";
import Icon from "../../elements/Icon/Icon";
import ImageLink from "./ImageLink/ImageLink";
import { LogoNore } from "../../../assets/images";

const Header = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <HeaderWrapper>
            <HeaderContainer>
                <ImageLink src={LogoNore} alt="Logo" />
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
            </HeaderContainer>
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
