import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";

const links = [
  {
    title: "My surveys",
    href: "/home",
  },
  {
    title: "Form Builder",
    href: "/form-builder",
  },
  {
    title: "Simple form",
    href: "/simple-form",
  },
];
interface Props {
  title: string;
  href: string;
}
const Sidebar = (): JSX.Element => {
  return (
    <Grid container direction="column" width="auto">
      {links.map((link, idx) => {
        return (
          <SidebarLink
            title={link.title}
            href={link.href}
            key={idx}
          ></SidebarLink>
        );
      })}
    </Grid>
  );
};

const SidebarLink = ({ title, href }: Props): JSX.Element => {
  return <LinkStyled href={href}>{title}</LinkStyled>;
};

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.primary.main};
  background-color: ${({ theme }) => theme.palette.primary.dark};
  padding: 0.5rem;
  margin: 0.5rem 0rem;
  border-radius: 6px;
`;

export { Sidebar };
