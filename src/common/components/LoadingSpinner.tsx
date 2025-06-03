import { RotateLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <RotateLoader color="#36d7b7" size={20} />
    </div>
  );
};

export default LoadingSpinner;
