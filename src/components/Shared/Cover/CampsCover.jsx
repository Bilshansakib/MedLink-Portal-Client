import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
  IconButton,
  Typography,
  Card,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CampsCover = () => {
  const [open, setOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);
  const handleIsFavorite = () => setIsFavorite((cur) => !cur);

  return (
    <header className="bg-white p-8 border-2">
      <div className="container mx-auto w-full place-items-stretch bg-[url('/image/bg-hero-17.svg')] bg-center bg-contain bg-no-repeat">
        <div className="bg-gray-100 p-4 text-center flex flex-col justify-center lg:flex-row lg:justify-between ">
          <div>
            <Typography className="inline-flex text-xs rounded-lg border-[1.5px] border-blue-gray-50 bg-white py-1 lg:px-4 px-1 font-medium text-primary">
              Welcome to MedLink Portal
            </Typography>
            <Typography
              variant="h1"
              color="blue-gray"
              className="mx-auto my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
            >
              Your Trusted Partner in Medical Camp
              <span className="text-green-500 leading-snug ">
                Planning
              </span> and{" "}
              <span className="leading-snug text-green-500">Execution</span>.
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto w-full !text-gray-500 lg:text-lg text-base"
            >
              Bringing Precision and Care to Medical Camp Operations. For
              standing out.
            </Typography>
          </div>
          <div className="mt-8  grid w-full place-items-start items-center justify-center">
            <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
              <Card
                className="h-64 w-96 cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
                onClick={handleOpen}
              >
                <img
                  alt="nature"
                  className="h-full w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
                />
              </Card>
              <Dialog size="xl" open={open} handler={handleOpen}>
                <DialogHeader className="justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt="tania andrew"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                    <div className="-mt-px flex flex-col">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        Dr. Tania Andrew
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="text-xs font-normal"
                      >
                        @emmaroberts
                      </Typography>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <IconButton
                      variant="text"
                      size="sm"
                      color={isFavorite ? "red" : "blue-gray"}
                      onClick={handleIsFavorite}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                      </svg>
                    </IconButton>
                    <Link to={`/signup`}>
                      <Button color="gray" size="sm">
                        Join Us
                      </Button>
                    </Link>
                  </div>
                </DialogHeader>
                <DialogBody>
                  <img
                    alt="nature"
                    className="h-[24rem] w-full rounded-lg object-cover object-center"
                    src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
                  />
                </DialogBody>
                <DialogFooter className="justify-between">
                  <div className="flex items-center gap-16">
                    <div>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                      >
                        Patients Viewed
                      </Typography>
                      <Typography color="blue-gray" className="font-medium">
                        2,044
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                      >
                        Camp Members
                      </Typography>
                      <Typography color="blue-gray" className="font-medium">
                        53
                      </Typography>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="outlined"
                    color="blue-gray"
                    className="mr-5 flex items-center"
                  >
                    Share
                  </Button>
                </DialogFooter>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CampsCover;
