import CreatePost from './CreatePost';
import Post from './Post';
import { useAppContext } from '../context/AppContext';

function Feed() {
  const { posts } = useAppContext();

  return (
    <section className="feed-layout">
      <CreatePost />

      <div className="feed-list">
        {posts.length === 0 ? (
          <div className="card-panel empty-feed">
            <p>No posts yet. Be the first to share an update.</p>
          </div>
        ) : (
          posts.map((post) => <Post key={post.id} post={post} />)
        )}
      </div>
    </section>
  );
}

export default Feed;
