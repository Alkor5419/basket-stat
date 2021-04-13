import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
/**
 * LinkItem color из темы
 */
const LinkItem = styled(Link)`
  margin-right: 2em;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.main};
`;

type Props = {
  path: string;
};
export const Links: React.FC<Props> = ({
  path,
  children,
}) => {
  return <LinkItem to={path}>{children}</LinkItem>;
};
