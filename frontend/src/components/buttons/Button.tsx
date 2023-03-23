import { Button as MuiButton } from "@mui/material";
import { ButtonProps } from "@mui/material/Button";

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
