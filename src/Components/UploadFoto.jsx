import React, { useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { createRef } from "react";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

const UploadFoto = ({ callback }) => {
  const uploadRef = createRef();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  const handleSelect = async (e) => {
    let file = e.target.files[0];
    if (!file) return;
    setImageUrl(URL.createObjectURL(file));
    const base64uri = await getBase64(file);
    callback(base64uri);
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
