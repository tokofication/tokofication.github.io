import Footer from "./Footer";
import Header from "./Header";

const Layout = ({
  children,
}: {
  children: React.ReactNode;
  home?: boolean;
}) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
