import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaCalendarAlt,
  FaDollarSign,
  FaEnvelope,
  FaUsers,
} from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

const JobDetail = () => {
  const job = useLoaderData();
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company_info,
    requirements,
    responsibilities,
    hr_email,
    hr_name,
    hr_image,
    applicants_count,
  } = job;
  const today = new Date();
  const deadline = new Date(applicationDeadline);
  console.log(today, deadline);

  return (
    <div className="w-11/12 mx-auto p-6">
      <div className="card bg-base-100  p-6">
        {/* Title */}
        <h1 className="text-2xl py-3 px-2 rounded-xl font-bold mb-6 bg-neutral-content">
          {title}
        </h1>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column: Job Details */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-2 text-gray-700">
              <FaMapMarkerAlt /> Location: {location}
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FaBriefcase /> Job Type: {jobType} - {category}
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FaCalendarAlt /> Deadline: {applicationDeadline}
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FaDollarSign /> Salary: {salaryRange.min} - {salaryRange.max}{" "}
              {salaryRange.currency.toUpperCase()}
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FaUsers /> Applicants: {applicants_count}
            </div>

            {/* Requirements */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Requirements</h2>
              <ul className="list-disc list-inside text-gray-700">
                {requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>

            {/* Responsibilities */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Responsibilities</h2>
              <ul className="list-disc list-inside text-gray-700">
                {responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>

            {/* HR Contact */}
            <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-inner">
              <img
                src={hr_image}
                alt={`${hr_name}`}
                className="w-16 h-16 rounded-full border-2 border-gray-300"
              />
              <div>
                <p className="text-lg font-semibold">{hr_name}</p>
                <p className="text-gray-700 flex items-center gap-2">
                  <FaEnvelope /> {hr_email}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Description and About Us */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-gray-700">{description}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">About the Company</h2>
              <p className="text-gray-700">{company_info}</p>
            </div>
          </div>
        </div>

        {/* Apply Button */}
        {today.getTime() > deadline.getTime() ? (
          <div className="mt-6 ">
            <Link to={`/apply/${_id}`} className="btn btn-primary">
              Apply Now
            </Link>
          </div>
        ) : (
          <p className="text-error text-lg py-5">
            Opss!! Application Deadline is Over
          </p>
        )}
      </div>
    </div>
  );
};

export default JobDetail;
