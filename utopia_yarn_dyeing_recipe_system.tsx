import React, { useState, useMemo, useEffect } from 'react';
import { 
  FlaskConical, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Plus, 
  Layers, 
  UserCheck, 
  Warehouse, 
  Droplet, 
  Scale, 
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Eye,
  Sliders,
  RotateCcw,
  Check,
  ArrowUpRight,
  Package,
  Hash,
  Activity,
  Trash2,
  Lock,
  Unlock,
  QrCode,
  Copy,
  FileCheck2,
} from 'lucide-react';

// Official DyeBridge Custom Brand Icon SVG Component
const DyeBridgeLogoIcon = ({ className = "w-9 h-9" }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="dbFavArc" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#06B6D4" />
      </linearGradient>
      <linearGradient id="dbFavDrop" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#60A5FA" />
        <stop offset="100%" stopColor="#2563EB" />
      </linearGradient>
    </defs>
    <rect width="64" height="64" rx="15" fill="#09090B" />
    <rect x="1" y="1" width="62" height="62" rx="14" stroke="#27272A" strokeWidth="1.5" />
    <path d="M12 46 C12 27, 52 27, 52 46" stroke="url(#dbFavArc)" strokeWidth="5" strokeLinecap="round" />
    <path d="M20 46 C20 35, 44 35, 44 46" stroke="#FFFFFF" strokeOpacity="0.25" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M32 10 C32 10, 41 19.5, 41 25.5 C41 30.5 37 34.5 32 34.5 C27 34.5 23 30.5 23 25.5 C23 19.5 32 10, 32 10 Z" fill="url(#dbFavDrop)" />
    <circle cx="29.5" cy="24.5" r="2" fill="#FFFFFF" fillOpacity="0.7" />
    <line x1="10" y1="51" x2="54" y2="51" stroke="#52525B" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// Authentic Cabana 100% Cotton Recipes directly from Utopia Industries Excel Sheet
const CABANA_MASTER_RECIPES = {
  'BLUE': {
    id: 'BLUE',
    name: 'BLUE',
    fullName: 'Cabana Blue',
    yarnType: '100% Cotton',
    colorHex: '#1d4ed8',
    badgeBg: 'bg-blue-500/10 text-blue-700 border-blue-200',
    dotColor: '#2563eb',
    defaultCones: 1140,
    defaultCount: '16/S',
    defaultMachine: 'Machine #6',
    defaultLot: '12633',
    liquorRatio: 7,
    pretreatment: [
      { id: 'pt-1', name: 'UT-DE-OILER-80-D', percent: 0.3 },
      { id: 'pt-2', name: 'WETTING-AGENT-1080', percent: 0.7 },
      { id: 'pt-3', name: 'CAUSTIC-LIQ', percent: 1.3 },
      { id: 'pt-4', name: 'HYDROGEN-H202', percent: 2.0 },
      { id: 'pt-5', name: 'ACID-PHN', percent: 0.4 },
      { id: 'pt-6', name: 'B-A-CAT-800', percent: 0.05 }
    ],
    dyes: [
      { id: 'dy-1', name: 'DYE-LIYUANSOL-OCEAN-HSRN', percent: 0.52 },
      { id: 'dy-2', name: 'DYE-COLORSOL-RED-SPBEC', percent: 0.026 }
    ],
    auxiliaries: [
      { id: 'ax-1', name: 'UT-COTTON-LEVELLOR-CL-302', percent: 1.5 },
      { id: 'ax-2', name: 'HUB-SALT', percent: 28.0 },
      { id: 'ax-3', name: 'SODA-ASH', percent: 8.0 },
      { id: 'ax-4', name: 'ACID-PHN', percent: 2.0 },
      { id: 'ax-5', name: 'ULTRA-EFFICIENCY-ANTI-STAINING-SOAPING-AGENT-MCH-3262', percent: 1.0 },
      { id: 'ax-6', name: 'KINGFAST-FIX-1H', percent: 0.3 },
      { id: 'ax-7', name: 'HYDROPHILIC-SILICONE-FLUID-LH-972', percent: 0.2 },
      { id: 'ax-8', name: 'WETTING-1080', percent: 0.2 }
    ]
  },
  'GREEN': {
    id: 'GREEN',
    name: 'GREEN',
    fullName: 'Cabana Green',
    yarnType: '100% Cotton',
    colorHex: '#15803d',
    badgeBg: 'bg-emerald-500/10 text-emerald-700 border-emerald-200',
    dotColor: '#16a34a',
    defaultCones: 630,
    defaultCount: '10/S',
    defaultMachine: 'Machine #5',
    defaultLot: '12427',
    liquorRatio: 7,
    pretreatment: [
      { id: 'pt-1', name: 'UT-DE-OILER 80-D', percent: 0.3 },
      { id: 'pt-2', name: 'UT-WETTING-1688', percent: 0.7 },
      { id: 'pt-3', name: 'CAUSTIC-LIQ', percent: 1.3 },
      { id: 'pt-4', name: 'HYDROGEN-H202', percent: 2.0 },
      { id: 'pt-5', name: 'ACID-PLUS', percent: 0.4 },
      { id: 'pt-6', name: 'B-A-CAT-800', percent: 0.05 }
    ],
    dyes: [
      { id: 'dy-1', name: 'DYE-SYNOZOL-LEMON-YELLOW-4GL', percent: 0.5 },
      { id: 'dy-2', name: 'DYE-SYNOZOL-TURQUISH-HFG-165P', percent: 0.4 },
      { id: 'dy-3', name: 'DYE-SYNOZOL-BRILLIANT-BLUE-KRL-CONS-SP', percent: 0.7 }
    ],
    auxiliaries: [
      { id: 'ax-1', name: 'UT-COTTON-LEVELLOR-CL-13', percent: 1.5 },
      { id: 'ax-2', name: 'HUB-SALT', percent: 45.0 },
      { id: 'ax-3', name: 'SODA-ASH', percent: 14.0 },
      { id: 'ax-4', name: 'ACID-PLUS', percent: 2.0 },
      { id: 'ax-5', name: 'ULTRA-EFFICIENCY-ANTI-STAINING-SOAPING-AGENT-MCH-3262', percent: 1.0 },
      { id: 'ax-6', name: 'KINGFAST-FIX-1H', percent: 0.3 },
      { id: 'ax-7', name: 'HYDROPHILIC-SILICONE-FLUID-LH-972', percent: 0.2 },
      { id: 'ax-8', name: 'UT-WETTING1688', percent: 0.2 }
    ]
  },
  'ORANGE': {
    id: 'ORANGE',
    name: 'ORANGE',
    fullName: 'Cabana Orange',
    yarnType: '100% Cotton',
    colorHex: '#ea580c',
    badgeBg: 'bg-orange-500/10 text-orange-700 border-orange-200',
    dotColor: '#f97316',
    defaultCones: 1165,
    defaultCount: '16/1',
    defaultMachine: 'Machine #6',
    defaultLot: '12209',
    liquorRatio: 7,
    pretreatment: [
      { id: 'pt-1', name: 'UT-DE-OILER-80-D', percent: 0.3 },
      { id: 'pt-2', name: 'UT-WETTING-WN-1688', percent: 0.7 },
      { id: 'pt-3', name: 'CAUSTIC-LIQ', percent: 1.3 },
      { id: 'pt-4', name: 'HYDROGEN-H202', percent: 2.0 },
      { id: 'pt-5', name: 'ACID-PLUS', percent: 0.4 },
      { id: 'pt-6', name: 'B-A-CAT-800', percent: 0.05 }
    ],
    dyes: [
      { id: 'dy-1', name: 'DYE-SYNOZOL-ORANGE-KR', percent: 0.9 },
      { id: 'dy-2', name: 'DYE-SYNOZOL-RED-GD', percent: 0.05 }
    ],
    auxiliaries: [
      { id: 'ax-1', name: 'UT-COTTON-LEVELLOR-CL-302', percent: 1.5 },
      { id: 'ax-2', name: 'HUB-SALT', percent: 28.0 },
      { id: 'ax-3', name: 'SODA-ASH', percent: 11.0 },
      { id: 'ax-4', name: 'ACID-PLUS', percent: 1.0 },
      { id: 'ax-5', name: 'ULTRA-EFFICIENCY-ANTI-STAINING-SOAPING-AGENT-MCH-3262', percent: 0.6 },
      { id: 'ax-6', name: 'HYDROPHILIC-SILICONE-FLUID-LH-972', percent: 0.2 },
      { id: 'ax-7', name: 'UT-WETTING-1688', percent: 0.2 }
    ]
  },
  'YELLOW': {
    id: 'YELLOW',
    name: 'YELLOW',
    fullName: 'Cabana Yellow',
    yarnType: '100% Cotton',
    colorHex: '#ca8a04',
    badgeBg: 'bg-amber-500/10 text-amber-800 border-amber-200',
    dotColor: '#eab308',
    defaultCones: 630,
    defaultCount: '16/1 & 20/2',
    defaultMachine: 'Machine #5',
    defaultLot: '12510',
    liquorRatio: 7,
    pretreatment: [
      { id: 'pt-1', name: 'UT-DE-OILER-80-D', percent: 0.3 },
      { id: 'pt-2', name: 'UT-WETTING-WN-1688', percent: 0.7 },
      { id: 'pt-3', name: 'CAUSTIC-LIQ', percent: 1.3 },
      { id: 'pt-4', name: 'HYDROGEN-H202', percent: 2.0 },
      { id: 'pt-5', name: 'ACID-PLUS', percent: 0.4 },
      { id: 'pt-6', name: 'B-A-CAT-800', percent: 0.05 }
    ],
    dyes: [
      { id: 'dy-1', name: 'DYE-SYNOZOL-LEMON-YELLOW-4GL', percent: 0.156 },
      { id: 'dy-2', name: 'DYE-SYNOZOL-YELLOW-K-3RS', percent: 0.36 }
    ],
    auxiliaries: [
      { id: 'ax-1', name: 'UT-COTTON-LEVELLOR-CL-302', percent: 1.5 },
      { id: 'ax-2', name: 'HUB-SALT', percent: 21.0 },
      { id: 'ax-3', name: 'SODA-ASH', percent: 7.0 },
      { id: 'ax-4', name: 'ACID-PLUS', percent: 1.3 },
      { id: 'ax-5', name: 'ULTRA-EFFICIENCY-ANTI-STAINING-SOAPING-AGENT-MCH-3262', percent: 0.6 },
      { id: 'ax-6', name: 'HYDROPHILIC-SILICONE-FLUID-LH-972', percent: 0.2 },
      { id: 'ax-7', name: 'UT-WETTING-WN-1688', percent: 0.2 }
    ]
  },
  'RED': {
    id: 'RED',
    name: 'RED',
    fullName: 'Cabana Red',
    yarnType: '100% Cotton',
    colorHex: '#dc2626',
    badgeBg: 'bg-red-500/10 text-red-700 border-red-200',
    dotColor: '#ef4444',
    defaultCones: 1140,
    defaultCount: '16/1',
    defaultMachine: 'Machine #6',
    defaultLot: '12532',
    liquorRatio: 7,
    pretreatment: [
      { id: 'pt-1', name: 'UT-DE-OILER-80-D', percent: 0.3 },
      { id: 'pt-2', name: 'UT-WETTING-1688', percent: 0.7 },
      { id: 'pt-3', name: 'CAUSTIC-LIQ', percent: 1.3 },
      { id: 'pt-4', name: 'HYDROGEN-H202', percent: 2.0 },
      { id: 'pt-5', name: 'ACID-PLUS', percent: 0.4 },
      { id: 'pt-6', name: 'B-A-CAT-800', percent: 0.05 }
    ],
    dyes: [
      { id: 'dy-1', name: 'DYE-SYNOZOL-BRILLIANT-RED-K3G-CONS', percent: 2.0 }
    ],
    auxiliaries: [
      { id: 'ax-1', name: 'UT-COTTON-LEVELLOR-CL-13', percent: 1.5 },
      { id: 'ax-2', name: 'HUB-SALT', percent: 45.0 },
      { id: 'ax-3', name: 'SODA-ASH', percent: 14.0 },
      { id: 'ax-4', name: 'ACID-PLUS', percent: 2.0 },
      { id: 'ax-5', name: 'ULTRA-EFFICIENCY-ANTI-STAINING-SOAPING-AGENT-MCH-3262', percent: 1.0 },
      { id: 'ax-6', name: 'KINGFAST-FIX-1H', percent: 0.3 },
      { id: 'ax-7', name: 'HYDROPHILIC-SILICONE-FLUID-LH-972', percent: 0.2 },
      { id: 'ax-8', name: 'UT-WETTING-1688', percent: 0.2 }
    ]
  },
  'LT_GREY': {
    id: 'LT_GREY',
    name: 'LT GREY',
    fullName: 'Cabana Light Grey',
    yarnType: '100% Cotton',
    colorHex: '#64748b',
    badgeBg: 'bg-slate-500/10 text-slate-700 border-slate-200',
    dotColor: '#64748b',
    defaultCones: 1140,
    defaultCount: '16/1',
    defaultMachine: 'Machine #6',
    defaultLot: '12554',
    liquorRatio: 7,
    pretreatment: [
      { id: 'pt-1', name: 'HIGH-EFFICIENT-DE-OILING-AGENT-MCH-137B', percent: 0.3 },
      { id: 'pt-2', name: 'UT-WETTING-WN-80', percent: 0.7 },
      { id: 'pt-3', name: 'CAUSTIC-LIQ', percent: 1.3 },
      { id: 'pt-4', name: 'HYDROGEN-H202', percent: 2.0 },
      { id: 'pt-5', name: 'ACID-PLUS', percent: 0.4 },
      { id: 'pt-6', name: 'B-A-CAT-800', percent: 0.05 }
    ],
    dyes: [
      { id: 'dy-1', name: 'DYE-SYNOZOL-YELLOW-4GL', percent: 0.052 },
      { id: 'dy-2', name: 'DYE-SYNOZOL-RED-GD', percent: 0.057 },
      { id: 'dy-3', name: 'DYE-SYNOZOL-BLUE-K-BR', percent: 0.12 }
    ],
    auxiliaries: [
      { id: 'ax-1', name: 'UT-COTTON-LEVELLOR-CL-13', percent: 1.5 },
      { id: 'ax-2', name: 'HUB-SALT', percent: 21.0 },
      { id: 'ax-3', name: 'SODA-ASH', percent: 10.0 },
      { id: 'ax-4', name: 'ACID-PLUS', percent: 1.0 },
      { id: 'ax-5', name: 'ULTRA-EFFICIENCY-ANTI-STAINING-SOAPING-AGENT-MCH-3262', percent: 0.6 },
      { id: 'ax-6', name: 'HYDROPHILIC-SILICONE-FLUID-LH-972', percent: 0.2 },
      { id: 'ax-7', name: 'UT-WETTING-WN-80', percent: 0.2 }
    ]
  },
  'WHITE': {
    id: 'WHITE',
    name: 'WHITE',
    fullName: 'Cabana Bleach White',
    yarnType: '100% Cotton',
    colorHex: '#e2e8f0',
    badgeBg: 'bg-zinc-200/70 text-zinc-800 border-zinc-300',
    dotColor: '#94a3b8',
    defaultCones: 1260,
    defaultCount: '16/1 & 20/2',
    defaultMachine: 'Machine #6',
    defaultLot: '12690',
    liquorRatio: 7,
    pretreatment: [
      { id: 'pt-1', name: 'UT-DE-OILER-20', percent: 0.3 },
      { id: 'pt-2', name: 'UT-WETTING-WN-80', percent: 0.7 },
      { id: 'pt-3', name: 'CAUSTIC-LIQ', percent: 2.5 },
      { id: 'pt-4', name: 'HYDROGEN-H202', percent: 8.0 },
      { id: 'pt-5', name: 'UT-BUFFER-ACID-BA-60', percent: 0.5 },
      { id: 'pt-6', name: 'HYDROPHILIC-SILICONE-FLUID-LH-972', percent: 0.2 }
    ],
    dyes: [],
    auxiliaries: []
  }
};

// Quick Per-Cone Weight Presets (1.000 kg default ±40g / ±50g)
const CONE_WEIGHT_PRESETS = [
  { label: '-50g', sub: '0.950 kg', value: 0.95 },
  { label: '-40g', sub: '0.960 kg', value: 0.96 },
  { label: 'Std 1 Kg', sub: '1.000 kg', value: 1.00 },
  { label: '+40g', sub: '1.040 kg', value: 1.04 },
  { label: '+50g', sub: '1.050 kg', value: 1.05 }
];

const MASTER_RECIPES_STORAGE_KEY = 'dyebridge_master_recipes_v1';
const ISSUED_LOGS_STORAGE_KEY = 'dyebridge_issued_logs_v1';

const DEFAULT_SAVED_LOGS = [
  {
    slipNo: 'UT-YD-2083',
    date: '2026-10-25',
    shade: 'BLUE',
    lotNo: '12633',
    machineNo: 'Machine #6',
    yarnCount: '16/S',
    cones: 1140,
    perConeKg: 1.000,
    totalWeightKg: 1140.0,
    waterLiters: 7980.0,
    status: 'STORE_ISSUED',
    shift: 'Shift A'
  },
  {
    slipNo: 'UT-YD-2082',
    date: '2026-10-25',
    shade: 'GREEN',
    lotNo: '12427',
    machineNo: 'Machine #5',
    yarnCount: '10/S',
    cones: 630,
    perConeKg: 1.000,
    totalWeightKg: 630.0,
    waterLiters: 4410.0,
    status: 'SUPERVISOR_SIGNED',
    shift: 'Shift B'
  },
  {
    slipNo: 'UT-YD-2081',
    date: '2026-10-24',
    shade: 'ORANGE',
    lotNo: '12209',
    machineNo: 'Machine #6',
    yarnCount: '16/1',
    cones: 1165,
    perConeKg: 1.000,
    totalWeightKg: 1165.0,
    waterLiters: 8155.0,
    status: 'STORE_ISSUED',
    shift: 'Shift A'
  }
];

const sanitizeNumber = (value, fallback = 0) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const cloneRecipeItems = (items = [], prefix = 'item') =>
  Array.isArray(items)
    ? items.map((item, index) => ({
        id: String(item?.id || `${prefix}-${index + 1}`),
        name: String(item?.name || '').trim().toUpperCase(),
        percent: Math.max(0, sanitizeNumber(item?.percent, 0))
      }))
    : [];

const cloneRecipe = (recipe, fallbackKey = 'CUSTOM') => ({
  id: String(recipe?.id || fallbackKey).trim().toUpperCase(),
  name: String(recipe?.name || fallbackKey).trim().toUpperCase(),
  fullName: String(recipe?.fullName || `Cabana ${fallbackKey}`).trim(),
  yarnType: String(recipe?.yarnType || '100% Cotton').trim(),
  colorHex: String(recipe?.colorHex || '#64748b').trim(),
  badgeBg: String(recipe?.badgeBg || 'bg-zinc-100 text-zinc-700 border-zinc-200').trim(),
  dotColor: String(recipe?.dotColor || '#64748b').trim(),
  defaultCones: Math.max(1, Math.round(sanitizeNumber(recipe?.defaultCones, 1))),
  defaultCount: String(recipe?.defaultCount || '16/S').trim(),
  defaultMachine: String(recipe?.defaultMachine || 'Machine #1').trim(),
  defaultLot: String(recipe?.defaultLot || '00000').trim(),
  liquorRatio: Math.max(1, sanitizeNumber(recipe?.liquorRatio, 7)),
  pretreatment: cloneRecipeItems(recipe?.pretreatment, 'pt'),
  dyes: cloneRecipeItems(recipe?.dyes, 'dy'),
  auxiliaries: cloneRecipeItems(recipe?.auxiliaries, 'ax')
});

const loadMasterRecipes = () => {
  const baseRecipes = Object.fromEntries(
    Object.entries(CABANA_MASTER_RECIPES).map(([key, recipe]) => [key, cloneRecipe(recipe, key)])
  );
  if (typeof window === 'undefined') return baseRecipes;
  try {
    const raw = window.localStorage.getItem(MASTER_RECIPES_STORAGE_KEY);
    if (!raw) return baseRecipes;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return baseRecipes;
    const sanitized = Object.entries(parsed).reduce((acc, [key, value]) => {
      const normalizedKey = String(key || '').trim().toUpperCase();
      if (!normalizedKey) return acc;
      acc[normalizedKey] = cloneRecipe(value, normalizedKey);
      return acc;
    }, {});
    return Object.keys(sanitized).length > 0 ? sanitized : baseRecipes;
  } catch (error) {
    console.error('Failed to parse saved master recipes:', error);
    return baseRecipes;
  }
};

const loadIssuedLogs = () => {
  if (typeof window === 'undefined') return DEFAULT_SAVED_LOGS;
  try {
    const raw = window.localStorage.getItem(ISSUED_LOGS_STORAGE_KEY);
    if (!raw) return DEFAULT_SAVED_LOGS;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return DEFAULT_SAVED_LOGS;
    const sanitized = parsed
      .map((log) => ({
        slipNo: String(log?.slipNo || '').trim(),
        date: String(log?.date || '').trim(),
        shade: String(log?.shade || '').trim().toUpperCase(),
        lotNo: String(log?.lotNo || '').trim(),
        machineNo: String(log?.machineNo || '').trim(),
        yarnCount: String(log?.yarnCount || '').trim(),
        cones: Math.max(0, Math.round(sanitizeNumber(log?.cones, 0))),
        perConeKg: Math.max(0, sanitizeNumber(log?.perConeKg, 0)),
        totalWeightKg: Math.max(0, sanitizeNumber(log?.totalWeightKg, 0)),
        waterLiters: Math.max(0, sanitizeNumber(log?.waterLiters, 0)),
        status: ['GENERATED', 'SUPERVISOR_SIGNED', 'STORE_ISSUED'].includes(log?.status)
          ? log.status
          : 'GENERATED',
        shift: String(log?.shift || '').trim()
      }))
      .filter((log) => log.slipNo && log.date && log.shade);
    return sanitized.length > 0 ? sanitized : DEFAULT_SAVED_LOGS;
  } catch (error) {
    console.error('Failed to parse saved issued logs:', error);
    return DEFAULT_SAVED_LOGS;
  }
};

export default function App() {
  const [activeTab, setActiveTab] = useState('workspace'); // 'workspace' | 'recipes' | 'logs'
  const [pdfToastMessage, setPdfToastMessage] = useState(null);

  const [masterRecipes, setMasterRecipes] = useState(() => loadMasterRecipes());
  const [recipeErrorMessage, setRecipeErrorMessage] = useState('');

  // Selected Shade Key
  const [selectedShade, setSelectedShade] = useState(() =>
    masterRecipes.BLUE ? 'BLUE' : Object.keys(masterRecipes)[0] || 'BLUE'
  );

  // Cone & Weight Logic State
  const [conesCount, setConesCount] = useState(() => masterRecipes[selectedShade]?.defaultCones || 1140);
  const [perConeKg, setPerConeKg] = useState(1.000);
  const [isManualWeightOverride, setIsManualWeightOverride] = useState(false);
  const [manualWeightKg, setManualWeightKg] = useState(() => masterRecipes[selectedShade]?.defaultCones || 1140);

  // Batch Metadata State
  const [lotNo, setLotNo] = useState(() => masterRecipes[selectedShade]?.defaultLot || '12633');
  const [machineNo, setMachineNo] = useState(() => masterRecipes[selectedShade]?.defaultMachine || 'Machine #6');
  const [yarnCount, setYarnCount] = useState(() => masterRecipes[selectedShade]?.defaultCount || '16/S');
  const [customerName, setCustomerName] = useState('Cabana');
  const [poNumber, setPoNumber] = useState('PO-CAB-2026');
  const [shift, setShift] = useState('Shift A');
  const [slipDate, setSlipDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [slipIdCounter, setSlipIdCounter] = useState(2084);
  const [currentSlipStatus, setCurrentSlipStatus] = useState('GENERATED'); // 'GENERATED' | 'SUPERVISOR_SIGNED' | 'STORE_ISSUED'
  const [editingSlipNo, setEditingSlipNo] = useState(null);

  // Editable Recipe Items State (allows inline percentage adjustments or custom additions per batch)
  const [pretreatmentItems, setPretreatmentItems] = useState(() =>
    cloneRecipeItems(masterRecipes[selectedShade]?.pretreatment, 'pt')
  );
  const [dyeItems, setDyeItems] = useState(() => cloneRecipeItems(masterRecipes[selectedShade]?.dyes, 'dy'));
  const [auxiliaryItems, setAuxiliaryItems] = useState(() =>
    cloneRecipeItems(masterRecipes[selectedShade]?.auxiliaries, 'ax')
  );
  const [secondAdditionItems, setSecondAdditionItems] = useState([]);
  const [isEditingPercentages, setIsEditingPercentages] = useState(false);

  // Add custom item modal/inline state
  const [newItemSection, setNewItemSection] = useState('auxiliaries');
  const [newItemName, setNewItemName] = useState('');
  const [newItemPercent, setNewItemPercent] = useState('');

  // Dedicated 2nd Addition / Re-production inline state
  const [isSecondAdditionEnabled, setIsSecondAdditionEnabled] = useState(false);
  const [secondAddType, setSecondAddType] = useState('DYE');
  const [secondAddName, setSecondAddName] = useState('');
  const [secondAddPercent, setSecondAddPercent] = useState('');

  // Saved Requisition Logs State
  const [savedLogs, setSavedLogs] = useState(() => loadIssuedLogs());

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(MASTER_RECIPES_STORAGE_KEY, JSON.stringify(masterRecipes));
    } catch (error) {
      console.error('Failed to persist master recipes:', error);
    }
  }, [masterRecipes]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(ISSUED_LOGS_STORAGE_KEY, JSON.stringify(savedLogs));
    } catch (error) {
      console.error('Failed to persist issued logs:', error);
    }
  }, [savedLogs]);

  useEffect(() => {
    if (masterRecipes[selectedShade]) return;
    const firstKey = Object.keys(masterRecipes)[0];
    if (firstKey) {
      handleSelectShade(firstKey, true);
    }
  }, [masterRecipes, selectedShade]);

  useEffect(() => {
    const latestSlipNo = savedLogs
      .map((log) => parseInt(String(log.slipNo || '').replace('UT-YD-', ''), 10))
      .filter((num) => Number.isFinite(num))
      .sort((a, b) => b - a)[0];
    if (latestSlipNo) {
      setSlipIdCounter((prev) => Math.max(prev, latestSlipNo + 1));
    }
  }, [savedLogs]);

  // Switch Shade Handler (loads dynamic master recipe defaults)
  const handleSelectShade = (shadeKey, loadDefaults = true) => {
    const normalizedShadeKey = String(shadeKey || '').trim().toUpperCase();
    const master = masterRecipes[normalizedShadeKey];
    if (!master) return;
    setSelectedShade(normalizedShadeKey);
    setPretreatmentItems(cloneRecipeItems(master.pretreatment, 'pt'));
    setDyeItems(cloneRecipeItems(master.dyes, 'dy'));
    setAuxiliaryItems(cloneRecipeItems(master.auxiliaries, 'ax'));
    setSecondAdditionItems([]);
    setIsSecondAdditionEnabled(false);
    setRecipeErrorMessage('');

    if (loadDefaults) {
      setConesCount(master.defaultCones);
      setManualWeightKg(Number((master.defaultCones * perConeKg).toFixed(2)));
      setYarnCount(master.defaultCount);
      setMachineNo(master.defaultMachine);
      setLotNo(master.defaultLot);
    }
  };

  const saveCurrentRecipeToMasterBook = () => {
    const activeMaster = masterRecipes[selectedShade] || Object.values(masterRecipes)[0] || cloneRecipe({}, 'DEFAULT');
    if (!activeMaster) return;
    const hasInvalidItem =
      [...pretreatmentItems, ...dyeItems, ...auxiliaryItems].some(
        (item) => !item.name?.trim() || sanitizeNumber(item.percent, -1) < 0
      );
    if (hasInvalidItem) {
      setRecipeErrorMessage('Recipe item name and % must be valid before saving.');
      return;
    }
    setMasterRecipes((prev) => ({
      ...prev,
      [selectedShade]: cloneRecipe(
        {
          ...activeMaster,
          defaultCones: Math.max(1, parseInt(conesCount, 10) || 1),
          defaultCount: yarnCount,
          defaultMachine: machineNo,
          defaultLot: lotNo,
          pretreatment: pretreatmentItems,
          dyes: dyeItems,
          auxiliaries: auxiliaryItems
        },
        selectedShade
      )
    }));
    setRecipeErrorMessage('');
    setPdfToastMessage(`Master recipe ${selectedShade} updated successfully.`);
    setTimeout(() => setPdfToastMessage(null), 3000);
  };

  const handleCreateNewRecipe = () => {
    const recipeCode = window.prompt('Enter new shade code (example: SKY_BLUE):', '')?.trim().toUpperCase();
    if (!recipeCode) return;
    if (masterRecipes[recipeCode]) {
      setRecipeErrorMessage(`Recipe ${recipeCode} already exists.`);
      return;
    }
    const recipeName = window.prompt('Enter full recipe name:', `Cabana ${recipeCode}`)?.trim();
    if (!recipeName) {
      setRecipeErrorMessage('Recipe full name is required.');
      return;
    }
    const colorHex = window.prompt('Enter color hex (example: #3b82f6):', '#64748b')?.trim() || '#64748b';
    const newRecipe = cloneRecipe(
      {
        id: recipeCode,
        name: recipeCode,
        fullName: recipeName,
        yarnType: '100% Cotton',
        colorHex,
        badgeBg: 'bg-zinc-100 text-zinc-700 border-zinc-200',
        dotColor: colorHex,
        defaultCones: Math.max(1, parseInt(conesCount, 10) || 1),
        defaultCount: yarnCount || '16/S',
        defaultMachine: machineNo || 'Machine #1',
        defaultLot: lotNo || '00000',
        liquorRatio: 7,
        pretreatment: [],
        dyes: [],
        auxiliaries: []
      },
      recipeCode
    );
    setMasterRecipes((prev) => ({ ...prev, [recipeCode]: newRecipe }));
    handleSelectShade(recipeCode, true);
    setActiveTab('workspace');
    setPdfToastMessage(`Recipe ${recipeCode} added. Configure and save from workspace.`);
    setTimeout(() => setPdfToastMessage(null), 3500);
  };

  const handleDeleteRecipe = (recipeKey) => {
    const normalizedRecipeKey = String(recipeKey || '').trim().toUpperCase();
    if (!masterRecipes[normalizedRecipeKey]) return;
    if (Object.keys(masterRecipes).length <= 1) {
      setRecipeErrorMessage('At least one master recipe must remain.');
      return;
    }
    if (!window.confirm(`Delete recipe ${normalizedRecipeKey}? This cannot be undone.`)) return;

    const nextRecipes = { ...masterRecipes };
    delete nextRecipes[normalizedRecipeKey];
    const nextKeys = Object.keys(nextRecipes);
    setMasterRecipes(nextRecipes);
    if (selectedShade === normalizedRecipeKey && nextKeys.length > 0) {
      handleSelectShade(nextKeys[0], true);
    }

    setSavedLogs((prev) => prev.filter((log) => log.shade !== normalizedRecipeKey));
    setRecipeErrorMessage('');
    setPdfToastMessage(`Recipe ${normalizedRecipeKey} deleted.`);
    setTimeout(() => setPdfToastMessage(null), 3000);
  };

  // Computed Total Yarn Weight in Kgs
  const totalYarnWeightKg = useMemo(() => {
    if (isManualWeightOverride) {
      return Math.max(0, parseFloat(manualWeightKg) || 0);
    }
    const cones = Math.max(0, parseInt(conesCount, 10) || 0);
    const coneWt = Math.max(0.1, parseFloat(perConeKg) || 1.0);
    return Number((cones * coneWt).toFixed(2));
  }, [conesCount, perConeKg, isManualWeightOverride, manualWeightKg]);

  // Liquor Ratio 1:7 Water Calculation
  const totalWaterLiters = useMemo(() => {
    return Number((totalYarnWeightKg * 7).toFixed(1));
  }, [totalYarnWeightKg]);

  // Core Formula: Required Weight (Kgs) = (Weight in Kgs * %) / 100
  const calculateChemicalWeight = (percent) => {
    const p = parseFloat(percent) || 0;
    const kgs = (totalYarnWeightKg * p) / 100;
    const grams = kgs * 1000;
    return {
      kgs: kgs.toFixed(3),
      kgsClean: Number(kgs.toFixed(4)),
      grams: grams >= 1000 ? grams.toLocaleString('en-US', { maximumFractionDigits: 1 }) : grams.toFixed(1),
      rawGrams: grams
    };
  };

  // Totals summary
  const activePretreatmentItems = useMemo(
    () => (isEditingPercentages ? pretreatmentItems : pretreatmentItems.filter(i => (parseFloat(i.percent) || 0) > 0)),
    [pretreatmentItems, isEditingPercentages]
  );

  const activeDyeItems = useMemo(
    () => (isEditingPercentages ? dyeItems : dyeItems.filter(i => (parseFloat(i.percent) || 0) > 0)),
    [dyeItems, isEditingPercentages]
  );

  const activeAuxiliaryItems = useMemo(
    () => (isEditingPercentages ? auxiliaryItems : auxiliaryItems.filter(i => (parseFloat(i.percent) || 0) > 0)),
    [auxiliaryItems, isEditingPercentages]
  );

  const activeSecondAdditionItems = useMemo(
    () => (isSecondAdditionEnabled ? secondAdditionItems.filter(i => (parseFloat(i.percent) || 0) > 0) : []),
    [secondAdditionItems, isSecondAdditionEnabled]
  );

  // Dynamic sequential numbering for visible slip sections
  const visibleSlipSections = useMemo(() => {
    let counter = 1;
    return {
      ptNum: activePretreatmentItems.length > 0 ? counter++ : null,
      dyeNum: activeDyeItems.length > 0 ? counter++ : null,
      auxNum: activeAuxiliaryItems.length > 0 ? counter++ : null,
      secAddNum: activeSecondAdditionItems.length > 0 ? counter++ : null
    };
  }, [activePretreatmentItems, activeDyeItems, activeAuxiliaryItems, activeSecondAdditionItems]);

  const batchSummaryTotals = useMemo(() => {
    const sumSection = (list) =>
      list.reduce((acc, item) => acc + (totalYarnWeightKg * (parseFloat(item.percent) || 0)) / 100, 0);

    const ptTotalKg = sumSection(activePretreatmentItems);
    const dyeTotalKg = sumSection(activeDyeItems);
    const auxTotalKg = sumSection(activeAuxiliaryItems);
    const secAddTotalKg = sumSection(activeSecondAdditionItems);

    return {
      ptTotalKg: ptTotalKg.toFixed(2),
      dyeTotalKg: dyeTotalKg.toFixed(3),
      dyeTotalGrams: (dyeTotalKg * 1000).toFixed(1),
      auxTotalKg: auxTotalKg.toFixed(2),
      secAddTotalKg: secAddTotalKg.toFixed(3),
      secAddTotalGrams: (secAddTotalKg * 1000).toFixed(1),
      grandTotalKg: (ptTotalKg + dyeTotalKg + auxTotalKg + secAddTotalKg).toFixed(2)
    };
  }, [activePretreatmentItems, activeDyeItems, activeAuxiliaryItems, activeSecondAdditionItems, totalYarnWeightKg]);

  // Update percentage inline
  const handleUpdatePercent = (section, id, newPercentVal) => {
    const val = parseFloat(newPercentVal);
    const setter =
      section === 'pretreatment'
        ? setPretreatmentItems
        : section === 'dyes'
        ? setDyeItems
        : section === 'secondAddition'
        ? setSecondAdditionItems
        : setAuxiliaryItems;

    setter(prev =>
      prev.map(item => (item.id === id ? { ...item, percent: Number.isNaN(val) ? 0 : Math.max(0, val) } : item))
    );
  };

  // Add 2nd Addition / Re-production item
  const handleAddSecondAddition = (e) => {
    e.preventDefault();
    if (!secondAddName.trim() || !secondAddPercent) return;
    const parsedPercent = parseFloat(secondAddPercent);
    if (Number.isNaN(parsedPercent) || parsedPercent < 0) {
      setPdfToastMessage('Second addition % must be a valid positive number.');
      setTimeout(() => setPdfToastMessage(null), 3000);
      return;
    }
    const newEntry = {
      id: `sec-${Date.now()}`,
      category: secondAddType,
      name: secondAddName.trim().toUpperCase(),
      percent: parsedPercent
    };
    setSecondAdditionItems(prev => [...prev, newEntry]);
    setSecondAddName('');
    setSecondAddPercent('');
  };

  // Add custom chemical row
  const handleAddCustomChemical = (e) => {
    e.preventDefault();
    if (!newItemName.trim() || !newItemPercent) return;
    const parsedPercent = parseFloat(newItemPercent);
    if (Number.isNaN(parsedPercent) || parsedPercent < 0) {
      setPdfToastMessage('Chemical % must be a valid positive number.');
      setTimeout(() => setPdfToastMessage(null), 3000);
      return;
    }
    const newEntry = {
      id: `custom-${Date.now()}`,
      name: newItemName.trim().toUpperCase(),
      percent: parsedPercent
    };

    if (newItemSection === 'pretreatment') {
      setPretreatmentItems(prev => [...prev, newEntry]);
    } else if (newItemSection === 'dyes') {
      setDyeItems(prev => [...prev, newEntry]);
    } else {
      setAuxiliaryItems(prev => [...prev, newEntry]);
    }
    setNewItemName('');
    setNewItemPercent('');
  };

  // Remove chemical row
  const handleRemoveChemical = (section, id) => {
    const setter =
      section === 'pretreatment'
        ? setPretreatmentItems
        : section === 'dyes'
        ? setDyeItems
        : section === 'secondAddition'
        ? setSecondAdditionItems
        : setAuxiliaryItems;
    setter(prev => prev.filter(item => item.id !== id));
  };

  // Reset recipe to factory Cabana standard
  const handleResetRecipe = () => {
    const master = masterRecipes[selectedShade];
    if (!master) return;
    setPretreatmentItems(cloneRecipeItems(master.pretreatment, 'pt'));
    setDyeItems(cloneRecipeItems(master.dyes, 'dy'));
    setAuxiliaryItems(cloneRecipeItems(master.auxiliaries, 'ax'));
    setSecondAdditionItems([]);
    setIsSecondAdditionEnabled(false);
    setRecipeErrorMessage('');
  };

  // Save current slip to Requisition Logs
  const handleSaveSlipToLogs = () => {
    if (!selectedShade || !masterRecipes[selectedShade]) {
      setPdfToastMessage('Select a valid recipe before saving.');
      setTimeout(() => setPdfToastMessage(null), 3000);
      return;
    }
    if (!slipDate || !lotNo.trim() || !machineNo.trim() || !yarnCount.trim()) {
      setPdfToastMessage('Date, lot, machine and yarn count are required.');
      setTimeout(() => setPdfToastMessage(null), 3000);
      return;
    }
    const normalizedCones = Math.max(0, parseInt(conesCount, 10) || 0);
    if (normalizedCones <= 0) {
      setPdfToastMessage('Cones must be greater than zero.');
      setTimeout(() => setPdfToastMessage(null), 3000);
      return;
    }
    const newLog = {
      slipNo: editingSlipNo || `UT-YD-${slipIdCounter}`,
      date: slipDate,
      shade: selectedShade,
      lotNo,
      machineNo,
      yarnCount,
      cones: normalizedCones,
      perConeKg: Number(perConeKg),
      totalWeightKg: totalYarnWeightKg,
      waterLiters: totalWaterLiters,
      status: currentSlipStatus,
      shift
    };
    setSavedLogs((prev) => {
      if (editingSlipNo) {
        return prev.map((log) => (log.slipNo === editingSlipNo ? newLog : log));
      }
      return [newLog, ...prev];
    });
    if (!editingSlipNo) {
      setSlipIdCounter((prev) => prev + 1);
    }
    setPdfToastMessage(
      editingSlipNo
        ? `Slip ${editingSlipNo} updated in Requisition Logs.`
        : `Slip ${newLog.slipNo} saved to Requisition Logs!`
    );
    setEditingSlipNo(null);
    setTimeout(() => setPdfToastMessage(null), 3500);
  };

  const handleDeleteIssuedSlip = (slipNo) => {
    if (!window.confirm(`Delete issued slip ${slipNo}? This action cannot be undone.`)) return;
    setSavedLogs((prev) => prev.filter((log) => log.slipNo !== slipNo));
    if (editingSlipNo === slipNo) {
      setEditingSlipNo(null);
    }
    setPdfToastMessage(`Slip ${slipNo} deleted.`);
    setTimeout(() => setPdfToastMessage(null), 3000);
  };

  const activeMaster = masterRecipes[selectedShade];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      {/* Print-specific global styles for crisp Single-Page A4 output */}
      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 6mm;
          }
          html, body {
            background: #ffffff !important;
            color: #000000 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
          }
          .no-print {
            display: none !important;
          }
          main {
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .print-grid-wrapper {
            display: block !important;
            width: 100% !important;
          }
          .print-slip-col {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .print-only-slip {
            box-shadow: none !important;
            border: 1.5px solid #000 !important;
            margin: 0 !important;
            padding: 12px 14px !important;
            width: 100% !important;
            max-width: 100% !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
        }
      `}</style>

      {/* Floating Status Toast Banner */}
      {pdfToastMessage && (
        <div className="fixed bottom-5 right-5 z-50 no-print flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-zinc-950 text-white text-xs font-semibold shadow-xl border border-zinc-800 animate-in fade-in slide-in-from-bottom-4">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{pdfToastMessage}</span>
        </div>
      )}

      {/* Top Navigation Bar — Apple / Vercel / Linear Aesthetic */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/85 border-b border-zinc-200/80 no-print">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Left Brand Identity: DyeBridge + Utopia Industries */}
          <div className="flex items-center gap-3">
            <DyeBridgeLogoIcon className="w-10 h-10 shrink-0 shadow-xs rounded-xl" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold tracking-tight text-base text-zinc-950">
                  Dye<span className="text-blue-600">Bridge</span>
                </span>
                <span className="text-zinc-300">/</span>
                <span className="text-[11px] font-bold tracking-wide text-zinc-800 bg-zinc-100 px-2 py-0.5 rounded-md border border-zinc-200/80">
                  UTOPIA INDUSTRIES
                </span>
              </div>
              <p className="text-[11px] text-zinc-500 hidden sm:block">
                Yarn Dyeing Dept • Cabana 100% Cotton Recipe & Store Requisition OS
              </p>
            </div>
          </div>

          {/* Center Segmented Control (Apple / Vercel style) */}
          <nav className="flex items-center p-1 bg-zinc-100/90 rounded-xl border border-zinc-200/70">
            <button
              onClick={() => setActiveTab('workspace')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'workspace'
                  ? 'bg-white text-zinc-950 shadow-xs border border-zinc-200/60'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Calculator & Store Slip</span>
            </button>

            <button
              onClick={() => setActiveTab('recipes')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'recipes'
                  ? 'bg-white text-zinc-950 shadow-xs border border-zinc-200/60'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Cabana Master Book ({Object.keys(masterRecipes).length})</span>
            </button>

            <button
              onClick={() => setActiveTab('logs')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'logs'
                  ? 'bg-white text-zinc-950 shadow-xs border border-zinc-200/60'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Issued Slips ({savedLogs.length})</span>
            </button>
          </nav>

          {/* Right Quick Actions */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handleSaveSlipToLogs}
              className="px-3 py-2 rounded-xl bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-200/90 text-xs font-semibold flex items-center gap-1.5 shadow-2xs transition-all cursor-pointer"
            >
              <FileCheck2 className="w-3.5 h-3.5 text-emerald-600" />
              <span className="hidden sm:inline">{editingSlipNo ? 'Update Log' : 'Save Log'}</span>
            </button>
            {editingSlipNo && (
              <button
                type="button"
                onClick={() => setEditingSlipNo(null)}
                className="px-3 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 text-xs font-semibold cursor-pointer"
              >
                Editing {editingSlipNo} (Cancel)
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 py-6">
        {/* ==========================================
            TAB 1: WORKSPACE (CALCULATOR + LIVE SLIP)
           ========================================== */}
        {activeTab === 'workspace' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start print-grid-wrapper">
            
            {/* LEFT PANEL: CONTROLS & CONE WEIGHT CALCULATOR (5 Cols) */}
            <div className="lg:col-span-5 space-y-5 no-print">
              
              {/* Card 1: Cabana Shade Selector */}
              <div className="bg-white rounded-2xl border border-zinc-200/90 shadow-2xs p-5">
                <div className="flex items-center justify-between mb-3.5">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                      Step 01 • Recipe Selection
                    </span>
                    <h2 className="text-sm font-bold text-zinc-900">
                      Cabana 100% Cotton Shade
                    </h2>
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded-md border border-zinc-200">
                    Reactive Dyeing
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {Object.keys(masterRecipes).map((key) => {
                    const recipe = masterRecipes[key];
                    const active = selectedShade === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => handleSelectShade(key, true)}
                        className={`group relative flex flex-col justify-between p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                          active
                            ? 'bg-zinc-950 text-white border-zinc-950 shadow-sm'
                            : 'bg-zinc-50/70 hover:bg-white text-zinc-800 border-zinc-200/80 hover:border-zinc-300'
                        }`}
                      >
                        <div className="flex items-center justify-between w-full mb-1.5">
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-black/15 shadow-2xs"
                            style={{ backgroundColor: recipe.colorHex }}
                          />
                          {active && <Check className="w-3 h-3 text-zinc-300" />}
                        </div>
                        <div className="font-bold text-xs tracking-tight truncate">
                          {recipe.name}
                        </div>
                        <div className={`text-[10px] font-mono ${active ? 'text-zinc-400' : 'text-zinc-400'}`}>
                          Ref: {recipe.defaultCones}kg
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Card 2: Smart Cone & Weight Engine (1 Cone ≈ 1 Kg ± 40-50g) */}
              <div className="bg-white rounded-2xl border border-zinc-200/90 shadow-2xs p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                      Step 02 • Cone & Weight Calibration
                    </span>
                    <h2 className="text-sm font-bold text-zinc-900">
                      Cones to Net Weight Calculator
                    </h2>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setIsManualWeightOverride(!isManualWeightOverride);
                      if (!isManualWeightOverride) {
                        setManualWeightKg(totalYarnWeightKg);
                      }
                    }}
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border flex items-center gap-1 transition-all cursor-pointer ${
                      isManualWeightOverride
                        ? 'bg-amber-50 text-amber-800 border-amber-300'
                        : 'bg-zinc-100 text-zinc-600 border-zinc-200 hover:text-zinc-900'
                    }`}
                  >
                    {isManualWeightOverride ? <Unlock className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
                    <span>{isManualWeightOverride ? 'Manual Kg Mode' : 'Auto Cone Mode'}</span>
                  </button>
                </div>

                {/* Cones Input & Per-Cone Weight Display */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-zinc-50/80 p-3 rounded-xl border border-zinc-200/80">
                    <label className="text-[11px] font-semibold text-zinc-500 block mb-1">
                      Total Number of Cones
                    </label>
                    <div className="flex items-baseline gap-1.5">
                      <input
                        type="number"
                        min="1"
                        value={conesCount}
                        onChange={(e) => {
                          setConesCount(e.target.value);
                          setIsManualWeightOverride(false);
                        }}
                        className="w-full text-xl font-black font-mono text-zinc-950 bg-transparent focus:outline-none"
                      />
                      <span className="text-xs font-semibold text-zinc-400">Cones</span>
                    </div>
                  </div>

                  <div className="bg-zinc-50/80 p-3 rounded-xl border border-zinc-200/80">
                    <label className="text-[11px] font-semibold text-zinc-500 block mb-1">
                      Avg Weight Per Cone
                    </label>
                    <div className="flex items-baseline gap-1">
                      <input
                        type="number"
                        step="0.005"
                        min="0.500"
                        max="2.000"
                        value={perConeKg}
                        onChange={(e) => {
                          setPerConeKg(e.target.value);
                          setIsManualWeightOverride(false);
                        }}
                        className="w-full text-xl font-black font-mono text-zinc-950 bg-transparent focus:outline-none"
                      />
                      <span className="text-xs font-mono font-semibold text-zinc-500">
                        kg ({Math.round((parseFloat(perConeKg) || 0) * 1000)}g)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick ±40g / ±50g Cone Weight Adjustment Pills */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-[11px] text-zinc-500 mb-1.5">
                    <span className="font-semibold">Per-Cone Tolerance Presets (1 Kg ± 40g/50g)</span>
                    <span className="font-mono text-zinc-700 font-bold">
                      {((parseFloat(perConeKg) - 1) * 1000 >= 0 ? '+' : '') +
                        Math.round((parseFloat(perConeKg) - 1) * 1000)}g / cone
                    </span>
                  </div>
                  <div className="grid grid-cols-5 gap-1.5">
                    {CONE_WEIGHT_PRESETS.map((preset) => {
                      const isSelected =
                        !isManualWeightOverride &&
                        Math.abs(parseFloat(perConeKg) - preset.value) < 0.002;
                      return (
                        <button
                          key={preset.label}
                          type="button"
                          onClick={() => {
                            setPerConeKg(preset.value);
                            setIsManualWeightOverride(false);
                          }}
                          className={`py-1.5 px-2 rounded-lg border text-center transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-zinc-900 text-white border-zinc-900 font-bold shadow-2xs'
                              : 'bg-zinc-50 hover:bg-zinc-100 text-zinc-700 border-zinc-200/80'
                          }`}
                        >
                          <div className="text-[11px] font-bold leading-tight">{preset.label}</div>
                          <div className={`text-[9px] font-mono ${isSelected ? 'text-zinc-300' : 'text-zinc-400'}`}>
                            {preset.sub}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Resulting Net Weight & Liquor Volume Banner */}
                <div className="p-3.5 rounded-xl bg-zinc-950 text-white grid grid-cols-2 gap-4 items-center">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 block">
                      Total Net Yarn Weight
                    </span>
                    {isManualWeightOverride ? (
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <input
                          type="number"
                          step="0.1"
                          value={manualWeightKg}
                          onChange={(e) => setManualWeightKg(e.target.value)}
                          className="w-28 text-2xl font-black font-mono text-amber-400 bg-zinc-900 px-2 py-0.5 rounded border border-amber-400/50 focus:outline-none"
                        />
                        <span className="text-xs font-mono text-zinc-300">Kgs</span>
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-1.5 mt-0.5">
                        <span className="text-2xl font-black font-mono tracking-tight text-white">
                          {totalYarnWeightKg.toLocaleString('en-US', { maximumFractionDigits: 2 })}
                        </span>
                        <span className="text-xs font-mono text-zinc-400">Kgs</span>
                      </div>
                    )}
                    <span className="text-[10px] font-mono text-zinc-400 block mt-0.5">
                      {conesCount} Cones × {Number(perConeKg).toFixed(3)} kg
                    </span>
                  </div>

                  <div className="border-l border-zinc-800 pl-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                        Total Liquor (1:7)
                      </span>
                      <Droplet className="w-3.5 h-3.5 text-sky-400" />
                    </div>
                    <div className="flex items-baseline gap-1.5 mt-0.5">
                      <span className="text-2xl font-black font-mono tracking-tight text-sky-400">
                        {totalWaterLiters.toLocaleString('en-US', { maximumFractionDigits: 1 })}
                      </span>
                      <span className="text-xs font-mono text-zinc-400">Liters</span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 block mt-0.5">
                      {totalYarnWeightKg} kg × 7 Ratio
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 3: Batch & Floor Metadata */}
              <div className="bg-white rounded-2xl border border-zinc-200/90 shadow-2xs p-5">
                <div className="mb-3.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                    Step 03 • Batch Parameters
                  </span>
                  <h2 className="text-sm font-bold text-zinc-900">
                    Lot, Vessel & Shift Details
                  </h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-zinc-600 mb-1">
                      Lot Number
                    </label>
                    <input
                      type="text"
                      value={lotNo}
                      onChange={(e) => setLotNo(e.target.value)}
                      className="w-full px-3 py-2 text-xs font-mono font-bold bg-zinc-50 border border-zinc-200 rounded-xl focus:bg-white focus:outline-none focus:border-zinc-900"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-zinc-600 mb-1">
                      Machine / Vessel
                    </label>
                    <select
                      value={machineNo}
                      onChange={(e) => setMachineNo(e.target.value)}
                      className="w-full px-3 py-2 text-xs font-semibold bg-zinc-50 border border-zinc-200 rounded-xl focus:bg-white focus:outline-none focus:border-zinc-900"
                    >
                      <option value="Machine #1">Machine #1</option>
                      <option value="Machine #2">Machine #2</option>
                      <option value="Machine #3">Machine #3</option>
                      <option value="Machine #4">Machine #4</option>
                      <option value="Machine #5">Machine #5</option>
                      <option value="Machine #6">Machine #6</option>
                      <option value="Sample Vessel">Sample Vessel</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-zinc-600 mb-1">
                      Yarn Count / Size
                    </label>
                    <input
                      type="text"
                      value={yarnCount}
                      onChange={(e) => setYarnCount(e.target.value)}
                      className="w-full px-3 py-2 text-xs font-mono font-semibold bg-zinc-50 border border-zinc-200 rounded-xl focus:bg-white focus:outline-none focus:border-zinc-900"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-zinc-600 mb-1">
                      Shift
                    </label>
                    <select
                      value={shift}
                      onChange={(e) => setShift(e.target.value)}
                      className="w-full px-3 py-2 text-xs font-semibold bg-zinc-50 border border-zinc-200 rounded-xl focus:bg-white focus:outline-none focus:border-zinc-900"
                    >
                      <option value="Shift A">Shift A (Morning)</option>
                      <option value="Shift B">Shift B (Evening)</option>
                      <option value="Shift C">Shift C (Night)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-zinc-600 mb-1">
                      Customer / Program
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2 text-xs font-semibold bg-zinc-50 border border-zinc-200 rounded-xl focus:bg-white focus:outline-none focus:border-zinc-900"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-zinc-600 mb-1">
                      Requisition Date
                    </label>
                    <input
                      type="date"
                      value={slipDate}
                      onChange={(e) => setSlipDate(e.target.value)}
                      className="w-full px-3 py-2 text-xs font-mono bg-zinc-50 border border-zinc-200 rounded-xl focus:bg-white focus:outline-none focus:border-zinc-900"
                    />
                  </div>
                </div>
              </div>

              {/* Card 4: Recipe Customization & Workflow Status Simulator */}
              <div className="bg-white rounded-2xl border border-zinc-200/90 shadow-2xs p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                      Step 04 • Floor Controls
                    </span>
                    <h2 className="text-sm font-bold text-zinc-900">
                      Recipe Override & Approval Status
                    </h2>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={saveCurrentRecipeToMasterBook}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-semibold border bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100 transition-all cursor-pointer"
                    >
                      Save to Master Book
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditingPercentages(!isEditingPercentages)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition-all cursor-pointer ${
                        isEditingPercentages
                          ? 'bg-zinc-900 text-white border-zinc-900'
                          : 'bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100'
                      }`}
                    >
                      {isEditingPercentages ? 'Done Editing %' : 'Edit Recipe %'}
                    </button>

                    <button
                      type="button"
                      onClick={handleResetRecipe}
                      title="Reset to Standard Cabana Excel Recipe"
                      className="p-1.5 rounded-lg bg-zinc-50 hover:bg-zinc-100 text-zinc-600 border border-zinc-200 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {recipeErrorMessage && (
                  <div className="text-[11px] font-semibold text-red-600 bg-red-50 border border-red-200 rounded-lg px-2.5 py-2">
                    {recipeErrorMessage}
                  </div>
                )}

                {/* Add Extra Chemical Line */}
                {isEditingPercentages && (
                  <form onSubmit={handleAddCustomChemical} className="p-3 bg-zinc-50 rounded-xl border border-zinc-200/80 space-y-2">
                    <div className="text-[11px] font-bold text-zinc-700">Add Chemical / Dye to Slip</div>
                    <div className="grid grid-cols-12 gap-2">
                      <select
                        value={newItemSection}
                        onChange={(e) => setNewItemSection(e.target.value)}
                        className="col-span-4 px-2 py-1.5 text-[11px] font-semibold bg-white border border-zinc-200 rounded-lg"
                      >
                        <option value="pretreatment">Pretreatment</option>
                        <option value="dyes">Dyes</option>
                        <option value="auxiliaries">Auxiliaries</option>
                      </select>
                      <input
                        type="text"
                        placeholder="Chemical Name"
                        value={newItemName}
                        onChange={(e) => setNewItemName(e.target.value)}
                        className="col-span-5 px-2.5 py-1.5 text-[11px] font-mono bg-white border border-zinc-200 rounded-lg focus:outline-none focus:border-zinc-900"
                      />
                      <input
                        type="number"
                        step="0.001"
                        placeholder="%"
                        value={newItemPercent}
                        onChange={(e) => setNewItemPercent(e.target.value)}
                        className="col-span-3 px-2 py-1.5 text-[11px] font-mono bg-white border border-zinc-200 rounded-lg focus:outline-none focus:border-zinc-900"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-1.5 bg-zinc-900 hover:bg-zinc-800 text-white text-[11px] font-semibold rounded-lg flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add to Current Slip</span>
                    </button>
                  </form>
                )}

                {/* NEW: Dedicated 2nd Addition / Re-Production (Topping) Card with Enable Toggle */}
                <div className={`p-3.5 rounded-xl border transition-all space-y-2.5 ${
                  isSecondAdditionEnabled
                    ? 'bg-blue-50/50 border-blue-200/90'
                    : 'bg-zinc-50/70 border-zinc-200/80'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className={`w-3.5 h-3.5 ${isSecondAdditionEnabled ? 'text-blue-600' : 'text-zinc-400'}`} />
                      <span className="text-xs font-bold text-zinc-900">
                        2nd Addition / Re-Production (Topping)
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsSecondAdditionEnabled(!isSecondAdditionEnabled)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-all cursor-pointer flex items-center gap-1 ${
                        isSecondAdditionEnabled
                          ? 'bg-blue-600 text-white border-blue-600 shadow-2xs'
                          : 'bg-white text-zinc-600 border-zinc-300 hover:border-zinc-900 hover:text-zinc-900'
                      }`}
                    >
                      {isSecondAdditionEnabled ? (
                        <>
                          <Check className="w-3 h-3" />
                          <span>Enabled ({secondAdditionItems.length})</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3 h-3" />
                          <span>Enable 2nd Addition</span>
                        </>
                      )}
                    </button>
                  </div>

                  {isSecondAdditionEnabled && (
                    <>
                      <p className="text-[11px] text-zinc-500 leading-relaxed">
                        Add extra dyes or chemicals for shade correction / re-dyeing. Section will appear on the slip only when items are added:
                      </p>

                      <form onSubmit={handleAddSecondAddition} className="grid grid-cols-12 gap-1.5">
                        <select
                          value={secondAddType}
                          onChange={(e) => setSecondAddType(e.target.value)}
                          className="col-span-3 px-2 py-1.5 text-[11px] font-semibold bg-white border border-zinc-200 rounded-lg focus:outline-none focus:border-blue-600"
                        >
                          <option value="DYE">Dye</option>
                          <option value="CHEM">Chemical</option>
                        </select>
                        <input
                          type="text"
                          placeholder="Dye / Chemical Name..."
                          value={secondAddName}
                          onChange={(e) => setSecondAddName(e.target.value)}
                          className="col-span-5 px-2.5 py-1.5 text-[11px] font-mono bg-white border border-zinc-200 rounded-lg focus:outline-none focus:border-blue-600"
                        />
                        <input
                          type="number"
                          step="0.001"
                          placeholder="% Age"
                          value={secondAddPercent}
                          onChange={(e) => setSecondAddPercent(e.target.value)}
                          className="col-span-2 px-2 py-1.5 text-[11px] font-mono bg-white border border-zinc-200 rounded-lg focus:outline-none focus:border-blue-600"
                        />
                        <button
                          type="submit"
                          title="Add 2nd Addition Item"
                          className="col-span-2 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg flex items-center justify-center cursor-pointer transition-all"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </form>

                      {secondAdditionItems.length > 0 && (
                        <div className="space-y-1 pt-1">
                          {secondAdditionItems.map((item) => {
                            const calc = calculateChemicalWeight(item.percent);
                            return (
                              <div
                                key={item.id}
                                className="flex items-center justify-between bg-white px-2.5 py-1.5 rounded-lg border border-blue-200/80 text-[11px]"
                              >
                                <div className="flex items-center gap-1.5 truncate pr-2">
                                  <span className="px-1.5 py-0.5 text-[9px] font-mono font-bold bg-blue-100 text-blue-800 rounded">
                                    + {item.category}
                                  </span>
                                  <span className="font-bold text-zinc-900 truncate">{item.name}</span>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                  <input
                                    type="number"
                                    step="0.001"
                                    value={item.percent}
                                    onChange={(e) => handleUpdatePercent('secondAddition', item.id, e.target.value)}
                                    className="w-14 text-right font-mono font-bold bg-zinc-50 border border-zinc-300 rounded px-1 py-0.5"
                                  />
                                  <span className="font-mono text-zinc-500">%</span>
                                  <span className="font-mono font-bold text-blue-700">({calc.kgs} kg)</span>
                                  <button
                                    type="button"
                                    onClick={() => handleRemoveChemical('secondAddition', item.id)}
                                    className="text-red-500 hover:text-red-700 cursor-pointer"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* Workflow Signature Status Selector */}
                <div>
                  <label className="block text-[11px] font-semibold text-zinc-500 mb-1.5">
                    Slip Approval Stage (Preview Stamp)
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[
                      { id: 'GENERATED', label: '1. Generated', icon: FileText },
                      { id: 'SUPERVISOR_SIGNED', label: '2. Sup. Verified', icon: UserCheck },
                      { id: 'STORE_ISSUED', label: '3. Store Issued', icon: Warehouse }
                    ].map((st) => {
                      const Icon = st.icon;
                      const active = currentSlipStatus === st.id;
                      return (
                        <button
                          key={st.id}
                          type="button"
                          onClick={() => setCurrentSlipStatus(st.id)}
                          className={`py-2 px-2.5 rounded-xl border text-[11px] font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                            active
                              ? 'bg-zinc-950 text-white border-zinc-950 shadow-2xs'
                              : 'bg-zinc-50 text-zinc-600 border-zinc-200 hover:bg-zinc-100'
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                          <span className="truncate">{st.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL: OFFICIAL 1-PAGE PRINTABLE STORE REQUISITION SLIP (7 Cols) */}
            <div className="lg:col-span-7 print-slip-col">
              <div
                className="bg-white rounded-2xl border border-zinc-300/90 shadow-sm p-5 sm:p-6 print-only-slip"
              >
                
                {/* SLIP TOP HEADER WITH DYEBRIDGE BRAND LOGO (Compact for 1-Page A4) */}
                <div className="border-b-2 border-zinc-950 pb-2.5 mb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <DyeBridgeLogoIcon className="w-9 h-9 shrink-0 rounded-xl" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-black tracking-tight text-sm text-zinc-950">
                          Dye<span className="text-blue-600">Bridge</span>
                        </span>
                        <span className="px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase tracking-widest bg-zinc-950 text-white rounded">
                          UTOPIA INDUSTRIES
                        </span>
                        <span className="text-[9px] font-mono font-semibold text-zinc-500">
                          YARN DYEING DEPT
                        </span>
                      </div>
                      <h1 className="text-sm sm:text-base font-black tracking-tight text-zinc-950 uppercase leading-tight">
                        YARN DYEING — CHEMICAL & DYE STORE REQUISITION SLIP
                      </h1>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-end justify-between text-right shrink-0">
                    <div className="border border-zinc-900 rounded px-2.5 py-0.5 bg-zinc-50">
                      <span className="text-[8px] font-mono uppercase tracking-wider text-zinc-500 block">
                        Slip Reference
                      </span>
                      <span className="text-xs font-mono font-black text-zinc-950">
                        UT-YD-{slipIdCounter}
                      </span>
                    </div>
                    <div className="text-[10px] font-mono text-zinc-600 mt-0.5">
                      Date: <strong className="text-zinc-950">{slipDate}</strong> • {shift}
                    </div>
                  </div>
                </div>

                {/* SLIP METADATA GRID (Compact 1-Page Layout) */}
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-px bg-zinc-300 border border-zinc-900 rounded-md overflow-hidden mb-3 text-[11px]">
                  <div className="bg-white p-1.5 col-span-2">
                    <span className="text-[9px] font-bold uppercase text-zinc-400 block">Color / Shade</span>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full border border-black/20 shrink-0"
                        style={{ backgroundColor: activeMaster.colorHex }}
                      />
                      <span className="font-black text-zinc-950 text-xs tracking-tight truncate">
                        {activeMaster.name}
                      </span>
                    </div>
                  </div>

                  <div className="bg-white p-1.5">
                    <span className="text-[9px] font-bold uppercase text-zinc-400 block">Customer</span>
                    <span className="font-bold text-zinc-900 text-xs block mt-0.5 truncate">{customerName}</span>
                  </div>

                  <div className="bg-white p-1.5">
                    <span className="text-[9px] font-bold uppercase text-zinc-400 block">Lot No.</span>
                    <span className="font-mono font-black text-zinc-950 text-xs block mt-0.5">{lotNo}</span>
                  </div>

                  <div className="bg-white p-1.5">
                    <span className="text-[9px] font-bold uppercase text-zinc-400 block">Machine</span>
                    <span className="font-bold text-zinc-950 text-xs block mt-0.5 truncate">{machineNo}</span>
                  </div>

                  <div className="bg-zinc-50/70 p-1.5">
                    <span className="text-[9px] font-bold uppercase text-zinc-400 block">Count</span>
                    <span className="font-mono font-bold text-zinc-900 text-xs block mt-0.5">{yarnCount}</span>
                  </div>

                  <div className="bg-zinc-100 p-1.5">
                    <span className="text-[9px] font-bold uppercase text-zinc-500 block">Net Wt (Kgs)</span>
                    <span className="font-mono font-black text-zinc-950 text-xs block mt-0.5">
                      {totalYarnWeightKg} Kg <span className="text-[9px] font-normal">({conesCount}c)</span>
                    </span>
                  </div>

                  <div className="bg-zinc-100 p-1.5">
                    <span className="text-[9px] font-bold uppercase text-zinc-500 block">Water (1:7)</span>
                    <span className="font-mono font-black text-zinc-950 text-xs block mt-0.5">
                      {totalWaterLiters} L
                    </span>
                  </div>
                </div>

                {/* CHEMICALS & DYES REQUISITION TABLES (Compact & Smartly Filtered for 1-Page Fit) */}
                <div className="space-y-2.5">
                  
                  {/* SECTION 1: PRETREATMENT CHEMICALS (Only shown if items > 0%) */}
                  {activePretreatmentItems.length > 0 && (
                    <div>
                      <div className="bg-zinc-900 text-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider flex items-center justify-between rounded-t">
                        <span>{visibleSlipSections.ptNum}. Pretreatment Chemicals</span>
                        <span className="font-mono text-[10px] text-zinc-300">
                          Sub-Total: {batchSummaryTotals.ptTotalKg} Kgs
                        </span>
                      </div>
                      <table className="w-full text-left border-collapse border border-t-0 border-zinc-900 text-[11px]">
                        <thead>
                          <tr className="bg-zinc-100 text-zinc-800 border-b border-zinc-400 font-bold text-[10px]">
                            <th className="py-1 px-2 border-r border-zinc-300 w-7 text-center">S#</th>
                            <th className="py-1 px-2 border-r border-zinc-300">Pretreatment Chemical Name</th>
                            <th className="py-1 px-2 border-r border-zinc-300 text-right w-16">% Age</th>
                            <th className="py-1 px-2 border-r border-zinc-300 text-right w-24">Weight (Kgs)</th>
                            <th className="py-1 px-2 border-r border-zinc-300 text-right w-24">In Grams (g)</th>
                            <th className="py-1 px-1.5 text-center w-16">Check</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-300">
                          {activePretreatmentItems.map((item, idx) => {
                            const calc = calculateChemicalWeight(item.percent);
                            return (
                              <tr key={item.id} className="hover:bg-zinc-50">
                                <td className="py-1 px-2 border-r border-zinc-300 text-center font-mono text-[10px] text-zinc-500">
                                  {idx + 1}
                                </td>
                                <td className="py-1 px-2 border-r border-zinc-300 font-bold text-zinc-900">
                                  {item.name}
                                </td>
                                <td className="py-1 px-2 border-r border-zinc-300 text-right font-mono">
                                  {isEditingPercentages ? (
                                    <input
                                      type="number"
                                      step="0.01"
                                      value={item.percent}
                                      onChange={(e) => handleUpdatePercent('pretreatment', item.id, e.target.value)}
                                      className="w-14 text-right font-mono font-bold bg-amber-50 border border-amber-400 rounded px-1"
                                    />
                                  ) : (
                                    <span>{item.percent}%</span>
                                  )}
                                </td>
                                <td className="py-1 px-2 border-r border-zinc-300 text-right font-mono font-black text-zinc-950">
                                  {calc.kgs} kg
                                </td>
                                <td className="py-1 px-2 border-r border-zinc-300 text-right font-mono text-zinc-700 bg-zinc-50/80">
                                  {calc.grams} g
                                </td>
                                <td className="py-1 px-1.5 text-center">
                                  {isEditingPercentages ? (
                                    <button
                                      type="button"
                                      onClick={() => handleRemoveChemical('pretreatment', item.id)}
                                      className="text-red-500 hover:text-red-700 no-print"
                                    >
                                      <Trash2 className="w-3 h-3 mx-auto" />
                                    </button>
                                  ) : (
                                    <span className="inline-block w-3 h-3 border border-zinc-500 rounded-xs" />
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* SECTION 2: REACTIVE DYES (Hidden automatically if 0 dyes, e.g., WHITE shade) */}
                  {activeDyeItems.length > 0 && (
                    <div>
                      <div className="bg-zinc-900 text-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider flex items-center justify-between rounded-t">
                        <span>{visibleSlipSections.dyeNum}. Reactive Dyes (1st Addition — Color Kitchen)</span>
                        <span className="font-mono text-[10px] text-zinc-300">
                          Sub-Total: {batchSummaryTotals.dyeTotalKg} Kgs ({batchSummaryTotals.dyeTotalGrams} g)
                        </span>
                      </div>
                      <table className="w-full text-left border-collapse border border-t-0 border-zinc-900 text-[11px]">
                        <thead>
                          <tr className="bg-zinc-100 text-zinc-800 border-b border-zinc-400 font-bold text-[10px]">
                            <th className="py-1 px-2 border-r border-zinc-300 w-7 text-center">S#</th>
                            <th className="py-1 px-2 border-r border-zinc-300">Reactive Dye Name</th>
                            <th className="py-1 px-2 border-r border-zinc-300 text-right w-16">% Age</th>
                            <th className="py-1 px-2 border-r border-zinc-300 text-right w-24">Weight (Kgs)</th>
                            <th className="py-1 px-2 border-r border-zinc-300 text-right w-24">In Grams (g)</th>
                            <th className="py-1 px-1.5 text-center w-16">Check</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-300">
                          {activeDyeItems.map((item, idx) => {
                            const calc = calculateChemicalWeight(item.percent);
                            return (
                              <tr key={item.id} className="hover:bg-zinc-50">
                                <td className="py-1 px-2 border-r border-zinc-300 text-center font-mono text-[10px] text-zinc-500">
                                  {idx + 1}
                                </td>
                                <td className="py-1 px-2 border-r border-zinc-300 font-black text-zinc-950">
                                  {item.name}
                                </td>
                                <td className="py-1 px-2 border-r border-zinc-300 text-right font-mono">
                                  {isEditingPercentages ? (
                                    <input
                                      type="number"
                                      step="0.001"
                                      value={item.percent}
                                      onChange={(e) => handleUpdatePercent('dyes', item.id, e.target.value)}
                                      className="w-14 text-right font-mono font-bold bg-amber-50 border border-amber-400 rounded px-1"
                                    />
                                  ) : (
                                    <span>{item.percent}%</span>
                                  )}
                                </td>
                                <td className="py-1 px-2 border-r border-zinc-300 text-right font-mono font-black text-zinc-950">
                                  {calc.kgs} kg
                                </td>
                                <td className="py-1 px-2 border-r border-zinc-300 text-right font-mono font-bold text-zinc-950 bg-zinc-100/90">
                                  {calc.grams} g
                                </td>
                                <td className="py-1 px-1.5 text-center">
                                  {isEditingPercentages ? (
                                    <button
                                      type="button"
                                      onClick={() => handleRemoveChemical('dyes', item.id)}
                                      className="text-red-500 hover:text-red-700 no-print"
                                    >
                                      <Trash2 className="w-3 h-3 mx-auto" />
                                    </button>
                                  ) : (
                                    <span className="inline-block w-3 h-3 border border-zinc-500 rounded-xs" />
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* SECTION 3: DYEING AUXILIARIES, SALT & SODA (Hidden automatically if 0 items) */}
                  {activeAuxiliaryItems.length > 0 && (
                    <div>
                      <div className="bg-zinc-900 text-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider flex items-center justify-between rounded-t">
                        <span>{visibleSlipSections.auxNum}. Dyeing Auxiliaries, Salt & Soda</span>
                        <span className="font-mono text-[10px] text-zinc-300">
                          Sub-Total: {batchSummaryTotals.auxTotalKg} Kgs
                        </span>
                      </div>
                      <table className="w-full text-left border-collapse border border-t-0 border-zinc-900 text-[11px]">
                        <thead>
                          <tr className="bg-zinc-100 text-zinc-800 border-b border-zinc-400 font-bold text-[10px]">
                            <th className="py-1 px-2 border-r border-zinc-300 w-7 text-center">S#</th>
                            <th className="py-1 px-2 border-r border-zinc-300">Dyeing Auxiliary Name</th>
                            <th className="py-1 px-2 border-r border-zinc-300 text-right w-16">% Age</th>
                            <th className="py-1 px-2 border-r border-zinc-300 text-right w-24">Weight (Kgs)</th>
                            <th className="py-1 px-2 border-r border-zinc-300 text-right w-24">In Grams (g)</th>
                            <th className="py-1 px-1.5 text-center w-16">Check</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-300">
                          {activeAuxiliaryItems.map((item, idx) => {
                            const calc = calculateChemicalWeight(item.percent);
                            return (
                              <tr key={item.id} className="hover:bg-zinc-50">
                                <td className="py-1 px-2 border-r border-zinc-300 text-center font-mono text-[10px] text-zinc-500">
                                  {idx + 1}
                                </td>
                                <td className="py-1 px-2 border-r border-zinc-300 font-bold text-zinc-900">
                                  {item.name}
                                </td>
                                <td className="py-1 px-2 border-r border-zinc-300 text-right font-mono">
                                  {isEditingPercentages ? (
                                    <input
                                      type="number"
                                      step="0.1"
                                      value={item.percent}
                                      onChange={(e) => handleUpdatePercent('auxiliaries', item.id, e.target.value)}
                                      className="w-14 text-right font-mono font-bold bg-amber-50 border border-amber-400 rounded px-1"
                                    />
                                  ) : (
                                    <span>{item.percent}%</span>
                                  )}
                                </td>
                                <td className="py-1 px-2 border-r border-zinc-300 text-right font-mono font-black text-zinc-950">
                                  {calc.kgs} kg
                                </td>
                                <td className="py-1 px-2 border-r border-zinc-300 text-right font-mono text-zinc-700 bg-zinc-50/80">
                                  {calc.grams} g
                                </td>
                                <td className="py-1 px-1.5 text-center">
                                  {isEditingPercentages ? (
                                    <button
                                      type="button"
                                      onClick={() => handleRemoveChemical('auxiliaries', item.id)}
                                      className="text-red-500 hover:text-red-700 no-print"
                                    >
                                      <Trash2 className="w-3 h-3 mx-auto" />
                                    </button>
                                  ) : (
                                    <span className="inline-block w-3 h-3 border border-zinc-500 rounded-xs" />
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* SECTION 4: 2ND ADDITION / RE-PRODUCTION (Only rendered when enabled & items added) */}
                  {activeSecondAdditionItems.length > 0 && (
                    <div>
                      <div className="bg-blue-950 text-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider flex items-center justify-between rounded-t">
                        <span>{visibleSlipSections.secAddNum}. 2nd Addition / Re-Production (+ Topping Dyes & Chemicals)</span>
                        <span className="font-mono text-[10px] text-blue-200">
                          2nd Add Sub-Total: {batchSummaryTotals.secAddTotalKg} Kgs ({batchSummaryTotals.secAddTotalGrams} g)
                        </span>
                      </div>
                      <table className="w-full text-left border-collapse border border-t-0 border-zinc-900 text-[11px]">
                        <thead>
                          <tr className="bg-blue-50/60 text-zinc-800 border-b border-zinc-400 font-bold text-[10px]">
                            <th className="py-1 px-2 border-r border-zinc-300 w-7 text-center">+</th>
                            <th className="py-1 px-2 border-r border-zinc-300">2nd Addition Item Name</th>
                            <th className="py-1 px-2 border-r border-zinc-300 text-right w-16">% Age</th>
                            <th className="py-1 px-2 border-r border-zinc-300 text-right w-24">Weight (Kgs)</th>
                            <th className="py-1 px-2 border-r border-zinc-300 text-right w-24">In Grams (g)</th>
                            <th className="py-1 px-1.5 text-center w-16">Check</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-300">
                          {activeSecondAdditionItems.map((item, idx) => {
                            const calc = calculateChemicalWeight(item.percent);
                            return (
                              <tr key={item.id} className="bg-blue-50/20 hover:bg-blue-50/40">
                                <td className="py-1 px-2 border-r border-zinc-300 text-center font-mono font-bold text-[10px] text-blue-700">
                                  +{idx + 1}
                                </td>
                                <td className="py-1 px-2 border-r border-zinc-300 font-black text-zinc-950">
                                  <span className="text-[9px] font-mono px-1 py-0.5 rounded bg-zinc-200 text-zinc-800 mr-1.5">
                                    {item.category}
                                  </span>
                                  {item.name}
                                </td>
                                <td className="py-1 px-2 border-r border-zinc-300 text-right font-mono font-bold text-blue-900">
                                  +{item.percent}%
                                </td>
                                <td className="py-1 px-2 border-r border-zinc-300 text-right font-mono font-black text-zinc-950">
                                  {calc.kgs} kg
                                </td>
                                <td className="py-1 px-2 border-r border-zinc-300 text-right font-mono font-bold text-zinc-950 bg-blue-50/50">
                                  {calc.grams} g
                                </td>
                                <td className="py-1 px-1.5 text-center">
                                  <span className="inline-block w-3 h-3 border border-zinc-500 rounded-xs" />
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                {/* =================================================================
                    PHYSICAL SIGNATURE & STAMP AUTHORIZATION BLOCK (COMPACT 1-PAGE)
                   ================================================================= */}
                <div className="mt-3.5 pt-2.5 border-t-2 border-zinc-950">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500">
                      Physical Authorization & Store Dispensing Signatures
                    </span>
                    <span className="text-[9px] font-mono text-zinc-500">
                      Status: <strong className="text-zinc-900 uppercase">{currentSlipStatus.replace('_', ' ')}</strong>
                    </span>
                  </div>

                  <div className="grid grid-cols-4 gap-3">
                    {/* 1. Prepared By (Executive Assistant) */}
                    <div className="border border-zinc-300 rounded-md p-2 bg-zinc-50/40 flex flex-col justify-between min-h-[78px]">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-bold uppercase text-zinc-600">
                          1. Prepared By
                        </span>
                        <CheckCircle2 className="w-3 h-3 text-zinc-900" />
                      </div>

                      <div className="my-1 text-center">
                        <div className="text-[10px] font-bold text-zinc-900">
                          Executive Assistant
                        </div>
                      </div>

                      <div>
                        <div className="border-b-2 border-dashed border-zinc-600 w-full mb-1" />
                        <div className="text-[8px] font-bold uppercase tracking-wider text-zinc-500 text-center">
                          Assistant Sign
                        </div>
                      </div>
                    </div>

                    {/* 2. Verified & Approved By (Shift Supervisor) — PROMINENT DASHED LINE */}
                    <div className={`border rounded-md p-2 flex flex-col justify-between min-h-[78px] ${
                      currentSlipStatus === 'SUPERVISOR_SIGNED' || currentSlipStatus === 'STORE_ISSUED'
                        ? 'border-blue-400 bg-blue-50/20'
                        : 'border-zinc-400 bg-white'
                    }`}>
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-bold uppercase text-zinc-800">
                          2. Approved By
                        </span>
                        <ShieldCheck className="w-3 h-3 text-zinc-700" />
                      </div>

                      <div className="my-1 text-center">
                        {currentSlipStatus === 'SUPERVISOR_SIGNED' || currentSlipStatus === 'STORE_ISSUED' ? (
                          <span className="inline-block text-[9px] font-mono font-bold text-blue-800 bg-blue-100/80 px-1.5 py-0.5 rounded border border-blue-300">
                            APPROVED
                          </span>
                        ) : (
                          <span className="text-[9px] text-zinc-400 italic block">
                            Supervisor Sign
                          </span>
                        )}
                      </div>

                      <div>
                        <div className="border-b-2 border-dashed border-zinc-800 w-full mb-1" />
                        <div className="text-[8px] font-black uppercase tracking-wider text-zinc-800 text-center">
                          Dyeing Supervisor Sign
                        </div>
                      </div>
                    </div>

                    {/* 3. Chemical Store Keeper (Issued & Weighed) — PROMINENT DASHED LINE */}
                    <div className={`border rounded-md p-2 flex flex-col justify-between min-h-[78px] ${
                      currentSlipStatus === 'STORE_ISSUED'
                        ? 'border-emerald-400 bg-emerald-50/20'
                        : 'border-zinc-400 bg-white'
                    }`}>
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-bold uppercase text-zinc-800">
                          3. Store Issued By
                        </span>
                        <Warehouse className="w-3 h-3 text-zinc-700" />
                      </div>

                      <div className="my-1 text-center">
                        {currentSlipStatus === 'STORE_ISSUED' ? (
                          <span className="inline-block text-[9px] font-mono font-bold text-emerald-800 bg-emerald-100/80 px-1.5 py-0.5 rounded border border-emerald-300">
                            DISPENSED
                          </span>
                        ) : (
                          <span className="text-[9px] text-zinc-400 italic block">
                            Store Stamp & Sign
                          </span>
                        )}
                      </div>

                      <div>
                        <div className="border-b-2 border-dashed border-zinc-800 w-full mb-1" />
                        <div className="text-[8px] font-black uppercase tracking-wider text-zinc-800 text-center">
                          Store Incharge Sign
                        </div>
                      </div>
                    </div>

                    {/* 4. Received By (Vessel Operator) */}
                    <div className="border border-zinc-300 rounded-md p-2 bg-zinc-50/40 flex flex-col justify-between min-h-[78px]">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-bold uppercase text-zinc-600">
                          4. Received By
                        </span>
                        <Package className="w-3 h-3 text-zinc-500" />
                      </div>

                      <div className="my-1 text-center">
                        <span className="text-[9px] text-zinc-400 italic block">
                          Operator Sign
                        </span>
                      </div>

                      <div>
                        <div className="border-b-2 border-dashed border-zinc-600 w-full mb-1" />
                        <div className="text-[8px] font-bold uppercase tracking-wider text-zinc-500 text-center">
                          Machine Operator Sign
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SLIP FOOTER */}
                <div className="mt-2.5 pt-1.5 border-t border-zinc-200 flex flex-wrap items-center justify-between text-[9px] font-mono text-zinc-400">
                  <span>UTOPIA INDUSTRIES • DYEBRIDGE OS (CABANA 100% COTTON)</span>
                  <span>L:R 1:7 STANDARD • OFFICIAL STORE REQUISITION</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==========================================
            TAB 2: CABANA MASTER RECIPE BOOK (ALL 7 SHADES)
           ========================================== */}
        {activeTab === 'recipes' && (
          <div className="space-y-6 no-print">
            <div className="bg-white rounded-2xl border border-zinc-200/90 p-5 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                  Master Formulation Database
                </span>
                <h2 className="text-lg font-bold text-zinc-950">
                  Cabana 100% Cotton — Official Master Recipe Book
                </h2>
                <p className="text-xs text-zinc-500">
                  Exact percentages calibrated from Cabana All Recipes.xlsx (Pretreatment, Reactive Dyes & Auxiliaries)
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-xl bg-zinc-100 border border-zinc-200 text-xs font-mono font-semibold text-zinc-800">
                  {Object.keys(masterRecipes).length} Active Shades
                </span>
                <button
                  type="button"
                  onClick={handleCreateNewRecipe}
                  className="px-3 py-1.5 rounded-xl bg-zinc-950 text-white border border-zinc-900 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Recipe</span>
                </button>
              </div>
            </div>

            {recipeErrorMessage && (
              <div className="text-xs font-semibold text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2">
                {recipeErrorMessage}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {Object.keys(masterRecipes).map((key) => {
                const recipe = masterRecipes[key];
                return (
                  <div
                    key={key}
                    className="bg-white rounded-2xl border border-zinc-200/90 shadow-2xs overflow-hidden flex flex-col justify-between hover:border-zinc-400 transition-all"
                  >
                    <div>
                      <div className="p-4 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/60">
                        <div className="flex items-center gap-2.5">
                          <span
                            className="w-5 h-5 rounded-full border border-black/15 shadow-xs"
                            style={{ backgroundColor: recipe.colorHex }}
                          />
                          <div>
                            <h3 className="text-sm font-black text-zinc-950">{recipe.fullName}</h3>
                            <span className="text-[11px] font-mono text-zinc-500">
                              Ref Lot: {recipe.defaultLot} • {recipe.defaultCount} • {recipe.defaultMachine}
                            </span>
                          </div>
                        </div>
                        <span className="text-xs font-mono font-bold bg-white px-2 py-0.5 rounded border border-zinc-200">
                          {recipe.defaultCones} kg
                        </span>
                      </div>

                      <div className="p-4 space-y-3 text-xs">
                        {/* Pretreatment */}
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                            Pretreatment ({recipe.pretreatment.length})
                          </div>
                          <div className="space-y-1">
                            {recipe.pretreatment.map((item) => (
                              <div key={item.id} className="flex justify-between text-[11px] bg-zinc-50 px-2 py-1 rounded">
                                <span className="font-medium text-zinc-700 truncate mr-2">{item.name}</span>
                                <span className="font-mono font-bold text-zinc-900">{item.percent}%</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Dyes */}
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-1">
                            Reactive Dyes ({recipe.dyes.length})
                          </div>
                          {recipe.dyes.length > 0 ? (
                            <div className="space-y-1">
                              {recipe.dyes.map((item) => (
                                <div key={item.id} className="flex justify-between text-[11px] bg-blue-50/50 border border-blue-100 px-2 py-1 rounded">
                                  <span className="font-bold text-zinc-900 truncate mr-2">{item.name}</span>
                                  <span className="font-mono font-black text-blue-700">{item.percent}%</span>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="text-[11px] text-zinc-400 italic">No Dyes (Full White Bleach)</div>
                          )}
                        </div>

                        {/* Auxiliaries */}
                        {recipe.auxiliaries.length > 0 && (
                          <div>
                            <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 mb-1">
                              Auxiliaries ({recipe.auxiliaries.length})
                            </div>
                            <div className="space-y-1">
                              {recipe.auxiliaries.map((item) => (
                                <div key={item.id} className="flex justify-between text-[11px] bg-zinc-50 px-2 py-1 rounded">
                                  <span className="font-medium text-zinc-700 truncate mr-2">{item.name}</span>
                                  <span className="font-mono font-bold text-zinc-900">{item.percent}%</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="p-3.5 bg-zinc-50 border-t border-zinc-100 space-y-2">
                      <button
                        type="button"
                        onClick={() => {
                          handleSelectShade(key, true);
                          setActiveTab('workspace');
                        }}
                        className="w-full py-2 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                      >
                        <span>Load {recipe.name} into Calculator</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            handleSelectShade(key, true);
                            setActiveTab('workspace');
                          }}
                          className="py-1.5 rounded-lg bg-white hover:bg-zinc-100 text-zinc-800 text-[11px] font-semibold border border-zinc-200 cursor-pointer"
                        >
                          Edit in Workspace
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteRecipe(key)}
                          className="py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 text-[11px] font-semibold border border-red-200 flex items-center justify-center gap-1 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Delete</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ==========================================
            TAB 3: REQUISITION LOGS
           ========================================== */}
        {activeTab === 'logs' && (
          <div className="bg-white rounded-2xl border border-zinc-200/90 shadow-2xs overflow-hidden no-print">
            <div className="p-5 border-b border-zinc-200 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-base font-bold text-zinc-950">
                  Issued Store Requisition Slips Log
                </h2>
                <p className="text-xs text-zinc-500">
                  Historical batches generated by Executive Assistant for Supervisor & Chemical Store
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setEditingSlipNo(null);
                  setActiveTab('workspace');
                }}
                className="px-3.5 py-2 rounded-xl bg-zinc-950 text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>New Batch Slip</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-zinc-50 text-zinc-600 border-b border-zinc-200 font-bold uppercase text-[11px]">
                  <tr>
                    <th className="py-3 px-4">Slip No</th>
                    <th className="py-3 px-4">Date / Shift</th>
                    <th className="py-3 px-4">Shade</th>
                    <th className="py-3 px-4">Lot & Machine</th>
                    <th className="py-3 px-4 text-right">Cones</th>
                    <th className="py-3 px-4 text-right">Net Weight</th>
                    <th className="py-3 px-4 text-right">Liquor (1:7)</th>
                    <th className="py-3 px-4 text-center">Status</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200/70">
                  {savedLogs.map((log, i) => {
                    const shadeObj = masterRecipes[log.shade];
                    return (
                      <tr key={i} className="hover:bg-zinc-50/80">
                        <td className="py-3 px-4 font-mono font-bold text-zinc-950">{log.slipNo}</td>
                        <td className="py-3 px-4 text-zinc-600">
                          <div>{log.date}</div>
                          <div className="text-[10px] text-zinc-400">{log.shift}</div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <span
                              className="w-3 h-3 rounded-full border border-black/15"
                              style={{ backgroundColor: shadeObj?.colorHex }}
                            />
                            <span className="font-bold text-zinc-900">{log.shade}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 font-mono">
                          <div className="font-bold text-zinc-900">Lot #{log.lotNo}</div>
                          <div className="text-[11px] text-zinc-500">{log.machineNo} • {log.yarnCount}</div>
                        </td>
                        <td className="py-3 px-4 text-right font-mono font-semibold text-zinc-800">
                          {log.cones} pcs
                        </td>
                        <td className="py-3 px-4 text-right font-mono font-black text-zinc-950">
                          {log.totalWeightKg} Kgs
                        </td>
                        <td className="py-3 px-4 text-right font-mono text-sky-700 font-semibold">
                          {log.waterLiters} L
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase border ${
                            log.status === 'STORE_ISSUED'
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                              : log.status === 'SUPERVISOR_SIGNED'
                              ? 'bg-blue-50 text-blue-700 border-blue-200'
                              : 'bg-zinc-100 text-zinc-700 border-zinc-300'
                          }`}>
                            {log.status.replace('_', ' ')}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <div className="inline-flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={() => {
                                handleSelectShade(log.shade, false);
                                setConesCount(log.cones);
                                setPerConeKg(log.perConeKg);
                                setLotNo(log.lotNo);
                                setMachineNo(log.machineNo);
                                setYarnCount(log.yarnCount);
                                setCurrentSlipStatus(log.status);
                                setSlipDate(log.date);
                                setShift(log.shift);
                                setEditingSlipNo(null);
                                setActiveTab('workspace');
                              }}
                              className="px-2.5 py-1 rounded-lg bg-zinc-100 hover:bg-zinc-900 hover:text-white text-zinc-800 font-semibold text-[11px] transition-all cursor-pointer"
                            >
                              Load
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                handleSelectShade(log.shade, false);
                                setConesCount(log.cones);
                                setPerConeKg(log.perConeKg);
                                setLotNo(log.lotNo);
                                setMachineNo(log.machineNo);
                                setYarnCount(log.yarnCount);
                                setCurrentSlipStatus(log.status);
                                setSlipDate(log.date);
                                setShift(log.shift);
                                setEditingSlipNo(log.slipNo);
                                setActiveTab('workspace');
                              }}
                              className="px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold text-[11px] transition-all cursor-pointer border border-blue-200"
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDeleteIssuedSlip(log.slipNo)}
                              className="px-2.5 py-1 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 font-semibold text-[11px] transition-all cursor-pointer border border-red-200"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
