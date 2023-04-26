import TopContent from "../components/TopContent";
import SocialLinks from "../components/NonSocialLinks";
import NonSocialLinks from "../components/SocialLinks";

export default async function Home() {
  return (
    <main>
      <TopContent />

      <NonSocialLinks />

      <SocialLinks />
    </main>
  );
}
