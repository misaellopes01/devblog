
import * as Dialog from '@radix-ui/react-dialog';
import "./PostsHeader.css"
import { NewPost } from "../NewPost/NewPost";

export function PostsHeader(props) {

  const saveNewPostData = (newPostData) => {
    props.onAddNewPostData(newPostData)
  }

  return (
    <>
      <div className="posts-header margin-uni ">
        <span className="title"> Recentes</span>
        <div className='create-button-wrapper'>
        <Dialog.Root>
          <Dialog.Trigger asChild>
              <button className='create-button'>Criar Postagem</button>
          </Dialog.Trigger>
          <NewPost onSaveNewPostData = {saveNewPostData} />
        </Dialog.Root>
        </div>
        
      </div>

    </>
  )
}