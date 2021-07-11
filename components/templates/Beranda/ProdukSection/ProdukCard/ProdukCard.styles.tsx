import styled from "styled-components";
import Card from "../../../../elements/Card/Card";
import {
    Heading5,
    Paragraph,
} from "../../../../elements/Typhography/Typhography";

export const ProdukCardWrapper = styled(Card)`
    text-align: center;
    max-width: 250px;
`;

export const ProdukIcon = styled.div`
    svg {
        width: 100px;
        height: 100px;
        fill: ${(props) => props.theme.primary};
    }
`;

export const ProdukTitle = styled(Heading5)`
    font-size: 24px;
    font-weight: 600;
    color: ${(props) => props.theme.dark};
    margin-bottom: 16px;
`;

export const ProdukSubtitle = styled(Paragraph)`
    color: ${(props) => props.theme.grey};
`;
