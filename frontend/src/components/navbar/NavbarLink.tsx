import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren, useState, useEffect } from "react";

type NavbarLinkProps = LinkProps;

const NavbarLink = ({
  children,
  ...props
}: PropsWithChildren<NavbarLinkProps>) => {
  const { asPath, isReady } = useRouter();
  const className =
    "rounded-md p-1 px-2 mx-2 sm:p-2 font-semibold transition-colors hover:bg-gray-100";
  const activeClassName =
    "rounded-md p-1 px-2 mx-2 sm:p-2 font-semibold transition-colors bg-gray-200";
  const [computedClassName, setComputedClassName] = useState(className);

  useEffect(() => {
    if (isReady) {
      const linkPathname = new URL(
        (props.as || props.href) as string,
        location.href
      ).pathname;

      const activePathname = new URL(asPath, location.href).pathname;

      const newClassName =
        linkPathname === activePathname ? `${activeClassName}` : className;

      if (newClassName !== computedClassName) {
        setComputedClassName(newClassName);
      }
    }
  }, [
    asPath,
    isReady,
    props.as,
    props.href,
    activeClassName,
    className,
    computedClassName,
  ]);

  return (
    <Link className={computedClassName} {...props}>
      {children}
    </Link>
  );
};

export { NavbarLink };
