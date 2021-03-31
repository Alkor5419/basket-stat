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
type Props = {
  teamA: string;
  teamB: string;
  scoreA: number;
  scoreB: number;
};
export const Match: React.FC<Props> = ({
  teamA,
  teamB,
  scoreA,
  scoreB,
}) => {
  return (
    <MatchTemplate>
      <LeftTeam>
        <Title level={3}>{teamA}</Title>
        <span>{scoreA}</span>
      </LeftTeam>
      <RightTeam>
        <span>{scoreB}</span>
        <Title level={3}>{teamB}</Title>
      </RightTeam>
    </MatchTemplate>
  );
};
