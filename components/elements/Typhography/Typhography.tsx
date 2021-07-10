import styled, { CSSProperties } from "styled-components";

interface Props {
    fontWeight?: CSSProperties["fontWeight"];
    color?: CSSProperties["color"];
}

export const Heading1 = styled.h1<Props>`
    font-family: "Poppins", sans-serif;
    font-size: 6rem;
    font-weight: ${({ fontWeight }) => fontWeight ?? 400};
    color: ${({ color }) => color};
    line-height: 1.167;
`;

export const Heading2 = styled.h2<Props>`
    font-family: "Poppins", sans-serif;
    font-size: 3.75rem;
    font-weight: ${({ fontWeight }) => fontWeight ?? 400};
    color: ${({ color }) => color};
    line-height: 1.2;
`;
export const Heading3 = styled.h3<Props>`
    font-family: "Poppins", sans-serif;
    font-size: 3rem;
    font-weight: ${({ fontWeight }) => fontWeight ?? 400};
    color: ${({ color }) => color};
    line-height: 1.167;
`;

export const Heading4 = styled.h4<Props>`
    font-family: "Poppins", sans-serif;
    font-size: 2.125rem;
    font-weight: ${({ fontWeight }) => fontWeight ?? 400};
    color: ${({ color }) => color};
    line-height: 1.235;
`;

export const Heading5 = styled.h5<Props>`
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    font-weight: ${({ fontWeight }) => fontWeight ?? 400};
    color: ${({ color }) => color};
    line-height: 1.334;
`;

export const Heading6 = styled.h6<Props>`
    font-family: "Poppins", sans-serif;
    font-size: 1.25rem;
    font-weight: ${({ fontWeight }) => fontWeight ?? 400};
    color: ${({ color }) => color};
    line-height: 1.6;
`;

export const Subtitle1 = styled.h6<Props>`
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: ${({ fontWeight }) => fontWeight ?? 400};
    color: ${({ color }) => color};
    line-height: 1.75;
`;

export const Subtitle2 = styled.h6<Props>`
    font-family: "Poppins", sans-serif;
    font-size: 0.875rem;
    font-weight: ${({ fontWeight }) => fontWeight ?? 400};
    color: ${({ color }) => color};
    line-height: 1.57;
`;

export const Paragraph = styled.p<Props>`
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    font-weight: ${({ fontWeight }) => fontWeight ?? 400};
    color: ${({ color }) => color};
    line-height: 1.5;
`;
