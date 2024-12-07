import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const EditJobs = () => {
  const job = useLoaderData();
  const [date, setDate] = useState(job.applicationDeadline);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const jobData = {
      title: form.title.value,
      location: form.location.value,
      jobType: form.jobType.value,
      category: form.category.value,
      applicationDeadline: date,
      salaryRange: {
        min: form.salaryMin.value,
        max: form.salaryMax.value,
        currency: form.currency.value,
      },
      description: form.description.value,
      company_info: form.company_info.value,

      requirements: form.requirements.value
        ?.split("\n")
        .filter((res) => res.trim() != ""),

      responsibilities: form.responsibilities.value
        ?.split("\n")
        .filter((res) => res.trim() != ""),
      hr_email: user?.email,
      hr_name: user?.displayName,
      hr_image: user?.photoURL,
    };
    // console.log(jobData);
    fetch(`https://job-portal-server-gules.vercel.app/jobs/${job?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Yahoo!", "Your Job Has been Updated", "success");
          navigate("/my-jobs");
        } else {
          Swal.fire("Opps!", "Please Try Again", "error");
        }
      });
  };
  return (
    <div>
      <h1 className="bg-base-200 text-center text-4xl font-bold py-5">
        Edit This Job
      </h1>
      <div className="w-11/12 mx-auto ">
        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-5 py-10"
        >
          {/* left collum  */}
          <div className="space-y-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Add Job Title</span>
              </label>
              <input
                name="title"
                type="text"
                defaultValue={job?.title}
                placeholder="Add a Job Title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Location</span>
              </label>
              <input
                name="location"
                defaultValue={job?.location}
                type="text"
                placeholder="Add a Job location"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Salary Info </span>
              </label>

              <div className="flex flex-wrap gap-2">
                <input
                  name="salaryMin"
                  defaultValue={job?.salaryRange?.min}
                  type="number"
                  placeholder="Minimum"
                  className="input max-w-[120px] input-bordered"
                  required
                />
                <input
                  name="salaryMax"
                  type="number"
                  defaultValue={job?.salaryRange?.max}
                  placeholder="maximum"
                  className="input max-w-[120px] input-bordered"
                  required
                />
                <input
                  name="currency"
                  type="text"
                  defaultValue={job?.salaryRange?.currency}
                  placeholder="currency"
                  className="input flex-1 input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Company Info</span>
              </label>
              <textarea
                name="company_info"
                defaultValue={job?.company_info}
                className="textarea resize-y textarea-bordered"
                placeholder="Write About Company "
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Description</span>
              </label>
              <textarea
                name="description"
                defaultValue={job?.description}
                className="textarea resize-y textarea-bordered"
                placeholder="wrtite about job Description "
              ></textarea>
            </div>
          </div>

          <div className="space-y-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Select Job Type</span>
              </label>
              <select
                name="jobType"
                className="select select-bordered select-ghost w-full "
              >
                <option disabled selected>
                  Select One
                </option>
                {"Hybrid/Remote/Part-Time/Intern/Contractual"
                  .split("/")
                  .map((type) => (
                    <option
                      selected={job.jobType == type}
                      key={type}
                      value={type}
                    >
                      {type}
                    </option>
                  ))}
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Select Job Category</span>
              </label>
              <select
                name="category"
                className="select select-bordered select-ghost w-full"
              >
                <option disabled selected>
                  Select One
                </option>
                {"Engineering/Marketing/Finance/Management/Teaching"
                  .split("/")
                  .map((type) => (
                    <option
                      selected={job.category == type}
                      key={type}
                      value={type}
                    >
                      {type}
                    </option>
                  ))}{" "}
                x
              </select>
            </div>
            <div className="">
              <label className="label">
                <span className="label-text">Select Deadline</span>
              </label>
              <DatePicker
                className="input input-bordered"
                selected={date}
                minDate={new Date()}
                dateFormat="yyyy-MM-dd"
                onChange={(date) => setDate(date)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Add Requirements</span>
              </label>
              <textarea
                name="requirements"
                defaultValue={job.requirements.join("\n")}
                className="textarea resize-y textarea-bordered"
                placeholder="Add 1 Requirement on each line "
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Add Responsibilities</span>
              </label>
              <textarea
                name="responsibilities"
                defaultValue={job.responsibilities.join("\n")}
                className="textarea resize-y textarea-bordered"
                placeholder="Add 1 Responsibilities on each line "
              ></textarea>
            </div>
          </div>

          <button className="btn btn-primary">Update Job</button>
        </form>
      </div>
    </div>
  );
};

export default EditJobs;
