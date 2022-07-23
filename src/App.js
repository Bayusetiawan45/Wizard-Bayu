import React, { useState } from "react";
import { Space, Steps, Typography, Row, Col } from "antd";
import "antd/dist/antd.css";
import Formulir from "./Components/Formulir";
import UploadFoto from "./Components/UploadFoto";
import Finish from "./Components/Finish";
const { Step } = Steps;
const { Title } = Typography;

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    biodata: "",
    provinsi: "",
    kabupaten: "",
    kecamatan: "",
    kelurahan: "",
    selfie: "",
    ktp: "",
    bebas: "",
  });

  console.log(form);

  const onChangeForm = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onChangeStep = (value) => {
    setCurrentStep(value);
  };
  const handleUpload = (nama, url) => {
    setForm((prev) => ({ ...prev, [nama]: url }));
  };
  return (
    <div style={{ margin: "5rem" }}>
      <Space
        direction="vertical"
        size="large"
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "3rem",
        }}
      >
        <Steps current={currentStep} onChange={onChangeStep}>
          <Step title="Formulir Klaim" description="This is a description." />
          <Step title="Registrasi Klaim" description="This is a description." />
          <Step title="Finish" description="This is a description." />
        </Steps>
      </Space>
      <Space style={{ display: currentStep !== 0 ? "none" : "initial" }}>
        <Formulir form={form} onChangeForm={onChangeForm} />
      </Space>
      <Space style={{ display: currentStep !== 1 ? "none" : "initial" }}>
        <Row>
          <Col span={12} offset={6}>
            <Row
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Title level={5}>Foto Selfie</Title>
              <UploadFoto callback={(url) => handleUpload("selfie", url)} />
            </Row>
            <Row
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "2rem",
              }}
            >
              <Title level={5}>Foto KTP</Title>
              <UploadFoto callback={(url) => handleUpload("ktp", url)} />
            </Row>
            <Row
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "2rem",
              }}
            >
              <Title level={5}>Foto Bebas</Title>
              <UploadFoto callback={(url) => handleUpload("bebas", url)} />
            </Row>
          </Col>
        </Row>
      </Space>
      <Space style={{ display: currentStep !== 2 ? "none" : "initial" }}>
        <Finish data={form}/>
      </Space>
    </div>
  );
}

export default App;
