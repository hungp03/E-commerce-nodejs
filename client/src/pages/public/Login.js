import React, { useCallback, useState } from "react";
import { InputField, Button } from "../../components";
import { apiRegister, apiLogin } from "../../apis/user";
// #32: 13p00s
const Login = () => {
  const [payload, setPayload] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });

  const [isRegister, setisRegister] = useState(false);
  const handleSubmit = useCallback( async() => {
    const {firstname, lastname, ...data} = payload;
    if (isRegister){
      const res = await apiRegister(payload);
      
    }
    else{
      const result = await apiLogin(data)
      console.log(result)
    }
  }, [payload]);

  return (
    <div className="w-full h-screen relative">
      <img
        src="https://res.cloudinary.com/dmu5sii2t/image/upload/v1708760285/samples/ecommerce/tpjlfuexmsftrtwrsy5f.png"
        className="w-full h-full object-cover"
        alt=""
      />

      <div className="absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center">
        <div className="p-8 bg-white rounded-md min-w-[500px] w-1/2">
          <h1 className="text-[28px] font-semibold text-main text-center mb-8">
            {isRegister ? "Register" : "Login"}
          </h1>
          {isRegister && (
            <div className="flex items-start gap-2">
            <InputField
              value={payload.firstname}
              setValue={setPayload}
              nameKey="firstname"
            />
            <InputField
              value={payload.lastname}
              setValue={setPayload}
              nameKey="lastname"
            />
            </div>
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
                onClick={() => setisRegister(false)}
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
