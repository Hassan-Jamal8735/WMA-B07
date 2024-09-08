import React from 'react';
import './Blog.css'; // Import your CSS file if needed

const Blog = () => {
  return (
    <div className="blog">
      <h2 className="h2">Latest Blog Post</h2>

      <div className="blog-card-group">
        {blogData.map((post, index) => (
          <div className="blog-card" key={index}>
            <div className="blog-card-banner">
              <img
                src={require(`../../assets/images/blog-${index + 1}.png`)}
                alt={post.title}
                width="250"
                className="blog-banner-img"
              />
            </div>

            <div className="blog-content-wrapper">
              <button className="blog-topic text-tiny">{post.topic}</button>

              <h3>
                <a href={post.link} className="h3">
                  {post.title}
                </a>
              </h3>

              <p className="blog-text">{post.description}</p>

              <div className="wrapper-flex">
                <div className="profile-wrapper">
                  <img
                    src={require("../../assets/images/author.png")}
                    alt="Julia Walker"
                    width="50"
                  />
                </div>

                <div className="wrapper">
                  <a href={post.authorLink} className="h4">
                    {post.author}
                  </a>

                  <p className="text-sm">
                    <time dateTime={post.date}>{post.dateFormatted}</time>
                    <span className="separator"></span>
                    <ion-icon name="time-outline"></ion-icon>
                    <time dateTime={post.time}> {post.readTime}</time>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="btn load-more">Load More</button>
    </div>
  );
};

const blogData = [
  {
    title: "Building microservices with Dropwizard, MongoDB & Docker",
    topic: "Database",
    description: "This NoSQL database oriented to documents (by documents like JSON)...",
    link: "#",
    author: "Julia Walker",
    authorLink: "#",
    date: "2022-01-17",
    dateFormatted: "Jan 17, 2022",
    time: "PT3M",
    readTime: "3 min"
  },
  {
    title: "Fast web page loading on a $20 feature phone",
    topic: "Web Performance",
    description: "Feature phones are affordable (under $20-25)...",
    link: "#",
    author: "Julia Walker",
    authorLink: "#",
    date: "2021-12-10",
    dateFormatted: "Dec 10, 2021",
    time: "PT2M",
    readTime: "2 min"
  },
  // Add more blog posts here...
];

export default Blog;
