import ProfileCard from "./ProfileCard";
import ProfileNav from "./ProfileNav";

export default function ProfileSidebar({
  activeTab,
  setActiveTab,
}) {
  return (
    <div className="flex flex-col gap-[14px]">
      <ProfileCard />

      <ProfileNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
}