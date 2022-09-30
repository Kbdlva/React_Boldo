import './Comment.css'

function Comment(props){
    return(
        <div className="com">
        <div className="avatar">
          <h3>{props.com}</h3>
          <div className="author">
            <img src={props.authorPick} alt=""/>
              <div className="person">
                <p>{props.name}</p>
                <p>{props.status}</p>
              </div>
          </div>
        </div>
      </div>
);
}

export default Comment;