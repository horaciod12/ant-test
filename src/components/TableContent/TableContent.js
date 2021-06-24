import { Table } from "antd";

const columns = [
  {
    title: <b>Channel</b>,
    dataIndex: "channel",
  },
  {
    title: <b>Document Name</b>,
    dataIndex: "document",
  },
  {
    title: <b>Group</b>,
    dataIndex: "group",
    sorter: {
      compare: (a, b) => (a.group > b.group ? 1 : b.group > a.group ? -1 : 0),
      multiple: 1,
    },
  },
  {
    title: <b>Status</b>,
    dataIndex: "status",
    sorter: {
      compare: (a, b) =>
        a.status > b.status ? 1 : b.status > a.status ? -1 : 0,
      multiple: 1,
    },
  },
  {
    title: <b>Date modified</b>,
    dataIndex: "date",
    sorter: {
      compare: (a, b) => (a.date > b.date ? 1 : b.date > a.date ? -1 : 0),
      multiple: 1,
    },
  },
  {
    title: <b>Type</b>,
    dataIndex: "type",
    sorter: {
      compare: (a, b) => (a.type > b.type ? 1 : b.type > a.type ? -1 : 0),
      multiple: 1,
    },
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const TableContent = (props) => {
  return (
    <Table
      style={{ margin: "20px" }}
      columns={columns}
      dataSource={props.data}
      pagination={{ pageSize: 5 }}
    />
  );
};

export default TableContent;
