import React from 'react';
import { IonIcon } from '@ionic/react'; // Ensure you have the Ionic React package installed

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      image: require("../../assets/images/blog-1.png"),
      topic: 'Database',
      title: 'Building microservices with Dropwizard, MongoDB & Docker',
      description: 'This NoSQL database oriented to documents (by documents like JSON) combines some of the features from relational databases, easy to use and the multi-platform is the best option for scale up and have fault tolerance, load balancing, map reduce, etc.',
      author: 'Julia Walker',
      date: '2022-01-17',
      time: '3 min',
    },
    {
      id: 2,
      image: require("../../assets/images/blog-2.png"),
      topic: 'Web Performance',
      title: 'Fast web page loading on a $20 feature phone',
      description: 'Feature phones are affordable (under $20-25), low-end devices enabling 100s of millions of users in developing countries to leverage the web. Think of them as a light version of a smart phone.',
      author: 'Julia Walker',
      date: '2021-12-10',
      time: '2 min',
    },
    {
      id: 3,
      image: require("../../assets/images/blog-3.png"),
      topic: 'Accessibility',
      title: 'Accessibility Tips for Web Developers',
      description: 'It\'s awesome to build sites that are inclusive and accessible to everyone. There are at least six key areas of disability we can optimize for: visual, hearing, mobility, cognition, speech and neural. Many tools and resources can help here, even if you\'re totally new to web accessibility.',
      author: 'Julia Walker',
      date: '2021-11-28',
      time: '4 min',
    },
    {
      id: 4,
      image: require("../../assets/images/blog-4.png"),
      topic: 'Database',
      title: 'Dynamically Securing Databases using Hashicorp Vault',
      description: 'Nowadays, it\'s hard to profoundly talk about security in the IT industry, since it has to be considered on so many different levels: from securing code chunks, securing containers, up to securing complex infrastructures and defining strong authorization and authentication policies across the enterprise.',
      author: 'Julia Walker',
      date: '2021-11-20',
      time: '4 min',
    },
    {
      id: 5,
      image: require("../../assets/images/blog-5.png"),
      topic: 'Web Performance',
      title: 'Adaptive Loading - Improving Web Performance on low-end devices',
      description: 'Adaptive Loading: Do not just respond based on screen size, adapt based on actual device hardware. Any user can have a slow experience. In a world with widely varying device capabilities, a "one-size" fits all experience may not always work. Sites that delight users on high-end devices can be unusable on low-end ones, particularly on median mobile and desktop hardware and in emerging markets.',
      author: 'Julia Walker',
      date: '2021-11-10',
      time: '3 min',
    },
    {
      id: 6,
      image: require("../../assets/images/blog-6.png"),
      topic: 'Accessibility',
      title: 'Don\'t Develop Just for Yourself - A Developer\'s Checklist to Accessibility',
      description: 'We, as developers, tend to develop sites unconsciously for people like ourselves. If we don\'t actively pay attention, the sites are often accessible only for certain types of people: Sighted mouse-users, who have good fine motor skills and are good at using computers.',
      author: 'Julia Walker',
      date: '2021-10-25',
      time: '7 min',
    },
    {
      id: 7,
      image: require("../../assets/images/blog-7.png"),
      topic: 'Database',
      title: 'Building a Restful CRUD API with Node JS, Express, and MongoDB',
      description: 'Application Programming Interface is the abbreviation for API. An API is a software interface that enables two apps to communicate with one another. In other words, an API is a messenger that sends your request to the provider and then returns the response to you.',
      author: 'Julia Walker',
      date: '2021-10-15',
      time: '5 min',
    },
    {
      id: 8,
      image: require("../../assets/images/blog-8.png"),
      topic: 'Web Performance',
      title: 'Monitoring Performance with the PageSpeed Insights API',
      description: 'The PageSpeed Insights API provides free access to performance monitoring for web pages and returns data with suggestions for how to improve. The V5 API includes lab data from Lighthouse and real-world data from the Chrome User Experience Report (CrUX).',
      author: 'Julia Walker',
      date: '2021-10-03',
      time: '5 min',
    },
    {
      id: 9,
      image: require("../../assets/images/blog-9.png"),
      topic: 'Accessibility',
      title: 'The best web accessibility tools for developers in 2021',
      description: 'The quality of the tools you use defines the speed with which you can diagnose and resolve problems. Each year the landscape changes dramatically in web technologies, and of late the tooling for accessibility is no exception.',
      author: 'Julia Walker',
      date: '2021-09-13',
      time: '7 min',
    },
    {
      id: 10,
      image: require("../../assets/images/blog-10.png"),
      topic: 'Database',
      title: 'How to connect a React frontend with a NodeJS/Express backend',
      description: 'The MERN (MongoDB, Express, React, NodeJS) stack is very popular for making full stack applications, utilizing Javascript for both the backend and frontend as well as a document-oriented or non relational database (MongoDB), meaning that it\'s structured like JSON rather than a large excel sheet like SQL databases are.',
      author: 'Julia Walker',
      date: '2021-09-21',
      time: '4 min',
    },
  ];

  return (
    <div className="blog">
      <h2 className="h2">Latest Blog Post</h2>
      <div className="blog-card-group">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <div className="blog-card-banner">
              <img
                src={post.image}
                alt={post.title}
                width="250"
                className="blog-banner-img"
              />
            </div>
            <div className="blog-content-wrapper">
              <button className="blog-topic text-tiny">{post.topic}</button>
              <h3>
                <a href="#" className="h3">
                  {post.title}
                </a>
              </h3>
              <p className="blog-text">{post.description}</p>
              <div className="wrapper-flex">
                <div className="profile-wrapper">
                  <img
                    src={require("../../assets/images/author.png")}
                    alt={post.author}
                    width="50"
                  />
                </div>
                <div className="wrapper">
                  <a href="#" className="h4">{post.author}</a>
                  <p className="text-sm">
                    <time dateTime={post.date}>{post.date}</time>
                    <span className="separator"></span>
                    <IonIcon name="time-outline" />
                    <time dateTime={`PT${post.time.split(' ')[0]}M`}>{post.time}</time>
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

export default Blog;
