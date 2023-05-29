import SideBarLayout, { DemoCssVar } from "@/components/layouts/SideBarLayout";
import AppContainer from "@/components/layouts/containers/AppContainer";
import DefaultTableUsage from "@/components/pages/tables/DefaultTableUsage";
import TableUsage from "@/components/pages/tables/TableUsage";
import TableUsageWithStylesAndVariations from "@/components/pages/tables/TableUsageWithStylesAndVariations";
import Tab from "@/components/tabs/Tab";
import React, { useState } from "react";

const Tables = () => {
  let filterItems = [{ name: "All" }, { name: "Amount: 50" }, { name: "Amount: 20" }];
  const [filter, setFilter] = useState("All");
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  let [tableData, setTableData] = useState([
    { title: "First title", date: "2020", amount: 20 },
    { title: "First title", date: "2024", amount: 50 },
    { title: "First title", date: "2021", amount: 50 },
    { title: "First title", date: "2019", amount: 50 },
  ]);

  const onTabChange = (index) => {
    if (index == 0) {
      setFilter("All");
      return;
    } else {
      let amtFilter = filterItems[index].name.split(": ")[1];
      setFilter(amtFilter);
    }
  };

  const filterFunction = () => {
    // Write your custom filter function
    return tableData.filter((el) => {
      if (filter == "All") {
        return el;
      }
      return el.amount == filter;
    });
  };

  const filteredData = filterFunction();
  return (
    <AppContainer>
      <div className=" max-w-6xl">
        <DemoCssVar />
        <Tab active={activeTabIndex} setActive={setActiveTabIndex} onChange={onTabChange} items={filterItems} />
        <DefaultTableUsage data={filteredData} />
        <TableUsageWithStylesAndVariations data={filteredData} />
      </div>
    </AppContainer>
  );
};

Tables.Layout = SideBarLayout;
export default Tables;
