import styled from "styled-components";
import media from "styled-media-query";
import Container from "../../../elements/Container/Container";
import SectionHeader from "../SectionHeader/SectionHeader";
import { ProdukCardWrapper } from "./ProdukCard/ProdukCard.styles";

export const ProdukWrapper = styled.div`
    padding: 100px 26px;
`;

export const ProdukContainer = styled(Container)`
    margin-bottom: 10rem;

    & :last-child {
        margin-bottom: 0px;
    }
`;

export const ProdukContent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    margin-top: 32px;

    ${media.lessThan("medium")`
        flex-direction: column;

        ${ProdukCardWrapper} {
            max-width: 100%;
        }
    `}
`;

export const ProdukCarousel = styled.div`
    & .klien-carousel {
        padding-bottom: 5rem;
    }
    & .klien-item-carousel {
        text-align: center;
    }

    & .klien-dots {
        li.react-multi-carousel-dot button {
            border: none;
            width: 10px;
            height: 10px;
            margin-right: 16px;
        }

        & li.react-multi-carousel-dot--active button {
            background: ${(props) => props.theme.primary};
        }
    }
`;
