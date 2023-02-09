import Navbar from "./navbar/Navbar";

interface Props {
  children: React.ReactNode;
}

export default function PageLayout({ children }: Props) {
  return (
    <div className="layout">
      <Navbar />
      {children}
    </div>
  );
}
