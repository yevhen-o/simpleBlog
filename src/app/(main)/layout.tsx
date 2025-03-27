import { Navigation } from "../../components/Navigation";
import { Footer } from "@src/components/Footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navigation />
      <div className="content__wrapper">{children}</div>
      <Footer />
    </>
  );
}
