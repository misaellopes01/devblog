import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { NewPostForm } from "../NewPostForm/NewPostForm";
import "./NewPost.css";


export function NewPost(props) {

  const savePostData = (postadata) => {
    props.onSaveNewPostData(postadata)
  }

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
            <NewPostForm onSavePostData= {savePostData}/>
          </Dialog.Content>
        </Dialog.Portal>
      </div>
    </>
  );
}
