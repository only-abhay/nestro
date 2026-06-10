import AuthLayout from "@/components/auth/AuthLayout";
import AuthLeftPanel from "@/components/auth/AuthLeftPanel";
import AuthTabs from "@/components/auth/AuthTabs";

export default function AuthPage() {
  return (
    <AuthLayout
      leftContent={<AuthLeftPanel />}
    >
      <AuthTabs />
    </AuthLayout>
  );
}