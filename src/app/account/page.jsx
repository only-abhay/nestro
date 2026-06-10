"use client";

import { useState } from "react";
import ProfileSidebar from "@/components/acccount/ProfileSidebar";
import AccountStats from "@/components/acccount/AccountStats";
import OrdersTab from "@/components/acccount/OrdersTab";
import PersonalInfoTab from "@/components/acccount/PersonalInfoTab";
import AddressTab from "@/components/acccount/AddressTab";
import SettingsTab from "@/components/acccount/SettingsTab";

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("orders");

  return (
    <section className="bg-stone-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">

          <ProfileSidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <div>
            <AccountStats />

            {activeTab === "orders" && <OrdersTab />}
            {activeTab === "profile" && <PersonalInfoTab />}
            {activeTab === "address" && <AddressTab />}
            {activeTab === "settings" && <SettingsTab />}
          </div>

        </div>
      </div>
    </section>
  );
}