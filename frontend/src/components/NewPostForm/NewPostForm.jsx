import { useState } from "react";
import "./NewPostForm.css";
import { NoImageSelected } from "./NoImageSelected";

export function NewPostForm(props) {
  const [postImage, setPostImage] = useState(null);
  const [fileName, setFileName] = useState("No image Selected");
  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");

  // Functions

  const imageChangeHandler = ({ target: { files } }) => {
    files[0] && setFileName(files[0].name);
    if (files) {
      setPostImage(URL.createObjectURL(files[0]));
    }
  };

  const titleChangeHandler = (event) => {
    setPostTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setPostDescription(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const postData = {
      id: Math.random().toString(),
      author: "Admin",
      img: postImage,
      title: postTitle,
      content: postDescription,
    };

    props.onSavePostData(postData);

    setPostDescription("");
    setPostImage("");
    setPostTitle("");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="content-form">
          <div className="input-image">
            <input
              required
              onChange={imageChangeHandler}
              type="file"
              id="input-file-upload"
              accept="image/*"
            />
            <label id="label-file-upload" htmlFor="input-file-upload">
              <div className="upload-image">
                {postImage ? (
                  <img
                    src={postImage}
                    alt={fileName}
                    width={500}
                    height={500}
                  />
                ) : (
                  <NoImageSelected />
                )}
              </div>
            </label>
          </div>

          <div className="input-info">
            <label htmlFor="title"> Title</label>
            <br />
            <input
              required
              value={postTitle}
              onChange={titleChangeHandler}
              type="text"
              placeholder="Once upon a time.."
              id="title"
            />{" "}
            <br />
            <label htmlFor="description"> Description</label>
            <br />
            <textarea
              required
              value={postDescription}
              onChange={descriptionChangeHandler}
              name=""
              id="description"
              cols="30"
              rows="10"
              placeholder=" The start of a wonderfull story..."
              wrap="break"
            ></textarea>
            <div className="button">
              <button type="submit" className="post-button">
                {" "}
                Postar
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
