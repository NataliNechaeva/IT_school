import './App.css';
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Table, Input, InputNumber, Popconfirm, Form, Typography } from 'antd';


const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const EditableTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      english: '',
      transcription: '',
      russian: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'english',
      dataIndex: 'english',
      width: '25%',
      editable: true,
    },
    {
      title: 'transcription',
      dataIndex: 'transcription',
      width: '25%',
      editable: true,
    },
    {
      title: 'russian',
      dataIndex: 'russian',
      width: '25%',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </Typography.Link>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};


const originData = [{
  "key":"10847",
  "english":"butterfly",
  "transcription":"[ ˈbʌtəflaɪ ]",
  "russian":"бабочка",
  "tags": ['animal'],
  "tags_json":"[\"u0436u0438u0432u043eu0442u043du044bu0435334\"]"},
  {"key":"10848",
  "english":"hedgehog",
  "transcription":"[ˈhedʒhɔːɡ]",
  "russian":"ёжик",
  "tags": ['animal'],
  "tags_json":"[\"u043bu0434u043eu043bu0434u0434\"]",
  "editable": "ёжик"},
  {"key":"10853",
  "english":"apple",
  "transcription":"[ˈæpl]",
  "russian":"яблоко",
  "tags": ['food'],
  "tags_json":"[\"u0440u043bu043eu0440u043eu0440u043eu043b\"]"},
  {"key":"10854",
  "english":"pear",
  "transcription":"[peə]",
  "russian":"груша",
  "tags": ['food'],
  "tags_json":"null"},
  {"key":"10862",
  "english":"carrot",
  "transcription":"[ˈkærət]",
  "russian":"морковка",
  "tags": ['food'],
  "tags_json":"[\"u043eu0432u043eu0449u0438\"]"},
  {"key":"10867",
  "english":"plum",
  "transcription":"[plʌm]",
  "russian":"слива",
  "tags": ['food'],
  "tags_json":"null"},
  {"key":"10872",
  "english":"unicorn",
  "transcription":"",
  "russian":"единорог",
  "tags": ['animal'],
  "tags_json":"null"},
  {"key":"10874",
  "english":"cat",
  "transcription":"[kæt]",
  "russian":"кот",
  "tags": ['animal'],
  "tags_json":"[\"u0436u0438u0432u043eu0442u043du044bu0435\"]"},
  {"key":"10879",
  "english":"butterfly",
  "transcription":"[ˈyo͞onəˌkôrn]",
  "russian":"бабочка",
  "tags": ['animal'],
  "tags_json":"[\"u0441u043au0430u0437u043au0430\"]"}]

  export default EditableTable;
