import React from 'react'
import blogs from './blogobj'
import './blog.css'
const Blog = () => {
  return (
    <>
      <div id='blogs' className="blog_section section__padding">
        <div className="blog_section_header">
            <h1>A lot is happening, <br/> We are blogging about it</h1>
        </div>
        <div className="blog_section_blogs">
            <div className="blog_section_blogs_horizontal_blog">
                {blogs.map((blog,index)=>{
                return <div key={index} className="blog_section_blogs_horizontal_blogs">
                <div className="horizontal_blog_image">
                    <img src={blog.picture} alt="" />
                </div>
                <div className="horizontal_blog_content">
                    <p>{blog.time}</p>
                    <h4>{blog.content}</h4>
                    <p>{blog.footer}</p>
                </div>
                </div>

                })}
            </div>
        </div>
      </div>
    </>
  )
}

export default Blog
