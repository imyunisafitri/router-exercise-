import SubBanner from "../components/SubBanner";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <div className="services">
      <SubBanner title="OUR SRVICES" />
      <div className="services-content">
        <div className="services-item">
          <img
            src="https://www.miracle-clinic.com/uploads/services/crop-y_AzkAbsH-AWS24Jp3gFJVSd6t1rYW-M.jpg"
            alt="FACIAL RESHAPING"
          />
          <h3>FACIAL RESHAPING</h3>
        </div>
        <div className="services-item">
          <img
            src="https://www.miracle-clinic.com/uploads/services/crop-y_AzkAbsH-AWS24Jp3gFJVSd6t1rYW-M.jpg"
            alt="FACIAL RESHAPING"
          />
          <h3>FACIAL RESHAPING</h3>
        </div>
        <div className="services-item">
          <img
            src="https://www.miracle-clinic.com/uploads/services/crop-y_AzkAbsH-AWS24Jp3gFJVSd6t1rYW-M.jpg"
            alt="FACIAL RESHAPING"
          />
          <h3>FACIAL RESHAPING</h3>
        </div>
        <div className="services-item">
          <img
            src="https://www.miracle-clinic.com/uploads/services/crop-y_AzkAbsH-AWS24Jp3gFJVSd6t1rYW-M.jpg"
            alt="FACIAL RESHAPING"
          />
          <h3>FACIAL RESHAPING</h3>
        </div>
      </div>
      <div className="services-text">
        <h1>The Science of Facial Architecture</h1>
        <p>
          Miracle Facial Architecture adalah metode ala MIRACLE dalam perawatan estetik untuk
          membentuk wajah ideal melalui pendekatan holistik antara kepekaan artistik, memahami
          keunikan karakteristik kecantikan masing-masing individu yang digabungkan dengan ilmu
          kedokteran. Dengan mengintegrasikan fasilitas perawatan yang telah dimiliki MIRACLE, baik
          menggunakan perawatan berbasis teknologi canggih maupun perawatan injectables, metode ini
          mampu memberikan hasil estetika terbaik secara aman, konsisten dan bertahan lama, yang
          pada akhirnya akan menghasilkan tampilan versi terbaik dari setiap pelanggan, serta
          memberikan dampak yang positif untuk kehidupan sosialnya.
        </p>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Services;
