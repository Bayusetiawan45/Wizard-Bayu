import React from "react";
import { Space, Typography, Row, Col } from "antd";
import "antd/dist/antd.css";
const { Text } = Typography;

const Finish = ({ data }) => {
  return (
    <Row>
      <Col span={12} offset={6}>
        <Space direction="vertical" style={{fontWeight:"bold"}}>
          <Space>
            <Text>Name :</Text>
            <Text style={{ textTransform: "capitalize" }}>
              {data.firstName} {data.lastName}
            </Text>
          </Space>
          <Space>
            <Text>Biodata :</Text>
            <Text style={{ textTransform: "capitalize" }}>{data.biodata}</Text>
          </Space>
          <Space>
            <Text>Provinsi :</Text>
            <Text style={{ textTransform: "capitalize" }}>{data.provinsi}</Text>
          </Space>
          <Space>
            <Text>Kabupaten :</Text>
            <Text style={{ textTransform: "capitalize" }}>{data.kabupaten}</Text>
          </Space>
          <Space>
            <Text>Kecamatan :</Text>
            <Text style={{ textTransform: "capitalize" }}>{data.kecamatan}</Text>
          </Space>
          <Space>
            <Text>Kelurahan :</Text>
            <Text style={{ textTransform: "capitalize" }}>{data.kelurahan}</Text>
          </Space>
          <Space>
            <Text>NIK :</Text>
            <Text style={{ textTransform: "capitalize" }}>{data.nik}</Text>
          </Space>
        </Space>
      </Col>
    </Row>
  );
};

export default Finish;
