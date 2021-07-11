import styled from "styled-components";
import media from "styled-media-query";
import { Heading2, Heading6 } from "../../../elements/Typhography/Typhography";

export const SectionHeaderWrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(3, auto);
    place-items: center;
    margin-bottom: 38px;

    ${media.lessThan("medium")`
        text-align: center;
    `}
`;

export const SectionHeaderTitle = styled(Heading2)`
    color: ${(props) => props.theme.primary};
    font-weight: 800;
    text-transform: uppercase;

    ${media.lessThan("medium")`
        font-size: 3rem;
    `}
`;

export const SectionHeaderSubtitle = styled(Heading6)`
    color: ${(props) => props.theme.grey};
    ${media.lessThan("medium")`
        font-size: 1.2rem;
    `}
`;

export const SectionHeaderLine = styled.div`
    width: 100px;
    height: 10px;
    margin: auto 0;
    margin-top: 16px;
    border-radius: 2px;
    background-color: ${(props) => props.theme.secondary};
`;
