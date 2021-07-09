import React, { Children, ReactNode, ReactPortal } from "react";
import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";

interface Props extends LinkProps {
    children: ReactNode;
}

const NavLink = ({ children, href, ...props }: Props) => {
    const { pathname } = useRouter();
    const child = Children.only(children) as ReactPortal;

    return (
        <Link href={href} {...props}>
            {React.cloneElement(child, {
                "aria-current": pathname === href ? "page" : null,
            })}
        </Link>
    );
};

export default NavLink;
