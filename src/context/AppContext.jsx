import { createContext, useContext, useEffect, useReducer } from 'react';

const STORAGE_KEYS = {
  user: 'richfield-connect-user',
  posts: 'richfield-connect-posts',
};

const defaultPosts = [
  {
    id: 1,
    username: 'Student Services',
    timestamp: 'Today at 09:30 AM',
    content:
      'Welcome to Richfield Connect. Share your campus updates, resources and events here.',
    likes: 12,
    liked: false,
  },
  {
    id: 2,
    username: 'Campus Life',
    timestamp: 'Yesterday at 04:15 PM',
    content:
      'Join the peer mentoring sessions this week to connect with new students and support services.',
    likes: 8,
    liked: true,
  },
];

const getStoredValue = (key, fallback) => {
  if (typeof window === 'undefined') {
    return fallback;
  }

  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
};

const initialState = () => ({
  user: getStoredValue(STORAGE_KEYS.user, null),
  posts: getStoredValue(STORAGE_KEYS.posts, defaultPosts),
});

function appReducer(state, action) {
  switch (action.type) {
    case 'REGISTER_USER':
      return { ...state, user: action.payload };
    case 'ADD_POST':
      return { ...state, posts: [action.payload, ...state.posts] };
    case 'TOGGLE_LIKE':
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id !== action.payload) {
            return post;
          }

          const liked = !post.liked;

          return {
            ...post,
            liked,
            likes: liked ? post.likes + 1 : post.likes - 1,
          };
        }),
      };
    case 'DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    default:
      return state;
  }
}

const AppContext = createContext();

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, undefined, initialState);

  useEffect(() => {
    if (state.user) {
      localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(state.user));
      return;
    }

    localStorage.removeItem(STORAGE_KEYS.user);
  }, [state.user]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.posts, JSON.stringify(state.posts));
  }, [state.posts]);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used inside AppProvider');
  }

  return context;
}

export default AppContext;
