import Footer from "./Footer";
import Header from "./Header";

const Content = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Content;
