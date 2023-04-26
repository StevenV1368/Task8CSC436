import { getSocialLinks } from "../utils/data";
import Image from "next/image";
import { Facebook } from "../images/facebook.svg";
import { Instagram } from "../images/instagram.svg";
import { Snapchat } from "../images/snapchat.svg";
import { Twitter } from "../images/twitter.svg";

const SocialLinks = () => {
  const getSocialLinkData = getSocialLinks();

  return (
    <div className="flex justify-center flex-row">
      {getSocialLinkData.map((link) => {
        switch (link.title) {
          case "Twitter":
            return (
              <a href={link.url}>
                <Image src={Twitter} alt={"Twitter"} height="145" width="145" />
                Twitter
              </a>
            );
          case "Facebook":
            return (
              <a href={link.url}>
                <Image
                  src={Facebook}
                  alt={"Facebook"}
                  height="145"
                  width="145"
                />
                Facebook
              </a>
            );
        }
      })}
    </div>
  );
};

{
  /*    <>
      <Image src={snapchat} alt={"snapchat"} height="145" width="145" />
      <Image src={facebook} alt={"facebook"} height="145" width="145" />
      <Image src={instagram} alt={"instagram"} height="145" width="145" />
      <Image src={twitter} alt={"twitter"} height="145" width="145" />
    </>
*/
}
export default SocialLinks;
