import React from 'react';

function BlogPost(props) {
// class BlogPost extends React.Component {
    // constructor(props) {
    //     super (props);
    //     this.state = {
    //                     title: '',
    //                     date: new Date(),
    //                     description: '',
    //                     imgUrl: ''
    //     }   
    // }
    // render() {
        return (
            <main className="blogCard"> 
                <section className="blogImage">
                    <img src={props.imgUrl} alt=""></img>
                </section>
                <section className="blogContent">
                    <h1 id="blog-date">{props.date}</h1>
                    <h1 id="blog-title">{props.title}</h1>
                    <p id="blog-description">{props.description}</p>
                </section>
            </main>
        )
    // }
} export default BlogPost;