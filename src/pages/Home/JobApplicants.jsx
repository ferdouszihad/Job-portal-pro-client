import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import ApplicantsRow from "../../components/ApplicantsRow";
import Swal from "sweetalert2";

const JobApplicants = () => {
  const { id } = useParams();
  const jobData = useLoaderData();
  const { user } = useContext(AuthContext);
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(
        `https://job-portal-server-gules.vercel.app/application/jobs/${id}?email=${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => setApplicants(data));
    }
  }, [user, id]);

  const updateStatus = (id, status) => {
    fetch(`https://job-portal-server-gules.vercel.app/application/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(status),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount >= 1) {
          Swal.fire(
            "Great",
            `Applicantion Status change to ${status.status}`,
            "success"
          );
          const restApplicants = applicants.filter(
            (applicant) => applicant._id !== id
          );
          const selectedApplicant = applicants.find(
            (applicant) => applicant._id == id
          );
          selectedApplicant.status = status.status;

          setApplicants([selectedApplicant, ...restApplicants]);
        } else {
          Swal.fire("Opss!", `Some Thing wrong happend. Try Again `, "error");
        }
      });
  };

  return (
    <div>
      <h1 className="bg-base-200 text-center space-y-4 text-xl font-bold py-5">
        <p>
          Applicants of{" "}
          <span className="text-primary text-3xl">{jobData?.title}</span>{" "}
          position ({applicants.length})
        </p>
        <Link to={`/jobs/details/${id}`} className="btn btn-sm btn-primary">
          Job Details
        </Link>
      </h1>
      <div className="overflow-x-auto p-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="">
              <th></th>
              <th>Name</th>
              <th>Applicant Resources</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((applicant, index) => (
              <ApplicantsRow
                applicant={applicant}
                key={applicant._id}
                index={index}
                updateStatus={updateStatus}
              ></ApplicantsRow>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Applicant Resources</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default JobApplicants;
