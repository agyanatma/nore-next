import React from "react";
import { CSSProperties } from "styled-components";
import {
    SectionHeaderTitle,
    SectionHeaderSubtitle,
    SectionHeaderWrapper,
    SectionHeaderLine,
} from "./SectionHeader.styles";

interface Props {
    title: string;
    subtitle?: string;
    color?: CSSProperties["color"];
}

const SectionHeader = ({ title, subtitle, color }: Props) => {
    return (
        <SectionHeaderWrapper>
            <SectionHeaderTitle color={color}>{title}</SectionHeaderTitle>
            {subtitle && (
                <SectionHeaderSubtitle>{subtitle}</SectionHeaderSubtitle>
            )}
            <SectionHeaderLine />
        </SectionHeaderWrapper>
    );
};

export default SectionHeader;
