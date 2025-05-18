import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
}

function PricingTier({
  name,
  price,
  description,
  features,
  highlighted = false,
  ctaText,
}: PricingTierProps) {
  return (
    <div
      className={`rounded-xl border bg-primary/5 ${
        highlighted ? "border-primary shadow-lg" : "border-primary/20 shadow-sm"
      } p-6 md:p-8 flex flex-col h-full`}
    >
      <div className="mb-5">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <div className="mb-3">
          <span className="text-3xl font-bold">{price}</span>
          {price !== "Free" && (
            <span className="text-gray-500 ml-1">/month</span>
          )}
        </div>
        <p className="text-gray-600 mb-5">{description}</p>
      </div>

      <div className="flex-grow">
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <Button
        className={`w-full rounded-full py-4 ${
          highlighted
            ? "bg-primary hover:bg-primary/50"
            : "bg-primary text-white hover:bg-primary/50"
        }`}
      >
        {ctaText}
      </Button>
    </div>
  );
}

export default function Pricing() {
  const tiers = [
    {
      name: "Free",
      price: "Free",
      description: "Perfect for trying out the platform",
      features: [
        "Up to 100 leads",
        "5 email templates",
        "Basic analytics",
        "Manual sending only",
        "Email support",
      ],
      ctaText: "Get Started",
    },
    {
      name: "Pro",
      price: "$49",
      description: "For growing businesses and teams",
      features: [
        "Up to 2,500 leads",
        "Unlimited templates",
        "Advanced analytics",
        "Automated scheduling",
        "Priority support",
        "Custom variables",
        "A/B testing",
      ],
      highlighted: true,
      ctaText: "Start Free Trial",
    },
    {
      name: "Enterprise",
      price: "$149",
      description: "For large teams with advanced needs",
      features: [
        "Unlimited leads",
        "Unlimited templates",
        "Advanced analytics & reporting",
        "Automated scheduling",
        "Dedicated support",
        "Custom variables",
        "A/B testing",
        "API access",
        "Custom domain",
        "Team collaboration",
      ],
      ctaText: "Contact Sales",
    },
  ];

  return (
    <section className="py-16 ">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include a 14-day
            free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <PricingTier key={index} {...tier} />
          ))}
        </div>
      </div>
    </section>
  );
}
