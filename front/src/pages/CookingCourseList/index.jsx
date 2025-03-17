import React, { useEffect, useState } from 'react';
import { Space, Button, Flex, Table, Modal, Form, Input, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getCookingCourseList } from '../../store/modules/CourseListStore';
import { data } from 'react-router-dom';



const columns = [
  {
    title: '',
    dataIndex: 'image',
    width: 120,
    render: (thumbnail) => (
      <img
        src={thumbnail}
        alt=""
        style={{ width: 80, height: 120, objectFit: 'cover' }}
      />
    ),
  },
  {
    title: 'Title',
    dataIndex: 'title',
    width: 250
  },
  {
    title: 'Authors',
    dataIndex: 'authors',
    width: 225
  },
  {
    title: 'Published Date',
    dataIndex: 'publishedDate',
    width: 150
  },
  {
    title: 'Availability',
    dataIndex: "isfree",
    width: 120
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


const CookingCourseList = () => {
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


  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    form.validateFields()
    .then((values)=>{
      console.log(values)

      setDataSource([...dataSource,{key:dataSource.length+1,...values}])

      setIsModalOpen(false);
      form.resetFields();
    })
    .catch(info=>{
      console.log("Validation failed", info)
    })
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };


  const [ dataSource, setDataSource ] = useState([])
  const { cookingCourseList }  = useSelector(state=>state.courseList)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getCookingCourseList())
  },[dispatch])
  useEffect(() => {
    if (cookingCourseList && Array.isArray(cookingCourseList)) {
      setDataSource(cookingCourseList);
    }
  }, [cookingCourseList]);

  const [ pagination, setPagination ] = useState([]);
  useEffect(()=>{
    setPagination({
      current:1,
      pageSize:5,
      total:dataSource.length,
      pageSizeOptions:["5","10","15","20"],
      showQuickJumper:true,
    })
  },[dataSource])

  const handleTableChange = (pagination)=>{
    setPagination(pagination)
  }


  return (
    <div>
      <Flex gap="middle" vertical>
        <Flex align="center" gap="small">
          <Button onClick={showModal} color="primary" variant="solid">
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
        <Table
            onChange={handleTableChange}
            pagination={pagination}
            rowSelection={rowSelection}
            columns={columns}
            dataSource={dataSource}
            scroll={{y: 400}}/>
      </Flex>
      <Modal centered  width={720}   title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Form
            form = {form}
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 21,
            }}
            layout="horizontal"
          >
            <Form.Item label="Title" name="title" rules={[{required:true}]}>
              <Input />
            </Form.Item>
            <Form.Item label="Description" name="description" rules={[{required:true}]}>
              <Input />
            </Form.Item>
            <Form.Item label="Arthors" name="authors" rules={[{required:true}]}>
              <Input />
            </Form.Item>
            <Form.Item label="Published Date" name="publishedDate" rules={[{required:true}]}>
              <Input />
            </Form.Item>
            <Form.Item label="Status" name="isfree" rules={[{required:true}]}>
              <Select>
              <Select.Option value="1">Free</Select.Option>
              <Select.Option value="0">Upon Request</Select.Option>
              </Select>
            </Form.Item>

          </Form>
      </Modal>
   </div>
  );
};
export default CookingCourseList;
