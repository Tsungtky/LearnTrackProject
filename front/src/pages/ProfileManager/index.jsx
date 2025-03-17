import React, { useState } from 'react';
import { Space, Button, Flex, Table } from 'antd';


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space align="center" size="small">
        <Button color="primary" variant="solid" size="small">
          Edit
        </Button>
        <Button color="danger" variant="solid" size="small">
          Delete
        </Button>
        <Button color="primary" variant="solid" size="small">
          Upload Image
        </Button>
      </Space>
    ),
  },
];
const dataSource = Array.from({
  length: 46,
}).map((_, i) => ({
  key: i,
  name: `Edward King ${i}`,
  age: 32,
  address: `London, Park Lane no. ${i}`,
}));

const ProfileManager = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <Flex gap="middle" vertical>
      <Flex align="center" gap="small">
        <Button color="primary" variant="solid">
          Add
        </Button>
        <Button color="danger" variant="solid">
          Delete
        </Button>
        <Button color="primary" variant="solid">
          Search
        </Button>
        {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
      </Flex>
      <Table rowSelection={rowSelection} columns={columns} dataSource={dataSource} scroll={{y: 400}}/>
    </Flex>
  );
};
export default ProfileManager;
