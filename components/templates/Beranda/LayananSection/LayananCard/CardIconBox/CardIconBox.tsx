import React from "react";
import {
    CardIconImage,
    CardIconSubtitle,
    CardIconTitle,
    CardIconWrapper,
} from "./CardIconBox.styles";

interface Props {
    icon: JSX.Element;
    title: string;
    subtitle: string;
}

const CardIconBox = ({ icon, title, subtitle }: Props) => {
    return (
        <CardIconWrapper>
            <CardIconImage>{icon}</CardIconImage>
            <CardIconTitle>{title}</CardIconTitle>
            <CardIconSubtitle>{subtitle}</CardIconSubtitle>
        </CardIconWrapper>
    );
};

export default CardIconBox;
