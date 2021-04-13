import React from "react";
import { Calendar } from "antd";
import styled from "styled-components";
const CalendarWrap = styled.div`
  margin: 0px;
`;

export const CalendarPage = () => {
  function onPanelChange(value, mode) {
    console.log(value, mode);
  }
  return (
    <CalendarWrap>
      <Calendar
        onPanelChange={onPanelChange}
        onChange={(date) => console.log(date)}
      />
    </CalendarWrap>
  );
};
