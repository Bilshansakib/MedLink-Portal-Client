import { useContext, useState } from "react";
import { Button, Drawer, Space } from "antd";
import { AuthContext } from "../../providers/AuthProvider";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
const NavViewProfile = () => {
  const { user, logOut, loading } = useContext(AuthContext);

  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();
  const showDefaultDrawer = () => {
    setSize("default");
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Space>
        <Button
          type="primary"
          className="flex justify-center items-center gap-2"
          onClick={showDefaultDrawer}
        >
          <span>
            {" "}
            <CgProfile />
          </span>{" "}
          View Profile
        </Button>

        {/* <Button type="primary" onClick={showLargeDrawer}>
          Open Large Size (736px)
        </Button> */}
      </Space>
      <Drawer
        title={`${size} Drawer`}
        placement="right"
        size={size}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <div className="space-y-2">
          <ul>
            <li>{user ? <NavLink to="dashboard">Dashboard</NavLink> : ""}</li>
          </ul>
          <ul>
            <li>
              {user ? (
                <NavLink to="dashboard/userProfile">User Profile</NavLink>
              ) : (
                ""
              )}
            </li>
          </ul>
        </div>
      </Drawer>
    </>
  );
};

export default NavViewProfile;
