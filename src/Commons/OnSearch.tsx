import React from 'react';
import styled from 'styled-components';
import { Input, Select } from "antd";
const { Search } = Input;

function OnSearch() {
    return (
        <OnSearchContainer>
        <Search
        className={"searchBox"}
        placeholder="input text only"
        enterButton="Search"
        allowClear
      />
        </OnSearchContainer>
    );
}

const OnSearchContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .selectBox {
    width: 140px;
    height: 100%;
    margin-right: 5px;
  }
  .searchBox {
    width: 300px;
  }
`;

export default OnSearch;