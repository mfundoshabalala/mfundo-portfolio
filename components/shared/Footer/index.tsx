import SocialLinks from "./components/SocialLinks";

const Footer: React.FunctionComponent = () => (
  <footer className="uppercase shadow-2xl dark:bg-gray-800 bg-gray-200 p-4">
    <div className="container mx-auto flex flex-row flex-wrap justify-around items-center">
      <div className="">&copy; Copyrights Reserved</div>
      <a href="https://storyset.com/technology">Illustration by Freepik Storyset</a>
      <SocialLinks />
    </div>
  </footer>
);

export default Footer;
