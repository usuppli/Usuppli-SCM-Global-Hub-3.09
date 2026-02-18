
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
  preferences: {
    title: "Personalization & Security Hub",
    security: "Security",
    currentPassword: "Current Password",
    newPassword: "New Password",
    confirmPassword: "Confirm Password",
    changePassword: "Change Password",
    accountType: "Account Type",
    roles: {
      viewer: "Viewer",
      editor: "Editor",
      admin: "Admin",
      super_admin: "Super Admin",
      customer: "Customer"
    },
    roleHint: "Contact a Super Admin to upgrade your privileges."
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
    description: "Description",
    type: "Type",
    severity: "Severity",
    startDate: "Start Date",
    endDate: "End Date",
    linkRecord: "Link to Record (Optional)",
    saveEvent: "Save Event",
    types: {
      production: "Production",
      logistics: "Logistics",
      compliance: "Compliance",
      holiday: "Holiday",
      other: "Other"
    }
  },
  currency: {
    title: "Currency Converter",
    base: "Base Currency",
    target: "Target Currency",
    rate: "Exchange Rate",
    amount: "Amount",
    result: "Result",
    converter: "Converter",
    trend: "7-Day Trend",
    live: "Live",
    viewGraph: "View Graph",
    viewCalc: "View Calculator",
    trendingUp: "Trending Up",
    trendingDown: "Trending Down"
  },
  orderManager: {
    title: "Order Manager",
    newJob: "New Order",
    requestSample: "Request Sample",
    sampleTracker: "Sample Tracker",
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
    saveChanges: "Save Changes",
    tabs: {
      production: "Production",
      samples: "Samples"
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
      competitors: "Intel",
      aiStrategy: "AI Strategy"
    },
    header: {
      env: "Global Environment",
      protocol: "Running Protocol",
      optimal: "System Optimal"
    },
    specs: {
      title: "Product Specs",
      subtitle: "Engineering Control & Asset Management",
      mediaAssets: "Media & Assets",
      imageUrl: "Product Image URL",
      cadLink: "3D Model / CAD Link",
      internalId: "Internal ID",
      skuMatrix: "SKU Matrix",
      addVariant: "Add New Variant",
      dna: "Technical DNA",
      fabrication: "Fabrication",
      logistics: "Logistics & Compliance",
      hsCode: "HS Code",
      dims: "Dimensions",
      material: "Material",
      construction: "Construction",
      table: {
        sku: "SKU Code",
        variant: "Variant / Size",
        msrp: "Target MSRP",
        actions: "Actions"
      }
    },
    costing: {
      title: "Smart Cost Engine",
      subtitle: "Landed Cost Est. & Margin Analysis",
      structure: "Cost Structure (Per Unit)",
      logistics: "Logistics Metrics",
      profit: "Profit Simulator",
      fob: "FOB Subtotal (Factory)",
      freight: "Freight (Shipping)",
      duty: "Import Duty",
      total: "Total Landed Cost",
      volumetric: "Volumetric Weight",
      chargeable: "Chargeable Weight",
      payingVolume: "Paying by Volume, not Weight",
      targetRetail: "Target Retail Price",
      margin: "Margin",
      netProfit: "Net Profit",
      addComponent: "Add Cost Component",
      table: {
        component: "Component",
        value: "Value (USD)",
        percent: "Percent"
      }
    },
    tariffs: {
      title: "Global Market Tariffs",
      subtitleRead: "Verified Cost View",
      subtitleEdit: "Manage Regional Tariffs",
      modify: "Modify Rates",
      finish: "Finish Editing",
      allMarkets: "All Markets",
      table: {
        dest: "Destination",
        base: "Base Rate",
        fees: "Fees",
        total: "Total Duty",
        integrity: "Source Integrity"
      },
      status: {
        locked: "Admin Locked",
        precision: "Precision Applied",
        default: "System Default"
      },
      infoRead: "Your account type is restricted to viewing cost data only.",
      infoEdit: "Precision rates are saved per product. Admin lock enforces mandated rates."
    },
    competitors: {
      title: "Competitor Intelligence",
      subtitle: "Market Analysis & Tracking",
      trackNew: "Track Competitor",
      pricePos: "Price Positioning",
      marketShare: "Market Share",
      pricePosition: "Price Positioning",
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
        origin: "Country of Origin",
        strength: "Core Strength"
      }
    },
    timeline: {
      title: "Product Launch Timeline",
      subtitle: "Critical Path Management",
      table: {
        phase: "Phase",
        time: "Timeline",
        region: "Region",
        activity: "Key Activity"
      }
    }
  },
  wizards: {
    common: {
      step: "Step {step} / {total}",
      nextStep: "Next",
      back: "Back",
      save: "Save",
      cancel: "Cancel",
      finish: "Finish",
      create: "Create",
      review: "Review",
      upload: "Upload",
      attach: "Attach",
      required: "Required",
      expressWorkflow: "Express Workflow",
      advancedWorkflow: "Advanced Workflow"
    },
    shipment: {
      title: "New Shipment",
      subtitle: "Logistics & Tracking Protocol",
      headers: {
        routeInfo: "Route Info",
        linkContext: "Link Context"
      },
      labels: {
        refId: "Reference ID",
        trackingNumber: "Tracking Number",
        carrier: "Carrier",
        type: "Type",
        method: "Transport Method",
        status: "Status",
        manager: "Manager",
        origin: "Origin",
        destination: "Destination",
        etd: "Departure Date",
        eta: "Est. Arrival",
        linkJob: "Link Job",
        linkSample: "Link Sample",
        toggleJob: "Job",
        toggleSample: "Sample"
      },
      placeholders: {
        trackingEx: "e.g. MSKU90123",
        managerName: "Manager Name",
        cityCountry: "City, Country",
        selectJob: "Select Job",
        selectSample: "Select Sample"
      },
      errors: {
        trackingRequired: "Tracking Required",
        managerRequired: "Manager Required",
        originRequired: "Origin Required",
        destRequired: "Destination Required",
        etaRequired: "ETA Required",
        linkJobRequired: "Job Link Required",
        linkSampleRequired: "Sample Link Required"
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
    job: {
      title: "New Production Order",
      subtitle: "Create Job Protocol",
      headers: {
        scope: "Scope",
        logistics: "Logistics",
        shipping: "Shipping"
      },
      labels: {
        jobId: "Job ID",
        jobName: "Job Name",
        poNumber: "PO Number",
        productModel: "Product",
        quantity: "Quantity",
        factory: "Factory",
        customer: "Customer",
        leadBuyer: "Lead Buyer",
        initialStage: "Initial Stage",
        priority: "Priority",
        description: "Description",
        partner: "Partner",
        startDate: "Start Date",
        targetDate: "Target Delivery",
        incoterms: "Incoterms",
        shippingMethod: "Shipping Method",
        destAddress: "Destination Address",
        paymentTerms: "Payment Terms",
        packInstr: "Packaging Instructions"
      },
      placeholders: {
        nameEx: "Order Name",
        poEx: "PO-2026...",
        unassigned: "Unassigned",
        buyerEx: "Buyer Name",
        descEx: "Notes...",
        whEx: "Warehouse",
        payEx: "30% Deposit",
        packEx: "Instructions..."
      },
      errors: {
        nameRequired: "Name Required",
        poRequired: "PO Required"
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
    sample: {
      title: "Request New Sample",
      subtitle: "Production or Counter Sample",
      labels: {
        id: "Request ID",
        type: "Sample Type",
        productModel: "Product",
        factory: "Factory",
        estSampleCost: "Est. Cost",
        estCourierCost: "Est. Courier",
        attachments: "Attachments",
        instructions: "Notes / Instructions"
      },
      placeholders: {
        noProducts: "No Products",
        noFactories: "No Factories",
        uploadCta: "Upload Files",
        notesEx: "Details..."
      },
      errors: {
        productRequired: "Product Required",
        factoryRequired: "Factory Required"
      },
      types: {
        "Counter Sample": "Counter",
        "Pre-Production": "Pre-Prod",
        "Top of Production": "TOP",
        "Photo Sample": "Photo",
        "Size Set": "Size Set"
      }
    },
    customer: {
      title: "New Customer",
      subtitle: "Onboarding",
      modes: {
        fast: "Fast",
        advanced: "Advanced"
      },
      headers: {
        identityContact: "Identity",
        bizLocation: "Location",
        corpIdentity: "Corp ID",
        contactPrefs: "Prefs",
        globalLoc: "Global",
        review: "Review"
      },
      labels: {
        internalId: "Internal ID",
        accountOwner: "Account Owner",
        companyName: "Company Name",
        contactPerson: "Contact Person",
        email: "Email",
        contactNo: "Phone",
        bizType: "Business Type",
        socialMedia: "Social Media",
        address: "Address",
        street: "Street",
        city: "City",
        state: "State",
        industry: "Industry",
        source: "Source",
        commPref: "Prefs",
        country: "Country",
        zip: "Zip",
        creatingFor: "Creating For"
      },
      placeholders: {
        salesRep: "Sales Rep",
        ifBlank: "Same if blank",
        selectType: "Select Type",
        selectPlatform: "Select Platform",
        socialEx: "@Handle",
        selectIndustry: "Select Industry",
        selectSource: "Select Source",
        typeCountry: "Enter Country...",
        unassigned: "Unassigned"
      },
      errors: {
        contactRequired: "Contact Required",
        emailRequired: "Email Required",
        phoneRequired: "Phone Required"
      },
      bizTypes: {
        "Importer": "Importer",
        "Influencer": "Influencer",
        "University/School": "University/School",
        "Corporation": "Corporation",
        "Non-Profit / Church / ORG.": "Non-Profit",
        "Online / Amazon Seller": "Online / Amazon",
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
    },
    supplier: {
      title: "Add Supplier",
      name: "Company Name",
      location: "Location",
      contact: "Contact Person",
      email: "Email",
      type: "Business Type"
    },
    newProduct: {
      title: "New Product Wizard",
      headers: {
        expressIdentity: "Identity",
        expressIdentityDesc: "Core Details",
        sourcingStrategy: "Sourcing",
        sourcingStrategyDesc: "Partner",
        basicSpecs: "Specs",
        basicSpecsDesc: "Attributes",
        roughCosting: "Costing",
        roughCostingDesc: "Economics",
        advConcept: "Concept",
        advConceptDesc: "Definition",
        advEngineering: "Engineering",
        advBOM: "BOM",
        advSourcing: "Sourcing",
        advCost: "Cost",
        advPackaging: "Packaging",
        reviewComplete: "Review",
        reviewDesc: "Complete"
      },
      labels: {
        productName: "Product Name",
        brand: "Brand",
        category: "Category",
        primarySupplier: "Supplier",
        originCountry: "Origin",
        moq: "MOQ",
        leadTime: "Lead Time",
        skuCode: "SKU",
        hsCode: "HS Code",
        materialComp: "Material",
        estFactoryCost: "Est Cost",
        description: "Desc",
        techPack: "Tech Pack",
        externalUrl: "URL",
        length: "Length",
        width: "Width",
        height: "Height",
        bomFile: "BOM File",
        materialNotes: "Notes",
        supplier: "Supplier",
        origin: "Origin",
        materialCost: "Mat. Cost",
        laborCost: "Labor",
        packaging: "Packaging",
        logistics: "Logistics",
        packagingType: "Pkg Type",
        masterCartonQty: "Carton Qty",
        unitWeight: "Weight"
      },
      placeholders: {
        nameEx: "Name",
        selectOrType: "Select...",
        selectFactory: "Factory...",
        autoGen: "Auto",
        hsEx: "0000.00",
        materialEx: "Material",
        retailSkip: "Skip",
        attachTechPack: "Attach",
        driveLink: "Link",
        attachBom: "Attach",
        matNotesEx: "Notes..."
      },
      errors: {
        nameRequired: "Required"
      },
      categories: {
        "Consumer Electronics": "Consumer Electronics",
        "Apparel & Clothing": "Apparel & Clothing",
        "Home & Garden": "Home & Garden",
        "Health & Beauty Products": "Health & Beauty",
        "Automotive Parts & Accessories": "Auto Parts",
        "Shoes & Footwear": "Footwear",
        "Bags, Luggage & Cases": "Bags & Luggage",
        "Jewelry & Watches": "Jewelry & Watches",
        "Toys & Games": "Toys & Games",
        "Sports & Outdoor Equipment": "Sports & Outdoors",
        "Lights & Lighting": "Lighting",
        "Tools & Hardware": "Tools & Hardware",
        "Pet Supplies": "Pet Supplies",
        "Office & School Supplies": "Office Supplies",
        "Packaging & Printing": "Packaging",
        "Electrical Equipment & Supplies": "Electrical",
        "Security & Surveillance": "Security",
        "Home Appliances": "Appliances",
        "Furniture": "Furniture",
        "Textiles & Fabrics": "Textiles",
        "Electronic Components": "Electronic Components",
        "Industrial Machinery": "Machinery",
        "Construction & Building Materials": "Building Materials",
        "Chemicals & Raw Materials": "Chemicals",
        "Food & Beverage Products": "Food & Beverage",
        "Medical & Healthcare Supplies": "Medical",
        "Gifts & Crafts": "Gifts",
        "Baby & Maternity Products": "Baby",
        "Fashion Accessories": "Fashion",
        "Renewable Energy Products": "Renewable Energy",
        "Telecommunications Equipment": "Telecom",
        "Agriculture & Food Processing": "Agriculture",
        "Instruments & Measurement Equipment": "Instruments",
        "Wedding & Event Supplies": "Events",
        "Cleaning & Hygiene Supplies": "Cleaning",
        "Musical Instruments & Equipment": "Music",
        "Cameras & Photography Equipment": "Cameras",
        "Vehicles & Transportation": "Vehicles",
        "Material Handling Equipment": "Material Handling",
        "Safety & Protection Equipment": "Safety"
      },
      packagingOptions: {
        "Polybag": "Polybag",
        "Retail Box": "Retail Box",
        "Custom": "Custom"
      }
    }
  },
  print: {
    common: {
      billTo: "Bill To",
      shipTo: "Ship To",
      contact: "Contact",
      email: "Email",
      phone: "Phone",
      date: "Date",
      page: "Page",
      authorizedSig: "Authorized Signature",
      generatedBy: "Generated By",
      terms: "Terms & Conditions"
    },
    order: {
      title: "Purchase Order",
      poNumber: "PO Number",
      vendor: "Vendor / Supplier",
      deliveryDate: "Delivery Date",
      incoterms: "Incoterms",
      item: "Item",
      description: "Description",
      qty: "Qty",
      unitPrice: "Unit Price",
      total: "Total",
      subtotal: "Subtotal",
      tax: "Tax",
      shipping: "Shipping",
      grandTotal: "Grand Total",
      notes: "Notes / Instructions"
    },
    sample: {
      title: "Sample Request Sheet",
      requestId: "Request ID",
      factory: "Factory",
      courier: "Courier",
      tracking: "Tracking Number",
      estCost: "Estimated Cost",
      details: "Sample Details"
    },
    shipment: {
      title: "Shipment Manifest",
      refId: "Reference ID",
      carrier: "Carrier",
      method: "Method",
      origin: "Origin",
      destination: "Destination",
      eta: "Est. Arrival",
      manifest: "Manifest Details"
    },
    customer: {
      title: "Customer Profile",
      profile: "Profile Overview",
      internalId: "Internal ID",
      region: "Region",
      accountOwner: "Account Owner",
      activeOrders: "Active Orders",
      totalValue: "Total Value"
    }
  },
  widgets: {
    clock: {
      title: "World Clock",
      localTime: "Local Time",
      businessHours: "Business Hours",
      open: "Open",
      closed: "Closed",
      timeZone: "Time Zone"
    },
    exchange: {
      title: "Exchange Rate",
      base: "Base",
      target: "Target",
      rate: "Rate"
    }
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
    teamGeneral: "General Team",
    copied: "Copied"
  },
  crm: {
    title: "Customer Directory",
    subtitle: "Manage client relationships and regions",
    search: "Search clients...",
    addCustomer: "Add Customer",
    accountActive: "Account Active"
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
    searchJobs: "Search Active Jobs...",
    refresh: "Refresh"
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
  }
};