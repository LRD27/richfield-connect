import { useState } from 'react';
import { useAppContext } from '../context/AppContext';

function CreatePost() {
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const { user, dispatch } = useAppContext();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!content.trim()) {
      setError('Post content cannot be empty.');
      return;
    }

    const newPost = {
      id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Date.now(),
      username: user?.fullName || 'Guest Student',
      timestamp: new Date().toLocaleString([], {
        dateStyle: 'medium',
        timeStyle: 'short',
      }),
      content: content.trim(),
      likes: 0,
      liked: false,
    };

    dispatch({ type: 'ADD_POST', payload: newPost });
    setContent('');
    setError('');
  };

  return (
    <section className="create-post card-panel">
      <h3>Create a Post</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
            if (event.target.value.trim()) {
              setError('');
            }
          }}
          rows="4"
          placeholder="Share an update, event, or useful campus tip..."
        />
        {error && <span className="field-error">{error}</span>}
        <button type="submit" className="primary-btn post-button">
          Post
        </button>
      </form>
    </section>
  );
}

export default CreatePost;
