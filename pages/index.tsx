import React from "react";
import HeroSection from "../components/templates/Beranda/HeroSection/HeroSection";
import ProdukSection from "../components/templates/Beranda/ProdukSection/ProdukSection";
import Layout from "../components/layouts/Layout/Layout";

const Home = () => {
    return (
        <Layout>
            <HeroSection />
            <ProdukSection />
        </Layout>
    );
};

export default Home;
