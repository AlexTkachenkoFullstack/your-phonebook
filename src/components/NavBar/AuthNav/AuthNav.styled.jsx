import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
color:white;
font-size:24px;
text-decoration: none;
letter-spacing: 1px;
font-family: 'Bagel Fat One', cursive;

&:hover, &:focus{
    color:#7af7c0;
    scale:1.1;
}
&:active{
    color: #e8d90b;
}
`