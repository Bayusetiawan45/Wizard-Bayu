import React, { useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { createRef } from "react";
import Tesseract from "tesseract.js";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

const UploadFoto = ({ setImageToState, setNik }) => {
  const uploadRef = createRef();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [imageUrl, setImageUrl] = useState();

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        {loading ? `Getting NIK in progress (${progress}%)` : "Upload"}
      </div>
    </div>
  );

  const handleRecognizeText = async (file) => {
    const results = await Tesseract.recognize(file, "eng", {
      logger: (m) =>
        m.status === "recognizing text" &&
        setProgress(Math.ceil(m.progress * 100)),
    });
    const nik = results.data.lines
      .find((item) => item.text.includes("NIK") && item.text.includes(":"))
      .words.find((item) => item.text.length >= 16).text;
    setNik && setNik(nik);
  };

  const handleSelect = async (e) => {
    let file = e.target.files[0];
    if (!file) return;
    setLoading(true);
    setNik && (await handleRecognizeText(file));
    setImageUrl(URL.createObjectURL(file));
    const base64uri = await getBase64(file);
    setImageToState(base64uri);
    setLoading(false);
    // .progress(({ progress, status }) => {
    //   if (!progress || !status || status !== "recognizing text") {
    //     return null;
    //   }
    //   const p = (progress * 100).toFixed(2);
    //   console.log(p);
    // });
  };

  return (
    <div>
      <input
        type="file"
        style={{ display: "none" }}
        ref={uploadRef}
        multiple={false}
        onChange={handleSelect}
      />
      <div
        onClick={() => uploadRef.current.click()}
        style={{
          width: "20rem",
          height: "10rem",
          border: "1px solid grey",
          margin: "1rem",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          fontWeight: "bold",
          color: "grey",
          fontSize: "1.1rem",
          overflow: "hidden",
        }}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="avatar"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          uploadButton
        )}
      </div>
    </div>
  );
};

export default UploadFoto;
