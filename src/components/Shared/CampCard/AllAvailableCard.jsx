import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
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
        <div className="mx-auto gap-4">
          <Card
            style={{
              width: 360,
              marginTop: 16,
            }}
          >
            <Meta
              avatar={
                <Avatar
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=1`}
                />
              }
              title={CampName}
              description={Description}
            />
          </Card>
          <Card
            style={{
              width: 360,
              marginTop: 2,
            }}
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,

              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src={Image} />}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </div>
      </Link>
    </>
  );
};

export default AllAvailableCard;
