import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import "./NewPost.css";

import UpLoadImage from "../../assets/uploadImage.svg"

export function NewPost() {
  return (
    <>
      <div className="new-post-wrapper">
        <Dialog.Portal>
          <Dialog.Overlay className="DialogoOverlay" />
          <Dialog.Content className="DialogContent">
            <Dialog.Title className="DialogTitle">
              <Dialog.Close asChild>
                <X size={22} />
              </Dialog.Close>
            </Dialog.Title>
            <form action="">
              <div className="content-form">
                <div className="input-image">
                  <input type="file" id="input-file-upload" multiple={true} />
                  <label id="label-file-upload" htmlFor="input-file-upload">
                    <div className="upload-image">
                      <img src={UpLoadImage} alt="" />
                      <p>Drag and drop your image or <span>Click Here</span> </p>
                    </div>
                  </label>
                </div>

                <div className="input-info">
                  <label htmlFor="title"> Title</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Once upon a time.."
                    id="title"
                  />{" "}
                  <br />
                  <label htmlFor="description"> Description</label>
                  <br />
                  <textarea
                    name=""
                    id="description"
                    cols="30"
                    rows="10"
                    placeholder=" The start of a wonderfull story..."
                  ></textarea>
                  <div className="button">
                    <button className="post-button"> Postar</button>
                  </div>
                </div>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </div>
    </>
  );
}
