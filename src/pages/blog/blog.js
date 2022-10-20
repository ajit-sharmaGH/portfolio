import "./blog.css";

import { myBlogs } from "../../component/data/data";
// import "./blogs.css";
const BlogComponent = () => {
  return (
    <section className="blogs-section mb-1">
        <div className="flex-col-center">
      <h3 className="mt-1 mb-1">My Blogs</h3>
      <p className="txt-align-center">Here I have mentioned some of Blogs</p>
      </div>
      <div className="blogs-child">
        {myBlogs.map((item) => {
          return (
            <div className="blogs-component" key={item.id}>
              <img
                src={item.img}
                className="blogs-images mt-2"
                alt="blogsImage"
              />
              <aside className="flex-col hover-bg-color">
                <h3 className="">{item.title} </h3>
                <span>{item.description}</span>
                <span className="blogs-anchor-tag mt-1 flex-wrap">
                 <a href={item.blogLink} target="_blank" rel="noreferrer" >Read More About It</a>
                </span>
              </aside>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export { BlogComponent };
