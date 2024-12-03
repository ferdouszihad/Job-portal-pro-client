import CountUp from "react-countup";

const Success = () => {
  return (
    <div className="pb-10">
      <h2 className="text-center text-4xl font-bold mb-3">
        We Build Your Dreams
      </h2>
      <div className="w-11/12 mx-auto grid md:grid-cols-3 gap-5 text-center">
        <div className="stats shadow">
          <div className="stat ">
            <div className="stat-title">Total Active Jobs</div>
            <div className="stat-value">
              <CountUp duration={10} end={667} enableScrollSpy={true} />
            </div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Total Hired</div>
            <div className="stat-value">
              <CountUp duration={12} end={8974} enableScrollSpy={true} />
            </div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Total Users</div>
            <div className="stat-value">
              <CountUp duration={20} end={69074} enableScrollSpy={true} />
            </div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
