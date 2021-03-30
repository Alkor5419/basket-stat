import React from "react";
import styled from "styled-components";
const MatchTemplateWrap = styled.div`
  height: 150px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #333;
  padding: 0 20px;
`;
export const MatchTemplate: React.FC = ({ children }) => {
  return <MatchTemplateWrap>{children}</MatchTemplateWrap>;
};
