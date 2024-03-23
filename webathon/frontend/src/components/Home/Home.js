import React from 'react';
import './Home.css';
// import i1 from  "../../assets/i1.png";
// import i2 from  "../../assets/i2.png";
// import i3 from  "../../assets/i3.jpg";
// import i4 from  "../../assets/i4.jpg";
// import i5 from  "../../assets/i5.jpg";
// import i6 from  "../../assets/i6.jpg";
function Home(){

    return(
        <div>
            <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>DevCampus</title>
  <link rel="stylesheet" href="Home.css" />
  <div className="navgation">
    <div className="navleft">
      <h1 className="b-element">DevCampus</h1>
    </div>
    <div className="navright">
      <a className="a-element">Open IDE</a>
      <a className="a-element">Achievements</a>
      <a className="c-element">Contact us</a>
    </div>
  </div>
  <div className="home" id="about">
    <div className="homeleft">
      <div className="container">
        <h1>Unleash your genius</h1>
        <p>
          DevCampus is a comprehensive platform designed to empower students passionate about programming and software development. Our platform fosters a collaborative environment where students can hone their coding skills, engage in meaningful projects, and access a plethora of resources to enhance their learning&nbsp;journey.
        </p>
      </div>
    </div>
    <div className="homeright">
      <div>
        <h1 className="glow"> Experience Our IDE</h1>
        <p className="glow">
          Try out our state-of-the-art Integrated Development Environment (IDE) and sharpen your coding skills with ease. Practice coding, debug your projects, and explore new concepts seamlessly within our user-friendly&nbsp;IDE.
        </p>
        <div className="wayright">
          <a className="d-element">Open IDE</a>   
          <a className="e-element">Explore More</a>   
        </div>
      </div>
    </div>
  </div>
  <section data-bs-version="5.1" className="features03 cid-u7M5tLwdsK" id="features03-1l">
    <div className="container">
      <div className="row justify-content-center mb-5">
        <div className="col-12 content-head">
          <div className="mbr-section-head">
            <h4 className="rishi"><strong>Our features</strong></h4>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card-container">
          <div className="card">
            <img src="./1.png" alt="Achievements Posting" title />
            <div className="card-content">
              <h5 className="card-title"><strong>Achievements Posting</strong></h5>
              <p className="card-text">Showcase your accomplishments and milestones by posting achievements earned on the platform. Inspire others and celebrate your progress!</p>
              <div className="card-footer"><a href className="btn btn-primary">Post Now</a></div>
            </div>
          </div>
          <div className="card">
            <img src="./2.png" alt="Project Collaboration" title />
            <div className="card-content">
              <h5 className="card-title"><strong>Project Collaboration</strong></h5>
              <p className="card-text">Collaborate with peers on coding projects, fostering teamwork and gaining real-world development experience. Work together to tackle challenges and bring your ideas to life.</p>
              <div className="card-footer"><a href className="btn btn-primary">Connect</a></div>
            </div>
          </div>
          <div className="card">
            <img src="./3.jpg" alt="Resource Library" title />
            <div className="card-content">
              <h5 className="card-title"><strong>Resource Library</strong></h5>
              <p className="card-text">Access a comprehensive library of programming resources, tutorials, and articles covering various languages and concepts. From beginner to advanced topics.</p>
              <div className="card-footer"><a href className="btn btn-primary">Explore</a></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card-container">
          <div className="card">
            <img src="./4.jpg" alt="IDE Image" />
            <div className="card-body">
              <h5 className="card-title">Integrated Development Environment (IDE)</h5>
              <p className="card-text">Practice coding, debug projects, and experiment with new concepts seamlessly within our user-friendly IDE. Enhance your coding skills and streamline your workflow.</p>
              <a href="#" className="btn btn-primary">Try now</a>
            </div>
          </div>
          <div className="card">
            <img src="./5.jpg" alt="Connections Image" />
            <div className="card-body">
              <h5 className="card-title">Entrepreneurial Connections</h5>
              <p className="card-text">Collaborate with entrepreneurs to tackle real-world problems and gain valuable industry experience. Connect with startups and organizations to work on exciting projects and make meaningful contributions to the tech community.</p>
              <a href="#" className="btn btn-primary">Connect</a>
            </div>
          </div>
          <div className="card">
            <img src="./6.jpg" alt="Internship Image" />
            <div className="card-body">
              <h5 className="card-title">Internship Opportunities</h5>
              <p className="card-text">Explore internship opportunities offered by startups and organizations partnering with DevCampus. Gain hands-on experience, expand your network, and kickstart your career in the tech industry with our internship programs.</p>
              <a href="#" className="btn btn-primary">Apply now</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 mt-5">
        <p className="copyright mbr-fonts-style  display-7">
          © DevCampus- All Rights Reserved
        </p>
      </div>
    </div>
  </section>
</div>

        </div>
    );
}

export default Home;