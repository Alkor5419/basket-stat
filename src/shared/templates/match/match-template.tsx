import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const MatchTemplateWrap = styled.div`
  height: 150px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #333;
  padding: 0 20px;
  animation-duration: 2s;
  animation-name: ${fadeIn};
`;

export const MatchTemplate: React.FC = ({ children }) => {
  return <MatchTemplateWrap>{children}</MatchTemplateWrap>;
};
