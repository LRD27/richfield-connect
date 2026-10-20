function ProfilePreview({ formData }) {
  const interests = formData.interests || [];

  return (
    <aside className="profile-preview">
      <div className="preview-header">
        <div className="preview-avatar">
          {formData.fullName ? formData.fullName.charAt(0).toUpperCase() : 'R'}
        </div>
        <div>
          <p className="eyebrow">Live Preview</p>
          <h3>{formData.fullName || 'Your Name'}</h3>
        </div>
      </div>

      <div className="preview-body">
        <p>
          <strong>Campus:</strong> {formData.campus || 'Not selected'}
        </p>
        <p>
          <strong>Bio:</strong> {formData.bio || 'Add your personal story and aspirations.'}
        </p>

        <div className="interest-tags">
          {interests.length > 0 ? (
            interests.map((interest) => (
              <span key={interest} className="tag">
                {interest}
              </span>
            ))
          ) : (
            <span className="tag muted-tag">No interests selected</span>
          )}
        </div>
      </div>
    </aside>
  );
}

export default ProfilePreview;
