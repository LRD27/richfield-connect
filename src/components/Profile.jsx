import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

function Profile() {
  const { user, posts } = useAppContext();

  if (!user) {
    return (
      <section className="empty-state card-panel">
        <h2>No profile yet</h2>
        <p>You have not registered with Richfield Connect yet.</p>
        <Link to="/signup" className="primary-btn">
          Register now
        </Link>
      </section>
    );
  }

  const initials = user.fullName
    .split(' ')
    .map((part) => part.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('');

  const stats = [
    { label: 'Posts', value: posts.length },
    { label: 'Connections', value: '248' },
    { label: 'Groups', value: '12' },
  ];

  return (
    <section className="profile-view card-panel">
      <div className="profile-header">
        <div className="profile-avatar">{initials}</div>
        <div>
          <p className="eyebrow">Student Profile</p>
          <h2>{user.fullName}</h2>
        </div>
      </div>

      <div className="profile-details">
        <div className="detail-row">
          <span>Student Number</span>
          <strong>{user.studentNumber}</strong>
        </div>
        <div className="detail-row">
          <span>Campus</span>
          <strong>{user.campus}</strong>
        </div>
        <div className="detail-row">
          <span>Email</span>
          <strong>{user.email}</strong>
        </div>
      </div>

      <div className="interest-tags">
        {user.interests.map((interest) => (
          <span key={interest} className="tag">
            {interest}
          </span>
        ))}
      </div>

      <div className="bio-box">
        <h3>About</h3>
        <p>{user.bio}</p>
      </div>

      <div className="stats-row">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-box">
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Profile;
