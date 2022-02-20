import { create } from "ipfs-http-client";

const client = create("https://ipfs.infura.io:5001/api/v0");

const getIpfsUrl = async (file) => {
  try {
    const created = await client.add(file);
    const url = `https://ipfs.infura.io/ipfs/${created.path}`;

    console.log({ ipfsUrl: url });

    return url;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

export default getIpfsUrl;
