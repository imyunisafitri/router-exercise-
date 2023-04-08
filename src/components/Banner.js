import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <video loop autoplay="autoplay" muted className="bg-banner">
        <source
          src="https://www.miracle-clinic.com/miracle-theme/uploads/video/video-bg-web.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag
      </video>
      <div className="banner-text">
        <h1>MIRACLE AESTHETIC CLINIC</h1>
        <p>The Expert of Facial Reshaping & Contouring</p>
        <Link to="/services">Our Tratement</Link>
      </div>
    </div>
  );
};

export default Banner;
