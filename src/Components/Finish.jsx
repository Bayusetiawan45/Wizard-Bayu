import React from "react";
import { Space, Typography, Row, Col } from "antd";
import "antd/dist/antd.css";
const {Text} = Typography

const Finish = ({ data }) => {
  return (
    <Row>
      <Col span={12} offset={6}>
        <div>{JSON.stringify(data)}</div>
        <Space>
        <Text></Text>
        </Space>
      </Col>
    </Row>
  );
};

export default Finish;
