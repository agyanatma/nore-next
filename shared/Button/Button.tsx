import styled from "styled-components";

type ButtonVariant = "primary" | "secondary";
interface ButtonProps {
    variant?: ButtonVariant;
}

const Base = styled.button`
    padding: 12px 24px;
    font-size: 14px;
    text-transform: uppercase;
`;

export const Button = styled(Base)<ButtonProps>`
    background-color: ${({ variant, theme }) => {
        switch (variant) {
            case "primary":
                return theme.primary;

            case "secondary":
                return theme.secondary;

            default:
                return theme.primary;
        }
    }};
`;
