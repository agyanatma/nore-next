import React from "react";
import Card from "../../../../elements/Card/Card";
import {
    ProdukIcon,
    ProdukSubtitle,
    ProdukTitle,
    ProdukCardWrapper,
} from "./ProdukCard.styles";

interface Props {
    icon: JSX.Element;
    title: string;
    subtitle: string;
}

const ProdukCard = ({ icon, title, subtitle }: Props) => {
    return (
        <ProdukCardWrapper padding="26px">
            <ProdukIcon>{icon}</ProdukIcon>
            <ProdukTitle>{title}</ProdukTitle>
            <ProdukSubtitle>{subtitle}</ProdukSubtitle>
        </ProdukCardWrapper>
    );
};

export default ProdukCard;
