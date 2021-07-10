import styled, { CSSProperties } from "styled-components";

interface Props {
    padding?: CSSProperties["padding"];
    margin?: CSSProperties["margin"];
}

const Card = styled.div<Props>`
    margin: ${(props) => props.margin ?? "20px"};
    padding: ${(props) => props.padding ?? "16px"};
    box-shadow: 0px 5px 15px 0px rgb(0 0 0 / 10%);
    background-color: white;
    border-radius: 8px;
`;

export default Card;
