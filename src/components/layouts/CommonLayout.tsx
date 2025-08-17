import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface IProps {
  children: ReactNode;
}

const CommonLayout = ({ children }: IProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className=" px-4 py-2 w-full bg-primary flex items-center justify-center">
        <p className="text-center text-xs sm:text-sm">
          আমাদের যে কোন পণ্য অর্ডার করতে কল বা WhatsApp করুন: +8801321208940
        </p>
      </div>
      <Navbar />
      <div className="grow-1">{children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
