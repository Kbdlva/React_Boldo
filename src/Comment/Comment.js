import './Comment.css'

function Comment(props){
    return(
        <div className="com">
        <div class="avatar">
          <h3>{props.com}</h3>
          <div class="author">
            <img src={props.authorPick} alt=""/>
              <div class="person">
                <p>{props.name}</p>
                <p>{props.status}</p>
              </div>
          </div>
        </div>
      </div>
);
}

export default Comment;