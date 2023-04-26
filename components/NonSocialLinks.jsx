import { getLinksLinks } from "../utils/data";

const NonSocialLinks = () => {
  const NSL = getLinksLinks();

  return (
    <div className="flex flex-col justify-center ">
      {NSL.map((link) => {
        return (
          <>
            <button className="button">
              <p>{link.title}</p>
            </button>
          </>
        );
      })}
    </div>
  );
};

export default NonSocialLinks;
