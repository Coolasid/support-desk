import { useState } from 'react';
import { FaSignInAlt, FaEye } from 'react-icons/fa';
import { toast } from 'react-toastify';

export const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [show, setShow] = useState(false);

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

   
    // console.log(formData);
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt></FaSignInAlt> Login
        </h1>

        <p>Please log in to get support</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              name="email"
              onChange={onChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type={show ? 'text' : 'password'}
              className="form-control"
              id="password"
              value={password}
              name="password"
              onChange={onChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-group">
            <button className="btn btn-block" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
      {/* <FaEye
        className="eyeIcon"
        onClick={() => {
          setShow((prevState) => !prevState);
        }}
      ></FaEye>
      <FaEye
        className="eyeIcon1"
        onClick={() => {
          setShow((prevState) => !prevState);
        }}
      ></FaEye> */}
    </>
  );
};
