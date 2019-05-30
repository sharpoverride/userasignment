import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { UserAssignment, TabItemModel } from "./components/UserAssignment";

const App: React.FC = () => {
  const options = [
    { value: "a1", label: "Marie Caldona" },
    { value: "a2", label: "Maureen Lino" },
    { value: "a3", label: "Jimmy Marsson" },
    { value: "a4", label: "Diana Bakos" },
    { value: "a5", label: "Natosky Bakos" },
    { value: "v1", label: "Walt Heisenberg" },
    { value: "v2", label: "Order Template #1" },
    { value: "g1", label: "Chines Translators" }
  ];
  const tabs: Array<TabItemModel> = [
    { label: "Individuals", value: "individuals", isDefault: true },
    { label: "Groups", value: "groups" },
    { label: "Vendors", value: "vendors" }
  ];
  const [state, setState] = useState({
    selectedTab: tabs[0].value
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <SelectContainer>
          <UserAssignment
            options={options}
            tabs={tabs}
            selectedTab={state.selectedTab}
            onTabChange={(tab: string) => {
              console.log("tab change", tab);
              setState({ selectedTab: tab });
            }}
            onChange={(value: any, action: any) => {
              console.log("****", value, action);
            }}
          />
        </SelectContainer>
      </main>
      {/* <aside>
        <SelectContainer>
          <NavWrapper>
            <Nav>
              <TabItem>Individuals</TabItem>
              <TabItem>Grups</TabItem>
              <TabItem>Vendors</TabItem>
            </Nav>
          </NavWrapper>
        </SelectContainer>
      </aside> */}
    </div>
  );
};

const SelectContainer = styled.div`
  max-width: 400px;
`;

export default App;
