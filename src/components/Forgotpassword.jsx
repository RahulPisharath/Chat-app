import React from "react";
import { Link } from "react-router-dom";

const Forgotpassword = () => {
  return (
      <div className="bg-grey">
        <div className="d-flex h-full items-center justify-center">
        <div className="d-flex flex-col justify-center items-center">
            <div className="login_box">
            <div className="header-form">
                <h4 className="text-primary text-center"></h4>
                <div className="image"></div>
            </div>
            <div className="body-form">
                <form>
                <div className="input-group mb-3">
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    />
                </div>
                <button
                    type="button"
                    className="btn btn-primary btn-block w-100 mb-3"
                >
                    Continue
                </button>
                </form>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Forgotpassword;
