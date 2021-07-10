import styled from "styled-components";
import media from "styled-media-query";
import Container from "../../../elements/Container/Container";
import SectionHeader from "../SectionHeader/SectionHeader";
import { ProdukCardWrapper } from "./ProdukCard/ProdukCard.styles";

export const ProdukWrapper = styled.div`
    padding: 100px 26px;
`;

export const ProdukContainer = styled(Container)``;

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
