import React from "react";
import { Langganan, Lepas, Mini } from "../../../../assets/images";
import { Button } from "../../../elements/Button/Button";
import SectionHeader from "../SectionHeader/SectionHeader";
import LayananCard from "./LayananCard/LayananCard";
import {
    LayananWrapper,
    LayananContainer,
    LayananContent,
    LayananFooter,
} from "./Layanansection.styles";

interface Props {}

const LayananSection = (props: Props) => {
    return (
        <LayananWrapper>
            <LayananContainer>
                <SectionHeader title="Layanan" color="white" />
                <LayananContent>
                    <LayananCard
                        icon={Mini}
                        title="Mini"
                        subtitle="Website berlangganan tanpa pengoperasian."
                        price="600rb"
                        pricePeriode="/thn"
                        priceInfo="1,2juta untuk tahun pertama"
                        services={[
                            "Server dan Domain",
                            "Garansi bug selamanya",
                            "Optimasi mobile",
                        ]}
                    />
                    <LayananCard
                        icon={Langganan}
                        title="Nore"
                        subtitle="Website berlangganan dengan pengoperasian tim NORE (No Repot, No Rempong)"
                        price="2juta"
                        pricePeriode="/thn"
                        services={[
                            "Server dan Domain",
                            "Garansi bug selamanya",
                            "Optimasi mobile",
                            "Pengoperasian website",
                            "Email perusahaan",
                        ]}
                        isPrimary={true}
                    />
                    <LayananCard
                        icon={Lepas}
                        title="Lepas"
                        subtitle="Pembelian website dari NORE tanpa berlangganan"
                        price="2,5juta"
                        services={[
                            "Optimasi mobile",
                            "Bantuan instalasi",
                            "Garansi bug 3 bulan",
                        ]}
                    />
                </LayananContent>
                <LayananFooter>
                    <Button href="/layanan" variant="primary">
                        Selengkapnya
                    </Button>
                </LayananFooter>
            </LayananContainer>
        </LayananWrapper>
    );
};

export default LayananSection;
