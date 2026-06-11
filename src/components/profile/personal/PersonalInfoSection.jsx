import SectionCard from "../common/SectionCard";
import SectionTitle from "../common/SectionTitle";
import PrimaryButton from "../common/PrimaryButton";

import ProfileField from "./ProfileField";

export default function PersonalInfoSection() {
  return (
    <SectionCard>
      <SectionTitle>
        Personal Information
      </SectionTitle>

      <div className="grid grid-cols-2 gap-[14px]">
        <ProfileField
          label="First Name"
          defaultValue="Rahul"
        />

        <ProfileField
          label="Last Name"
          defaultValue="Khanna"
        />

        <ProfileField
          label="Email"
          defaultValue="rahul@email.com"
        />

        <ProfileField
          label="Phone"
          defaultValue="+91 98765 43210"
        />
      </div>

      <div className="mt-4">
        <PrimaryButton>
          Save Changes
        </PrimaryButton>
      </div>
    </SectionCard>
  );
}