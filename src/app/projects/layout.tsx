import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects",
};

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = async ({ children }: LayoutProps) => {
  return <>{children}</>;
};

export default Layout;
