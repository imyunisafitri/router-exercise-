import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DoctorDetails = () => {
  const { id } = useParams();

  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    fetch(`/data/db.json`)
      .then((res) => res.json())
      .then((data) => setDoctor(data))
      .catch((error) => console.log(error));
  }, [id]);

  const found = doctor?.find((details) => details?.id === id);




  return (
    <div className="doctor-details">
      <img src={found?.url} alt="Doctor" />
      <h2>{found?.name}</h2>
      <p>{found?.position}</p>
      <p>{found?.details}</p>
    </div>
  );
};

export default DoctorDetails;
