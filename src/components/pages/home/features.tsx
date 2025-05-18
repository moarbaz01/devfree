import type React from "react";
import {
  Mail,
  Clock,
  BarChart2,
  Users,
  ShieldCheck,
  MousePointer,
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  variant: "blue" | "yellow";
}

const FeatureCard = ({
  icon,
  title,
  description,
  variant,
}: FeatureCardProps) => {
  const borderColor =
    variant === "blue" ? "border-blue-200" : "border-amber-200";

  const iconBgColor =
    variant === "blue"
      ? "bg-blue-50 text-blue-700"
      : "bg-amber-100 text-amber-700";

  return (
    <div
      className={`rounded-lg border-2 ${borderColor}  p-6 shadow-sm flex flex-col items-center text-center`}
    >
      <div className={`rounded-full ${iconBgColor} p-3 mb-4`}>{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default function FeatureGrid() {
  const features = [
    {
      icon: <Mail size={20} />,
      title: "Personalized Email Templates",
      description: "Send highly customized emails with dynamic placeholders",
      variant: "blue" as const,
    },
    {
      icon: <Clock size={20} />,
      title: "Automated Scheduling",
      description: "Choose when and how many emails to send daily",
      variant: "yellow" as const,
    },
    {
      icon: <BarChart2 size={20} />,
      title: "Engagement Tracking",
      description: "See who opened and clicked with real-time analytics",
      variant: "yellow" as const,
    },
    {
      icon: <Users size={20} />,
      title: "Lead Management",
      description: "Import and manage your leads in a simple interface",
      variant: "yellow" as const,
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Spam-Safe Sending",
      description: "Built-in support for SPF, DKIM, and domain verification",
      variant: "yellow" as const,
    },
    {
      icon: <MousePointer size={20} />,
      title: "Click & Open Tracking",
      description: "Simple yet effective tracking to measure what's working",
      variant: "blue" as const,
    },
  ];

  return (
    <div className="py-12 bg-amber-50/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">
          Everything You Need to Launch and
          <br />
          Track Campaigns
        </h2>
        <p className="text-center text-gray-600 mb-8">
          DevFree is a free tool for developers. Personalize emails, schedule
          outreach, and track engagement — without paying for bloated tools.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              variant={feature.variant}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
