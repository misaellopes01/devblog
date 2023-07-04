import "./App.css";

import { Header } from "./components/Header/Header";
import { Divider } from "./components/Divider/Divider";
import { PostsHeader } from "./components/PostsHeader/PostsHeader";
import { RecentsPosts } from "./components/RecentsPosts/RecentesPosts";

import PostImage from "../src/assets/post1.png";
import Post2Image from "../src/assets/post2.png";
import { SmallPosts } from "./components/SmallPosts/SmallPosts";
import { MoreOptions } from "./components/PostsHeader/MoreOptions/MoreOptions";
import { Footer } from "./components/Footer/Footer";

export function App() {
  return (
    <>
      <Header />
      <Divider />
      <PostsHeader />

      <div className="posts-wrapper">
        <RecentsPosts
          img={PostImage}
          title="Polluters"
          author="Mariano Capiliku"
          content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati magni saepe aperiam voluptatem repellat nostrum illum, voluptatibus est corporis qui ea quia cumque fugiat sit molestiae hic, dolor corrupti accusamus."
        />

        <RecentsPosts
          img={Post2Image}
          title="Corona Virus"
          author="Misael Lopes"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora ipsum consequuntur nostrum quae quibusdam. Voluptatem, reiciendis quo quod dolorem ea, earum nulla consectetur fuga doloremque quos, blanditiis praesentium exercitationem unde? "
        />
      </div>

      <Divider />
      {/* <div className="divisor-wrapper">
        <div className="divisor"></div>
      </div> */}

      <div className="more-content">
        <MoreOptions />
      </div>

      <div className="posts-wrapper">
        <div className="posts uni">
          <RecentsPosts
            img={Post2Image}
            title="Corona Virus"
            author="Misael Lopes"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora ipsum consequuntur nostrum quae quibusdam. Voluptatem, reiciendis quo quod dolorem ea, earum nulla consectetur fuga doloremque quos, blanditiis praesentium exercitationem unde? "
          />
        </div>

        <div className="side-posts">
          <SmallPosts
            img={PostImage}
            title="Polluters"
            author="Mariano Capiliku"
            content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati magni saepe aperiam voluptatem repellat nostrum illum, voluptatibus est corporis qui ea quia cumque fugiat sit molestiae hic, dolor corrupti accusamus."
          />
          <SmallPosts
            img={PostImage}
            title="Polluters"
            author="Mariano Capiliku"
            content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati magni saepe aperiam voluptatem repellat nostrum illum, voluptatibus est corporis qui ea quia cumque fugiat sit molestiae hic, dolor corrupti accusamus."
          />
        </div>
      </div>

      <Footer/>
    </>
  );
}
