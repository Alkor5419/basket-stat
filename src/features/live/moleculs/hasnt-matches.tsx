import React from "react";
import styled from "styled-components";

const Text = styled.h3`
  color: ${({ theme }) => theme.colors.main};
`;
export const HasntMatches = () => {
  return <Text>В данный момент матчей нет.</Text>;
};
