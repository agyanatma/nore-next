import { ReactNode } from "react";
import styled from "styled-components";
import Link, { LinkProps } from "next/link";

type ButtonVariant = "primary" | "secondary";

interface Props extends ButtonProps {
    children: ReactNode;
}
interface ButtonProps {
    variant?: ButtonVariant;
}

export const Button = ({ children, variant, ...props }: Props & LinkProps) => {
    return (
        <Link {...props}>
            <StyledButton variant={variant}>{children}</StyledButton>
        </Link>
    );
};

const Base = styled.a`
    padding: 12px 24px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
    color: ${(props) => props.theme.dark};
    border-radius: 6px;
    cursor: pointer;
    transition: transform 0.2s ease;

    & :hover {
        transform: translateY(-20%);
    }
`;

const StyledButton = styled(Base)<ButtonProps>`
    background-color: ${(props) => {
        switch (props.variant) {
            case "primary":
                return props.theme.secondary;

            case "secondary":
                return props.theme.light;

            default:
                return props.theme.secondary;
        }
    }};
    box-shadow: ${(props) => {
        switch (props.variant) {
            case "primary":
                return "0px 4px 0px 0px #c6bf00";

            case "secondary":
                return "0px 4px 0px 0px #d7d7d7";

            default:
                return "0px 4px 0px 0px #c6bf00";
        }
    }};
`;
