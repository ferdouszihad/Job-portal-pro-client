import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ApplicationForm = () => {
  const axiosSecure = useAxiosSecure();
  const job = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0];

  // console.log(job);
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    hr_email,
    hr_name,
    hr_image,
  } = job || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const portfolio = form.portfolio.value;
    const resume = form.resume.value;
    const linkedin = form.linkedin.value;
    const whyShouldHire = form.why_should_hire.value;

    const applicationData = {
      //users Data
      candidate_name: user?.displayName,
      candidate_email: user?.email,
      candidate_photoURL: user?.photoURL,
      //form data
      portfolio,
      resume,
      linkedin,
      whyShouldHire,
      //jobData
      title,
      hr_email,
      hr_name,
      hr_image,
      location,
      jobType,
      category,
      job_id: _id,
      salaryRange,
      //new property
      status: "on review",
      submitted_at: new Date().toISOString(),
    };

    axiosSecure.post("/application", applicationData).then((res) => {
      if (res.data.insertedId) {
        axiosSecure.patch(`/jobs/increase/${_id}`).then((res) => {
          if (res.data.modifiedCount > 0)
            Swal.fire({
              icon: "success",
              title: "Thank you for Applying This Position",
              showConfirmButton: false,
              timer: 1500,
            });
          navigate("/my-application");
        });
      } else if (res.data.message) {
        Swal.fire({
          icon: "error",
          title: `${res.data.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      {/* student info  */}
      <div className="bg-base-200">
        <div className="w-11/12 mx-auto py-5 flex justify-between items-center">
          <div className=" ">
            Apply For The Position{" "}
            <p className="text-4xl text-primary font-bold">{title}</p>
          </div>

          <div>
            <div className="flex justify-center rounded-full">
              <img
                className="w-20 h-20 rounded-full"
                src={user?.photoURL}
                alt=""
              />
            </div>
            <p className="text-center text-xl">{user?.displayName}</p>
            <p className="badge badge-primary">{user?.email}</p>
          </div>
        </div>
      </div>
      <div className="w-9/12 mx-auto">
        <h2 className="text-2xl font-bold py-3 text-center">
          Apply For This Position
        </h2>

        {today > applicationDeadline ? (
          <p className="py-5 text-error">Application DeadLine is OVer</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 py-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Add Your Portfolio Link</span>
              </label>
              <input
                name="portfolio"
                type="url"
                placeholder="Your Portfolio Link"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Add Your Resume Link</span>
              </label>
              <input
                name="resume"
                type="url"
                placeholder="Your Portfolio Link"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Add Your Linkedin Link</span>
              </label>
              <input
                name="linkedin"
                type="url"
                placeholder="Your Portfolio Link"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text mb-3">Why We Should Hire You</span>
              </label>
              <textarea
                name="why_should_hire"
                placeholder="Bio"
                className="resize-y outline-none border-b-2 w-full"
                rows={3}
              ></textarea>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                required
                className="checkbox checkbox-xs"
              />
              <span>I can work on Preferred Location choose by Company.</span>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                required
                className="checkbox checkbox-xs"
              />
              <span>
                I believe that I will fullfill companys all requirement.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                required
                className="checkbox checkbox-xs"
              />
              <span>
                I believe that I feel ready to take all the responsibility.
              </span>
            </div>
            <button type="submit" className="btn btn-primary">
              Apply Now
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ApplicationForm;
