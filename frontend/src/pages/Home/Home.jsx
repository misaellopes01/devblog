import { Divider } from "../../components/Divider/Divider";
import { MoreOptions } from "../../components/PostsHeader/MoreOptions/MoreOptions";
import { PromPost } from "../../components/PromPost/PromPost";
import { RecentsPosts } from "../../components/RecentsPosts/RecentesPosts";
import { SmallPosts } from "../../components/SmallPosts/SmallPosts";

import PostImage from "../../assets/post1.png";
import Post2Image from "../../assets/post2.png";
import Post3Image from "../../assets/post3.png";
import Post4Image from "../../assets/post4.png";
import Post5Image from "../../assets/post5.png";
import { PostsHeader } from "../../components/PostsHeader/PostsHeader";
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


export function Home() {

  const [posts, setPosts] = useState(initialPosts)

  const onAddNewPostDataHandler = (newPostData) => {
    setPosts((prevPosts) => {
      return [newPostData, ...prevPosts]
    })
  }

  return (
    <>
      <PostsHeader onAddNewPostData = {onAddNewPostDataHandler}/>

      <div className="posts-wrapper">
        {posts.filter((post, index) => index <= 1)
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

      <div className="more-content">
        <MoreOptions />
      </div>

      <div className="posts-wrapper">
        <div className="posts uni">
          {posts.filter((post, index) => index === 2)
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
          {posts.filter((post, index) => index > 2 && index <= 4)
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
    </>
  );
}
