
import { Translation } from '../types';

export const en: Translation = {
  common: {
    save: "Save",
    cancel: "Cancel",
    edit: "Edit",
    delete: "Delete",
    refresh: "Refresh",
    share: "Share",
    clickToEdit: "Click to edit",
    copied: "Copied to clipboard",
    search: "Search...",
    loading: "Loading...",
    actions: "Actions",
    view: "View",
    export: "Export",
    print: "Print",
    submit: "Submit",
    next: "Next",
    back: "Back",
    finish: "Finish",
    command: "Command",
    close: "Close",
    status: "Status",
    date: "Date",
    user: "User",
    page: "Page",
    file: "File",
    action: "Action",
    select: "Select",
    navigate: "Navigate",
    noResults: "No results found",
    noResultsDesc: "We couldn't find anything with that term.",
    searchPlaceholder: "Search for files, pages, or actions...",
    recent: "Recent",
    navigation: "Navigation",
    notifications: "Notifications",
    settings: "Settings",
    profile: "Profile",
    logout: "Log out",
    error: "Error"
  },
  nav: {
    dashboard: "Dashboard",
    productCatalog: "Product Catalog",
    productWorkspace: "Workspace",
    factoryMaster: "Supplier & Factory Portfolio",
    production: "Order Manager",
    shopFloor: "Shop Floor",
    logistics: "Logistics Tower",
    crm: "Customer Directory",
    collaboration: "Collaboration Hub",
    teamChat: "Team Chat",
    admin: "Admin",
    newProduct: "New Product",
    analytics: "Analytics",
    sourcing: "Sourcing",
    executionGroup: "Execution",
    system: "System",
    aiStrategist: "AI Strategist",
    calendar: "Calendar",
    hub: "Hub",
    exchange: "Exchange"
  },
  admin: {
    title: "Admin Panel",
    subtitle: "Global Configuration & Identity Management",
    accessDenied: "Access Denied",
    accessDeniedDesc: "Institutional protocols restrict this section to administrative accounts.",
    deleteAccount: "Delete Account?",
    deleteConfirm: "Are you sure you want to remove this user? This action is irreversible.",
    timeSync: "Global Time Sync",
    tabs: {
      system: "System",
      users: "Users",
      backup: "Backup",
      audit: "Audit",
      preferences: "Preferences"
    },
    system: {
      dbStatus: "Database Status",
      connected: "System Online",
      version: "Versioning",
      matrix: "Global Tariff Matrix"
    },
    users: {
      registerIdentity: "Register Identity",
      title: "User Registry"
    },
    backup: {
      jsonTitle: "Export DB",
      jsonDesc: "Download full system snapshot",
      generate: "Generate Snapshot",
      restoreDB: "Restore DB",
      upload: "Upload & Restore"
    },
    audit: {
      exportCSV: "Export CSV",
      logTitle: "Secure Institutional Log"
    }
  },
  teamChat: {
    title: "Team Chat",
    channels: "Channels",
    directMessages: "Direct Messages",
    typing: "Typing...",
    online: "Online",
    offline: "Offline",
    shareVia: "Share Via",
    recording: "Recording...",
    cancel: "Cancel",
    typeMessage: "Type a message...",
    deleteMsg: "Delete Message",
    teamGeneral: "General Team"
  },
  crm: {
    title: "Customer Directory",
    subtitle: "Manage client relationships and regions",
    search: "Search clients...",
    addCustomer: "Add Customer",
    accountActive: "Account Active"
  },
  calendar: {
    title: "Constraint Calendar",
    subtitle: "Global Production & Logistics Constraints",
    addEvent: "Add Constraint / Event",
    addPlan: "Add Plan to Calendar",
    calculator: "Lead Time Calculator",
    eta: "Est. Arrival (ETA)",
    totalDays: "Total Days",
    start: "Start Date",
    end: "End Date",
    region: "Region",
    calculationFor: "Calculation For",
    selectItem: "Select Item",
    select: "Select",
    quantity: "Quantity",
    destination: "Destination",
    enterCity: "Enter city or port...",
    breakdown: "Breakdown (Days)",
    production: "Production",
    qualityCheck: "Quality Check",
    shipping: "Shipping",
    customs: "Customs",
    typeJob: "Job",
    typeSample: "Sample",
    typeProduct: "Product",
    eventTitle: "Event Title",
    type: "Type",
    severity: "Severity",
    linkRecord: "Link to Record (Optional)",
    saveEvent: "Save Event"
  },
  hub: {
    title: "Collaboration Hub",
    subtitle: "Global Message Board",
    newThread: "New Thread",
    startNewThread: "Start New Thread",
    topic: "Topic",
    message: "Message",
    selectCustomer: "Select Customer...",
    startConversation: "Select a thread to start collaborating",
    initialMessage: "Initial message...",
    pinThread: "Pin Thread",
    unpinThread: "Unpin Thread",
    clearHistory: "Clear History",
    participants: "Participants",
    linkType: "Link Type",
    selectItem: "Select Item..."
  },
  logistics: {
    title: "Logistics Tower",
    subtitle: "Real-time freight tracking",
    inboundAir: "Air",
    inboundOcean: "Ocean",
    customsHold: "Customs",
    activeUnits: "Units",
    nextArrival: "Next Arrival",
    loadSimulation: "Load Simulation",
    sortBy: "Sort by ETA",
    addShipment: "Add Shipment",
    editShipment: "Edit Shipment",
    saveChanges: "Save Changes"
  },
  shopFloor: {
    title: "Shop Floor Telemetry",
    connected: "Connected",
    standby: "Station Standby",
    activeStream: "Active Stream",
    killConnection: "Kill Connection",
    syncLine: "Sync Line Status",
    efficiencyMatrix: "Live Efficiency Matrix",
    oee: "OEE",
    target: "TARGET",
    envSensors: "Environmental Sensors",
    alerts: "Diagnostic Alerts",
    queueStatus: "Production Queue Status",
    liveTracking: "Live factory throughput tracking",
    searchJobs: "Search Active Jobs..."
  },
  orderManager: {
    activeOrders: "Active Orders",
    recordsFound: "Records Found",
    printOrder: "Print Order",
    editOrder: "Edit Order Details",
    jobName: "Job Name",
    factory: "Factory",
    customer: "Customer",
    status: "Status",
    desc: "Project Description",
    quantity: "Quantity",
    deliveryDate: "Delivery Date",
    incoterms: "Incoterms",
    packaging: "Packaging Requirements",
    progress: "Overall Progress",
    exportPO: "Export PO",
    emailFactory: "Email Factory",
    saveChanges: "Save Changes"
  },
  factory: {
    title: "Supplier & Factory Portfolio",
    subtitle: "Global Manufacturing Network",
    explorer: "Portfolio Explorer",
    partners: "Active Manufacturing Partners",
    search: "Search...",
    addBtn: "Add Supplier",
    viewAudit: "View Audit",
    supplierId: "Supplier Identity",
    location: "Location",
    status: "Status",
    actions: "Actions",
    noResults: "No results found"
  },
  catalog: {
    subtitle: "Global SKU Directory",
    allCategories: "All Categories"
  },
  dashboard: {
    title: "Operations Dashboard",
    subtitle: "Global Supply Chain Pulse",
    activeJobs: "Active Orders",
    globalSkus: "Global SKUs",
    inventoryVal: "Inventory Value",
    supplierHealth: "Supplier Health",
    recentActivity: "Recent Activity",
    viewAll: "View All",
    logisticsControl: "Logistics Control",
    openLogistics: "Open Logistics Tower",
    refreshPulse: "Refresh Pulse",
    totalRevenue: "Total Revenue",
    activeOrders: "Active Orders",
    pendingShipments: "Pending Shipments",
    productionEfficiency: "Production Efficiency",
    revenueVsCost: "Revenue vs Cost"
  },
  currency: {
    converter: "Converter",
    trend: "7-Day Trend",
    live: "Live",
    viewGraph: "View Graph",
    viewCalc: "View Calculator",
    trendingUp: "Trending Up",
    trendingDown: "Trending Down"
  },
  login: {
    subtitle: "Enterprise Supply Chain Manager",
    email: "Email Address",
    password: "Password",
    loginBtn: "Secure Login",
    forgot: "Forgot Password?",
    quickAccess: "Or Quick Access (Dev)",
    sendCode: "Send Reset Code",
    backToLogin: "Back to Login",
    verifyCode: "Verify Code",
    resend: "Resend Code",
    setPass: "Set New Password"
  },
  hsLookup: {
    title: "Precision HS Lookup",
    subtitle: "Global Classification & Compliance",
    searchPlaceholder: "e.g. Stainless steel insulated travel mug",
    analyze: "Analyzing...",
    identify: "Identify",
    code: "Recommended HS Code",
    detectedRate: "Detected Rate",
    description: "Description",
    dutyClass: "Duty Classification",
    aiLogic: "AI Broker Logic",
    applyTo: "Apply to",
    locked: "Precision Rate Locked"
  },
  search: {
    placeholder: "Search...",
    quickActions: "Quick Actions",
    noResults: "No results found.",
    commands: {
      newProduct: "New Product",
      newOrder: "New Order",
      goDashboard: "Go to Dashboard",
      goSettings: "Go to Settings"
    }
  },
  workspace: {
    title: "Product Workspace",
    searchPlaceholder: "Search Workspace...",
    newProduct: "New Product",
    opsMode: "Ops",
    strategyMode: "Strategy",
    tabs: {
      specs: "Specs",
      costing: "Costing",
      tariffs: "Tariffs",
      hsLookup: "HS Lookup",
      exchange: "Exchange",
      timeline: "Timeline",
      scmAi: "SCM AI Strategist",
      competitors: "Competitor Analysis",
      aiStrategy: "AI Strategy"
    },
    header: {
      env: "Global Environment",
      protocol: "Running Protocol",
      optimal: "System Optimal"
    },
    specs: {
      title: "Product Specifications",
      subtitle: "Engineering control and asset management",
      mediaAssets: "Media & Assets",
      imageUrl: "Product Image URL",
      cadLink: "3D Model / CAD Link",
      internalId: "Internal ID",
      skuMatrix: "SKU Matrix",
      addVariant: "Add New Variant",
      table: {
        sku: "SKU Code",
        variant: "Variant / Size",
        msrp: "Target MSRP",
        actions: "Actions"
      }
    },
    costing: {
      title: "Smart Costing Engine",
      subtitle: "Landed Cost Estimation & Margin Analysis",
      structure: "Cost Structure (Per Unit)",
      logistics: "Logistics Metrics",
      profit: "Profit Simulator",
      fob: "FOB Subtotal (Factory)",
      freight: "Freight (Shipping)",
      duty: "Import Duty",
      total: "Total Landed Cost",
      volumetric: "Volumetric Wgt",
      chargeable: "Chargeable Wgt",
      payingVolume: "Paying for Volume, not Weight",
      targetRetail: "Target Retail Price",
      margin: "Margin",
      netProfit: "Net Profit",
      addComponent: "Add Cost Component",
      table: {
        component: "Component",
        value: "Value (USD)",
        percent: "% of Total"
      }
    },
    tariffs: {
      title: "Global Market Duties",
      subtitleRead: "Verified Costing View",
      subtitleEdit: "Manage Regional Tariffs",
      modify: "Modify Rates",
      finish: "Finish Editing",
      allMarkets: "All Markets",
      table: {
        dest: "Destination",
        base: "Base Rate",
        fees: "Addl. Fees",
        total: "Total Duty",
        integrity: "Source Integrity"
      },
      status: {
        locked: "Admin Locked",
        precision: "Precision Applied",
        default: "System Default"
      },
      infoRead: "Costing data is read-only for your account type.",
      infoEdit: "Precision rates are saved per-product. Admin locks force a mandatory rate."
    },
    competitors: {
      title: "Competitor Intelligence",
      subtitle: "Market Analysis & Tracking",
      trackNew: "Track Competitor",
      pricePos: "Price Position",
      marketShare: "Market Share",
      table: {
        brand: "Brand",
        price: "Price",
        origin: "Origin",
        strength: "Strength"
      },
      modal: {
        title: "Track New Competitor",
        brand: "Brand Name",
        price: "Retail Price ($)",
        share: "Est. Share (%)",
        origin: "Origin Country",
        strength: "Key Strength"
      }
    },
    timeline: {
      title: "Product Launch Timeline",
      subtitle: "Critical Path Management",
      table: {
        phase: "Phase",
        time: "Timeline",
        region: "Region",
        activity: "Major Activity"
      }
    }
  },
  wizards: {
    common: {
      step: "Step {step} of {total}",
      expressWorkflow: "Express Workflow",
      advancedWorkflow: "Advanced Workflow",
      nextStep: "Next Step",
      back: "Back",
      cancel: "Cancel",
      create: "Create",
      review: "Review",
      upload: "Upload File",
      attach: "Attach",
      required: "Required",
      save: "Save"
    },
    newProduct: {
      title: "New Product Wizard",
      headers: {
        expressIdentity: "Express Identity",
        expressIdentityDesc: "Quickly define the core product details.",
        sourcingStrategy: "Sourcing Strategy",
        sourcingStrategyDesc: "Assign a manufacturing partner.",
        basicSpecs: "Basic Specs",
        basicSpecsDesc: "Essential attributes.",
        roughCosting: "Rough Costing",
        roughCostingDesc: "Estimated unit economics (Optional).",
        advConcept: "Advanced: Concept",
        advConceptDesc: "Detailed product definition.",
        advEngineering: "Advanced: Engineering",
        advBOM: "Advanced: Bill of Materials",
        advSourcing: "Advanced: Sourcing",
        advCost: "Advanced: Cost Breakdown",
        advPackaging: "Advanced: Packaging",
        reviewComplete: "Review Complete",
        reviewDesc: "All advanced specifications have been captured."
      },
      labels: {
        productName: "Product Name",
        brand: "Brand",
        category: "Category",
        primarySupplier: "Primary Supplier",
        originCountry: "Origin Country",
        moq: "MOQ",
        leadTime: "Lead Time",
        skuCode: "SKU Code",
        hsCode: "HS Code",
        materialComp: "Material Composition",
        estFactoryCost: "Estimated Factory Cost ($)",
        description: "Description",
        techPack: "Tech Pack",
        externalUrl: "External URL",
        length: "Length (cm)",
        width: "Width (cm)",
        height: "Height (cm)",
        bomFile: "BOM File",
        materialNotes: "Material Notes",
        supplier: "Supplier",
        origin: "Origin",
        materialCost: "Material Cost",
        laborCost: "Labor Cost",
        packaging: "Packaging",
        logistics: "Logistics",
        packagingType: "Packaging Type",
        masterCartonQty: "Master Carton Qty",
        unitWeight: "Unit Weight (kg)"
      },
      placeholders: {
        nameEx: "e.g. Wireless Headphones",
        selectOrType: "Select or Type...",
        selectFactory: "Select Factory...",
        autoGen: "AUTO-GEN",
        hsEx: "0000.00.00",
        materialEx: "e.g. 100% Cotton",
        retailSkip: "Retail price is skipped in Express Mode.",
        attachTechPack: "Attach Tech Pack (PDF)",
        driveLink: "https://drive...",
        attachBom: "Attach BOM (.XLS)",
        matNotesEx: "1. Main Fabric: 100% Cotton, 220gsm..."
      },
      errors: {
        nameRequired: "Product Name is required"
      },
      categories: {
        "Consumer Electronics": "Consumer Electronics",
        "Apparel & Clothing": "Apparel & Clothing",
        "Home & Garden": "Home & Garden",
        "Health & Beauty Products": "Health & Beauty Products",
        "Automotive Parts & Accessories": "Automotive Parts & Accessories",
        "Shoes & Footwear": "Shoes & Footwear",
        "Bags, Luggage & Cases": "Bags, Luggage & Cases",
        "Jewelry & Watches": "Jewelry & Watches",
        "Toys & Games": "Toys & Games",
        "Sports & Outdoor Equipment": "Sports & Outdoor Equipment",
        "Lights & Lighting": "Lights & Lighting",
        "Tools & Hardware": "Tools & Hardware",
        "Pet Supplies": "Pet Supplies",
        "Office & School Supplies": "Office & School Supplies",
        "Packaging & Printing": "Packaging & Printing",
        "Electrical Equipment & Supplies": "Electrical Equipment & Supplies",
        "Security & Surveillance": "Security & Surveillance",
        "Home Appliances": "Home Appliances",
        "Furniture": "Furniture",
        "Textiles & Fabrics": "Textiles & Fabrics",
        "Electronic Components": "Electronic Components",
        "Industrial Machinery": "Industrial Machinery",
        "Construction & Building Materials": "Construction & Building Materials",
        "Chemicals & Raw Materials": "Chemicals & Raw Materials",
        "Food & Beverage Products": "Food & Beverage Products",
        "Medical & Healthcare Supplies": "Medical & Healthcare Supplies",
        "Gifts & Crafts": "Gifts & Crafts",
        "Baby & Maternity Products": "Baby & Maternity Products",
        "Fashion Accessories": "Fashion Accessories",
        "Renewable Energy Products": "Renewable Energy Products",
        "Telecommunications Equipment": "Telecommunications Equipment",
        "Agriculture & Food Processing": "Agriculture & Food Processing",
        "Instruments & Measurement Equipment": "Instruments & Measurement Equipment",
        "Wedding & Event Supplies": "Wedding & Event Supplies",
        "Cleaning & Hygiene Supplies": "Cleaning & Hygiene Supplies",
        "Musical Instruments & Equipment": "Musical Instruments & Equipment",
        "Cameras & Photography Equipment": "Cameras & Photography Equipment",
        "Vehicles & Transportation": "Vehicles & Transportation",
        "Material Handling Equipment": "Material Handling Equipment",
        "Safety & Protection Equipment": "Safety & Protection Equipment"
      },
      packagingOptions: {
        "Polybag": "Polybag",
        "Retail Box": "Retail Box",
        "Custom": "Custom"
      }
    },
    shipment: {
      title: "Create New Shipment",
      subtitle: "Logistics & Tracking Protocol",
      headers: {
        routeInfo: "Route Information",
        linkContext: "Link & Context"
      },
      labels: {
        refId: "Shipment Reference ID",
        trackingNumber: "Tracking Number",
        carrier: "Carrier",
        type: "Type of Shipment",
        method: "Transport Method",
        status: "Current Status",
        manager: "Account Manager",
        origin: "Origin",
        destination: "Destination",
        etd: "ETD (Departure)",
        eta: "ETA (Arrival)",
        linkJob: "Linked Job Order",
        linkSample: "Linked Sample Request",
        toggleJob: "Production Job",
        toggleSample: "Sample Request"
      },
      placeholders: {
        trackingEx: "e.g. MSKU901283",
        managerName: "Manager Name",
        cityCountry: "City, Country",
        selectJob: "Select Active Job...",
        selectSample: "Select Sample Request..."
      },
      errors: {
        trackingRequired: "Tracking Number is required",
        managerRequired: "Account Manager is required",
        originRequired: "Origin is required",
        destRequired: "Destination is required",
        etaRequired: "ETA is required",
        linkJobRequired: "Please link a Job",
        linkSampleRequired: "Please link a Sample Request"
      },
      methods: {
        "Air": "Air",
        "Ocean": "Ocean",
        "Sea": "Sea",
        "Rail": "Rail",
        "Truck": "Truck"
      },
      statuses: {
        "Booked": "Booked",
        "In Transit": "In Transit",
        "Customs": "Customs",
        "Delivered": "Delivered",
        "Exception": "Exception"
      },
      accountTypes: {
        "Usuppli/Axcess": "Usuppli/Axcess",
        "Existing Customer": "Existing Customer",
        "New Customer": "New Customer"
      }
    },
    sample: {
      title: "Request New Sample",
      subtitle: "Production or Counter Sample",
      labels: {
        id: "Sample Request ID (Auto)",
        type: "Sample Type",
        productModel: "Product Model",
        factory: "Factory",
        estSampleCost: "Est. Sample Cost ($)",
        estCourierCost: "Est. Courier Cost ($)",
        attachments: "Attachments",
        instructions: "Instructions / Notes"
      },
      placeholders: {
        noProducts: "No Products Found",
        noFactories: "No Factories Found",
        uploadCta: "Click to upload specs, drawings, or PDFs",
        notesEx: "Describe the changes or specific details for this sample..."
      },
      errors: {
        productRequired: "Please select a product model",
        factoryRequired: "Please select a factory"
      },
      types: {
        "Counter Sample": "Counter Sample",
        "Pre-Production": "Pre-Production (PP)",
        "Top of Production": "Top of Production (TOP)",
        "Photo Sample": "Photo Sample",
        "Size Set": "Size Set"
      }
    },
    job: {
      title: "New Production Order",
      subtitle: "Create Job Protocol v2.67",
      headers: {
        scope: "Product & Customer",
        logistics: "Logistics & Execution",
        shipping: "Shipping & Financials"
      },
      labels: {
        jobId: "Internal Job ID (Auto)",
        jobName: "Job Name / Reference",
        poNumber: "PO Number",
        productModel: "Product Model",
        quantity: "Quantity",
        customer: "Customer (Optional)",
        leadBuyer: "Lead Buyer",
        initialStage: "Initial Stage",
        priority: "Priority",
        description: "Project Description",
        partner: "Manufacturing Partner (Factory)",
        startDate: "Order Start Date",
        targetDate: "Target Ex-Factory Date",
        incoterms: "Incoterms",
        shippingMethod: "Shipping Method",
        destAddress: "Destination Address",
        paymentTerms: "Payment Terms",
        packInstr: "Packaging Instructions"
      },
      placeholders: {
        nameEx: "e.g. Summer Collection Batch A",
        poEx: "PO-2026-...",
        unassigned: "Unassigned Stock",
        buyerEx: "Name of Buyer",
        descEx: "Internal notes about this order...",
        whEx: "Warehouse / Port",
        payEx: "e.g. 30% Deposit",
        packEx: "Carton markings, polybag details, sticker requirements..."
      },
      errors: {
        nameRequired: "Job Name required",
        poRequired: "PO Number required"
      },
      stages: {
        "Inquiry": "Inquiry",
        "Costing": "Costing",
        "Sampling": "Sampling",
        "Production": "Production"
      },
      priorities: {
        "Low": "Low",
        "Medium": "Medium",
        "High": "High",
        "Urgent": "Urgent"
      }
    },
    customer: {
      title: "New Customer Onboarding",
      subtitle: "Client Acquisition Protocol v3.0",
      modes: {
        fast: "Fast Track (Sales)",
        advanced: "Advanced (Ops)"
      },
      headers: {
        identityContact: "Step 1: Identity & Contact",
        bizLocation: "Step 2: Business & Location",
        corpIdentity: "Corporate Identity",
        contactPrefs: "Contact & Preferences",
        globalLoc: "Global Location",
        review: "Review & Create"
      },
      labels: {
        internalId: "Internal ID",
        accountOwner: "Account Owner",
        companyName: "Company Name",
        contactPerson: "Contact Person",
        email: "Email Address",
        contactNo: "Contact No.",
        bizType: "Type of Business",
        socialMedia: "Social Media",
        address: "Address",
        street: "Street Address",
        city: "City",
        state: "State/Province",
        industry: "Industry",
        source: "Account Source",
        commPref: "Communication Preference",
        country: "Country",
        zip: "Zip / Postal",
        creatingFor: "Creating active customer record for:"
      },
      placeholders: {
        salesRep: "Sales Rep Name",
        ifBlank: "If blank, same as Contact",
        selectType: "Select Type",
        selectPlatform: "Select Platform",
        socialEx: "e.g. @MyHandle",
        selectIndustry: "Select Industry",
        selectSource: "Select Source",
        typeCountry: "Type Country Name...",
        unassigned: "Unassigned"
      },
      errors: {
        contactRequired: "Contact Person is required",
        emailRequired: "Email is required",
        phoneRequired: "Phone number is required"
      },
      bizTypes: {
        "Importer": "Importer",
        "Influencer": "Influencer",
        "University/School": "University/School",
        "Corporation": "Corporation",
        "Non-Profit / Church / ORG.": "Non-Profit / Church / ORG.",
        "Online / Amazon Seller": "Online / Amazon Seller",
        "Small Business": "Small Business"
      },
      industries: {
        "Non-Profit": "Non-Profit",
        "Military": "Military",
        "Government": "Government",
        "Retail": "Retail",
        "Manufacturing": "Manufacturing",
        "Other": "Other"
      },
      sources: {
        "Referral": "Referral",
        "Trade Show": "Trade Show",
        "Other": "Other"
      }
    }
  }
};