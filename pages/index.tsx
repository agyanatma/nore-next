import React from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { KlienImage } from "../types/beranda";
import HeroSection from "../components/templates/Beranda/HeroSection/HeroSection";
import ProdukSection from "../components/templates/Beranda/ProdukSection/ProdukSection";
import Layout from "../components/layouts/Layout/Layout";
import {
    AntaraLogo,
    CarfixLogo,
    EastLogo,
    HealthProjectLogo,
    PolresLogo,
    SanoriLogo,
    VendorbeliLogo,
} from "../assets/images";

interface StaticProps {
    klienImages: KlienImage[];
}

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
    // Fetch data from external API
    const klienImages: KlienImage[] = [
        {
            id: "1",
            url: AntaraLogo,
            alt: "AntaraLogo",
            link: "https://antaralogistic.com/",
        },
        {
            id: "2",
            url: CarfixLogo,
            alt: "CarfixLogo",
            link: "https://carfix.co.id/",
        },
        {
            id: "3",
            url: EastLogo,
            alt: "EastLogo",
            link: "https://eastexpress.co.id/",
        },
        {
            id: "4",
            url: HealthProjectLogo,
            alt: "HealthProjectLogo",
            link: "https://healthproject.id/",
        },
        {
            id: "5",
            url: PolresLogo,
            alt: "PolresLogo",
            link: "https://restabessmg.jateng.polri.go.id/",
        },
        {
            id: "6",
            url: SanoriLogo,
            alt: "SanoriLogo",
            link: "https://sanori.co.id/",
        },
        {
            id: "7",
            url: VendorbeliLogo,
            alt: "VendorbeliLogo",
            link: "https://vendorbeli.com/",
        },
    ];

    // Pass data to the page via props
    return { props: { klienImages } };
};

const Home = ({
    klienImages,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <Layout>
            <HeroSection />
            <ProdukSection klienImages={klienImages} />
        </Layout>
    );
};

export default Home;
