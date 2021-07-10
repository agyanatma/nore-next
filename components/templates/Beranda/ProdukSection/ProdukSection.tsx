import React from "react";
import AplikasiMobile from "../../../../assets/icons/AplikasiMobile";
import IklanSem from "../../../../assets/icons/IklanSem";
import PembuatanWebsite from "../../../../assets/icons/PembuatanWebsite";
import SistemInformasi from "../../../../assets/icons/SistemInformasi";
import SectionHeader from "../SectionHeader/SectionHeader";
import ProdukCard from "./ProdukCard/ProdukCard";
import { ProdukContainer, ProdukContent, ProdukWrapper } from "./ProdukSection.styles";

interface Props {}

const ProdukSection = (props: Props) => {
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
        </ProdukWrapper>
    );
};

export default ProdukSection;
