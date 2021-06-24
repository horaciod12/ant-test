import React from "react";
import { Menu, Checkbox } from "antd";

const checkboxItemsConfig = [
  { name: "Received" },
  { name: "Printed" },
  { name: "Folded" },
  { name: "Sorted" },
  { name: "Delivered" },
];

const SiderNav = (props) => {
  const { SubMenu } = Menu;
  let filterNamesStatus = [];

  const handleClick = (e) => {
    // console.log("click ", e);
  };

  const onChange = (e, data) => {
    if (e.target.checked) {
      filterNamesStatus.push(e.target.name);
    } else {
      let index = filterNamesStatus.indexOf(e.target.name);
      if (index > -1) {
        filterNamesStatus.splice(index, 1);
      }
    }

    const fullArray = data.map((item) => {
      for (let i = 0; i < filterNamesStatus.length; i++) {
        if (item.status === filterNamesStatus[i]) {
          return { ...item };
        }
      }
    });

    const onlyItemsToDisplay = fullArray.filter((item) => item !== undefined);
    props.onGetAllItems(onlyItemsToDisplay);
  };

  return (
    <Menu
      onClick={handleClick}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
    >
      <SubMenu key="sub1" title="Address"></SubMenu>
      <SubMenu key="sub2" title="Date"></SubMenu>
      <SubMenu key="sub3" title="Status">
        <Menu.ItemGroup key="g3" title="">
          {checkboxItemsConfig.map((item, index) => {
            return (
              <Menu.Item key={index}>
                <Checkbox
                  onChange={(e) => onChange(e, props.data)}
                  name={item.name}
                >
                  {item.name}
                </Checkbox>
              </Menu.Item>
            );
          })}
        </Menu.ItemGroup>
      </SubMenu>
      <SubMenu key="sub4" title="Group"></SubMenu>
      <SubMenu key="sub5" title="Date Range"></SubMenu>
    </Menu>
  );
};

export default SiderNav;
