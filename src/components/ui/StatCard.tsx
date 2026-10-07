import React from 'react';
import { StatItem } from '../../types';
import {
  GraduationCap,
  Users,
  MapPin,
  Calendar,
  BookOpen,
  Award,
  LucideIcon,
} from 'lucide-react';

interface StatCardProps {
  stat: StatItem;
  variant?: 'light' | 'dark' | 'card';
}

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Users,
  MapPin,
  Calendar,
  BookOpen,
  Award,
};

export const StatCard: React.FC<StatCardProps> = ({ stat, variant = 'card' }) => {
  const IconComponent = stat.iconName ? iconMap[stat.iconName] || Award : Award;

  if (variant === 'dark') {
    return (
      <div className="flex flex-col p-6 rounded-xl bg-[#112156] border border-[#0066B1]/40 text-white shadow-md">
        <div className="flex items-center justify-between mb-3">
          <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0066B1]">
            {stat.value}
          </span>
          <div className="p-2.5 rounded-lg bg-[#0066B1]/20 text-[#0066B1] border border-[#0066B1]/30">
            <IconComponent className="w-5 h-5" />
          </div>
        </div>
        <h3 className="font-semibold text-base text-white leading-snug mb-1">
          {stat.label}
        </h3>
        <p className="text-xs text-slate-300 leading-relaxed mt-auto pt-2">
          {stat.detail}
        </p>
      </div>
    );
  }

  if (variant === 'light') {
    return (
      <div className="flex flex-col p-5 rounded-lg text-[#112156] border-l-4 border-[#0066B1] bg-white shadow-xs">
        <div className="flex items-baseline gap-1 mb-1">
          <span className="text-3xl sm:text-4xl font-extrabold text-[#0066B1] tracking-tight">
            {stat.value}
          </span>
        </div>
        <h3 className="text-sm font-bold text-[#112156] leading-snug">
          {stat.label}
        </h3>
        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
          {stat.detail}
        </p>
      </div>
    );
  }

  return (
    <div className="group relative flex flex-col p-6 rounded-xl bg-white border border-[#112156]/10 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#0066B1]">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-[#EBF4FC] text-[#0066B1] border border-[#0066B1]/20 flex items-center justify-center group-hover:bg-[#0066B1] group-hover:text-white transition-all">
          <IconComponent className="w-6 h-6" />
        </div>
        <span className="text-3xl sm:text-4xl font-bold tracking-tight text-[#112156] group-hover:text-[#0066B1] transition-colors">
          {stat.value}
        </span>
      </div>
      <h3 className="text-base font-bold text-[#112156] leading-snug mb-2">
        {stat.label}
      </h3>
      <p className="text-xs text-slate-600 leading-relaxed mt-auto">
        {stat.detail}
      </p>
    </div>
  );
};
