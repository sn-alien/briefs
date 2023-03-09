import { ButtonProps, Button as MuiButton } from "@mui/material";

interface Props extends ButtonProps {
  form?: string;
  children: string;
  onClick?: () => void;
}

const Button = ({ children, form, onClick, ...other }: Props): JSX.Element => {
  return (
    <MuiButton
      sx={{ margin: "10px auto" }}
      variant="contained"
      type="submit"
      size="large"
      form={form}
      onClick={onClick}
      {...other}
    >
      {children}
    </MuiButton>
  );
};

export { Button };
