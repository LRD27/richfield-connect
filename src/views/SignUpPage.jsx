import SignUpForm from '../components/SignUpForm';
import ProfilePreview from '../components/ProfilePreview';
import { useState } from 'react';

function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    studentNumber: '',
    campus: '',
    email: '',
    password: '',
    confirmPassword: '',
    interests: [],
    bio: '',
    terms: false,
  });

  return (
    <section className="signup-page">
      <div className="section-heading">
        <h1>Register your profile</h1>
      </div>
      <div className="signup-layout">
        <SignUpForm formData={formData} setFormData={setFormData} />
        <ProfilePreview formData={formData} />
      </div>
    </section>
  );
}

export default SignUpPage;
