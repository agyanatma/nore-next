import styled from "styled-components";
import Image from "next/image";
import {
    Heading4,
    Paragraph,
} from "../../../../../elements/Typhography/Typhography";

export const CardIconWrapper = styled.div``;

export const CardIconImage = styled.figure``;

export const CardIconTitle = styled(Heading4)`
    font-weight: 800;
    color: ${(props) => props.theme.primary};
    margin-bottom: 6px;
`;

export const CardIconSubtitle = styled(Paragraph)`
    color: ${(props) => props.theme.dark};
`;
