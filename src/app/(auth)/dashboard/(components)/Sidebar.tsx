"use client";

import SidebarItem from "./SidebarItem";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SummaCraft, SummaPlus, SummaTasks, SyntaxSense, SpeecifyMe, Notes, SummarizedText } from "../icons"
import { LightLogo } from "../icons"

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const closeSidebar = () => {
    toggleSidebar(false);
  };

  const pathname = usePathname();

  return (
    <div className={`flex flex-col gap-10 justify-between fixed top-0 w-[350px] box-border bg-primaryColor p-7 overflow-auto h-[100vh] transition-all duration-700 lg:left-0 ${isSidebarOpen ? 'left-0' : 'left-[-350px]'} z-40`}>
        <div className="flex flex-col gap-10">
          <div className="flex items-center w-full justify-between">
                {LightLogo}
            <svg onClick={closeSidebar} className="lg:hidden cursor-pointer" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.8072 1.19507L1.52148 23.4808" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1.52148 1.19507L23.8072 23.4808" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <span className="text-primaryTint3 uppercase text-[12px] tracking-normal font-bold">Features</span>
              <div className="flex flex-col gap-2 w-full">
                <SidebarItem
                  featureName="SummaCraft"
                  icon={SummaCraft}
                  bgColor="red-gradient"
                  tabLink="/dashboard/summa-craft"
                  isActive={pathname === "/dashboard/summa-craft"}
                />
                <SidebarItem
                  featureName="SummaPlus"
                  icon={SummaPlus}
                  bgColor="blue-gradient"
                  tabLink="/dashboard/summa-plus"
                  isActive={pathname === "/dashboard/summa-plus"}
                />
                <SidebarItem
                  featureName="SpeechifyMe"
                  icon={SpeecifyMe}
                  bgColor="orange-gradient"
                  tabLink="/dashboard/speechify-me"
                  isActive={pathname === "/dashboard/speechify-me"}
                />
                <SidebarItem
                  featureName="SyntaxSense"
                  icon={SyntaxSense}
                  bgColor="lime-gradient"
                  tabLink="/dashboard/syntax-sense"
                  isActive={pathname === "/dashboard/syntax-sense"}
                />
                <SidebarItem
                  featureName="SummaTasks"
                  icon={SummaTasks}
                  bgColor="green-gradient"
                  tabLink="/dashboard/summa-tasks"
                  isActive={pathname === "/dashboard/summa-tasks"}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-primaryTint3 uppercase text-[12px] tracking-normal font-bold">Personal</span>
              <div className="flex flex-col gap-2 w-full">
                <SidebarItem
                  featureName="My Notes"
                  icon={Notes}
                  bgColor="bright-yellow-gradient"
                  isActive={pathname === "/dashboard/notes"}
                  tabLink="/dashboard/notes"
                />
                <SidebarItem
                  featureName="Summarized Files"
                  icon={SummarizedText}
                  bgColor="purple-gradient"
                  isActive={pathname === "/dashboard/summarized-files"}
                  tabLink="/dashboard/summarized-files"
                />
              </div>
            </div>
          </div>
        </div>
        <Link href="" className="button special no-underline mt-10">Upgrade your plan</Link>
    </div>
  );
};

export default Sidebar;
