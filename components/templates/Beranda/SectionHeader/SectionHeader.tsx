import React from "react";
import {
    SectionHeaderTitle,
    SectionHeaderSubtitle,
    SectionHeaderWrapper,
    SectionHeaderLine,
} from "./SectionHeader.styles";

interface Props {
    title: string;
    subtitle?: string;
}

const SectionHeader = ({ title, subtitle }: Props) => {
    return (
        <SectionHeaderWrapper>
            <SectionHeaderTitle>{title}</SectionHeaderTitle>
            {subtitle && <SectionHeaderSubtitle>{subtitle}</SectionHeaderSubtitle>}
            <SectionHeaderLine />
        </SectionHeaderWrapper>
    );
};

export default SectionHeader;
