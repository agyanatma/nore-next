import React, { Fragment } from "react";
import { Container } from "../../layouts/Header/Header.styles";
import { Button } from "../../shared/Button/Button";
import {
    HeroCarousel,
    HeroCta,
    HeroSection,
    HeroTitle,
    HeroSubtitle,
    HeroButtons,
} from "./Beranda.styles";

interface Props {}

const Beranda = (props: Props) => {
    return (
        <Fragment>
            {/* Hero Section */}
            <HeroSection>
                <Container>
                    <HeroCta>
                        <HeroTitle>NORE WEBSITE</HeroTitle>
                        <HeroSubtitle>
                            Tim Nore menyediakan layanan pembuatan website beserta
                            pemeliharaannya yang ditangani langsung oleh staf IT
                            berpengalaman. Dengan biaya berlangganan yang terjangkau, Anda
                            bisa mendapatkan layanan konsultasi, pembuatan website,
                            pengubahan tampilan, pengelolaan konten, dan pemeliharaan
                            server.
                        </HeroSubtitle>
                        <HeroButtons>
                            <Button variant="primary">Layanan Kami</Button>
                            <Button variant="secondary">Tentang Kami</Button>
                        </HeroButtons>
                    </HeroCta>
                    <HeroCarousel></HeroCarousel>
                </Container>
            </HeroSection>

            {/* Programs Section */}

            {/* Layanan Section */}

            {/* Desain Section */}
        </Fragment>
    );
};

export default Beranda;
