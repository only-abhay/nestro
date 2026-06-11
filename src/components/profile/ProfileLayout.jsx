"use client";

import { useState } from "react";

import ProfileSidebar from "./sidebar/ProfileSidebar";

import StatsSection from "./stats/StatsSection";

import OrdersSection from "./orders/OrdersSection";
import PersonalInfoSection from "./personal/PersonalInfoSection";
import AddressSection from "./address/AddressSection";
import SettingsSection from "./settings/SettingsSection";

export default function ProfileLayout() {
  const [activeTab, setActiveTab] = useState("orders");

  return (
    <div className="grid grid-cols-[260px_1fr] gap-5 p-6">
      <ProfileSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="flex flex-col gap-4">
        <StatsSection />

        {activeTab === "orders" && <OrdersSection />}

        {activeTab === "profile" && (
          <PersonalInfoSection />
        )}

        {activeTab === "address" && (
          <AddressSection />
        )}

        {activeTab === "settings" && (
          <SettingsSection />
        )}
      </div>
    </div>
  );
}