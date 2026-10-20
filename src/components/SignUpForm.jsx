import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const interestOptions = [
  'Academic Support',
  'Clubs & Societies',
  'Career Growth',
  'Volunteering',
  'Wellbeing',
  'Technology',
  'Arts & Culture',
];

const initialForm = {
  fullName: '',
  studentNumber: '',
  campus: '',
  email: '',
  password: '',
  confirmPassword: '',
  interests: [],
  bio: '',
  terms: false,
};

function SignUpForm() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { dispatch } = useAppContext();

  const validateField = (name, value, currentValues) => {
    switch (name) {
      case 'fullName':
        return value.trim().length >= 2 ? '' : 'Full name is required.';
      case 'studentNumber':
        return /^\d{6,}$/.test(value) ? '' : 'Student number must be numeric and at least 6 digits.';
      case 'campus':
        return value ? '' : 'Please select a campus.';
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Email must contain @ and a valid domain.';
      case 'password':
        return value.length >= 8 ? '' : 'Password must be at least 8 characters.';
      case 'confirmPassword':
        return value === currentValues.password ? '' : 'Passwords must match.';
      case 'interests':
        return Array.isArray(value) && value.length >= 1 ? '' : 'Select at least one interest.';
      case 'bio':
        return value.trim().length >= 20 ? '' : 'Bio must be at least 20 characters.';
      case 'terms':
        return value ? '' : 'You must accept the terms and conditions.';
      default:
        return '';
    }
  };

  const updateFieldWithValidation = (name, value, currentValues) => {
    const message = validateField(name, value, currentValues);
    setErrors((previous) => ({
      ...previous,
      [name]: message,
    }));
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    let nextValue = type === 'checkbox' ? checked : value;

    if (name === 'interests') {
      const selectedInterests = checked
        ? [...formData.interests, value]
        : formData.interests.filter((interest) => interest !== value);

      nextValue = selectedInterests;
      setFormData((current) => ({ ...current, interests: selectedInterests }));
      updateFieldWithValidation('interests', selectedInterests, { ...formData, interests: selectedInterests });
      return;
    }

    const updatedValues = {
      ...formData,
      [name]: nextValue,
    };

    setFormData(updatedValues);
    updateFieldWithValidation(name, nextValue, updatedValues);
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    const value = formData[name];
    const message = validateField(name, value, formData);

    setErrors((previous) => ({
      ...previous,
      [name]: message,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = {};
    Object.entries(formData).forEach(([field, value]) => {
      const message = validateField(field, value, formData);
      if (message) {
        nextErrors[field] = message;
      }
    });

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    dispatch({
      type: 'REGISTER_USER',
      payload: {
        fullName: formData.fullName.trim(),
        studentNumber: formData.studentNumber.trim(),
        campus: formData.campus,
        email: formData.email.trim(),
        password: formData.password,
        interests: formData.interests,
        bio: formData.bio.trim(),
        terms: formData.terms,
      },
    });

    navigate('/profile');
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <div className="field-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your full name"
            className={errors.fullName ? 'input-error' : ''}
          />
          {errors.fullName && <span className="field-error">{errors.fullName}</span>}
        </div>

        <div className="field-group">
          <label htmlFor="studentNumber">Student Number</label>
          <input
            id="studentNumber"
            name="studentNumber"
            type="text"
            inputMode="numeric"
            value={formData.studentNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="e.g. 20245678"
            className={errors.studentNumber ? 'input-error' : ''}
          />
          {errors.studentNumber && <span className="field-error">{errors.studentNumber}</span>}
        </div>

        <div className="field-group">
          <label htmlFor="campus">Campus</label>
          <select
            id="campus"
            name="campus"
            value={formData.campus}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.campus ? 'input-error' : ''}
          >
            <option value="">Select campus</option>
            <option value="Main Campus">Main Campus</option>
            <option value="City Campus">City Campus</option>
            <option value="North Campus">North Campus</option>
            <option value="South Campus">South Campus</option>
          </select>
          {errors.campus && <span className="field-error">{errors.campus}</span>}
        </div>

        <div className="field-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="student@richfield.ac.za"
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <span className="field-error">{errors.email}</span>}
        </div>

        <div className="field-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Minimum 8 characters"
            className={errors.password ? 'input-error' : ''}
          />
          {errors.password && <span className="field-error">{errors.password}</span>}
        </div>

        <div className="field-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Re-enter password"
            className={errors.confirmPassword ? 'input-error' : ''}
          />
          {errors.confirmPassword && <span className="field-error">{errors.confirmPassword}</span>}
        </div>
      </div>

      <fieldset className="interest-fieldset">
        <legend>Interests</legend>
        <div className="checkbox-grid">
          {interestOptions.map((interest) => (
            <label key={interest} className="checkbox-item">
              <input
                type="checkbox"
                name="interests"
                value={interest}
                checked={formData.interests.includes(interest)}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span>{interest}</span>
            </label>
          ))}
        </div>
        {errors.interests && <span className="field-error">{errors.interests}</span>}
      </fieldset>

      <div className="field-group textarea-group">
        <label htmlFor="bio">Bio</label>
        <textarea
          id="bio"
          name="bio"
          rows="5"
          value={formData.bio}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Tell us a little about yourself and your student journey."
          className={errors.bio ? 'input-error' : ''}
        />
        {errors.bio && <span className="field-error">{errors.bio}</span>}
      </div>

      <label className="checkbox-item terms-item">
        <input
          type="checkbox"
          name="terms"
          checked={formData.terms}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <span>I agree to the terms and conditions.</span>
      </label>
      {errors.terms && <span className="field-error">{errors.terms}</span>}

      <button type="submit" className="primary-btn full-width-btn">
        Create Profile
      </button>
    </form>
  );
}

export default SignUpForm;
