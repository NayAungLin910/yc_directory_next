import { FC, ReactNode } from "react";
import Navbar from "../../components/Navbar"

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="font-sans">{children}</main>
    </>
  );
};

export default Layout;
