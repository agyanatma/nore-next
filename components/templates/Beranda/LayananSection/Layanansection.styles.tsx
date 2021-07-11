import styled from "styled-components";
import media from "styled-media-query";
import Container from "../../../elements/Container/Container";
import {
    LayananCardPrice,
    LayananCardWrapper,
} from "./LayananCard/LayananCard.styles";

export const LayananWrapper = styled.section`
    background-color: ${(props) => props.theme.primary};
`;

export const LayananContainer = styled(Container)`
    display: grid;
    grid-template-rows: auto 1fr auto;
    row-gap: 24px;
    padding: 100px 0px;
`;

export const LayananContent = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr 1fr;
    column-gap: 40px;

    ${media.lessThan("large")`
        grid-template-columns: 1fr;

        & ${LayananCardWrapper} {
            width: 60%;
            margin: 20px auto;
        }

        & ${LayananCardPrice} {
            width: 70%;
            margin: 16px auto;
        }
    `}

    ${media.lessThan("medium")`
        grid-template-columns: 1fr;

        & ${LayananCardWrapper} {
            width: 80%;
            margin: 20px auto;
        }

        & ${LayananCardPrice} {
            width: 80%;
            margin: 16px auto;
        }
    `}
`;

export const LayananFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;

    ${media.lessThan("medium")`
        justify-content: center;
        margin: 0px;
    `}
`;
