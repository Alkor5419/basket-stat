import React from "react";
import { Typography } from "antd";
import { MatchTemplate } from "../templates/match/match-template";
import styled from "styled-components";
const { Title } = Typography;

const LeftTeam = styled.div`
  display: flex;
  align-items: center;
  color: #444;
`;
const RightTeam = styled.div`
  display: flex;
  align-items: center;
  color: #444;
`;
export const Match = () => {
  return (
    <MatchTemplate>
      <LeftTeam>
        <Title level={3}>Team A</Title>
        <span>5</span>
      </LeftTeam>
      <RightTeam>
        <span>13</span>
        <Title level={3}>Team B</Title>
      </RightTeam>
    </MatchTemplate>
  );
};
