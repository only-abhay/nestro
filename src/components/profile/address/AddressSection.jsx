import AddressCard from "./AddressCard";

import SectionCard from "../common/SectionCard";
import SectionTitle from "../common/SectionTitle";

export default function AddressSection() {
  return (
    <SectionCard>
      <SectionTitle>
        Saved Addresses
      </SectionTitle>

      <div className="grid grid-cols-2 gap-3">
        <AddressCard
          title="Home"
          isDefault
          address="42 Malviya Nagar, Jaipur Rajasthan 302017"
        />

        <AddressCard
          title="Office"
          address="Sector 18 Gurugram Haryana 122015"
        />
      </div>
    </SectionCard>
  );
}