import { SearchField } from "@/components/SearchField";
import React, { Suspense } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Suspense>
        <SearchField />
      </Suspense>
      {children}
    </>
  );
};

export default Layout;
