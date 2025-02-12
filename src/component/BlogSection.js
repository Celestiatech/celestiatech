import React from 'react';
import './BlogSection.css'; // Import custom styles

const blogs = [
  {
    id: 1,
    title: "Top 10 Game Development Companies 2023",
    description:
      "With the amount of technological advancements the world is witnessing, there is no surprise the gaming genre is at the...",
    author: "By ChicMic Studios",
    time: "5:44 AM",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Best Practices in building Nemo Land Kingdom",
    description:
      "In this article, we will go over the best practices that were used while building Nemo Land Kingdom. Nemo Land...",
    author: "By ChicMic Studios",
    time: "12:45 PM",
    isFeatured: false,
  },
  {
    id: 3,
    title: "Best 5 Games in android you must try before everyone else",
    description:
      "From a basic arcade game to a full-fledged MMO, the mobile market is crowded with Android games from various...",
    author: "By ChicMic Studios",
    time: "12:13 PM",
    isFeatured: false,
  },
  {
    id: 4,
    title: "How is ChicMic carving a niche in App Development?",
    description:
      "Do you really feel that a magical stick has the power to transform the perception of your potential customers in...",
    author: "By ChicMic Studios",
    time: "3:14 PM",
    isFeatured: false,
  },
  {
    id: 5,
    title: "Exploring Cross-Platform Mobile App Development",
    description:
      "With a myriad of mobile devices with different operating systems, it is not possible for any business to focus just...",
    author: "By ChicMic Studios",
    time: "10:31 AM",
    isFeatured: false,
  },
];

const BlogSection = () => {
  return (
    <div className="blog-section container py-5">
      <h2 className="blog-title">Blogs</h2>
      <p className="blog-subtitle">
        Sharing knowledge fuels innovation—explore our blogs for fresh perspectives and tips.
      </p>

      <div className="row">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className={`col-md-${blog.isFeatured ? "4" : "3"} mb-4`}
          >
            <div className={`blog-card ${blog.isFeatured ? "featured" : ""}`}>
              <div className="blog-header">
                <span className="blog-author">{blog.author}</span>
                <span className="blog-time">{blog.time}</span>
              </div>
              <h5 className="blog-title">{blog.title}</h5>
              <p className="blog-description">{blog.description}</p>
              <div className="blog-read-more">→</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
