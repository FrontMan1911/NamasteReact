import Userclass from "./UserClass";
export const Contact = () => {
  const Deepakobject = {
    Name: "Deepak Sharma",
    Age: 30,
    MobileNo: "919760296166",
    Designation: "Software Engineer",
    Company: "TCS",
  };
  const Ashishobject = {
    Name: "Ashish Payal",
    Age: 30,
    MobileNo: "919760296166",
    Designation: "Software Engineer",
    Company: "TCS",
  };
  const Rahulobject = {
    Name: "Rahul Sharma",
    Age: 30,
    MobileNo: "919760296166",
    Designation: "Software Engineer",
    Company: "TCS",
  };
  const Rohitobject = {
    Name: "Rohit Hudda",
    Age: 30,
    MobileNo: "919760296166",
    Designation: "Software Engineer",
    Company: "TCS",
  };
  return (
    <div className="ContactContainer">
      <Userclass userdetails={Deepakobject} />
      {/* <Userclass userdetails={Ashishobject} />
      <Userclass userdetails={Rahulobject} />
      <Userclass userdetails={Rohitobject} /> */}
    </div>
  );
};
