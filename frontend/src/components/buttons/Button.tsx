import { Button as MuiButton } from "@mui/material";

interface Props {
  form?: string;
  children: string;
  onClick?: () => void;
}

const Button = ({ children, form, onClick }: Props): JSX.Element => {
  return (
    <MuiButton
      sx={{ margin: "10px auto" }}
      variant="contained"
      type="submit"
      size="large"
      form={form}
      onClick={onClick}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
