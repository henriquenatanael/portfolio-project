import React, { useState } from "react";
import { Header } from "../../components/Header";
import Input from "../../components/Input";
const fixPosts = [
  {
    slug: "introducing-the-new-jsx-transform",
    updatedAt: "15/04/2021",
    title: "Introducing the New JSX Transform",
    excerpt:
      "Browsers don’t understand JSX out of the box, so most React users rely on a compiler like Babel or TypeScript to transform JSX code into regular JavaScript. Many preconfigured toolkits like Create React App or Next.js also include a JSX transform under the hood",
    link: "https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html",
  },
  {
    slug: "introducing-zero-bundle-size-react-server-components",
    updatedAt: "15/04/2021",
    title: "Introducing Zero-Bundle-Size React Server Components",
    excerpt:
      "React Server Components are still in research and development. We are sharing this work in the spirit of transparency and to get initial feedback from the React community. There will be plenty of time for that, so don’t feel like you have to catch up right now!",
    link: "https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html",
  },
  {
    slug: "react-v17.0-release-candidate:-no-new-features",
    updatedAt: "10/10/2021",
    title: "React v17.0 Release Candidate: No New Features",
    excerpt:
      "Today, we are publishing the first Release Candidate for React 17. It has been two and a half years since the previous major release of React, which is a long time even by our standards! In this blog post, we will describe the role of this major release, what changes you can expect in it, and how you can try this release.",
    link: "https://reactjs.org/blog/2020/08/10/react-v17-rc.html",
  },
];

export const Blog = () => {
  const [newBlog, setNewBlog] = useState(false);
  const [slug, setSlug] = useState("");
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [link, setLink] = useState("");
  const [posts, setPost] = useState(() => {
    const item = localStorage.getItem("@posts");
    let post = [];
    if (item) {
      post = JSON.parse(item);
    }
    return [...post];
  });

  const saveBlog = () => {
    const newPost = {
      slug,
      updatedAt: new Date().toLocaleDateString(),
      title,
      excerpt,
      link,
    };
    const newposts = [...posts];
    newposts.push(newPost);
    setPost(newposts);
    localStorage.setItem("@posts", JSON.stringify(newposts));
    setNewBlog(false);
  };

  return (
    <>
      <Header />
      <main className="content-post">
        <h1 className="highlight">Latest from React</h1>
        {/* {if(newBlog === false) {

      }} */}
        {newBlog === false ? (
          <div className="posts">
            {[...fixPosts, ...posts].map((post) => (
              <a
                key={post.slug}
                className="link"
                target="_blank"
                rel="noreferrer"
                href={`${post.link}`}
              >
                <time>{post.updatedAt}</time>
                <strong>{post.title}</strong>
                <p>{post.excerpt}</p>
              </a>
            ))}
              <p className="new"onClick={() => setNewBlog(true)}>
                  New
              </p>
          </div>
        ) : (
          <div className="posts">
            <h1>New post</h1>
            <div className="new-post">
              <div>
                <label>Slug</label>
                <Input
                  value={slug}
                  onChange={(e) => setSlug(e.currentTarget.value)}
                  type="text"
                />
              </div>
              <div>
                <label>Title</label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.currentTarget.value)}
                  type="text"
                />
              </div>
              <div>
                <label>Excerpt</label>
                <Input
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.currentTarget.value)}
                  type="text"
                />
              </div>
              <div>
                <label>Link</label>
                <Input
                  value={link}
                  onChange={(e) => setLink(e.currentTarget.value)}
                  type="url"
                />
              </div>

              <div className="actions">
                <button onClick={() => setNewBlog(false)}>Cancel</button>
                <button onClick={() => saveBlog()}>Create</button>
              </div>

              {/* slug: "introducing-zero-bundle-size-react-server-components",
      updatedAt: "August 10, 2020",
      title: "React v17.0 Release Candidate: No New Features",
      excerpt:
        "Today, we are publishing the first Release Candidate for React 17. It has been two and a half years since the previous major release of React, which is a long time even by our standards! In this blog post, we will describe the role of this major release, what changes you can expect in it, and how you can try this release.",
    }, */}
            </div>
          </div>
        )}
      </main>
    </>
  );
};
