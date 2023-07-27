// Imorting Css File
import "./App.css";

// Importing Components
import { SmallPosts } from "./components/SmallPosts/SmallPosts";
import { MoreOptions } from "./components/PostsHeader/MoreOptions/MoreOptions";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Divider } from "./components/Divider/Divider";
import { PostsHeader } from "./components/PostsHeader/PostsHeader";
import { RecentsPosts } from "./components/RecentsPosts/RecentesPosts";

// Imorting Images
import PostImage from "../src/assets/post1.png";
import Post2Image from "../src/assets/post2.png";
import Post3Image from "../src/assets/post3.png";
import Post4Image from "../src/assets/post4.png";
import Post5Image from "../src/assets/post5.png";
import { PromPost } from "./components/PromPost/PromPost";
import { useState } from "react";

const initialPosts = [
  {
    id: Math.random().toString(),
    img: PostImage,
    title: "Polluters",
    author: "Mariano Capiliku",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa impedit voluptatum eaque similique facilis error id. Repellendus, consequatur suscipit! Dicta dolores libero iusto ratione molestias sequi adipisci corrupti fuga repellendus!",
  },

  {
    id: Math.random().toString(),
    img: Post2Image,
    title: "Corona Virus",
    author: "Miseal Lopes",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa impedit voluptatum eaque similique facilis error id. Repellendus, consequatur suscipit! Dicta dolores libero iusto ratione molestias sequi adipisci corrupti fuga repellendus!",
  },

  {
    id: Math.random().toString(),
    img: Post3Image,
    title: "Dev Conference 2023",
    author: "Chelsea de Carvalho",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa impedit voluptatum eaque similique facilis error id. Repellendus, consequatur suscipit! Dicta dolores libero iusto ratione molestias sequi adipisci corrupti fuga repellendus!",
  },

  {
    id: Math.random().toString(),
    img: Post4Image,
    title: "Arsenal from Inside",
    author: "Scanner Afonso",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa impedit voluptatum eaque similique facilis error id. Repellendus, consequatur suscipit! Dicta dolores libero iusto ratione molestias sequi adipisci corrupti fuga repellendus!",
  },
  {
    id: Math.random().toString(),
    img: Post5Image,
    title: "Angola a country to think",
    author: "Mario Vicente",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa impedit voluptatum eaque similique facilis error id. Repellendus, consequatur suscipit! Dicta dolores libero iusto ratione molestias sequi adipisci corrupti fuga repellendus!",
  },
];

export function App() {
  const [posts, setPosts] = useState(initialPosts);

  const onAddNewPosrDataHandler = (newPostData) => {
    console.log(newPostData)
    setPosts((prevPosts) => {
      return [newPostData, ...prevPosts];
    });
  };

  return (
    <>
      <Header />
      <Divider />
      <PostsHeader onAddNewPostData={onAddNewPosrDataHandler} />

      <div className="posts-wrapper">
        {posts
          .filter((post, index) => index <= 1)
          .map((post) => {
            return (
              <RecentsPosts
                img={post.img}
                title={post.title}
                author={post.author}
                content={post.content.substring(0, 220).concat("...")}
                key={post.id}
              />
            );
          })}
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
          {posts
            .filter((post, index) => index === 2)
            .map((post) => {
              return (
                <PromPost
                  img={post.img}
                  title={post.title}
                  author={post.author}
                  content={post.content.substring(0, 220).concat("...")}
                  key={post.id}
                />
              );
            })}
        </div>

        <div className="side-posts">
          {posts
            .filter((post, index) => index > 2 && index <= 4)
            .map((post) => {
              return (
                <SmallPosts
                  img={post.img}
                  title={post.title}
                  author={post.author}
                  content={post.content.substring(0, 220).concat("...")}
                  key={post.id}
                />
              );
            })}
        </div>
      </div>
      <Footer />
    </>
  );
}
