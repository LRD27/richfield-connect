import { useAppContext } from '../context/AppContext';

function Post({ post }) {
  const { dispatch } = useAppContext();

  const handleLike = () => {
    dispatch({ type: 'TOGGLE_LIKE', payload: post.id });
  };

  const handleDelete = () => {
    const confirmed = window.confirm('Delete this post?');
    if (confirmed) {
      dispatch({ type: 'DELETE_POST', payload: post.id });
    }
  };

  return (
    <article className="post-card card-panel">
      <div className="post-header">
        <div>
          <h4>{post.username}</h4>
          <span>{post.timestamp}</span>
        </div>
        <button type="button" className="delete-btn" onClick={handleDelete}>
          Delete
        </button>
      </div>

      <p className="post-content">{post.content}</p>

      <button
        type="button"
        className={post.liked ? 'like-button liked' : 'like-button'}
        onClick={handleLike}
      >
        {post.liked ? 'Liked' : 'Like'} <span>{post.likes}</span>
      </button>
    </article>
  );
}

export default Post;
