import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AddJob = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [startDate, setStartDate] = useState(new Date());
  // console.log(startDate);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const jobData = {
      title: form.title.value,
      location: form.location.value,
      jobType: form.jobType.value,
      category: form.category.value,
      applicationDeadline: startDate.toISOString().split("T")[0],
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
      status: "active",
      applicants_count: 0,
      hr_email: user?.email,
      hr_name: user?.displayName,
      hr_image: user?.photoURL,
    };
    // console.log(jobData);
    axiosSecure.post("/jobs", jobData).then((res) => {
      const { data } = res;
      console.log(data);
      if (data.insertedId) {
        Swal.fire("Thank you", "Your Job Has been Posted", "success");
        navigate("/");
      }
    });
  };
  return (
    <div>
      <h1 className="bg-base-200 text-center text-4xl font-bold py-5">
        Add a Job
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
                  type="number"
                  placeholder="Minimum"
                  className="input max-w-[120px] input-bordered"
                  required
                />
                <input
                  name="salaryMax"
                  type="number"
                  placeholder="maximum"
                  className="input max-w-[120px] input-bordered"
                  required
                />
                <input
                  name="currency"
                  type="text"
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
                    <option key={type} value={type}>
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
                    <option key={type} value={type}>
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
                selected={startDate}
                minDate={new Date()}
                dateFormat="yyyy-MM-dd"
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Add Requirements</span>
              </label>
              <textarea
                name="requirements"
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
                className="textarea resize-y textarea-bordered"
                placeholder="Add 1 Responsibilities on each line "
              ></textarea>
            </div>
          </div>

          <button className="btn btn-primary">Add This Job</button>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
