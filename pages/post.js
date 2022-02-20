import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { storage, db, serverTimestamp } from "../firebase";
import Head from "next/head";
import getIpfsUrl from "../utils/getIpfsUrl";

export default function Post({ user }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

  const [form, setForm] = useState({
    title: "",
    body: "",
    imgUrl: "",
  });

  useEffect(() => {
    if (url) {
      try {
        db.collection("newsposts").add({
          title,
          body,
          imageUrl: url,
          postedBy: user.uid,
          createdAt: serverTimestamp(),
        });
        M.toast({ html: "News Post added!", classes: "green" });
      } catch (err) {
        M.toast({ html: "error", classes: "red" });
      }
    }
  }, [url]);

  const SubmitDetails = () => {
    if (!title || !body || !image) {
      M.toast({ html: "Please add all the fields", classes: "red" });
      return;
    }
    var uploadTask = storage.ref().child(`image/${uuidv4()}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        if (progress == "100") {
          M.toast({ html: "Image Uploaded", classes: "greeb" });
        }
      },
      (error) => {
        M.toast({ html: error.message, classes: "red" });
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("File available at", downloadURL);
          setUrl(downloadURL);
        });
      }
    );
  };

  const onFileChange = async (e) => {
    const data = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      console.log("Buffer data: ", Buffer(reader.result));
      resolveImgUrl(Buffer(reader.result));
    };

    e.preventDefault();
  };

  const resolveImgUrl = async (data) => {
    const imgUrl = await resolveIpfsUrl(data);
    setForm((prev) => ({ ...prev, imgUrl }));
  };

  const resolveIpfsUrl = async (data) => {
    const ipfsDataUrl = await getIpfsUrl(data);

    return ipfsDataUrl;
  };

  const onSubmit = async () => {
    if (!form.title || !form.body || !form.imgUrl) {
      return alert("Please enter all the fields");
    }

    const jsonBlogData = Buffer.from(JSON.stringify(form));

    const dataUrl = await resolveIpfsUrl(jsonBlogData);

    console.log({ dataUrl });
  };

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    console.log({ form });
  }, [form]);

  return (
    <>
      <Head>
        <title>TOINApp - Post</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="input-field rootdiv">
        <h3> What news do you want to put up?</h3>
        <input
          name="title"
          type="text"
          value={form.title}
          placeholder="Headline"
          onChange={onChange}
        />
        <textarea
          name="body"
          type="text"
          value={form.body}
          placeholder="News Body Content"
          onChange={onChange}
        />
        <div className="file-field input-field">
          <div className="btn #9e9e9e grey">
            <span>Attach an image</span>
            <input type="file" onChange={onFileChange} />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
        <button className="btn #00bcd4 cyan" onClick={onSubmit}>
          SUBMIT NEWS
        </button>
        <style jsx>
          {`
            .rootdiv {
              margin: 50px auto;
              max-width: 600px;
              padding: 20px;
              text-align: center;
            }
          `}
        </style>
      </div>
    </>
  );
}
