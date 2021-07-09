import styled from "styled-components";

interface Props {
    background?: string;
}

const Container = styled.div<Props>`
    margin: 0 auto;
    max-width: 1200px;
    background-color: ${({ background }) => background};
`;

export default Container;
