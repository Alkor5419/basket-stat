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
const Logo = styled.img`
  height: 100px;
`;
type Props = {
  teamA: string;
  teamB: string;
  logoA: string;
  logoB: string;
  scoreA: number;
  scoreB: number;
};
export const Match: React.FC<Props> = ({
  teamA,
  teamB,
  logoA,
  logoB,
  scoreA,
  scoreB,
}) => {
  return (
    <MatchTemplate>
      <LeftTeam>
        <Logo src={logoA} />
        <Title level={3}>{teamA}</Title>
        <span>{scoreA}</span>
      </LeftTeam>
      <RightTeam>
        <span>{scoreB}</span>
        <Title level={3}>{teamB}</Title>
        <Logo src={logoB} />
      </RightTeam>
    </MatchTemplate>
  );
};
