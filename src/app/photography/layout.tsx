import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photography",
  description: "Jonathan Trujillo's Photography Portfolio",
};

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = async ({ children }: LayoutProps) => {
  return <>{children}</>;
};

export default Layout;
