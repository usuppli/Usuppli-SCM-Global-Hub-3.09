// src/types.tsx

// ==========================================
// CORE APP TYPES
// ==========================================

export type UserRole = 'super_admin' | 'admin' | 'editor' | 'viewer';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  department?: string;
  password?: string;
  lastActive?: string;
}

export type TabType = 
  | 'DASHBOARD' 
  | 'PRODUCT_CATALOG' 
  | 'PRODUCT_WORKSPACE'
  | 'FACTORY_MASTER'
  | 'ORDER_MANAGER' 
  | 'PRODUCTION_FLOOR' 
  | 'LOGISTICS_TOWER' 
  | 'CRM' 
  | 'ADMIN'
  | 'EXCHANGE'
  | 'TEAM_CHAT'
  | 'AI_STRATEGIST';

export type Language = 'en' | 'zh-Hans' | 'zh-Hant';

// ==========================================
// TRANSLATION INTERFACES
// ==========================================

export interface CommonTranslations {
  save: string;
  cancel: string;
  edit: string;
  delete: string;
  refresh: string;
  share: string;
  clickToEdit: string;
  copied: string;
  search: string;
  loading: string;
  actions: string;
  view: string;
  export: string;
  print: string;
  submit: string;
  next: string;
  back: string;
  finish: string;
  command: string;
  close: string;
  status: string;
  date: string;
  user: string;
  page: string;
  file: string;
  action: string;
  select: string;
  navigate: string;
  noResults: string;
  noResultsDesc: string;
  searchPlaceholder: string;
  recent: string;
  navigation: string;
  notifications: string;
  settings: string;
  profile: string;
  logout: string;
  error: string;
}

export interface NavTranslations {
  dashboard: string;
  productCatalog: string;
  productWorkspace: string;
  factoryMaster: string;
  production: string;
  shopFloor: string;
  logistics: string;
  crm: string;
  collaboration: string;
  teamChat: string;
  admin: string;
  newProduct: string;
  analytics: string;
  sourcing: string;
  executionGroup: string;
  system: string;
  aiStrategist: string;
  calendar: string;
  hub: string;
  exchange: string;
}

export interface PreferencesTranslations {
  title: string;
  security: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  changePassword: string;
  accountType: string;
  roles: {
    viewer: string;
    editor: string;
    admin: string;
    super_admin: string;
    customer: string;
  };
  roleHint: string;
}

export interface PrintTranslations {
  common: {
    billTo: string;
    shipTo: string;
    contact: string;
    email: string;
    phone: string;
    date: string;
    page: string;
    authorizedSig: string;
    generatedBy: string;
    terms: string;
  };
  order: {
    title: string;
    poNumber: string;
    vendor: string;
    deliveryDate: string;
    incoterms: string;
    item: string;
    description: string;
    qty: string;
    unitPrice: string;
    total: string;
    subtotal: string;
    tax: string;
    shipping: string;
    grandTotal: string;
    notes: string;
  };
  sample: {
    title: string;
    requestId: string;
    factory: string;
    courier: string;
    tracking: string;
    estCost: string;
    details: string;
  };
  shipment: {
    title: string;
    refId: string;
    carrier: string;
    method: string;
    origin: string;
    destination: string;
    eta: string;
    manifest: string;
  };
  customer: {
    title: string;
    profile: string;
    internalId: string;
    region: string;
    accountOwner: string;
    activeOrders: string;
    totalValue: string;
  };
}

export interface WidgetTranslations {
  clock: {
    title: string;
    localTime: string;
    businessHours: string;
    open: string;
    closed: string;
    timeZone: string;
  };
  exchange: {
    title: string;
    base: string;
    target: string;
    rate: string;
  };
}

export interface AdminTranslations {
  title: string;
  subtitle: string;
  accessDenied: string;
  accessDeniedDesc: string;
  deleteAccount: string;
  deleteConfirm: string;
  timeSync: string;
  tabs: {
    system: string;
    users: string;
    backup: string;
    audit: string;
    preferences: string;
  };
  system: {
    dbStatus: string;
    connected: string;
    version: string;
    matrix: string;
  };
  users: {
    registerIdentity: string;
    title: string;
  };
  backup: {
    jsonTitle: string;
    jsonDesc: string;
    generate: string;
    restoreDB: string;
    upload: string;
  };
  audit: {
    exportCSV: string;
    logTitle: string;
  };
}

export interface ChatTranslations {
  title: string;
  channels: string;
  directMessages: string;
  typing: string;
  online: string;
  offline: string;
  shareVia: string;
  recording: string;
  cancel: string;
  typeMessage: string;
  deleteMsg: string;
  teamGeneral: string;
  copied: string;
}

export interface CrmTranslations {
  title: string;
  subtitle: string;
  search: string;
  addCustomer: string;
  accountActive: string;
}

export interface CalendarTranslations {
  title: string;
  subtitle: string;
  addEvent: string;
  addPlan: string;
  calculator: string;
  eta: string;
  totalDays: string;
  start: string;
  end: string;
  region: string;
  calculationFor: string;
  selectItem: string;
  select: string;
  quantity: string;
  destination: string;
  enterCity: string;
  breakdown: string;
  production: string;
  qualityCheck: string;
  shipping: string;
  customs: string;
  typeJob: string;
  typeSample: string;
  typeProduct: string;
  eventTitle: string;
  type: string;
  severity: string;
  linkRecord: string;
  saveEvent: string;
  startDate?: string;
  endDate?: string;
  description?: string;
  types?: {
    production: string;
    logistics: string;
    compliance: string;
    holiday: string;
    other: string;
  };
}

export interface HubTranslations {
  title: string;
  subtitle: string;
  newThread: string;
  startNewThread: string;
  topic: string;
  message: string;
  selectCustomer: string;
  startConversation: string;
  initialMessage: string;
  pinThread: string;
  unpinThread: string;
  clearHistory: string;
  participants: string;
  linkType: string;
  selectItem: string;
}

export interface LogisticsTranslations {
  title: string;
  subtitle: string;
  inboundAir: string;
  inboundOcean: string;
  customsHold: string;
  activeUnits: string;
  nextArrival: string;
  loadSimulation: string;
  sortBy: string;
  addShipment: string;
  editShipment: string;
  saveChanges: string;
}

export interface ShopFloorTranslations {
  title: string;
  connected: string;
  standby: string;
  activeStream: string;
  killConnection: string;
  syncLine: string;
  efficiencyMatrix: string;
  oee: string;
  target: string;
  envSensors: string;
  alerts: string;
  queueStatus: string;
  liveTracking: string;
  searchJobs: string;
  refresh: string;
}

export interface OrderManagerTranslations {
  title: string; 
  newJob: string; 
  requestSample: string; 
  sampleTracker: string; 
  activeOrders: string;
  recordsFound: string;
  printOrder: string;
  editOrder: string;
  jobName: string;
  factory: string;
  customer: string;
  status: string;
  desc: string;
  quantity: string;
  deliveryDate: string;
  incoterms: string;
  packaging: string;
  progress: string;
  exportPO: string;
  emailFactory: string;
  saveChanges: string;
  tabs: {
    production: string;
    samples: string;
  };
}

export interface FactoryTranslations {
  title: string;
  subtitle: string;
  explorer: string;
  partners: string;
  search: string;
  addBtn: string;
  viewAudit: string;
  supplierId: string;
  location: string;
  status: string;
  actions: string;
  noResults: string;
}

export interface CatalogTranslations {
  subtitle: string;
  allCategories: string;
}

export interface DashboardTranslations {
  title: string;
  subtitle: string;
  activeJobs: string;
  globalSkus: string;
  inventoryVal: string;
  supplierHealth: string;
  recentActivity: string;
  viewAll: string;
  logisticsControl: string;
  openLogistics: string;
  refreshPulse: string;
  totalRevenue: string;
  activeOrders: string;
  pendingShipments: string;
  productionEfficiency: string;
  revenueVsCost: string;
}

export interface CurrencyTranslations {
  converter: string;
  trend: string;
  live: string;
  viewGraph: string;
  viewCalc: string;
  trendingUp: string;
  trendingDown: string;
  title?: string;
  base?: string;
  target?: string;
  rate?: string;
  amount?: string;
  result?: string;
}

export interface LoginTranslations {
  subtitle: string;
  email: string;
  password: string;
  loginBtn: string;
  forgot: string;
  quickAccess: string;
  sendCode: string;
  backToLogin: string;
  verifyCode: string;
  resend: string;
  setPass: string;
}

export interface HSLookupTranslations {
  title: string;
  subtitle: string;
  searchPlaceholder: string;
  analyze: string;
  identify: string;
  code: string;
  detectedRate: string;
  description: string;
  dutyClass: string;
  aiLogic: string;
  applyTo: string;
  locked: string;
}

export interface SearchTranslation {
  placeholder: string;
  quickActions: string;
  noResults: string;
  commands: {
    newProduct: string;
    newOrder: string;
    goDashboard: string;
    goSettings: string;
  };
}

export interface WorkspaceTranslations {
  title: string;
  searchPlaceholder: string;
  newProduct: string;
  opsMode: string;
  strategyMode: string;
  tabs: {
    specs: string;
    costing: string;
    tariffs: string;
    hsLookup: string;
    exchange: string;
    timeline: string;
    scmAi: string;
    competitors: string;
    aiStrategy: string;
  };
  header: {
    env: string;
    protocol: string;
    optimal: string;
  };
  specs: {
    title: string;
    subtitle: string;
    mediaAssets: string;
    imageUrl: string;
    cadLink: string;
    internalId: string;
    skuMatrix: string;
    addVariant: string;
    dna: string;
    fabrication: string;
    logistics: string;
    hsCode: string;
    dims: string;
    material: string;
    construction: string;
    table: {
      sku: string;
      variant: string;
      msrp: string;
      actions: string;
    };
  };
  costing: {
    title: string;
    subtitle: string;
    structure: string;
    logistics: string;
    profit: string;
    fob: string;
    freight: string;
    duty: string;
    total: string;
    volumetric: string;
    chargeable: string;
    payingVolume: string;
    targetRetail: string;
    margin: string;
    netProfit: string;
    addComponent: string;
    table: {
      component: string;
      value: string;
      percent: string;
    };
  };
  tariffs: {
    title: string;
    subtitleRead: string;
    subtitleEdit: string;
    modify: string;
    finish: string;
    allMarkets: string;
    table: {
      dest: string;
      base: string;
      fees: string;
      total: string;
      integrity: string;
    };
    status: {
      locked: string;
      precision: string;
      default: string;
    };
    infoRead: string;
    infoEdit: string;
  };
  competitors: {
    title: string;
    subtitle: string;
    trackNew: string;
    pricePos: string;
    marketShare: string;
    pricePosition: string;
    headers?: {
      brand: string;
      price: string;
      origin: string;
      strength: string;
    };
    table: {
      brand: string;
      price: string;
      origin: string;
      strength: string;
    };
    modal: {
      title: string;
      brand: string;
      price: string;
      share: string;
      origin: string;
      strength: string;
    };
  };
  timeline: {
    title: string;
    subtitle: string;
    table: {
      phase: string;
      time: string;
      region: string;
      activity: string;
    };
  };
}

export interface WizardCommonTranslations {
  step: string;
  expressWorkflow: string;
  advancedWorkflow: string;
  nextStep: string;
  back: string;
  cancel: string;
  create: string;
  review: string;
  upload: string;
  attach: string;
  required: string;
  save: string;
  finish?: string;
}

export interface NewProductWizardTranslations {
  title: string;
  headers: {
    expressIdentity: string;
    expressIdentityDesc: string;
    sourcingStrategy: string;
    sourcingStrategyDesc: string;
    basicSpecs: string;
    basicSpecsDesc: string;
    roughCosting: string;
    roughCostingDesc: string;
    advConcept: string;
    advConceptDesc: string;
    advEngineering: string;
    advBOM: string;
    advSourcing: string;
    advCost: string;
    advPackaging: string;
    reviewComplete: string;
    reviewDesc: string;
  };
  labels: {
    productName: string;
    brand: string;
    category: string;
    primarySupplier: string;
    originCountry: string;
    moq: string;
    leadTime: string;
    skuCode: string;
    hsCode: string;
    materialComp: string;
    estFactoryCost: string;
    description: string;
    techPack: string;
    externalUrl: string;
    length: string;
    width: string;
    height: string;
    bomFile: string;
    materialNotes: string;
    supplier: string;
    origin: string;
    materialCost: string;
    laborCost: string;
    packaging: string;
    logistics: string;
    packagingType: string;
    masterCartonQty: string;
    unitWeight: string;
  };
  placeholders: {
    nameEx: string;
    selectOrType: string;
    selectFactory: string;
    autoGen: string;
    hsEx: string;
    materialEx: string;
    retailSkip: string;
    attachTechPack: string;
    driveLink: string;
    attachBom: string;
    matNotesEx: string;
  };
  errors: {
    nameRequired: string;
  };
  categories: Record<string, string>;
  packagingOptions: Record<string, string>;
}

export interface ShipmentWizardTranslations {
  title: string;
  subtitle: string;
  headers: {
    routeInfo: string;
    linkContext: string;
  };
  labels: {
    refId: string;
    trackingNumber: string;
    carrier: string;
    type: string;
    method: string;
    status: string;
    manager: string;
    origin: string;
    destination: string;
    etd: string;
    eta: string;
    linkJob: string;
    linkSample: string;
    toggleJob: string;
    toggleSample: string;
  };
  placeholders: {
    trackingEx: string;
    managerName: string;
    cityCountry: string;
    selectJob: string;
    selectSample: string;
  };
  errors: {
    trackingRequired: string;
    managerRequired: string;
    originRequired: string;
    destRequired: string;
    etaRequired: string;
    linkJobRequired: string;
    linkSampleRequired: string;
  };
  methods: Record<string, string>;
  statuses: Record<string, string>;
  accountTypes: Record<string, string>;
}

export interface SampleWizardTranslations {
  title: string;
  subtitle: string;
  labels: {
    id: string;
    type: string;
    productModel: string;
    factory: string;
    estSampleCost: string;
    estCourierCost: string;
    attachments: string;
    instructions: string;
  };
  placeholders: {
    noProducts: string;
    noFactories: string;
    uploadCta: string;
    notesEx: string;
  };
  errors: {
    productRequired: string;
    factoryRequired: string;
  };
  types: Record<string, string>;
}

export interface JobWizardTranslations {
  title: string;
  subtitle: string;
  headers: {
    scope: string;
    logistics: string;
    shipping: string;
  };
  labels: {
    jobId: string;
    jobName: string;
    poNumber: string;
    productModel: string;
    quantity: string;
    factory: string;
    customer: string;
    leadBuyer: string;
    initialStage: string;
    priority: string;
    description: string;
    partner: string;
    startDate: string;
    targetDate: string;
    incoterms: string;
    shippingMethod: string;
    destAddress: string;
    paymentTerms: string;
    packInstr: string;
  };
  placeholders: {
    nameEx: string;
    poEx: string;
    unassigned: string;
    buyerEx: string;
    descEx: string;
    whEx: string;
    payEx: string;
    packEx: string;
  };
  errors: {
    nameRequired: string;
    poRequired: string;
  };
  stages: Record<string, string>;
  priorities: Record<string, string>;
}

export interface CustomerWizardTranslations {
  title: string;
  subtitle: string;
  modes: {
    fast: string;
    advanced: string;
  };
  headers: {
    identityContact: string;
    bizLocation: string;
    corpIdentity: string;
    contactPrefs: string;
    globalLoc: string;
    review: string;
  };
  labels: {
    internalId: string;
    accountOwner: string;
    companyName: string;
    contactPerson: string;
    email: string;
    contactNo: string;
    bizType: string;
    socialMedia: string;
    address: string;
    street: string;
    city: string;
    state: string;
    industry: string;
    source: string;
    commPref: string;
    country: string;
    zip: string;
    creatingFor: string;
  };
  placeholders: {
    salesRep: string;
    ifBlank: string;
    selectType: string;
    selectPlatform: string;
    socialEx: string;
    selectIndustry: string;
    selectSource: string;
    typeCountry: string;
    unassigned: string;
  };
  errors: {
    contactRequired: string;
    emailRequired: string;
    phoneRequired: string;
  };
  bizTypes: Record<string, string>;
  industries: Record<string, string>;
  sources: Record<string, string>;
}

export interface WizardsTranslation {
  common: WizardCommonTranslations;
  newProduct: NewProductWizardTranslations;
  shipment: ShipmentWizardTranslations;
  sample: SampleWizardTranslations;
  job: JobWizardTranslations;
  customer: CustomerWizardTranslations;
  supplier?: { title: string; name: string; location: string; contact: string; email: string; type: string; };
}

export interface Translation {
  common: CommonTranslations;
  nav: NavTranslations;
  admin: AdminTranslations;
  teamChat: ChatTranslations;
  crm: CrmTranslations;
  calendar: CalendarTranslations;
  hub: HubTranslations;
  logistics: LogisticsTranslations; 
  shopFloor: ShopFloorTranslations;
  orderManager: OrderManagerTranslations;
  factory: FactoryTranslations;
  catalog: CatalogTranslations;
  dashboard: DashboardTranslations;
  currency: CurrencyTranslations;
  login: LoginTranslations;
  hsLookup: HSLookupTranslations;
  workspace: WorkspaceTranslations;
  search: SearchTranslation;
  wizards: WizardsTranslation;
  print: PrintTranslations;
  widgets: WidgetTranslations;
  preferences: PreferencesTranslations;

  [key: string]: any;
}

export interface DashboardStats {
  totalRevenue: number;
  revenueTrend: number;
  activeOrders: number;
  orderTrend: number;
  avgMargin: number;
  marginTrend: number;
  pendingShipments: number;
  shipmentTrend: number;
}

export interface SupplierMetric {
  id: string;
  label: string;
  value: string | number;
  score: number;
  trend: 'up' | 'down' | 'neutral';
  isPrivate: boolean;
}

export interface Supplier {
  id: string;
  name: string;
  sector: string;
  country: string;
  overallGrade: 'A' | 'B' | 'C' | 'D';
  metrics: SupplierMetric[];
  lastAuditDate: string;
  certifications: string[];
  contactEmail?: string;
  location?: string;
  rating?: number;
  status?: 'Active' | 'Pending' | 'Blacklisted';
  contact?: string;
  email?: string;
  productsSupplied?: number;
}

export interface Factory {
  id: string;
  name: string;
  location: string;
  country: string;
  address?: string;
  contact?: string;
  contactPerson: string;
  jobTitle?: string;
  phone?: string;
  contactPhone?: string;
  contactEmail: string;
  email?: string;
  website?: string;
  websiteUrl?: string;
  rating: number;
  overallGrade?: 'A' | 'B' | 'C' | 'D';
  businessType?: 'Manufacturer' | 'Trading Company' | 'Agent' | 'Wholesaler';
  supplierType?: string;
  capabilities?: string[];
  mainCategory?: string;
  productCategories?: string[];
  moq?: number;
  capacity?: number;
  productionCapacity?: string;
  leadTimeDays?: number;
  certificationsList?: string;
  certifications?: string[];
  source?: string;
  connection?: string;
  notes?: string;
  attachmentsCount?: number;
  status?: 'Active' | 'Probation' | 'Inactive' | 'Vetting' | 'Blacklisted' | 'Pending';
  scorecardData?: Supplier;
  taxId?: string;
  region?: 'Asia' | 'Africa' | 'Americas' | 'Europe' | 'Middle East';
  currency?: string;
  incoterms?: string;
}

export interface Job {
  id: string;
  jobName: string;
  orderNumber?: string;
  description?: string;
  poNumber?: string;
  customer?: string; 
  customerName?: string;
  customerId?: string;
  factory?: string;
  factoryName?: string;
  factoryId?: string;
  sku?: string;
  productRefId?: string;
  productId?: string;
  quantity?: number;
  value: number;
  status: 'Pending' | 'In Production' | 'Shipped' | 'Delivered' | 'Cancelled' | string;
  date?: string;
  orderDate?: string;
  startDate?: string;
  deadline?: string;
  deliveryDate?: string;
  targetDelivery?: string;
  progress: number;
  completionPercent?: number;
  productionStage?: string;
  priority: 'Low' | 'Medium' | 'High' | 'Urgent';
  isSoncapRequired?: boolean;
  notes?: string;
  leadBuyer?: string;
  packagingInstructions?: string;
  incoterms?: 'EXW' | 'FOB' | 'CIF' | 'DDP' | 'DAP' | string;
  destinationAddress?: string;
  shippingMethod?: 'Air' | 'Sea' | 'Rail' | 'Truck' | 'Express' | string;
  paymentTerms?: string;
  client?: string;
}

export interface Shipment {
  id: string;
  trackingNumber: string;
  origin?: string;
  destination?: string; 
  currentLocation?: string;
  eta: string;
  status: 'Booked' | 'In Transit' | 'Customs' | 'Delivered' | 'Exception' | 'Delayed';
  carrier: string;
  method?: string;
  type?: 'Air' | 'Ocean' | 'Road';
  jobId?: string;
  lastUpdated?: string;
  linkedSampleId?: string;
  accountManager?: string;
  shipmentType?: 'Production' | 'Sample';
  accountType?: 'Usuppli/Axcess' | 'Existing Customer' | 'New Customer';
  items?: string[]; 
}

export interface Customer {
  id: string;
  name?: string; 
  companyName: string;
  company?: string;
  email: string;
  contactPerson: string;
  contactName?: string;
  phone: string;
  location?: string;
  region?: string;
  totalOrders: number;
  totalValue: number;
  totalSpend?: number;
  tier?: 'VIP' | 'Standard' | 'New' | 'Strategic' | 'Probation';
  businessType?: string;
  customerNo?: string;
  status: 'Active' | 'Inactive' | 'Lead' | 'Pending' | 'Probation';
  country: string;
  address?: string;
  stateRegion?: string;
  postalCode?: string;
  website?: string;
  industry?: string;
  accountOwner?: string;
  communicationPreference?: string[];
  accountSource?: string;
  currency?: string;
  billingStreet?: string;
  billingCity?: string;
  billingState?: string;
  billingZip?: string;
  billingCountry?: string;
  shippingStreet?: string;
  shippingCity?: string;
  shippingState?: string;
  shippingZip?: string;
  shippingCountry?: string;
  shippingSameAsBilling?: boolean;
  incoterms?: string;
  notes?: string;
  lastOrder?: string;
  lastOrderDate?: string;
  orders?: number;
}

export interface SampleRequest {
  id: string;
  productId: string;
  productName?: string;
  factoryId?: string;
  factoryName?: string;
  customerId?: string;
  customerName?: string;
  type?: string;
  status: string; 
  requestDate: string;
  estimatedCompletion?: string;
  estimatedDelivery?: string;
  trackingNumber?: string;
  courier?: string;
  cost?: number;
  courierCost?: number;
  feedback?: string;
  notes?: string;
  jobId?: string; 
  attachments?: {
    id: string;
    name: string;
    url: string;
    type: 'image' | 'file';
  }[];
  comments?: {
    id: string;
    userId: string;
    userName: string;
    text: string;
    date: string;
  }[];
}

export interface ExchangeRate {
  id: string;
  pair: string;
  rate: number;
  trend: 'up' | 'down' | 'neutral';
  change: number;
  lastUpdated: string;
}

export interface CostVariables {
  [key: string]: number | undefined; 
  materials: number;
  labor?: number;
  packaging?: number;
  overhead?: number;
  logistics?: number;
  exportInternal?: number;
  exportExternal?: number;
  shipping?: number;
  design?: number;
  inspection?: number;
  production?: number;
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  brand?: string;
  status: 'Draft' | 'Active' | 'Archived' | string;
  price: number;
  cost: number;
  costPrice?: number;
  stock: number;
  supplier: string;
  lastUpdated: string;
  thumbnail?: string;
  image?: string;
  cadLink?: string;
  hsCode?: string;
  material?: string;
  construction?: string;
  moq?: number;
  currency?: string;
  supplierId?: string;
  specs?: any;
  tariffCode?: string;
  dimensions?: {
      lengthCm: number;
      widthCm: number;
      heightCm: number;
      weightKg: number;
  };
  skus?: {
      code: string;
      size: string;
      prices: Record<string, number>;
      color?: string;
  }[];
  attachments?: {
    id: string;
    name: string;
    url: string;
    type: 'image' | 'file';
  }[];
  comments?: {
    id: string;
    userId: string;
    userName: string;
    text: string;
    date: string;
  }[];
  costVariables?: CostVariables;
  primaryFactoryId?: string;
  factories?: Factory[];
  competitors?: any[];
  timeline?: any[];
  tariffOverrides?: any;
  dutyOverrides?: Record<string, number>;
  additionalFees?: Record<string, number>;
  customerId?: string;
  leadTime?: string | number; 
  weight?: string;
  retailPrice?: number;
  targetMargin?: number;
  description?: string;
  packagingType?: string;
  sourcingCountry?: string;
}

export interface AuditLogEntry {
  id: string;
  timestamp: string | Date;
  user: string;
  userId?: string;
  userRole?: string;
  action: 'CREATE' | 'UPDATE' | 'DELETE' | 'LOGIN' | 'LOGOUT' | 'SYSTEM' | 'EXPORT' | 'STATUS_CHANGE';
  module: string; 
  entity?: 'Product' | 'Order' | 'Customer' | 'Factory' | 'System' | 'Shipment' | 'User';
  entityId?: string;
  details: string;
}

export interface ChatAttachment {
  type: 'image' | 'file' | 'audio';
  url: string;
  name?: string;
  size?: string;
  duration?: string;
  mimeType?: string;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  text: string;
  timestamp: Date;
  isRead: boolean;
  attachment?: ChatAttachment; 
}

export interface ChatThread {
  id: string;       
  name: string;       
  type: 'group' | 'direct'; 
  unreadCount: number;
  lastMessage?: string;
  lastMessageTime?: Date;
  isOnline?: boolean;
  isTyping?: boolean;
}

export interface FilterRule {
  id: string;
  field: string;
  operator: 'contains' | 'equals' | 'gt' | 'lt' | 'startsWith' | 'endsWith';
  value: string;
}

export interface SavedFilter {
  id: string;
  name: string;
  rules: FilterRule[];
}
