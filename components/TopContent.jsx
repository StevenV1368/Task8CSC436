import { getCurrentUser } from "../utils/data";
import Image from "next/image";
const { name, email, avatar } = getCurrentUser();

const TopContent = () => {
  return (
    <div className="flex justify-center text-center items-center grid items-center">
      <Image src={avatar} alt={"LinkBarge"} height="145" width="145" />
      <p className="h1">{name}</p>
    </div>
  );
};

export default TopContent;
