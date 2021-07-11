import styled, { CSSProperties } from "styled-components";
import Card from "../../../../elements/Card/Card";
import {
    Heading2,
    Heading3,
    Heading4,
    Paragraph,
    Subtitle1,
} from "../../../../elements/Typhography/Typhography";

type LayananCard = {
    isPrimary?: boolean;
};

type CardPriceGrid = {
    column?: CSSProperties["gridColumn"];
    row?: CSSProperties["gridRow"];
    fontSize?: CSSProperties["fontSize"];
};

export const LayananCardWrapper = styled(Card)<LayananCard>`
    /* box-shadow: 0px 15px 20px 0px rgb(0 0 0 / 20%); */
    margin-top: ${(props) => (props.isPrimary ? "0rem" : "3rem")};
    padding: 36px;
    text-align: center;
    /* transition: box-shadow 0.2s ease;

    & :hover {
        box-shadow: 0px 0px 0px 0px;
    } */
`;

export const LayananCardBox = styled.div``;

export const CardBoxImage = styled.figure``;

export const CardBoxTitle = styled(Heading3)`
    font-weight: 800;
    color: ${(props) => props.theme.primary};
    margin-bottom: 6px;
`;

export const CardBoxSubtitle = styled(Paragraph)`
    color: ${(props) => props.theme.grey};
`;

export const LayananCardPrice = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    text-align: left;
`;

export const CardPriceSmall = styled(Subtitle1)<CardPriceGrid>`
    color: ${(props) => props.theme.primary};
    grid-column: ${(props) => props.column};
    grid-row: ${(props) => props.row};
    font-size: ${(props) => props.fontSize};
`;

export const CardPriceRegular = styled(Heading4)<CardPriceGrid>`
    color: ${(props) => props.theme.primary};
    grid-column: ${(props) => props.column};
    grid-row: ${(props) => props.row};
    font-size: ${(props) => props.fontSize};
`;

export const CardPriceBold = styled(Heading2)<CardPriceGrid>`
    font-weight: 800;
    line-height: 1;
    color: ${(props) => props.theme.primary};
    grid-column: ${(props) => props.column};
    grid-row: ${(props) => props.row};
    font-size: ${(props) => props.fontSize};
`;

export const LayananCardServices = styled.div`
    margin-top: 24px;

    & h6 {
        padding: 6px 0px;
        color: ${(props) => props.theme.grey};
    }
`;
