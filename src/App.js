import React, { useState } from "react";
import { Layout } from "antd";
import { PageHeader, Input, Form, Button } from "antd";
import SiderNav from "./components/SiderNav/SiderNav";
import TableContent from "./components/TableContent/TableContent";
import { data } from "./data";
import "antd/dist/antd.css";

const routes = [
  {
    path: "home",
    breadcrumbName: "Home",
  },
  {
    path: "documents",
    breadcrumbName: "Documents",
  },
];

function App() {
  const [tableData, onSetTableData] = useState(data);
  const [inputValue, onSetInputValue] = useState("");

  const { Header, Sider, Content } = Layout;

  const onAddNew = () => {
    onSetTableData((prevTableData) => {
      return [
        ...prevTableData,
        {
          channel: "PDF",
          date: "2021-02-29",
          document: inputValue,
          group: "Receipts",
          id: (prevTableData.length + 1).toString(),
          key: (prevTableData.length + 1).toString(),
          status: "Received",
          type: "Prior",
        },
      ];
    });

    onSetInputValue("");
  };

  const onChangeInput = (e) => {
    onSetInputValue(e.target.value);
  };

  const getAllItems = (allItems) => {
    if (allItems.length === 0) {
      onSetTableData([...data]);
    } else {
      onSetTableData([...allItems]);
    }
  };

  return (
    <Layout style={{ background: "#fff" }}>
      <Sider style={{ background: "none" }}>
        <div
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            background: "#fff",
            padding: "12px",
            borderRight: "1px solid #f0f0f0",
          }}
        >
          Filters
        </div>
        <SiderNav data={tableData} onGetAllItems={getAllItems} />
      </Sider>
      <Layout style={{ background: "#fff" }}>
        <Header style={{ background: "#fff", height: "auto" }}>
          <PageHeader
            className="site-page-header"
            title="Document Browser"
            breadcrumb={{ routes }}
          />
        </Header>
        <Content style={{ background: "#f0f2f5" }}>
          <Form
            layout="inline"
            style={{ margin: "20px", background: "#fff", padding: "20px" }}
          >
            <Form.Item label="Doc. Name:">
              <Input
                placeholder="Doc. Name"
                onChange={onChangeInput}
                value={inputValue}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={onAddNew}>
                + Add New
              </Button>
            </Form.Item>
          </Form>
          <TableContent data={tableData} />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
