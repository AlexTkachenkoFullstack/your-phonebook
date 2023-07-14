import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
color:white;
font-size:24px;
text-decoration: none;



&:hover, &:focus{
    color:#f8f9fa;
    scale:1.1;
}
&:active{
    color: #e8d90b;
}
`