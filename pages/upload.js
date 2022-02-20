import React, { useState } from "react";

import { create } from "ipfs-http-client";
import Image from "next/image";

const client = create("https://ipfs.infura.io:5001/api/v0");

const Upload = () => {
  const [file, setFile] = useState(null);
  const [urlArr, setUrlArr] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const created = await client.add(file);
      const url = `https://ipfs.infura.io/ipfs/${created.path}`;

      console.log({ url });

      setUrlArr((prev) => [...prev, url]);
    } catch (error) {
      console.log(error.message);
    }
  };

  const retrieveFile = (e) => {
    const data = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      console.log("Buffer data: ", Buffer(reader.result));
      setFile(Buffer(reader.result));
    };

    e.preventDefault();
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input type="file" name="data" onChange={retrieveFile} />
        <button type="submit" className="btn">
          Upload file
        </button>
      </form>

      {urlArr.length !== 0 ? (
        urlArr.map((el, i) => (
          <img key={i} src={el} alt="nfts" height={300} width={300} />
        ))
      ) : (
        <h3>Upload data</h3>
      )}
    </div>
  );
};

export default Upload;
