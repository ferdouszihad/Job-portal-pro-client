import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import MyApplicationRow from "../components/MyApplicationRow";
import Swal from "sweetalert2";

const MyApplication = () => {
  const { user } = useContext(AuthContext);
  const [applications, setApplications] = useState([]);

  //un optimize
  //   useEffect(() => {
  //     fetch(`https://job-portal-server-gules.vercel.app/application?email=${user?.email}`)
  //       .then((res) => res.json())
  //       .then((data) => setApplications(data));
  //   }, []);

  useEffect(() => {
    if (user && user?.email) {
      fetch(
        `https://job-portal-server-gules.vercel.app/application?email=${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => setApplications(data));
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you want to withdraw your Application?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, WithDraw !",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://job-portal-server-gules.vercel.app/application/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Application Removed!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              setApplications(applications.filter((ap) => ap._id !== id));
            }
          });
      }
    });
  };
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
                handleDelete={handleDelete}
              ></MyApplicationRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplication;
