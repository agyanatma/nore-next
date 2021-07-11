import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import AplikasiMobile from "../../../../assets/icons/AplikasiMobile";
import IklanSem from "../../../../assets/icons/IklanSem";
import PembuatanWebsite from "../../../../assets/icons/PembuatanWebsite";
import SistemInformasi from "../../../../assets/icons/SistemInformasi";
import SectionHeader from "../SectionHeader/SectionHeader";
import ProdukCard from "./ProdukCard/ProdukCard";
import {
    ProdukContainer,
    ProdukContent,
    ProdukWrapper,
    ProdukCarousel,
} from "./ProdukSection.styles";
import {
    AntaraLogo,
    CarfixLogo,
    EastLogo,
    HealthProjectLogo,
    PolresLogo,
    SanoriLogo,
    VendorbeliLogo,
} from "../../../../assets/images";

interface Props {}

const ProdukSection = (props: Props) => {
    const responsive = useMemo(
        () => ({
            superLargeDesktop: {
                breakpoint: { max: 4000, min: 3000 },
                items: 5,
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 5,
            },
            tablet: {
                breakpoint: { max: 1024, min: 767 },
                items: 2,
            },
            mobile: {
                breakpoint: { max: 767, min: 0 },
                items: 1,
            },
        }),
        []
    );

    const [isMoving, setIsMoving] = useState(false);

    return (
        <ProdukWrapper>
            <ProdukContainer>
                <SectionHeader
                    title="No Repot, No Rempong"
                    subtitle="Kami siap melayani Anda untuk menyelesaikan masalah IT seperti"
                />
                <ProdukContent>
                    <ProdukCard
                        icon={<PembuatanWebsite />}
                        title="Pembuatan Website"
                        subtitle="Semua kebutuhan website termasuk desain, domain, pengoperasian dan pemeliharaan berkala"
                    />
                    <ProdukCard
                        icon={<SistemInformasi />}
                        title="Sistem Informasi"
                        subtitle="Permudah pekerjaan dengan sistem informasi yang dirancang sesuai kebutuhan Anda"
                    />
                    <ProdukCard
                        icon={<IklanSem />}
                        title="Iklan SEM Google"
                        subtitle="Tingkatkan traffic pengunjung dan jadikan website Anda tampil di halaman pertama Google"
                    />
                    <ProdukCard
                        icon={<AplikasiMobile />}
                        title="Pembuatan Aplikasi Mobile"
                        subtitle="Wujudkan aplikasi idaman yang dapat diakses kapan saja melalui berbagai device"
                    />
                </ProdukContent>
            </ProdukContainer>
            <ProdukContainer>
                <SectionHeader title="Klien Nore" />
                <ProdukCarousel>
                    <Carousel
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        showDots={true}
                        arrows={false}
                        // autoPlay={true}
                        // autoPlaySpeed={2000}
                        containerClass="klien-carousel"
                        itemClass="klien-item-carousel"
                        dotListClass="klien-dots"
                        beforeChange={() => setIsMoving(true)}
                        afterChange={() => setIsMoving(false)}
                    >
                        <Link href="/">
                            <a
                                draggable={false}
                                onClick={(e) => isMoving && e.preventDefault()}
                            >
                                <Image
                                    width="200px"
                                    height="100px"
                                    objectFit="contain"
                                    draggable={false}
                                    src={AntaraLogo}
                                    alt="AntaraLogo"
                                />
                            </a>
                        </Link>
                        <Link href="/">
                            <a
                                draggable={false}
                                onClick={(e) => isMoving && e.preventDefault()}
                            >
                                <Image
                                    width="200px"
                                    height="100px"
                                    objectFit="contain"
                                    draggable={false}
                                    src={CarfixLogo}
                                    alt="CarfixLogo"
                                />
                            </a>
                        </Link>
                        <Link href="/">
                            <a
                                draggable={false}
                                onClick={(e) => isMoving && e.preventDefault()}
                            >
                                <Image
                                    width="200px"
                                    height="100px"
                                    objectFit="contain"
                                    draggable={false}
                                    src={EastLogo}
                                    alt="EastLogo"
                                />
                            </a>
                        </Link>
                        <Link href="/">
                            <a
                                draggable={false}
                                onClick={(e) => isMoving && e.preventDefault()}
                            >
                                <Image
                                    width="200px"
                                    height="100px"
                                    objectFit="contain"
                                    draggable={false}
                                    src={HealthProjectLogo}
                                    alt="HealthProjectLogo"
                                />
                            </a>
                        </Link>
                        <Link href="/">
                            <a
                                draggable={false}
                                onClick={(e) => isMoving && e.preventDefault()}
                            >
                                <Image
                                    width="200px"
                                    height="100px"
                                    objectFit="contain"
                                    draggable={false}
                                    src={PolresLogo}
                                    alt="PolresLogo"
                                />
                            </a>
                        </Link>
                        <Link href="/">
                            <a
                                draggable={false}
                                onClick={(e) => isMoving && e.preventDefault()}
                            >
                                <Image
                                    width="200px"
                                    height="100px"
                                    objectFit="contain"
                                    draggable={false}
                                    src={SanoriLogo}
                                    alt="SanoriLogo"
                                />
                            </a>
                        </Link>
                        <Link href="/">
                            <a
                                draggable={false}
                                onClick={(e) => isMoving && e.preventDefault()}
                            >
                                <Image
                                    width="200px"
                                    height="100px"
                                    objectFit="contain"
                                    draggable={false}
                                    src={VendorbeliLogo}
                                    alt="VendorbeliLogo"
                                />
                            </a>
                        </Link>
                    </Carousel>
                </ProdukCarousel>
            </ProdukContainer>
        </ProdukWrapper>
    );
};

export default ProdukSection;
