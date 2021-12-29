import { Button as MuiButton } from "@mui/material";

interface Props {
  form?: string;
  children: string;
}

const Button = ({ children, form }: Props): JSX.Element => {
  return (
    <MuiButton
      sx={{ margin: "10px auto" }}
      variant="contained"
      type="submit"
      size="large"
      form={form}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
