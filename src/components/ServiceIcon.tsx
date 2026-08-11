import { Mountain, Route, LandPlot, Trees, HardHat, Hammer, Layers, Fence, Truck } from 'lucide-react';
import type { Service } from '../data/services';

const ICONS = { Mountain, Route, LandPlot, Trees, HardHat, Hammer, Layers, Fence, Truck } as const;

export default function ServiceIcon({
  icon,
  size = 24,
  className = '',
}: {
  icon: Service['icon'];
  size?: number;
  className?: string;
}) {
  const Icon = ICONS[icon];
  return <Icon size={size} className={className} aria-hidden="true" />;
}
