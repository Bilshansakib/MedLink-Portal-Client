import { Helmet } from "react-helmet-async";
import CampsCover from "../../components/Shared/Cover/CampsCover";
import useCamp from "../../hooks/useCamp";
import AllAvailableCard from "../../components/Shared/CampCard/AllAvailableCard";
import { Avatar, Skeleton } from "antd";
import Meta from "antd/es/card/Meta";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  TfiLayoutColumn2,
  TfiLayoutColumn3,
  TfiLayoutGrid2Alt,
  TfiLayoutGrid3Alt,
} from "react-icons/tfi";
import { IconButton } from "@material-tailwind/react";

const AvailableCamps = () => {
  const [camp, isPending] = useCamp();
  console.log(isPending);
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Medi+ | Available Camps</title>
      </Helmet>
      <CampsCover></CampsCover>
      <h2>{camp.length}</h2>
      <Tabs>
        <div className="flex justify-end">
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
      {/* {isPending ? (
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
              <AllAvailableCard key={card._id} card={card}></AllAvailableCard>
            ))}
          </div>
        </>
      )} */}
    </div>
  );
};

export default AvailableCamps;
