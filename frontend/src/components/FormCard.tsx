import React from "react";

import { styled } from "@mui/material/styles";

const FormCard = (): JSX.Element => {
  return <Card></Card>;
};

const Card = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 300px;
  height: 200px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.palette.divider};
`;
export { FormCard };
