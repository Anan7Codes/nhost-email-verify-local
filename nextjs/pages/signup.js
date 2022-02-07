import { useState } from "react";
import { nhost } from "@/utils/nhost";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

function SignUp() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await nhost.auth.signUp({
                email: email,
                password: password,
                options: {
                displayName: firstname+ ' '+ lastname,
                },
            }) 
            console.log(res)             
            if(res.error) {
                toast.error(res.error.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                return 
            }
            toast.success("Signed Up Succesfully. Please verify your email before continuing", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            router.push('/signin')
        } catch (error) {
            alert("Sign Up failed");
            console.log(error);
        }
    }
    return (
      <>
        <div className="flex justify-center pt-20 pb-20">
          <div className="w-1/2 rounded-[25px] bg-white mb-6 mt-10">
            <p className="text-3xl text-center text-gray-700 font-bold">Sign Up</p>
            <form
              onSubmit={handleSubmit}
              className="flex justify-center pb-6 pt-2"
            >
              <div className="flex flex-col">
                <input
                  type="text"
                  className="border placeholder:text-xs text-xs pl-3 mr-3 w-full lg:w-96  mt-4 outline-none  rounded-[5px]  h-14  border-gray-300 "
                  placeholder="FirstName"
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  className="border placeholder:text-xs text-xs pl-3 mr-3 w-full lg:w-96  mt-4 outline-none  rounded-[5px]  h-14  border-gray-300 "
                  placeholder="LastName"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <input
                  type="text"
                  className="border placeholder:text-xs text-xs pl-3 mr-3 w-full lg:w-96 mt-4 outline-none  rounded-[5px]  h-14  border-gray-300 "
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  className="border placeholder:text-xs text-xs pl-3 mr-3 w-full lg:w-96 mt-4 outline-none  rounded-[5px]  h-14  border-gray-300 "
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="pb-6 flex justify-between">
                  <span onClick={() => router.push('/signin')} className="hover:cursor-pointer text-blue-500 mr-3 pt-4 mt-4 w-full h-14 font-semibold text-base">
                    Sign In Here
                  </span>
                  <button className="bg-blue-500 mr-3  mt-4 w-full outline-none  rounded-[5px]  h-14 text-white font-bold text-base  ">
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
  
  export default SignUp;
  