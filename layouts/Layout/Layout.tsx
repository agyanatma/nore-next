import React, { Fragment, ReactNode } from "react";
import styled from "styled-components";
import Container from "../../shared/Container/Container";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

interface Props {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <Fragment>
            <Header />
            <Main>
                <Container>{children}</Container>
            </Main>
            <Footer />
        </Fragment>
    );
};

export default Layout;

const Main = styled.main`
    min-height: calc(100vh - 80px);
`;
