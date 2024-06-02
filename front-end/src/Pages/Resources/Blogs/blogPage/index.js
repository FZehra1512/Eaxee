import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import blogs from "../blogObject";
import Error from "../../../Error";
import styles from "./blogPage.module.css";
import { IoIosTime, IoMdPerson } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


const BlogPage = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === id);
  const blogIndex = blogs.findIndex((blog) => blog.id === id);
  
  const previousBlogId = blogIndex > 0 ? blogs[blogIndex - 1].id : null;
  const nextBlogId =
    blogIndex < blogs.length - 1 ? blogs[blogIndex + 1].id : null;


  const [content, setContent] = useState("");

  useEffect(() => {
    if (blog) { 
      if (blog.contentPath) {
        fetch(process.env.PUBLIC_URL + blog.contentPath)
          .then((res) => res.text())
          .then((text) => setContent(text))
          .catch((error) =>
            console.error("Error fetching blog content:", error)
          );
      }
    }
  }, [blog]);

  const blogUrl = window.location.href;
  const encodedBlogUrl = encodeURIComponent(blogUrl);

  if (!blog) {
    return <Error text="No such blog exists on eaxee.com" />;
  }

  return (
    <div className={styles.blogContainer}>
      <div className={styles.blogPost}>
        <h1>{blog.title}</h1>

        <div className={styles.publication}>
          <div>
            <IoIosTime />
            <p>{blog.date}</p>
          </div>
          <div>
            <IoMdPerson />
            <p>{blog.author}</p>
          </div>
        </div>

        <hr className={styles.linebreak}></hr>

        <div className={styles.shareLinks}>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedBlogUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare />
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedBlogUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodedBlogUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiTwitterXLine />
          </a>
        </div>

        <div className={styles.blogContent}>
          <ReactMarkdown className={styles.markdown}>{content}</ReactMarkdown>
        </div>

        <div className={styles.prevNextButtons}>
          {previousBlogId ? (
            <Link to={`/blog/${previousBlogId}`}>
              <button className="button">Previous Blog</button>
            </Link>
          ) : (
            ""
          )}
          {nextBlogId ? (
            <Link to={`/blog/${nextBlogId}`}>
              <button className="button">Next Blog</button>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
