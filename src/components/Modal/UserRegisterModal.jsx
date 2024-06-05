import {
  Input,
  Typography,
  Select,
  Option,
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  IconButton,
} from "@material-tailwind/react";

import "react-day-picker/dist/style.css";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import { FaHome } from "react-icons/fa";

const UserRegisterModal = ({ data, handleOpen }) => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();

  const todaysDate = new Date().toDateString();
  const {
    CampName,
    Image,
    CampFees,
    DateTime,
    Location,
    HealthcareProfessional,
    ParticipantCount,
    Description,
    Ratings,
  } = data;
  console.log(data);
  const { user } = useAuth();
  const onSubmit = async (data) => {
    console.log(data);
    const registerData = {
      CampName,
      Image,
      CampFees,
      DateTime,
      Location,
      HealthcareProfessional,
      ParticipantCount,
      Description,
      Ratings,
      Participator: {
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
      Participant_Count: 0,
    };
    try {
      const { data } = await axiosPublic.post("/participator", registerData);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <section open={open} className="container mx-auto">
        <div className="flex rounded-lg bg-blue-gray-50 p-2 justify-between items-center">
          <Link to="/">
            <Button variant="outlined">
              {" "}
              <FaHome size={24}></FaHome>
            </Button>
          </Link>
          <button>
            <IconButton
              onClick={handleOpen}
              color="gray"
              size="lg"
              variant="text"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </button>
        </div>
        <Typography variant="h5" color="blue-gray">
          Basic Information
        </Typography>

        <Typography variant="h6" color="blue">
          Hi, {user.displayName}
        </Typography>
        <Typography variant="small" className="text-gray-600 font-normal mt-1">
          Give your profile information below.
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mt-8">
            <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
              <div className="w-full">
                <Typography
                  variant="small"
                  color="blue"
                  className="mb-2 font-medium"
                >
                  Camp Name
                </Typography>
                <Input
                  {...register("CampName")}
                  defaultValue={CampName}
                  size="lg"
                  placeholder="Emma"
                  labelProps={{
                    className: "hidden",
                  }}
                  className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                />
              </div>
              <div className="w-full">
                <Typography
                  variant="small"
                  color="blue"
                  className="mb-2 font-medium"
                >
                  Camp Fees $
                </Typography>
                <Input
                  {...register("CampFees")}
                  defaultValue={CampFees}
                  type="number"
                  min="0"
                  size="lg"
                  placeholder="$"
                  labelProps={{
                    className: "hidden",
                  }}
                  className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                />
              </div>
            </div>
            <div className="mb-6 flex flex-col gap-4 md:flex-row">
              <div className="w-full form-control">
                <Typography
                  variant="small"
                  color="blue"
                  className="mb-2 font-medium"
                >
                  I&apos;m
                </Typography>
                {/* <Select
                {...register("Genders")}
                size="lg"
                labelProps={{
                  className: "hidden",
                }}
                className="  border-t-blue-gray-200 aria-[expanded=true]:border-t-primary"
              >
                <Option value={"male"}>Male</Option>
                <Option value={"Female"}>Female</Option>
              </Select> */}
                <select
                  {...register("Gender")}
                  // labelProps={{
                  //   className: "hidden",
                  // }}

                  // className=" border-t-blue-gray-200 aria-[expanded=true]:border-t-primary"
                  className="border py-3 rounded-xl border-t-blue-gray-200 aria-[expanded=true]:border-t-primary"
                >
                  <option
                    className="  border-t-blue-gray-200 aria-[expanded=true]:border-t-primary"
                    value="Male"
                  >
                    Male
                  </option>
                  <option
                    className="  border-t-blue-gray-200 aria-[expanded=true]:border-t-primary"
                    value="Female"
                  >
                    Female
                  </option>
                </select>
              </div>
              <div className="w-full">
                <Typography
                  variant="small"
                  color="blue"
                  className="mb-2 font-medium"
                >
                  Birth Date
                </Typography>
                <Input {...register("Date")} defaultValue={todaysDate}></Input>
              </div>
              <div className="w-full">
                <Typography
                  variant="small"
                  color="blue"
                  className="mb-2 font-medium"
                >
                  Age
                </Typography>
                <select
                  {...register("age")}
                  size="lg"
                  // labelProps={{
                  //   className: "hidden",
                  // }}
                  className="border w-full py-3 rounded-xl border-t-blue-gray-200 aria-[expanded=true]:border-t-primary"
                >
                  <option disabled value="Age">
                    Age
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                  <option value="32">32</option>
                  <option value="33">33</option>
                  <option value="34">34</option>
                  <option value="35">35</option>
                  <option value="36">36</option>
                  <option value="38">38</option>
                  <option value="39">39</option>
                  <option value="40">40</option>
                  <option value="41">41</option>
                  <option value="42">42</option>
                  <option value="43">43</option>
                  <option value="44">44</option>
                  <option value="45">45</option>
                  <option value="46">46</option>
                  <option value="47">47</option>
                  <option value="48">48</option>
                  <option value="49">49</option>
                  <option value="50">50</option>
                  <option value="51">51</option>
                  <option value="52">52</option>
                  <option value="53">53</option>
                  <option value="54">54</option>
                  <option value="55">55</option>
                  <option value="56">56</option>
                  <option value="57">57</option>
                  <option value="58">58</option>
                  <option value="59">59</option>
                  <option value="60">60</option>
                </select>
              </div>
              <div className="w-full">
                <Typography
                  variant="small"
                  color="blue"
                  className="mb-2 font-medium"
                >
                  Year
                </Typography>

                <Select
                  {...register("Year")}
                  size="lg"
                  labelProps={{
                    className: "hidden",
                  }}
                  label="Select Version"
                  className=" border-t-blue-gray-200 aria-[expanded=true]:border-t-primary"
                >
                  <Option>2022</Option>
                  <Option>2021</Option>
                  <Option>2020</Option>
                </Select>
              </div>
            </div>
            <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
              <div className="w-full">
                <Typography
                  variant="small"
                  color="blue"
                  className="mb-2 font-medium"
                >
                  Participant Name:
                </Typography>
                <Input
                  defaultValue={user?.displayName}
                  {...register("ParticipantName")}
                  size="lg"
                  placeholder="emma@mail.com"
                  labelProps={{
                    className: "hidden",
                  }}
                  className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                />
              </div>
              <div className="w-full">
                <Typography
                  variant="small"
                  color="blue"
                  className="mb-2 font-medium"
                >
                  Email:
                </Typography>
                <Input
                  {...register("ParticipantEmail")}
                  defaultValue={user.email}
                  size="lg"
                  placeholder="emma@mail.com"
                  labelProps={{
                    className: "hidden",
                  }}
                  className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                />
              </div>
            </div>
            <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
              <div className="w-full">
                <Typography
                  variant="small"
                  color="blue"
                  className="mb-2 font-medium"
                >
                  Location
                </Typography>
                <Input
                  {...register("Location")}
                  defaultValue={Location}
                  size="lg"
                  placeholder="Florida, USA"
                  labelProps={{
                    className: "hidden",
                  }}
                  className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                />
              </div>
              <div className="w-full">
                <Typography
                  variant="small"
                  color="blue"
                  className="mb-2 font-medium"
                >
                  Phone Number:
                </Typography>
                <Input
                  {...register("ContactNumber")}
                  type="number"
                  size="lg"
                  placeholder="+123 0123 456 789"
                  labelProps={{
                    className: "hidden",
                  }}
                  className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                />
              </div>
            </div>
            <div className="flex flex-col items-end gap-4 md:flex-row">
              <div className="w-full">
                <Typography
                  variant="small"
                  color="blue"
                  className="mb-2 font-medium"
                >
                  Healthcare Professional Name:
                </Typography>
                <Input
                  {...register("HealthcareProfessional")}
                  defaultValue={HealthcareProfessional}
                  size="lg"
                  placeholder="Language"
                  labelProps={{
                    className: "hidden",
                  }}
                  className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                />
              </div>
              <div className="w-full">
                <Typography
                  variant="small"
                  color="blue"
                  className="mb-2 font-medium"
                >
                  Skills
                </Typography>
                <Input
                  {...register("Occupation")}
                  size="lg"
                  placeholder="Skills"
                  labelProps={{
                    className: "hidden",
                  }}
                  className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                />
              </div>
            </div>
            <input
              value="Confirm"
              type="submit"
              className="btn mt-6 w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default UserRegisterModal;
