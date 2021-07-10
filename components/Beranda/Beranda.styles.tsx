import styled from "styled-components";
import { Heading2, Subtitle1 } from "../../shared/Typhography/Typhography";

export const HeroSection = styled.section`
    background-color: ${({ theme }) => theme.primary};
    height: calc(100vh - 80px);
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export const HeroCta = styled.div`
    width: 50%;
`;

export const HeroCarousel = styled.div`
    width: 50%;
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
    display: grid;
    grid-template-columns: repeat(2, auto);
    column-gap: 16px;
`;
