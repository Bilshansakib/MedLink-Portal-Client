import { EllipsisOutlined } from "@ant-design/icons";
import { Avatar, Card, Space } from "antd";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
const { Meta } = Card;

const AllAvailableCard = ({ card }) => {
  const {
    _id,
    CampName,
    Image,
    CampFees,
    DateTime,
    Location,
    HealthcareProfessional,
    ParticipantCount,
    Description,
  } = card;
  return (
    <>
      <Link to={`campDetails/${_id}`}>
        <div className="mx-auto gap-4 ">
          {/* <Card>
            <Space size={12}>
              <Image
                width={200}
                src={Image}
                placeholder={<Image preview={false} src={Image} width={200} />}
              />
            </Space>
          </Card> */}

          <Card
            style={{
              width: 360,
              marginTop: 30,
            }}
          >
            <Meta
              avatar={
                <Avatar
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=1`}
                />
              }
              title={HealthcareProfessional}
              description={Description}
            />

            <div className="flex">
              <Meta
                className="p-4"
                title={"Camp Name"}
                description={`${CampName}`}
              />
              <Meta
                className="p-4"
                title={"Camp Fees"}
                description={`$${CampFees}`}
              />
              <Meta
                className="p-4"
                title={"Date & Time"}
                description={`${DateTime}`}
              />
            </div>
          </Card>
          <Card
            style={{
              width: 360,
              marginTop: -16,
            }}
            actions={[
              <CiLocationOn key="location" className="ml-8" />,

              <Meta key={Location} description={`${Location}`} />,

              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <div className="avatar">
              <div className="w-full mask mask-hexagon">
                <img src={Image} />
              </div>
            </div>
          </Card>
        </div>
      </Link>
    </>
  );
};

export default AllAvailableCard;
