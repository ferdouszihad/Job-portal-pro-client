import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyApplication = () => {
  const { user } = useContext(AuthContext);
  const [applications, setApplications] = useState([]);

  //un optimize
  //   useEffect(() => {
  //     fetch(`http://localhost:5000/application?email=${user?.email}`)
  //       .then((res) => res.json())
  //       .then((data) => setApplications(data));
  //   }, []);

  useEffect(() => {
    if (user && user?.email) {
      fetch(`http://localhost:5000/application?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setApplications(data));
    }
  }, [user]);
  return (
    <div>
      <h2 className="bg-base-200 text-2xl font-bold text-center py-5">
        My Applications ({applications.length})
      </h2>
    </div>
  );
};

export default MyApplication;
