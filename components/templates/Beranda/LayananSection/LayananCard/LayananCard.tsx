import Image from "next/image";
import React from "react";
import { Heading6 } from "../../../../elements/Typhography/Typhography";
import {
    CardBoxImage,
    CardBoxSubtitle,
    CardBoxTitle,
    LayananCardBox,
    LayananCardWrapper,
    LayananCardPrice,
    CardPriceRegular,
    CardPriceBold,
    CardPriceSmall,
    LayananCardServices,
} from "./LayananCard.styles";

interface Props {
    icon: StaticImageData;
    title: string;
    subtitle: string;
    price: string;
    priceInfo?: string;
    pricePeriode?: string;
    services: string[];
    isPrimary?: boolean;
}

const LayananCard = ({
    icon,
    title,
    subtitle,
    price,
    priceInfo,
    pricePeriode,
    services,
    isPrimary,
}: Props) => {
    return (
        <LayananCardWrapper isPrimary={isPrimary}>
            <LayananCardBox>
                <CardBoxImage>
                    <Image
                        width="100px"
                        height="100px"
                        src={icon}
                        alt="Layanan Icon"
                    />
                </CardBoxImage>
                <CardBoxTitle>{title}</CardBoxTitle>
                <CardBoxSubtitle>{subtitle}</CardBoxSubtitle>
            </LayananCardBox>
            <LayananCardPrice>
                <CardPriceSmall column="1/3">Mulai dari</CardPriceSmall>
                <CardPriceRegular column="1/2">Rp</CardPriceRegular>
                <CardPriceBold column="2/3">{price}</CardPriceBold>
                {pricePeriode && (
                    <CardPriceRegular
                        column="3/4"
                        style={{ alignSelf: "flex-end" }}
                    >
                        {pricePeriode}
                    </CardPriceRegular>
                )}
                {priceInfo && (
                    <CardPriceSmall column="2/4">{priceInfo}</CardPriceSmall>
                )}
            </LayananCardPrice>
            <LayananCardServices>
                {services.map((li, idx) => (
                    <Heading6 key={idx.toString()}>{li}</Heading6>
                ))}
            </LayananCardServices>
        </LayananCardWrapper>
    );
};

export default LayananCard;
