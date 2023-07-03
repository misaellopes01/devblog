import "./App.css";

import { Header } from "./components/Header/Header";
import { Divider } from "./components/Divider/Divider";
import { PostsHeader } from "./components/PostsHeader/PostsHeader";
import { RecentsPosts } from "./components/RecentsPosts/RecentesPosts";

import PostImage from "../src/assets/post1.png";
import Post2Image from "../src/assets/post2.png";

export function App() {
  return (
    <>
      <Header />
      <Divider />
      <PostsHeader />

      <div className="posts-wrapper">
        <RecentsPosts
          img={PostImage}
          title="Recent Post"
          author="Mariano Capiliku"
          content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati magni saepe aperiam voluptatem repellat nostrum illum, voluptatibus est corporis qui ea quia cumque fugiat sit molestiae hic, dolor corrupti accusamus."
        />

        <RecentsPosts
          img={Post2Image}
          title="JavaScript"
          author="Misael Lopes"
          content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati magni saepe aperiam voluptatem repellat nostrum illum, voluptatibus est corporis qui ea quia cumque."
        />
      </div>
    </>
  );
}
