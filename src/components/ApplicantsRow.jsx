import { BiUser } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import { MdDocumentScanner } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

// eslint-disable-next-line react/prop-types
const ApplicantsRow = ({ index, applicant, updateStatus }) => {
  const {
    _id,
    candidate_name,
    candidate_email,
    candidate_photoURL,
    portfolio,
    resume,
    linkedin,
    status,
    submitted_at,
  } = applicant || {};
  console.log(Object.keys(applicant).join(","));
  return (
    <tr className="hover">
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={candidate_photoURL}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{candidate_name}</div>
            <div className="text-sm opacity-50">{candidate_email}</div>
          </div>
        </div>
      </td>

      <td className="flex flex-wrap gap-3">
        <div className="tooltip" data-tip="portfolio">
          <button>
            <a
              href={portfolio}
              target="_blank"
              className="btn btn-outline btn-sm"
            >
              <BiUser size={20}></BiUser>
            </a>
          </button>
        </div>
        <div className="tooltip" data-tip="Resume">
          <button>
            <a href={resume} target="_blank" className="btn btn-outline btn-sm">
              <MdDocumentScanner size={20}></MdDocumentScanner>
            </a>
          </button>
        </div>

        <div className="tooltip" data-tip="Linkedin">
          <button>
            <a
              href={linkedin}
              target="_blank"
              className="btn btn-outline btn-sm"
            >
              <BsLinkedin></BsLinkedin>
            </a>
          </button>
        </div>
      </td>
      <td className=" space-y-1">
        <span className="badge badge-lg badge-error  text-base-100">
          {status}
        </span>
        <p className="flex gap-2 items-center">
          {" "}
          <SlCalender></SlCalender> {submitted_at.split("T")[0]}
        </p>
      </td>
      <th>
        <select
          onChange={(e) => updateStatus(_id, { status: e.target.value })}
          className="select select-bordered w-full max-w-xs"
        >
          <option disabled selected>
            change Status
          </option>
          <option value={"shortlisted"}>Short Listed</option>
          <option value={"interview scheduled"}>Interview Round</option>
          <option value={"hired"}>Hired</option>
          <option value={"rejected"}>Rejected</option>
        </select>
      </th>
    </tr>
  );
};

export default ApplicantsRow;
