"use client"

import Avatar from "./Avatar"

interface RouteParams {
  [index: number]: string;
}

interface TopbarProps {
    toggleSidebar: (isOpen: boolean) => void;
    routeItems?: RouteParams;
}  

const Topbar:React.FC<TopbarProps> = ({toggleSidebar, routeItems}) => {
  const handleSidebarToggle = () => {
    toggleSidebar(true);
  };

  return (
    <>
        <div className='w-full flex items-center justify-between py-4 px-8 box-border border-solid border-x-0 border-t-0 border-b border-white/15'>
            <div className="flex gap-8">
                <div onClick={handleSidebarToggle} className="flex flex-col gap-2 w-fit lg:hidden cursor-pointer">
                    <div className="h-[2px] w-[32px] rounded-full bg-white"></div>
                    <div className="h-[2px] w-[32px] rounded-full bg-white"></div>
                    <div className="h-[2px] w-[32px] rounded-full bg-white"></div>
                </div>
                <div className="max-sm:hidden flex items-center gap-2 w-full">
                  {routeItems?.map((item,index) => (
                      <div className="flex gap-2 items-center">
                        <span className="text-primaryTint4 font-medium text-sm uppercase tracking-widest">{item}</span>
                        {index!==routeItems.length-1 && <span className="text-primaryTint4 font-medium text-sm uppercase">/</span>}
                      </div>
                  ))}
                </div>
            </div>
            <Avatar/>
        </div>
    </>
  )
}

export default Topbar