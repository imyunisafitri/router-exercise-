import DoctorList from "./DoctorList";
import { useEffect, useState } from "react";

const Doctor = () => {
  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    fetch("/data/db.json")
      .then((res) => res.json())
      .then((data) => setDoctor(data));
  }, []);

  return (
    <div className="doctor">
      <div className="doctor-content">
        {doctor.map((doctor) => (
          <DoctorList key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default Doctor;
