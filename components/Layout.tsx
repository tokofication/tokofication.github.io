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
      <main className="container">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
