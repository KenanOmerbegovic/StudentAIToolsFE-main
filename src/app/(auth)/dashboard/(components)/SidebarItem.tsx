import Link from "next/link";

interface Props {
  icon?: React.ReactNode; // SVG component type
  featureName: string;
  bgColor?: string;
  isActive?: boolean;
  tabLink: string;
}

const SidebarItem: React.FC<Props> = ({ icon, featureName, bgColor, isActive, tabLink }) => {
  return (
    <Link href={tabLink} className={`no-underline p-[10px_40px_10px_10px] flex items-center gap-4 transition rounded-[20px] cursor-pointer sidebarItem ${isActive ? 'active ' : 'hover:bg-primaryTint1'}`}>
      <div className={`${bgColor} w-[40px] h-[40px] rounded-[10px] flex items-center justify-center` }>
        {icon}
      </div>
      <span className="text-white text-lg font-medium">{featureName}</span>
    </Link>
  );
};

export default SidebarItem