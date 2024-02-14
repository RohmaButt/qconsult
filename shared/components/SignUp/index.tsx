import React from "react";
import "./style.css";

export const SignUp = () => {
  return (
    <div className="form_wrapper">
      <div className="form_container">
        <div className="row clearfix">
          <div className="">
            <form>
              <div className="input_field">
                <span>
                  <i aria-hidden="true" className="fa fa-user"></i>
                </span>
                <input type="text" name="name" placeholder="First Name" />
              </div>
              <div className="input_field">
                <span>
                  <i aria-hidden="true" className="fa fa-user"></i>
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="input_field">
                <span>
                  <i aria-hidden="true" className="fa fa-envelope"></i>
                </span>
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <div className="input_field">
                <span>
                  <i aria-hidden="true" className="fa fa-user"></i>
                </span>
                <input type="text" name="name" placeholder="Company" required />
              </div>
              <div className="input_field">
                <span>
                  <i aria-hidden="true" className="fa fa-user"></i>
                </span>
                <input
                  type="text"
                  name="name"
                  multiple
                  placeholder="Message"
                  required
                />
              </div>
              <div className="input_field select_option">
                <select>
                  <option>Select Country</option>
                  <option>Pakistan</option>
                  <option>UAE</option>
                  <option>USA</option>
                  <option>Australia</option>
                  <option>Other</option>
                </select>
                <div className="select_arrow"></div>
              </div>
              <div className="input_field">
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
