import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import Header from "./Header";
import Menu from "./Menu";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <Header />
      <Menu />
      {children}
    </Box>
  );
};

export default Layout;
