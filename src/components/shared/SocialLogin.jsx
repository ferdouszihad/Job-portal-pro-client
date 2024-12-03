import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    googleLogin()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err.code);
      });
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleLogin}
        className="btn btn-outline w-full"
      >
        Login using <FcGoogle size={20} />
      </button>
    </div>
  );
};

export default SocialLogin;
