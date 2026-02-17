
import { Translation } from '../types';

export const zhHant: Translation = {
  common: {
    save: "儲存",
    cancel: "取消",
    edit: "編輯",
    delete: "刪除",
    refresh: "重新整理",
    share: "分享",
    clickToEdit: "點擊編輯",
    copied: "已複製",
    search: "搜尋...",
    loading: "載入中...",
    actions: "操作",
    view: "檢視",
    export: "匯出",
    print: "列印",
    submit: "提交",
    next: "下一步",
    back: "返回",
    finish: "完成",
    command: "命令",
    close: "關閉",
    status: "狀態",
    date: "日期",
    user: "用戶",
    page: "頁面",
    file: "文件",
    action: "操作",
    select: "選擇",
    navigate: "導航",
    noResults: "未找到結果",
    noResultsDesc: "我們找不到任何匹配項。",
    searchPlaceholder: "搜尋文件、頁面或操作...",
    recent: "最近",
    navigation: "導航",
    notifications: "通知",
    settings: "設定",
    profile: "個人資料",
    logout: "登出",
    error: "錯誤"
  },
  nav: {
    dashboard: "儀表板",
    productCatalog: "產品目錄",
    productWorkspace: "工作區",
    factoryMaster: "供應商與工廠組合",
    production: "訂單管理",
    shopFloor: "生產車間",
    logistics: "物流塔",
    crm: "客戶名錄",
    collaboration: "協作中心",
    teamChat: "團隊聊天",
    admin: "管理",
    newProduct: "新增產品",
    analytics: "數據分析",
    sourcing: "採購管理",
    executionGroup: "執行中心",
    system: "系統設置",
    aiStrategist: "AI 策略師",
    calendar: "日曆",
    hub: "中心",
    exchange: "匯率"
  },
  // --- NEW: PERSONALIZATION & SECURITY HUB ---
  preferences: {
    title: "個人化與安全中心",
    security: "安全",
    currentPassword: "目前密碼",
    newPassword: "新密碼",
    confirmPassword: "確認密碼",
    changePassword: "修改密碼",
    accountType: "帳戶類型",
    roles: {
      viewer: "檢視者",
      editor: "編輯者",
      admin: "管理員",
      super_admin: "超級管理員",
      customer: "客戶"
    },
    roleHint: "請聯繫超級管理員以升級權限。"
  },
  // --- NEW: CALENDAR TRANSLATIONS ---
  calendar: {
    title: "約束日曆",
    subtitle: "全球生產與物流約束",
    addEvent: "新增約束 / 事件",
    addPlan: "新增計畫到日曆",
    calculator: "提前期計算器",
    eta: "預計到達時間 (ETA)",
    totalDays: "總天數",
    start: "開始日期",
    end: "結束日期",
    region: "地區",
    calculationFor: "計算對象",
    selectItem: "選擇項目",
    select: "選擇",
    quantity: "數量",
    destination: "目的地",
    enterCity: "輸入城市或港口...",
    breakdown: "明細 (天)",
    production: "生產",
    qualityCheck: "質檢",
    shipping: "運輸",
    customs: "報關",
    typeJob: "訂單",
    typeSample: "樣品",
    typeProduct: "產品",
    eventTitle: "事件標題",
    description: "描述",
    type: "類型",
    severity: "嚴重程度",
    startDate: "開始日期",
    endDate: "結束日期",
    linkRecord: "關聯記錄 (可選)",
    saveEvent: "儲存事件",
    types: {
      production: "生產",
      logistics: "物流",
      compliance: "合規",
      holiday: "假期",
      other: "其他"
    }
  },
  // --- NEW: CURRENCY WIDGET ---
  currency: {
    title: "匯率轉換器",
    base: "基礎貨幣",
    target: "目標貨幣",
    rate: "匯率",
    amount: "金額",
    result: "結果",
    converter: "轉換器",
    trend: "7日趨勢",
    live: "實時",
    viewGraph: "查看圖表",
    viewCalc: "查看計算器",
    trendingUp: "趨勢上升",
    trendingDown: "趨勢下降"
  },
  // --- ORDER MANAGER ---
  orderManager: {
    title: "訂單管理",
    newJob: "新增訂單",
    requestSample: "申請樣品",
    sampleTracker: "樣品追蹤",
    activeOrders: "活躍訂單",
    recordsFound: "找到記錄",
    printOrder: "列印訂單",
    editOrder: "編輯訂單詳情",
    jobName: "訂單名稱",
    factory: "工廠",
    customer: "客戶",
    status: "狀態",
    desc: "項目描述",
    quantity: "數量",
    deliveryDate: "交貨日期",
    incoterms: "國際貿易術語",
    packaging: "包裝要求",
    progress: "總體進度",
    exportPO: "導出 PO",
    emailFactory: "發送郵件給工廠",
    saveChanges: "儲存更改",
    tabs: {
      production: "生產",
      samples: "樣品"
    }
  },
  workspace: {
    title: "產品工作區",
    searchPlaceholder: "搜尋工作區...",
    newProduct: "新增產品",
    opsMode: "運營",
    strategyMode: "戰略",
    tabs: {
      specs: "規格",
      costing: "成本",
      tariffs: "關稅",
      hsLookup: "HS 查詢",
      exchange: "匯率",
      timeline: "時間表",
      scmAi: "SCM AI 策略師",
      competitors: "競爭分析",
      aiStrategy: "AI 策略"
    },
    header: {
      env: "全球環境",
      protocol: "運行協議",
      optimal: "系統最優"
    },
    specs: {
      title: "產品規格",
      subtitle: "工程控制與資產管理",
      mediaAssets: "媒體與資產",
      imageUrl: "產品圖片鏈接",
      cadLink: "3D模型 / CAD鏈接",
      internalId: "內部 ID",
      skuMatrix: "SKU 矩陣",
      addVariant: "添加新變體",
      table: {
        sku: "SKU 代碼",
        variant: "變體 / 尺寸",
        msrp: "目標零售價",
        actions: "操作"
      }
    },
    costing: {
      title: "智能成本引擎",
      subtitle: "到岸成本估算與利潤分析",
      structure: "成本結構 (單件)",
      logistics: "物流指標",
      profit: "利潤模擬器",
      fob: "FOB 小計 (工廠)",
      freight: "運費 (運輸)",
      duty: "進口關稅",
      total: "總到岸成本",
      volumetric: "體積重",
      chargeable: "計費重",
      payingVolume: "按體積計費，而非重量",
      targetRetail: "目標零售價",
      margin: "利潤率",
      netProfit: "淨利潤",
      addComponent: "添加成本組件",
      table: {
        component: "組件",
        value: "數值 (USD)",
        percent: "佔比"
      }
    },
    tariffs: {
      title: "全球市場關稅",
      subtitleRead: "已驗證成本視圖",
      subtitleEdit: "管理區域關稅",
      modify: "修改費率",
      finish: "完成編輯",
      allMarkets: "所有市場",
      table: {
        dest: "目的地",
        base: "基本費率",
        fees: "附加費",
        total: "總關稅",
        integrity: "來源完整性"
      },
      status: {
        locked: "管理員鎖定",
        precision: "精確應用",
        default: "系統默認"
      },
      infoRead: "您的帳戶類型僅可查看成本數據。",
      infoEdit: "精確費率按產品保存。管理員鎖定將強制使用規定費率。"
    },
    competitors: {
      title: "競爭對手情報",
      subtitle: "市場分析與追蹤",
      trackNew: "追蹤競爭對手",
      pricePos: "價格定位",
      marketShare: "市場份額",
      table: {
        brand: "品牌",
        price: "價格",
        origin: "原產地",
        strength: "優勢"
      },
      modal: {
        title: "追蹤新競爭對手",
        brand: "品牌名稱",
        price: "零售價 ($)",
        share: "預計份額 (%)",
        origin: "原產國",
        strength: "核心優勢"
      }
    },
    timeline: {
      title: "產品發布時間表",
      subtitle: "關鍵路徑管理",
      table: {
        phase: "階段",
        time: "時間線",
        region: "地區",
        activity: "主要活動"
      }
    }
  },
  print: {
    common: {
      billTo: "賬單地址",
      shipTo: "收貨地址",
      contact: "聯繫人",
      email: "電子郵箱",
      phone: "電話",
      date: "日期",
      page: "頁碼",
      authorizedSig: "授權簽名",
      generatedBy: "生成者",
      terms: "條款與條件"
    },
    order: {
      title: "採購訂單",
      poNumber: "PO 單號",
      vendor: "供應商",
      deliveryDate: "交貨日期",
      incoterms: "貿易術語",
      item: "項目",
      description: "描述",
      qty: "數量",
      unitPrice: "單價",
      total: "總計",
      subtotal: "小計",
      tax: "稅額",
      shipping: "運費",
      grandTotal: "累計總額",
      notes: "備註 / 說明"
    },
    sample: {
      title: "樣品申請單",
      requestId: "申請 ID",
      factory: "工廠",
      courier: "快遞",
      tracking: "追蹤單號",
      estCost: "預計成本",
      details: "樣品詳情"
    },
    shipment: {
      title: "貨運清單",
      refId: "參考 ID",
      carrier: "承運商",
      method: "運輸方式",
      origin: "始發地",
      destination: "目的地",
      eta: "預計到達",
      manifest: "清單詳情"
    },
    customer: {
      title: "客戶檔案",
      profile: "概況",
      internalId: "內部 ID",
      region: "區域",
      accountOwner: "客戶經理",
      activeOrders: "活躍訂單",
      totalValue: "總價值"
    }
  },
  widgets: {
    clock: {
      title: "世界時鐘",
      localTime: "當地時間",
      businessHours: "營業時間",
      open: "營業中",
      closed: "已關閉",
      timeZone: "時區"
    },
    exchange: {
      title: "匯率",
      base: "基礎貨幣",
      target: "目標貨幣",
      rate: "匯率"
    }
  },
  admin: {
    title: "管理面板",
    subtitle: "全球配置與身份管理",
    accessDenied: "訪問被拒絕",
    accessDeniedDesc: "機構協議限制此部分僅供管理賬戶使用。",
    deleteAccount: "刪除賬戶？",
    deleteConfirm: "您確定要刪除此用戶嗎？此操作不可逆。",
    timeSync: "全球時間同步",
    tabs: {
      system: "系統",
      users: "用戶",
      backup: "備份",
      audit: "審計",
      preferences: "偏好設置"
    },
    system: {
      dbStatus: "數據庫狀態",
      connected: "系統在線",
      version: "版本控制",
      matrix: "全球關稅矩陣"
    },
    users: {
      registerIdentity: "註冊身份",
      title: "用戶註冊表"
    },
    backup: {
      jsonTitle: "導出數據庫",
      jsonDesc: "下載完整系統快照",
      generate: "生成快照",
      restoreDB: "恢復數據庫",
      upload: "上傳並恢復"
    },
    audit: {
      exportCSV: "導出 CSV",
      logTitle: "安全機構日誌"
    }
  },
  teamChat: {
    title: "團隊聊天",
    channels: "頻道",
    directMessages: "私信",
    typing: "輸入中...",
    online: "在線",
    offline: "離線",
    shareVia: "分享至",
    recording: "錄音中...",
    cancel: "取消",
    typeMessage: "輸入消息...",
    deleteMsg: "刪除消息",
    teamGeneral: "綜合團隊"
  },
  crm: {
    title: "客戶名錄",
    subtitle: "管理客戶關係和區域",
    search: "搜尋客戶...",
    addCustomer: "添加客戶",
    accountActive: "賬戶活躍"
  },
  hub: {
    title: "協作中心",
    subtitle: "全球留言板",
    newThread: "新話題",
    startNewThread: "開始新話題",
    topic: "話題",
    message: "消息",
    selectCustomer: "選擇客戶...",
    startConversation: "選擇一個話題開始協作",
    initialMessage: "初始消息...",
    pinThread: "固定話題",
    unpinThread: "取消固定話題",
    clearHistory: "清除歷史",
    participants: "參與者",
    linkType: "鏈接類型",
    selectItem: "選擇項目..."
  },
  logistics: {
    title: "物流塔",
    subtitle: "實時貨運追蹤",
    inboundAir: "空運",
    inboundOcean: "海運",
    customsHold: "海關扣留",
    activeUnits: "單位",
    nextArrival: "下次到達",
    loadSimulation: "加載模擬",
    sortBy: "按預計到達時間排序",
    addShipment: "添加運輸",
    editShipment: "編輯運輸",
    saveChanges: "保存更改"
  },
  shopFloor: {
    title: "生產車間遙測",
    connected: "已連接",
    standby: "工位待機",
    activeStream: "活躍流",
    killConnection: "斷開連接",
    syncLine: "同步產線狀態",
    efficiencyMatrix: "實時效率矩陣",
    oee: "設備綜合效率 (OEE)",
    target: "目標",
    envSensors: "環境傳感器",
    alerts: "診斷警報",
    queueStatus: "生產隊列狀態",
    liveTracking: "實時工廠吞吐量追蹤",
    searchJobs: "搜尋活躍訂單..."
  },
  factory: {
    title: "供應商與工廠組合",
    subtitle: "全球製造網絡",
    explorer: "組合瀏覽器",
    partners: "活躍製造合作夥伴",
    search: "搜尋...",
    addBtn: "添加供應商",
    viewAudit: "查看審計",
    supplierId: "供應商身份",
    location: "地點",
    status: "狀態",
    actions: "操作",
    noResults: "未找到結果"
  },
  catalog: {
    subtitle: "全球 SKU 目錄",
    allCategories: "所有類別"
  },
  dashboard: {
    title: "運營儀表板",
    subtitle: "全球供應鏈脈動",
    activeJobs: "活躍訂單",
    globalSkus: "全球 SKU",
    inventoryVal: "庫存價值",
    supplierHealth: "供應商健康度",
    recentActivity: "近期活動",
    viewAll: "查看全部",
    logisticsControl: "物流控制",
    openLogistics: "打開物流塔",
    refreshPulse: "刷新脈動",
    totalRevenue: "總收入",
    activeOrders: "活躍訂單",
    pendingShipments: "待發貨",
    productionEfficiency: "生產效率",
    revenueVsCost: "收入與成本"
  },
  login: {
    subtitle: "企業級供應鏈管理器",
    email: "電子郵件地址",
    password: "密碼",
    loginBtn: "安全登錄",
    forgot: "忘記密碼？",
    quickAccess: "或快速訪問 (開發)",
    sendCode: "發送重置代碼",
    backToLogin: "返回登錄",
    verifyCode: "驗證代碼",
    resend: "重新發送代碼",
    setPass: "設置新密碼"
  },
  hsLookup: {
    title: "精確 HS 查詢",
    subtitle: "全球分類與合規",
    searchPlaceholder: "例如：不鏽鋼保溫旅行杯",
    analyze: "分析中...",
    identify: "識別",
    code: "推薦 HS 編碼",
    detectedRate: "檢測稅率",
    description: "描述",
    dutyClass: "關稅分類",
    aiLogic: "AI 報關邏輯",
    applyTo: "應用到",
    locked: "精確費率已鎖定"
  },
  search: {
    placeholder: "搜尋...",
    quickActions: "快速操作",
    noResults: "未找到結果。",
    commands: {
      newProduct: "新增產品",
      newOrder: "新增訂單",
      goDashboard: "前往儀表板",
      goSettings: "前往設定"
    }
  },
  // --- WIZARDS (ALL) ---
  wizards: {
    common: {
      step: "第 {step} 步 / 共 {total} 步",
      expressWorkflow: "快速流程",
      advancedWorkflow: "進階流程",
      nextStep: "下一步",
      back: "返回",
      cancel: "取消",
      create: "建立",
      review: "審核",
      upload: "上傳文件",
      attach: "添加附件",
      required: "必填",
      save: "儲存"
    },
    shipment: {
      title: "創建新貨運",
      subtitle: "物流與追蹤協議",
      headers: {
        routeInfo: "路線信息",
        linkContext: "關聯背景"
      },
      labels: {
        refId: "貨運參考 ID",
        trackingNumber: "追蹤單號",
        carrier: "承運商",
        type: "貨運類型",
        method: "運輸方式",
        status: "當前狀態",
        manager: "客戶經理",
        origin: "始發地",
        destination: "目的地",
        etd: "預計出發 (ETD)",
        eta: "預計到達 (ETA)",
        linkJob: "關聯生產訂單",
        linkSample: "關聯樣品請求",
        toggleJob: "生產訂單",
        toggleSample: "樣品請求"
      },
      placeholders: {
        trackingEx: "例如 MSKU901283",
        managerName: "經理姓名",
        cityCountry: "城市, 國家",
        selectJob: "選擇活躍訂單...",
        selectSample: "選擇樣品請求..."
      },
      errors: {
        trackingRequired: "追蹤單號必填",
        managerRequired: "客戶經理必填",
        originRequired: "始發地必填",
        destRequired: "目的地必填",
        etaRequired: "ETA 必填",
        linkJobRequired: "請關聯一個訂單",
        linkSampleRequired: "請關聯一個樣品請求"
      },
      methods: {
        "Air": "空運",
        "Ocean": "海運 (Ocean)",
        "Sea": "海運 (Sea)",
        "Rail": "鐵路",
        "Truck": "陸運/卡車"
      },
      statuses: {
        "Booked": "已訂艙",
        "In Transit": "運輸中",
        "Customs": "清關中",
        "Delivered": "已送達",
        "Exception": "異常"
      },
      accountTypes: {
        "Usuppli/Axcess": "Usuppli/Axcess 內部",
        "Existing Customer": "現有客戶",
        "New Customer": "新客戶"
      }
    },
    sample: {
      title: "請求新樣品",
      subtitle: "生產樣或確認樣",
      labels: {
        id: "樣品請求 ID (自動)",
        type: "樣品類型",
        productModel: "產品型號",
        factory: "工廠",
        estSampleCost: "預計樣品費 ($)",
        estCourierCost: "預計快遞費 ($)",
        attachments: "附件",
        instructions: "說明 / 備註"
      },
      placeholders: {
        noProducts: "未找到產品",
        noFactories: "未找到工廠",
        uploadCta: "點擊上傳規格書、圖紙或 PDF",
        notesEx: "描述此樣品的具體更改或細節..."
      },
      errors: {
        productRequired: "請選擇產品型號",
        factoryRequired: "請選擇工廠"
      },
      types: {
        "Counter Sample": "確認樣 (Counter)",
        "Pre-Production": "產前樣 (PP)",
        "Top of Production": "大貨樣 (TOP)",
        "Photo Sample": "拍攝樣",
        "Size Set": "跳碼樣 (Size Set)"
      }
    },
    job: {
      title: "新生產訂單",
      subtitle: "創建作業協議 v2.67",
      headers: {
        scope: "產品與客戶",
        logistics: "物流與執行",
        shipping: "運輸與財務"
      },
      labels: {
        jobId: "內部訂單 ID (自動)",
        jobName: "訂單名稱 / 參考",
        poNumber: "採購訂單號 (PO)",
        productModel: "產品型號",
        quantity: "數量",
        customer: "客戶 (可選)",
        leadBuyer: "首席採購員",
        initialStage: "初始階段",
        priority: "優先級",
        description: "項目描述",
        partner: "製造合作夥伴 (工廠)",
        startDate: "訂單開始日期",
        targetDate: "目標出廠日期",
        incoterms: "國際貿易術語",
        shippingMethod: "運輸方式",
        destAddress: "目的地地址",
        paymentTerms: "付款條款",
        packInstr: "包裝說明"
      },
      placeholders: {
        nameEx: "例如：夏季系列批次 A",
        poEx: "PO-2026-...",
        unassigned: "未分配庫存",
        buyerEx: "採購員姓名",
        descEx: "關於此訂單的內部備註...",
        whEx: "倉庫 / 港口",
        payEx: "例如：30% 定金",
        packEx: "紙箱標記、膠袋細節、貼紙要求..."
      },
      errors: {
        nameRequired: "訂單名稱必填",
        poRequired: "PO 号必填"
      },
      stages: {
        "Inquiry": "詢價",
        "Costing": "核價",
        "Sampling": "打樣",
        "Production": "生產"
      },
      priorities: {
        "Low": "低",
        "Medium": "中",
        "High": "高",
        "Urgent": "緊急"
      }
    },
    customer: {
      title: "新客戶入駐",
      subtitle: "客戶獲取協議 v3.0",
      modes: {
        fast: "快速通道 (銷售)",
        advanced: "進階通道 (運營)"
      },
      headers: {
        identityContact: "步驟 1：身份與聯繫方式",
        bizLocation: "步驟 2：業務與位置",
        corpIdentity: "企業身份",
        contactPrefs: "聯繫方式與偏好",
        globalLoc: "全球位置",
        review: "審核與創建"
      },
      labels: {
        internalId: "內部 ID",
        accountOwner: "客戶經理",
        companyName: "公司名稱",
        contactPerson: "聯繫人",
        email: "電子郵箱",
        contactNo: "聯繫電話",
        bizType: "業務類型",
        socialMedia: "社交媒體",
        address: "地址",
        street: "街道地址",
        city: "城市",
        state: "省/州",
        industry: "所屬行業",
        source: "客戶來源",
        commPref: "溝通偏好",
        country: "國家/地區",
        zip: "郵編",
        creatingFor: "正在創建活躍客戶記錄："
      },
      placeholders: {
        salesRep: "銷售代表姓名",
        ifBlank: "如為空，則同聯繫人",
        selectType: "選擇類型",
        selectPlatform: "選擇平台",
        socialEx: "例如 @MyHandle",
        selectIndustry: "選擇行業",
        selectSource: "選擇來源",
        typeCountry: "輸入國家名稱...",
        unassigned: "未分配"
      },
      errors: {
        contactRequired: "聯繫人必填",
        emailRequired: "郵箱必填",
        phoneRequired: "電話號碼必填"
      },
      bizTypes: {
        "Importer": "進口商",
        "Influencer": "網紅/KOL",
        "University/School": "大學/學校",
        "Corporation": "企業",
        "Non-Profit / Church / ORG.": "非營利組織",
        "Online / Amazon Seller": "電商/亞馬遜賣家",
        "Small Business": "小型企業"
      },
      industries: {
        "Non-Profit": "非營利",
        "Military": "軍事/國防",
        "Government": "政府",
        "Retail": "零售",
        "Manufacturing": "製造",
        "Other": "其他"
      },
      sources: {
        "Referral": "推薦",
        "Trade Show": "展會",
        "Other": "其他"
      }
    },
    // --- NEW: SUPPLIER WIZARD ---
    supplier: {
      title: "新增供應商",
      name: "公司名稱",
      location: "地點",
      contact: "聯絡人",
      email: "電子郵件",
      type: "業務類型"
    },
    // --- NEW: NEW PRODUCT WIZARD (Already present, ensuring consistency) ---
    newProduct: {
      title: "新產品嚮導",
      headers: {
        expressIdentity: "快速識別",
        expressIdentityDesc: "快速定義核心產品細節。",
        sourcingStrategy: "採購策略",
        sourcingStrategyDesc: "指派製造合作夥伴。",
        basicSpecs: "基本規格",
        basicSpecsDesc: "基本屬性。",
        roughCosting: "粗略成本估算",
        roughCostingDesc: "預計單位經濟效益（可選）。",
        advConcept: "進階：概念",
        advConceptDesc: "詳細的產品定義。",
        advEngineering: "進階：工程",
        advBOM: "進階：物料清單 (BOM)",
        advSourcing: "進階：採購",
        advCost: "進階：成本明細",
        advPackaging: "進階：包裝",
        reviewComplete: "審核完成",
        reviewDesc: "所有進階規格已捕獲。"
      },
      labels: {
        productName: "產品名稱",
        brand: "品牌",
        category: "類別",
        primarySupplier: "主要供應商",
        originCountry: "原產國",
        moq: "最小起訂量 (MOQ)",
        leadTime: "交貨週期",
        skuCode: "SKU 代碼",
        hsCode: "海關編碼 (HS Code)",
        materialComp: "材質成分",
        estFactoryCost: "預計工廠成本 ($)",
        description: "描述",
        techPack: "技術包",
        externalUrl: "外部鏈接",
        length: "長 (cm)",
        width: "寬 (cm)",
        height: "高 (cm)",
        bomFile: "BOM 文件",
        materialNotes: "材質備註",
        supplier: "供應商",
        origin: "原產地",
        materialCost: "材料成本",
        laborCost: "人工成本",
        packaging: "包裝",
        logistics: "物流",
        packagingType: "包裝類型",
        masterCartonQty: "主箱數量",
        unitWeight: "單位重量 (kg)"
      },
      placeholders: {
        nameEx: "例如：無線耳機",
        selectOrType: "選擇或輸入...",
        selectFactory: "選擇工廠...",
        autoGen: "AUTO-GEN",
        hsEx: "0000.00.00",
        materialEx: "例如：100% 棉",
        retailSkip: "快速模式跳過零售價。",
        attachTechPack: "添加技術包 (PDF)",
        driveLink: "https://drive...",
        attachBom: "添加 BOM (.XLS)",
        matNotesEx: "1. 主面料：100% 棉，220gsm..."
      },
      errors: {
        nameRequired: "產品名稱為必填項"
      },
      categories: {
        "Consumer Electronics": "消費電子",
        "Apparel & Clothing": "服裝與服飾",
        "Home & Garden": "家居與園藝",
        "Health & Beauty Products": "健康與美容",
        "Automotive Parts & Accessories": "汽配與附件",
        "Shoes & Footwear": "鞋靴",
        "Bags, Luggage & Cases": "箱包",
        "Jewelry & Watches": "珠寶與手錶",
        "Toys & Games": "玩具與遊戲",
        "Sports & Outdoor Equipment": "運動與戶外",
        "Lights & Lighting": "照明燈具",
        "Tools & Hardware": "五金工具",
        "Pet Supplies": "寵物用品",
        "Office & School Supplies": "辦公與文具",
        "Packaging & Printing": "包裝與印刷",
        "Electrical Equipment & Supplies": "電氣設備",
        "Security & Surveillance": "安防監控",
        "Home Appliances": "家用電器",
        "Furniture": "家具",
        "Textiles & Fabrics": "紡織面料",
        "Electronic Components": "電子元器件",
        "Industrial Machinery": "工業機械",
        "Construction & Building Materials": "建築材料",
        "Chemicals & Raw Materials": "化工原料",
        "Food & Beverage Products": "食品飲料",
        "Medical & Healthcare Supplies": "醫療保健",
        "Gifts & Crafts": "禮品工藝品",
        "Baby & Maternity Products": "母嬰用品",
        "Fashion Accessories": "時尚配飾",
        "Renewable Energy Products": "新能源產品",
        "Telecommunications Equipment": "通訊設備",
        "Agriculture & Food Processing": "農業與食品加工",
        "Instruments & Measurement Equipment": "儀器儀表",
        "Wedding & Event Supplies": "婚慶用品",
        "Cleaning & Hygiene Supplies": "清潔衛生",
        "Musical Instruments & Equipment": "樂器",
        "Cameras & Photography Equipment": "攝影器材",
        "Vehicles & Transportation": "車輛運輸",
        "Material Handling Equipment": "物料搬運",
        "Safety & Protection Equipment": "安全防護"
      },
      packagingOptions: {
        "Polybag": "塑料袋",
        "Retail Box": "零售彩盒",
        "Custom": "定制包裝"
      }
    }
  }
};