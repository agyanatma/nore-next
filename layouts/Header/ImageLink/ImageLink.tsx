import React from "react";
import Image, { ImageProps } from "next/image";

import NavLink from "../NavLink/NavLink";
import ItemLink from "./ImageLink.styles";

const ImageLink = (props: ImageProps) => {
    return (
        <NavLink href="/">
            <ItemLink>
                <Image alt="" {...props} />
            </ItemLink>
        </NavLink>
    );
};

export default ImageLink;
