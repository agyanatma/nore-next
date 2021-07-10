import React, { useMemo } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button } from "../../../elements/Button/Button";
import {
    HeroCarousel,
    HeroCta,
    HeroWrapper,
    HeroTitle,
    HeroSubtitle,
    HeroButtons,
    HeroContainer,
    HeroDivider,
} from "./HeroSection.styles";
import { NoreBook, NoreMoney, NoreMonitor, NoreRun } from "../../../../assets/images";

interface Props {}

const HeroSection = (props: Props) => {
    const responsive = useMemo(
        () => ({
            superLargeDesktop: {
                breakpoint: { max: 4000, min: 3000 },
                items: 1,
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 1,
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 1,
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
            },
        }),
        []
    );

    return (
        <HeroWrapper>
            <HeroContainer>
                <HeroCta>
                    <HeroTitle>NORE WEBSITE</HeroTitle>
                    <HeroSubtitle>
                        Tim Nore menyediakan layanan pembuatan website beserta
                        pemeliharaannya yang ditangani langsung oleh staf IT
                        berpengalaman. Dengan biaya berlangganan yang terjangkau, Anda
                        bisa mendapatkan layanan konsultasi, pembuatan website, pengubahan
                        tampilan, pengelolaan konten, dan pemeliharaan server.
                    </HeroSubtitle>
                    <HeroButtons>
                        <Button href="/layanan" variant="primary">
                            Layanan Kami
                        </Button>
                        <Button href="/tentang" variant="secondary">
                            Tentang Kami
                        </Button>
                    </HeroButtons>
                </HeroCta>
                <HeroCarousel>
                    <Carousel
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        showDots={false}
                        arrows={false}
                        draggable={false}
                        swipeable={false}
                        autoPlay={true}
                    >
                        <Image src={NoreBook} alt="NoreBook" />
                        <Image src={NoreMoney} alt="NoreMoney" />
                        <Image src={NoreMonitor} alt="NoreMonitor" />
                        <Image src={NoreRun} alt="NoreRun" />
                    </Carousel>
                </HeroCarousel>
            </HeroContainer>
            {/* <HeroDivider /> */}
        </HeroWrapper>
    );
};

export default HeroSection;
