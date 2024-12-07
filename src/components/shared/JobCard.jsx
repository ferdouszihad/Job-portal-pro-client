// prompt
// I need a card component for showing job information to display some data
// my full  data is {paste object here }
// I have to show  job title , location, job_type , category , deadline , total applicants, salary range , currency.  Each card should include a Details button for users to navigate the job details page.

// I am using daisyui  with react icons

// keep the data in 2 collum layout

import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaCalendarAlt,
  FaUsers,
  FaDollarSign,
} from "react-icons/fa";
import { Link } from "react-router";

// eslint-disable-next-line react/prop-types
const JobCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    applicants_count,
  } = job || {};

  return (
    <div className="card bg-base-100 shadow-md p-1 rounded-lg">
      <div className="card-body">
        {/* Title */}
        <h2 className="card-title text-xl font-semibold ">{title}</h2>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 text-gray-600">
            <FaMapMarkerAlt /> {location}
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaBriefcase /> {jobType} - {category}
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaCalendarAlt /> Apply by: {applicationDeadline}
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaDollarSign /> {salaryRange.min} - {salaryRange.max}{" "}
            {salaryRange.currency.toUpperCase()}
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaUsers /> Applicants: {applicants_count}
          </div>
        </div>

        {/* Action Button */}
        <div className="card-actions  mt-6">
          <Link to={`/jobs/details/${_id}`} className="btn btn-primary">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
