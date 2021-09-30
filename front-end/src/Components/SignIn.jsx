import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const SignIn = () => {
	return (
		<div className="position-relative">
			<div
				className="modal-dialog show fade modal-dialog-centered position-absolute top-0 start-0 translate-middle"
				tabIndex="-1"
			>
				<div className="modal-content">
					<div className="modal-header">
						<button
							type="button"
							className="close d-flex align-items-center justify-content-center"
							data-dismiss="modal"
							aria-label="Close"
						>
							<span aria-hidden="true" className="btn-close" />
						</button>
					</div>
					<div className="modal-body p-4 p-md-5">
						<div className="icon d-flex align-items-center justify-content-center">
							<FontAwesomeIcon icon={faUser} className="mx-2 " />
						</div>
						<h3 className="text-center mb-4">Sign In</h3>

						<form action="#" className="login-form">
							<div className="form-group">
								<input
									type="text"
									className="form-control rounded-left"
									placeholder="Username"
								/>
							</div>
							<div className="form-group d-flex">
								<input
									type="password"
									className="form-control rounded-left"
									placeholder="Password"
								/>
							</div>
							<div className="form-group">
								<button
									type="submit"
									className="form-control btn btn-primary rounded submit px-3"
								>
									Login
								</button>
							</div>
							<div className="form-group d-md-flex">
								<div className="form-check w-50">
									<label className="custom-control fill-checkbox">
										<input
											type="checkbox"
											className="fill-control-input"
										/>
										<span className="fill-control-indicator"></span>
										<span className="fill-control-description">
											Remember Me
										</span>
									</label>
								</div>
								<div className="w-50 text-md-right">
									<a href="#">Forgot Password</a>
								</div>
							</div>
						</form>
					</div>
					<div className="modal-footer justify-content-center">
						<p>
							Not a member? <a href="#">Create an account</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
