/* eslint-disable react/prop-types */
function OTPInput({ otp, setOtp }) {
  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!isNaN(value) && value !== "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  return (
    <div className="flex justify-center items-center">
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          className="w-12 h-12 m-2 text-center border border-primary rounded focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 "
        />
      ))}
    </div>
  );
}

export default OTPInput;
