import {PropsWithChildren} from "react";
import {Link as RouterLink} from "react-router-dom";
import MuiLink from "@mui/material/Link";
import * as colors from "@mui/material/colors";
import styled from "@emotion/styled";
import {IStyles} from "@interfaces/stylesInterface";

interface IProps extends PropsWithChildren {
  to: string;
  sx?: IStyles;
}

export default function Link({children, to, sx}: IProps) {
  return <StyledLink component={RouterLink} to={to} sx={sx}>{children}</StyledLink>;
}

const StyledLink = styled(MuiLink)`
  color: ${colors.common.black};
  text-decoration: none;
` as typeof MuiLink;