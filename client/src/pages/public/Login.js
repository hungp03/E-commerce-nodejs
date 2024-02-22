import React, { useCallback, useState } from "react";
import { InputField, Button } from "../../components";

const Login = () => {

  const [payload, setPayload] = useState({
    email: "",
    password: "",
    name: "",
  });

  const [isRegister, setisRegister] = useState(false);
  const handleSubmit = useCallback(() => {
    console.log(payload);
  }, [payload]);

  return (
    <div className="w-full h-screen relative">
      
      <img
        src="https://res.cloudinary.com/dmu5sii2t/image/upload/v1708574048/samples/ecommerce/cehkucesidpjfnpddqqf.jpg"
        className="w-full h-full object-cover"
        alt=""/>

      <div className="absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center">
        <div className="p-8 bg-white rounded-md min-w-[500px] w-1/2">
          <h1 className="text-[28px] font-semibold text-main text-center mb-8">
            {isRegister ? "Register" : "Login"}
          </h1>
          {isRegister && (
            <InputField
              value={payload.name}
              setValue={setPayload}
              nameKey="name"
            />
          )}

          <InputField
            value={payload.email}
            setValue={setPayload}
            nameKey="email"
          />
          <InputField
            type="password"
            value={payload.password}
            setValue={setPayload}
            nameKey="password"
          />
          <Button
            name={isRegister ? "Register" : "Login"}
            handleOnClick={handleSubmit}
            fw={true}
          />
          <div className="flex items-center justify-between my-2">
            {!isRegister && (
              <>
                <span className="text-gray-700 hover:text-blue-700 hover:underline cursor-pointer">
                  Forgot password?
                </span>
                <span
                  className="text-gray-700 hover:text-blue-700 hover:underline cursor-pointer"
                  onClick={() => setisRegister(true)}
                >
                  Create account
                </span>
              </>
            )}
            {isRegister && (
              <span
                className="w-full text-center text-gray-700 hover:text-blue-700 hover:underline cursor-pointer"
                onClick={() => setisRegister(true)}
              >
                Back to login page
              </span>
            )}
          </div>
        </div>
      </div>
      
    </div>
  );
};
export default Login;

// #30: 34:20s
