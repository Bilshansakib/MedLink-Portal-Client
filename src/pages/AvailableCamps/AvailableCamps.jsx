import { Helmet } from "react-helmet-async";
import CampsCover from "../../components/Shared/Cover/CampsCover";
import useCamp from "../../hooks/useCamp";
import AllAvailableCard from "../../components/Shared/CampCard/AllAvailableCard";
import { Avatar, Skeleton } from "antd";
import Meta from "antd/es/card/Meta";
import { Tab, Tabs, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { TfiLayoutGrid2Alt, TfiLayoutGrid3Alt } from "react-icons/tfi";
import {
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { useState } from "react";
import useSortSearchMachine from "../../hooks/useSortSearchMachine";

const AvailableCamps = () => {
  const [camp, isPending] = useCamp();

  // const [asc, setAsc] = useState(true);

  // const [search, setSearch] = useState("");
  // const [searchText, setSearchText] = useState("");
  // const camp = useSortSearchMachine(asc, search);
  // //
  // console.log(search);
  console.log(isPending);
  // const handleSearch = (e) => {
  //   e.preventDefault();

  //   setSearch(searchText);
  // };

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Medi+ | Available Camps</title>
      </Helmet>
      <CampsCover></CampsCover>
      {/* <div className="flex">
        <form onSubmit={handleSearch}>
          <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              name="search"
              placeholder="Enter Job Title"
              aria-label="Enter Job Title"
            />

            <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
              Search
            </button>
          </div>
        </form>
        <button className="button btn-ghost" onClick={() => setAsc(!asc)}>
          {asc ? "Camp Fees: High to Low" : "Camp Fees: Low to High"}
        </button>
      </div> */}
      <Tabs>
        <div className="flex justify-end items-center">
          <div className="relative h-10 w-full min-w-[200px]">
            <div className="absolute grid w-5 h-5 top-2/4 right-3 -translate-y-2/4 place-items-center text-blue-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                ></path>
              </svg>
            </div>
            <input
              className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Search
            </label>
          </div>
          <Tab>
            <IconButton variant="gradient">
              <TfiLayoutGrid3Alt />
            </IconButton>
          </Tab>
          <Tab>
            <IconButton variant="outlined">
              <TfiLayoutGrid2Alt />
            </IconButton>
          </Tab>
        </div>

        <TabPanel>
          {!isPending ? (
            <>
              <div className="justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {camp.map((c) => (
                  <Skeleton key={c._id} avatar active>
                    <Meta
                      avatar={
                        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
                      }
                      title="Card title"
                      description="This is the description"
                    />
                  </Skeleton>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {camp.map((card) => (
                  <AllAvailableCard
                    key={card._id}
                    card={card}
                  ></AllAvailableCard>
                ))}
              </div>
            </>
          )}
        </TabPanel>
        <TabPanel>
          {!isPending ? (
            <>
              <div className="justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {camp.map((c) => (
                  <Skeleton key={c._id} avatar active>
                    <Meta
                      avatar={
                        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
                      }
                      title="Card title"
                      description="This is the description"
                    />
                  </Skeleton>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                {camp.map((card) => (
                  <AllAvailableCard
                    key={card._id}
                    card={card}
                  ></AllAvailableCard>
                ))}
              </div>
            </>
          )}
        </TabPanel>
      </Tabs>
      {/* <div className="justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {camp.map((card) => (
          <AllAvailableCard key={card._id} card={card}></AllAvailableCard>
        ))}
      </div> */}
    </div>
  );
};

export default AvailableCamps;
