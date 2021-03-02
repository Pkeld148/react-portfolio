import React from "react";
import ProfilePic from "../../assets/ProfilePic.jpg";

const Home = () => {
  return (
    <div>
      <div className="container-fluid h-100" id="container-background">
        <h2 className="text-center m-3">About Me</h2>
        <div className="row h-100">
          <div className="col-lg-8 col-sm-8">
            <div className="card" id="card-content-box">
              <div className="card-body">
                <img
                  src={ProfilePic}
                  className="rounded float-left w-25 mr-3"
                  alt="Paul Keldsen profile thumbnail"
                />
                <p className="card-text">
                  Hi! My name is Paul Keldsen and for the past 10 years I've
                  been working in the food service industry. I started literally
                  as a burger flipper at a Red Robin in Pennsylvania and I ended
                  my journey in that industry here in Atlanta working at the
                  corporate level for Twisted Taco. The Covid-19 pandemic
                  brought my growth as a professional to a grinding halt and I
                  knew I needed to find a different path in order to continue
                  moving forward. So here I am at the Georgia Tech Coding Boot
                  Camp diving head first into a brand new world. Everything has
                  been amazing so far, and I can't wait to see what
                  opportunities this will unlock for me!
                </p>

                <p className="card-text">
                  Check out my work at{" "}
                  <a href="https://github.com/Pkeld148">Github</a>
                </p>
                <p className="card-text">
                  Check out my work at{" "}
                  <a href="https://www.linkedin.com/in/paul-keldsen-51500614a/">LinkedIn</a>
                </p>
                <p className="card-text">
                  Email:{" "}
                  <a href="mailto:pkeld148@gmail.com">pkeld148@gmail.com</a>
                </p>
                <a href="https://drive.google.com/file/d/1zW7GFQ6Gg2Av382d9nnUJQU7haXygjDc/view?usp=sharing">
                  Resume: PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
