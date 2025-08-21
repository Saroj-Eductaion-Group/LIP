import React from "react";
import { FlaskConical, BookOpen, Users } from "lucide-react";

const features = [
  {
    icon: FlaskConical,
    title: "State-of-the-Art Labs",
    description:
      "Equipped with modern instruments to provide hands-on experience in pharmaceutical sciences.",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    description:
      "A well-structured program that blends theoretical knowledge with practical skills.",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description:
      "Learn from experienced professionals and researchers in the field of pharmacy.",
  },
];

export const FeaturesSection = () => (
  <section className="py-16 bg-gray-50" id="programs">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Why Choose Saroj College of Pharmacy?
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <feature.icon className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
