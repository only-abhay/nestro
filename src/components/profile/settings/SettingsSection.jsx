import SectionCard from "../common/SectionCard";
import SectionTitle from "../common/SectionTitle";

import SettingToggle from "./SettingToggle";
import PasswordSection from "./PasswordSection";

export default function SettingsSection() {
  return (
    <SectionCard>
      <SectionTitle>
        Account Settings
      </SectionTitle>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center border border-[#E8E0D5] rounded-lg p-3">
          <div>
            <h4 className="text-[12px] font-medium">
              Email Notifications
            </h4>

            <p className="text-[10px] text-[#8A8178]">
              Order updates & offers
            </p>
          </div>

          <SettingToggle enabled />
        </div>

        <div className="flex justify-between items-center border border-[#E8E0D5] rounded-lg p-3">
          <div>
            <h4 className="text-[12px] font-medium">
              SMS Alerts
            </h4>

            <p className="text-[10px] text-[#8A8178]">
              Delivery updates via SMS
            </p>
          </div>

          <SettingToggle enabled={false} />
        </div>

        <PasswordSection />
      </div>
    </SectionCard>
  );
}