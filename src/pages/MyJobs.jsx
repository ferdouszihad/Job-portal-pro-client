import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import MyJobsRow from "../components/MyJobsRow";
import Swal from "sweetalert2";

const MyJobs = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);

  //un optimize
  //   useEffect(() => {
  //     fetch(`https://job-portal-server-gules.vercel.app/application?email=${user?.email}`)
  //       .then((res) => res.json())
  //       .then((data) => setApplications(data));
  //   }, []);

  useEffect(() => {
    if (user && user?.email) {
      fetch(
        `https://job-portal-server-gules.vercel.app/jobs/user/${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => setJobs(data));
    }
  }, [user]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you want to Remove Job Post?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, WithDraw !",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://job-portal-server-gules.vercel.app/jobs/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Job Post Removed!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              setJobs(jobs.filter((job) => job._id !== id));
            }
          });
      }
    });
  };

  return (
    <div>
      <h1 className="bg-base-200 text-center text-2xl font-bold py-5">
        My Jobs ({jobs.length})
      </h1>
      <div className="overflow-x-auto w-11/12 mx-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th>Total Applied</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <MyJobsRow
                handleDelete={handleDelete}
                job={job}
                key={job._id}
              ></MyJobsRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyJobs;
