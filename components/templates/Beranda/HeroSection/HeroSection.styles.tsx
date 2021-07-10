import styled from "styled-components";
import media from "styled-media-query";
import Container from "../../../elements/Container/Container";
import { Heading2, Subtitle1 } from "../../../elements/Typhography/Typhography";

export const HeroWrapper = styled.section`
    position: relative;
    background-color: ${({ theme }) => theme.primary};
`;

export const HeroContainer = styled(Container)`
    display: flex;
    flex-direction: row;
    align-items: center;
    min-height: calc(100vh - 80px);

    ${media.lessThan("medium")`
        flex-direction: column-reverse;
        align-items: center;
    `}
`;

export const HeroCta = styled.div`
    width: 60%;
    padding: 24px;

    ${media.lessThan("medium")`
        width: 100%;
    `}
`;

export const HeroCarousel = styled.div`
    width: 40%;
    padding: 24px;
    text-align: center;

    ${media.lessThan("medium")`
        width: 100%;
    `};
`;

export const HeroTitle = styled(Heading2)`
    color: white;
    font-weight: 800;
    margin-bottom: 20px;
`;

export const HeroSubtitle = styled(Subtitle1)`
    color: white;
    font-weight: 300;
    margin-bottom: 20px;
`;

export const HeroButtons = styled.div`
    display: flex;
    margin-top: 30px;

    & *:first-child {
        margin-right: 24px;
    }
`;

export const HeroDivider = styled.div`
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: 99;
    height: 200px;
    background-color: white;

    & :after {
        content: "";
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        height: 150px;
        width: 100%;
        z-index: 100;
        background-color: ${(props) => props.theme.primary};
        border-radius: 0px 0px 100px 100px;
    }
`;
