import React from "react";

function Header() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-5 col-lg-5 offset-md-1 headerCon">
          <img className="card-img-top snagHomeGymCard" src="..." alt="" />
          <div className="card-body snagHomeGymCard">
            <h5 className="card-body text-light">
              Ready to Shatter Your Fitness Plateau?
            </h5>
            <p className="text-light">
              Join the Beastmode Movement to Strengthen Your Mind and Transform
              Your Body without leaving the house.
            </p>
            <a href="#guide" className="btn btn-primary snagHomeGym">
              SNAG MY HOME GYM MADE EASY GUIDE
            </a>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-6">
          <img
            className="img-fluid headImg mt-5"
            src="https://images.squarespace-cdn.com/content/v1/5b98025012b13f43168a1e70/1601926571415-U2MUBQE9RUHZ1PAHM5QT/ke17ZwdGBToddI8pDm48kIgrOVwg3wcQ-cs-mrkYtXd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcAI91BvIoWEW7Y2dy7jbVmwGjUT3GttF0fpB4_N3aqJlMzCDHTYu1qLyeJlq9ZNWg/beast-mode-banner.jpg?format=1000w"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
