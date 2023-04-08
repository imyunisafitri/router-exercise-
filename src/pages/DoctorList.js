import { Link } from "react-router-dom";

const DoctorList = ({ doctor }) => {
  return (
    <div className="doctor-list">
      <img src={doctor.url} alt="Doctor" />
      <h2>{doctor.name}</h2>
      <p>{doctor.position}</p>
      <Link to={doctor.id.toString()} key={doctor.id}>
        <button>See Detail</button>
      </Link>
    </div>
  );
};

export default DoctorList;
