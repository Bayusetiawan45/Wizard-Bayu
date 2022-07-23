import React from "react";
import { Form, Input, Row, Col, Select } from "antd";
import "antd/dist/antd.css";
import TextArea from "antd/lib/input/TextArea";
import addressList from "../assets/full.json";
const { Option } = Select;

const Formulir = ({ form, onChangeForm }) => {
  const selectAddressHandler = (field, value) => {
    switch (field) {
      case "provinsi":
        selectAddressHandler("kabupaten", "");
        break;
      case "kabupaten":
        selectAddressHandler("kecamatan", "");
        break;
      case "kecamatan":
        selectAddressHandler("kelurahan", "");
        break;
      default:
        break;
    }
    onChangeForm({ target: { name: field, value: value } });
  };

  return (
    <Row>
      <Col span={12} offset={6}>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              {
                required: true,
                message: "Please input your first name!",
              },
            ]}
          >
            <Input
              name="firstName"
              onChange={onChangeForm}
              value={form.firstName}
            />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              {
                required: true,
                message: "Please input your last name!",
              },
            ]}
          >
            <Input
              name="lastName"
              onChange={onChangeForm}
              value={form.lastName}
            />
          </Form.Item>
          <Form.Item
            label="Biodata"
            name="biodata"
            rules={[
              {
                required: true,
                message: "Please input your biodata!",
              },
            ]}
          >
            <TextArea
              name="biodata"
              onChange={onChangeForm}
              value={form.biodata}
              rows={4}
              placeholder="Describe your self here"
            />
          </Form.Item>
          <Form.Item
            label="Provinsi"
            name="provinsi"
            rules={[
              {
                required: true,
                message: "This inpuy is required!",
              },
            ]}
          >
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) => option.children.includes(input)}
              filterSort={(optionA, optionB) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(optionB.children.toLowerCase())
              }
              name="provinsi"
              onChange={(value) => selectAddressHandler("provinsi", value)}
              value={form.provinsi}
            >
              {Object.keys(addressList).map((item, i) => (
                <Option key={i} value={item}>
                  {item.toLowerCase()}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Kabupaten"
            name="kabupaten"
            rules={[
              {
                required: true,
                message: "This inpuy is required!",
              },
            ]}
          >
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) => option.children.includes(input)}
              filterSort={(optionA, optionB) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(optionB.children.toLowerCase())
              }
              name="kabupaten"
              onChange={(value) => selectAddressHandler("kabupaten", value)}
              value={form.kabupaten}
            >
              {(form.provinsi !== ""
                ? Object.keys(addressList[form.provinsi])
                : []
              ).map((item, i) => (
                <Option key={i} value={item}>
                  {item.toLowerCase()}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Kecamatan"
            name="kecamatan"
            rules={[
              {
                required: true,
                message: "This inpuy is required!",
              },
            ]}
          >
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) => option.children.includes(input)}
              filterSort={(optionA, optionB) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(optionB.children.toLowerCase())
              }
              name="kecamatan"
              onChange={(value) => selectAddressHandler("kecamatan", value)}
              value={form.kecamatan}
            >
              {(form.kabupaten !== ""
                ? Object.keys(addressList[form.provinsi][form.kabupaten])
                : []
              ).map((item, i) => (
                <Option key={i} value={item}>
                  {item.toLowerCase()}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Kelurahan"
            name="kelurahan"
            rules={[
              {
                required: true,
                message: "This inpuy is required!",
              },
            ]}
          >
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) => option.children.includes(input)}
              filterSort={(optionA, optionB) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(optionB.children.toLowerCase())
              }
              name="kelurahan"
              onChange={(value) => selectAddressHandler("kelurahan", value)}
              value={form.kelurahan}
            >
              {(form.kecamatan !== ""
                ? addressList[form.provinsi][form.kabupaten][form.kecamatan]
                : []
              ).map((item, i) => (
                <Option key={i} value={item.kelurahan}>
                  {item.kelurahan.toLowerCase()}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Formulir;
