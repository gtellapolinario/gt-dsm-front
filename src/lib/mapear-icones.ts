// ═══════════════════════════════════════════════════════════════════════════
// Ícones Lucide referenciados pelo campo `icone` dos payloads clínicos.
// Apenas lucide-react: adicione aqui qualquer ícone novo usado nos payloads.
// ═══════════════════════════════════════════════════════════════════════════

import {
  type LucideIcon,
  Accessibility, Ambulance, Baby, Ban, Bath, Bed, Bone,
  BookOpen, Brain, Briefcase, Cake, Calculator, Calendar,
  CalendarDays, ChartColumn, ChartLine, Check, CircleAlert, CircleDot,
  Clock, EyeOff, Footprints, Frown, Gavel, GraduationCap, Heart, HeartPulse,
  History, Hospital, Hourglass, House, Info, Laptop, LifeBuoy, MapPin,
  Megaphone, MessageCircle, PenTool, Percent, PersonStanding, Pill,
  RefreshCw, Scale, School, Shield, Stethoscope, TrendingDown,
  TriangleAlert, UserCheck, Users, Zap,
} from "lucide-react";

const icones: Record<string, LucideIcon> = {
  Accessibility,
  Ambulance,
  Baby,
  Ban,
  Bath,
  Bed,
  Bone,
  BookOpen,
  Brain,
  Briefcase,
  Cake,
  Calculator,
  Calendar,
  CalendarDays,
  ChartColumn,
  ChartLine,
  Check,
  CircleAlert,
  Clock,
  EyeOff,
  Footprints,
  Frown,
  Gavel,
  GraduationCap,
  Heart,
  HeartPulse,
  History,
  Hospital,
  Hourglass,
  House,
  Info,
  Laptop,
  LifeBuoy,
  MapPin,
  Megaphone,
  MessageCircle,
  PenTool,
  Percent,
  PersonStanding,
  Pill,
  RefreshCw,
  Scale,
  School,
  Shield,
  Stethoscope,
  TrendingDown,
  TriangleAlert,
  UserCheck,
  Users,
  Zap,
};

export function getIcone(nome: string | null): LucideIcon {
  if (!nome) return CircleDot;
  return icones[nome] || CircleDot;
}
