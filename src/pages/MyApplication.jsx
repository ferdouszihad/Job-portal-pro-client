import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import MyApplicationRow from "../components/MyApplicationRow";

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
  console.log(applications);
  return (
    <div>
      <h2 className="bg-base-200 text-2xl font-bold text-center py-5">
        My Applications ({applications.length})
      </h2>

      <div className="w-11/12 mx-auto overflow-x-auto py-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-lg">
              <th></th>
              <th>Job Title</th>
              <th>Expected Salary </th>
              <th>Job Location</th>
              <th>Current Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {applications.map((applyData, index) => (
              <MyApplicationRow
                applyData={applyData}
                key={applyData._id}
                index={index}
              ></MyApplicationRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplication;
