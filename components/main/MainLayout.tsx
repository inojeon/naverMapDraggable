import TailwindTheme1Layout from "@components/layout/TailwindTheme1Layout";

interface MapLayoutProps {
  children?: JSX.Element | JSX.Element[];
}

/*
export default function MapLayout({ children }: MapLayoutProps) {
  return (
    <>
      <div className="flex flex-col px-4 lg:px-8 max-w-7xl mx-auto">
        <Header />
        <main className="relative">{children}</main>
      </div>
    </>
  );
}
*/

export default function MainLayout({ children }: MapLayoutProps) {
  return (
    <TailwindTheme1Layout
      isMapLayout={true}
      title={"도로 관리"}
      showSideMenu={false}
    >
      {true ? (
        <div className="py-0 px-0 sm:p-0 lg:pb-1">
          <div className="flex flex-col max-w-7xl mx-auto">
            {/* <Header /> */}
            <main className="relative">{children}</main>
          </div>
        </div>
      ) : (
        <div className="py-6 px-4 sm:p-6 lg:pb-8 lg:col-span-10">
          <div className="flex flex-col px-4 lg:px-8 max-w-7xl mx-auto">
            {/* <Header /> */}
            <main className="relative">{children}</main>
          </div>
        </div>
      )}
    </TailwindTheme1Layout>
  );
}
