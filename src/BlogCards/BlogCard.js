import "./BlogCard.css";

function BlogCard(props) {
    return(

      <div className="blgCard">
        
        <img src={props.imgBlog} alt="cool" className="blogImage"/>
        
      <div class="category">
          <h5>Category</h5>
          <h5 class="date">November 22, 2021</h5>
      </div>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum!</p>
      <div class="author">
          <img src={props.authorPick} alt=""/>
          <p>name</p>
      </div>
      </div>
    );
  }
  export default BlogCard;

