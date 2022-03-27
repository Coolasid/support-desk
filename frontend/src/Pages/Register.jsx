import { useState } from 'react';
import { FaUser, FaEye } from 'react-icons/fa';
import { toast } from 'react-toastify';

export const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const [show, setShow] = useState(false);

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    

    if(password !== password2){
        toast.error("passwords do not match")
    }
    console.log(formData);
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser></FaUser> Register
        </h1>

        <p>Please create an account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              name="name"
              onChange={onChange}
              placeholder="Enter your name"
              required
            />
          </div>
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
            <input
              type={show ? 'text' : 'password'}
              className="form-control"
              id="password2"
              value={password2}
              name="password2"
              onChange={onChange}
              placeholder="Please confirm your password"
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
