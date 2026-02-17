
import { Translation } from '../types';

export const zhHans: Translation = {
  common: {
    save: "保存",
    cancel: "取消",
    edit: "编辑",
    delete: "删除",
    refresh: "刷新",
    share: "分享",
    clickToEdit: "点击编辑",
    copied: "已复制到剪贴板",
    search: "搜索...",
    loading: "加载中...",
    actions: "操作",
    view: "查看",
    export: "导出",
    print: "打印",
    submit: "提交",
    next: "下一步",
    back: "返回",
    finish: "完成",
    command: "命令",
    close: "关闭",
    status: "状态",
    date: "日期",
    user: "用户",
    page: "页面",
    file: "文件",
    action: "操作",
    select: "选择",
    navigate: "导航",
    noResults: "未找到结果",
    noResultsDesc: "我们找不到任何匹配项。",
    searchPlaceholder: "搜索文件、页面或操作...",
    recent: "最近",
    navigation: "导航",
    notifications: "通知",
    settings: "设置",
    profile: "个人资料",
    logout: "登出",
    error: "错误"
  },
  nav: {
    dashboard: "仪表板",
    productCatalog: "产品目录",
    productWorkspace: "工作区",
    factoryMaster: "供应商与工厂组合",
    production: "订单管理",
    shopFloor: "生产车间",
    logistics: "物流塔",
    crm: "客户名录",
    collaboration: "协作中心",
    teamChat: "团队聊天",
    admin: "管理",
    newProduct: "新增产品",
    analytics: "数据分析",
    sourcing: "采购管理",
    executionGroup: "执行中心",
    system: "系统设置",
    aiStrategist: "AI 策略师",
    calendar: "日历",
    hub: "中心",
    exchange: "汇率"
  },
  // --- NEW: PERSONALIZATION & SECURITY HUB ---
  preferences: {
    title: "个性化与安全中心",
    security: "安全",
    currentPassword: "当前密码",
    newPassword: "新密码",
    confirmPassword: "确认密码",
    changePassword: "修改密码",
    accountType: "账户类型",
    roles: {
      viewer: "查看者",
      editor: "编辑者",
      admin: "管理员",
      super_admin: "超级管理员",
      customer: "客户"
    },
    roleHint: "请联系超级管理员以升级权限。"
  },
  // --- NEW: CALENDAR TRANSLATIONS ---
  calendar: {
    title: "约束日历",
    subtitle: "全球生产与物流约束",
    addEvent: "添加约束 / 事件",
    addPlan: "添加计划到日历",
    calculator: "提前期计算器",
    eta: "预计到达时间 (ETA)",
    totalDays: "总天数",
    start: "开始日期",
    end: "结束日期",
    region: "地区",
    calculationFor: "计算对象",
    selectItem: "选择项目",
    select: "选择",
    quantity: "数量",
    destination: "目的地",
    enterCity: "输入城市或港口...",
    breakdown: "明细 (天)",
    production: "生产",
    qualityCheck: "质检",
    shipping: "运输",
    customs: "报关",
    typeJob: "订单",
    typeSample: "样品",
    typeProduct: "产品",
    eventTitle: "事件标题",
    description: "描述",
    type: "类型",
    severity: "严重程度",
    startDate: "开始日期",
    endDate: "结束日期",
    linkRecord: "关联记录 (可选)",
    saveEvent: "保存事件",
    types: {
      production: "生产",
      logistics: "物流",
      compliance: "合规",
      holiday: "假期",
      other: "其他"
    }
  },
  // --- NEW: CURRENCY WIDGET ---
  currency: {
    title: "汇率转换器",
    base: "基础货币",
    target: "目标货币",
    rate: "汇率",
    amount: "金额",
    result: "结果",
    converter: "转换器",
    trend: "7日趋势",
    live: "实时",
    viewGraph: "查看图表",
    viewCalc: "查看计算器",
    trendingUp: "趋势上升",
    trendingDown: "趋势下降"
  },
  // --- ORDER MANAGER ---
  orderManager: {
    title: "订单管理",
    newJob: "新增订单",
    requestSample: "申请样品",
    sampleTracker: "样品追踪",
    activeOrders: "活跃订单",
    recordsFound: "找到记录",
    printOrder: "打印订单",
    editOrder: "编辑订单详情",
    jobName: "订单名称",
    factory: "工厂",
    customer: "客户",
    status: "状态",
    desc: "项目描述",
    quantity: "数量",
    deliveryDate: "交货日期",
    incoterms: "国际贸易术语",
    packaging: "包装要求",
    progress: "总体进度",
    exportPO: "导出 PO",
    emailFactory: "发送邮件给工厂",
    saveChanges: "保存更改",
    tabs: {
      production: "生产",
      samples: "样品"
    }
  },
  workspace: {
    title: "产品工作区",
    searchPlaceholder: "搜索工作区...",
    newProduct: "新建产品",
    opsMode: "运营",
    strategyMode: "战略",
    tabs: {
      specs: "规格",
      costing: "成本",
      tariffs: "关税",
      hsLookup: "HS 查询",
      exchange: "汇率",
      timeline: "时间表",
      scmAi: "SCM AI 策略师",
      competitors: "竞争分析",
      aiStrategy: "AI 策略"
    },
    header: {
      env: "全球环境",
      protocol: "运行协议",
      optimal: "系统最优"
    },
    specs: {
      title: "产品规格",
      subtitle: "工程控制与资产管理",
      mediaAssets: "媒体与资产",
      imageUrl: "产品图片链接",
      cadLink: "3D模型 / CAD链接",
      internalId: "内部 ID",
      skuMatrix: "SKU 矩阵",
      addVariant: "添加新变体",
      table: {
        sku: "SKU 代码",
        variant: "变体 / 尺寸",
        msrp: "目标零售价",
        actions: "操作"
      }
    },
    costing: {
      title: "智能成本引擎",
      subtitle: "到岸成本估算与利润分析",
      structure: "成本结构 (单件)",
      logistics: "物流指标",
      profit: "利润模拟器",
      fob: "FOB 小计 (工厂)",
      freight: "运费 (运输)",
      duty: "进口关税",
      total: "总到岸成本",
      volumetric: "体积重",
      chargeable: "计费重",
      payingVolume: "按体积计费，而非重量",
      targetRetail: "目标零售价",
      margin: "利润率",
      netProfit: "净利润",
      addComponent: "添加成本组件",
      table: {
        component: "组件",
        value: "数值 (USD)",
        percent: "占比"
      }
    },
    tariffs: {
      title: "全球市场关税",
      subtitleRead: "已验证成本视图",
      subtitleEdit: "管理区域关税",
      modify: "修改费率",
      finish: "完成编辑",
      allMarkets: "所有市场",
      table: {
        dest: "目的地",
        base: "基本费率",
        fees: "附加费",
        total: "总关税",
        integrity: "来源完整性"
      },
      status: {
        locked: "管理员锁定",
        precision: "精确应用",
        default: "系统默认"
      },
      infoRead: "您的账户类型仅可查看成本数据。",
      infoEdit: "精确费率按产品保存。管理员锁定将强制使用规定费率。"
    },
    competitors: {
      title: "竞争对手情报",
      subtitle: "市场分析与追踪",
      trackNew: "追踪竞争对手",
      pricePos: "价格定位",
      marketShare: "市场份额",
      table: {
        brand: "品牌",
        price: "价格",
        origin: "原产地",
        strength: "优势"
      },
      modal: {
        title: "追踪新竞争对手",
        brand: "品牌名称",
        price: "零售价 ($)",
        share: "预计份额 (%)",
        origin: "原产国",
        strength: "核心优势"
      }
    },
    timeline: {
      title: "产品发布时间表",
      subtitle: "关键路径管理",
      table: {
        phase: "阶段",
        time: "时间线",
        region: "地区",
        activity: "主要活动"
      }
    }
  },
  print: {
    common: {
      billTo: "账单地址",
      shipTo: "收货地址",
      contact: "联系人",
      email: "电子邮箱",
      phone: "电话",
      date: "日期",
      page: "页码",
      authorizedSig: "授权签名",
      generatedBy: "生成者",
      terms: "条款与条件"
    },
    order: {
      title: "采购订单",
      poNumber: "PO 单号",
      vendor: "供应商",
      deliveryDate: "交货日期",
      incoterms: "贸易术语",
      item: "项目",
      description: "描述",
      qty: "数量",
      unitPrice: "单价",
      total: "总计",
      subtotal: "小计",
      tax: "税额",
      shipping: "运费",
      grandTotal: "累计总额",
      notes: "备注 / 说明"
    },
    sample: {
      title: "样品申请单",
      requestId: "申请 ID",
      factory: "工厂",
      courier: "快递",
      tracking: "追踪单号",
      estCost: "预计成本",
      details: "样品详情"
    },
    shipment: {
      title: "货运清单",
      refId: "参考 ID",
      carrier: "承运商",
      method: "运输方式",
      origin: "始发地",
      destination: "目的地",
      eta: "预计到达",
      manifest: "清单详情"
    },
    customer: {
      title: "客户档案",
      profile: "概况",
      internalId: "内部 ID",
      region: "区域",
      accountOwner: "客户经理",
      activeOrders: "活跃订单",
      totalValue: "总价值"
    }
  },
  widgets: {
    clock: {
      title: "世界时钟",
      localTime: "当地时间",
      businessHours: "营业时间",
      open: "营业中",
      closed: "已关闭",
      timeZone: "时区"
    },
    exchange: {
      title: "汇率",
      base: "基础货币",
      target: "目标货币",
      rate: "汇率"
    }
  },
  admin: {
    title: "管理面板",
    subtitle: "全球配置与身份管理",
    accessDenied: "访问被拒绝",
    accessDeniedDesc: "机构协议限制此部分仅供管理账户使用。",
    deleteAccount: "删除账户？",
    deleteConfirm: "您确定要删除此用户吗？此操作不可逆。",
    timeSync: "全球时间同步",
    tabs: {
      system: "系统",
      users: "用户",
      backup: "备份",
      audit: "审计",
      preferences: "偏好设置"
    },
    system: {
      dbStatus: "数据库状态",
      connected: "系统在线",
      version: "版本控制",
      matrix: "全球关税矩阵"
    },
    users: {
      registerIdentity: "注册身份",
      title: "用户注册表"
    },
    backup: {
      jsonTitle: "导出数据库",
      jsonDesc: "下载完整系统快照",
      generate: "生成快照",
      restoreDB: "恢复数据库",
      upload: "上传并恢复"
    },
    audit: {
      exportCSV: "导出 CSV",
      logTitle: "安全机构日志"
    }
  },
  teamChat: {
    title: "团队聊天",
    channels: "频道",
    directMessages: "私信",
    typing: "输入中...",
    online: "在线",
    offline: "离线",
    shareVia: "分享至",
    recording: "录音中...",
    cancel: "取消",
    typeMessage: "输入消息...",
    deleteMsg: "删除消息",
    teamGeneral: "综合团队"
  },
  crm: {
    title: "客户名录",
    subtitle: "管理客户关系和区域",
    search: "搜索客户...",
    addCustomer: "添加客户",
    accountActive: "账户活跃"
  },
  hub: {
    title: "协作中心",
    subtitle: "全球留言板",
    newThread: "新话题",
    startNewThread: "开始新话题",
    topic: "话题",
    message: "消息",
    selectCustomer: "选择客户...",
    startConversation: "选择一个话题开始协作",
    initialMessage: "初始消息...",
    pinThread: "固定话题",
    unpinThread: "取消固定话题",
    clearHistory: "清除历史",
    participants: "参与者",
    linkType: "链接类型",
    selectItem: "选择项目..."
  },
  logistics: {
    title: "物流塔",
    subtitle: "实时货运追踪",
    inboundAir: "空运",
    inboundOcean: "海运",
    customsHold: "海关扣留",
    activeUnits: "单位",
    nextArrival: "下次到达",
    loadSimulation: "加载模拟",
    sortBy: "按预计到达时间排序",
    addShipment: "添加运输",
    editShipment: "编辑运输",
    saveChanges: "保存更改"
  },
  shopFloor: {
    title: "生产车间遥测",
    connected: "已连接",
    standby: "工位待机",
    activeStream: "活跃流",
    killConnection: "断开连接",
    syncLine: "同步产线状态",
    efficiencyMatrix: "实时效率矩阵",
    oee: "设备综合效率 (OEE)",
    target: "目标",
    envSensors: "环境传感器",
    alerts: "诊断警报",
    queueStatus: "生产队列状态",
    liveTracking: "实时工厂吞吐量追踪",
    searchJobs: "搜索活跃订单..."
  },
  factory: {
    title: "供应商与工厂组合",
    subtitle: "全球制造网络",
    explorer: "组合浏览器",
    partners: "活跃制造合作伙伴",
    search: "搜索...",
    addBtn: "添加供应商",
    viewAudit: "查看审计",
    supplierId: "供应商身份",
    location: "地点",
    status: "状态",
    actions: "操作",
    noResults: "未找到结果"
  },
  catalog: {
    subtitle: "全球 SKU 目录",
    allCategories: "所有类别"
  },
  dashboard: {
    title: "运营仪表板",
    subtitle: "全球供应链脉动",
    activeJobs: "活跃订单",
    globalSkus: "全球 SKU",
    inventoryVal: "库存价值",
    supplierHealth: "供应商健康度",
    recentActivity: "近期活动",
    viewAll: "查看全部",
    logisticsControl: "物流控制",
    openLogistics: "打开物流塔",
    refreshPulse: "刷新脉动",
    totalRevenue: "总收入",
    activeOrders: "活跃订单",
    pendingShipments: "待发货",
    productionEfficiency: "生产效率",
    revenueVsCost: "收入与成本"
  },
  login: {
    subtitle: "企业级供应链管理器",
    email: "电子邮件地址",
    password: "密码",
    loginBtn: "安全登录",
    forgot: "忘记密码？",
    quickAccess: "或快速访问 (开发)",
    sendCode: "发送重置代码",
    backToLogin: "返回登录",
    verifyCode: "验证代码",
    resend: "重新发送代码",
    setPass: "设置新密码"
  },
  hsLookup: {
    title: "精确 HS 查询",
    subtitle: "全球分类与合规",
    searchPlaceholder: "例如：不锈钢保温旅行杯",
    analyze: "分析中...",
    identify: "识别",
    code: "推荐 HS 编码",
    detectedRate: "检测税率",
    description: "描述",
    dutyClass: "关税分类",
    aiLogic: "AI 报关逻辑",
    applyTo: "应用到",
    locked: "精确费率已锁定"
  },
  search: {
    placeholder: "搜索...",
    quickActions: "快速操作",
    noResults: "未找到结果。",
    commands: {
      newProduct: "新建产品",
      newOrder: "新建订单",
      goDashboard: "前往仪表盘",
      goSettings: "前往设置"
    }
  },
  // --- WIZARDS (ALL) ---
  wizards: {
    common: {
      step: "第 {step} 步 / 共 {total} 步",
      expressWorkflow: "快速流程",
      advancedWorkflow: "高级流程",
      nextStep: "下一步",
      back: "返回",
      cancel: "取消",
      create: "创建",
      review: "审核",
      upload: "上传文件",
      attach: "添加附件",
      required: "必填",
      save: "保存"
    },
    shipment: {
      title: "创建新货运",
      subtitle: "物流与追踪协议",
      headers: {
        routeInfo: "路线信息",
        linkContext: "关联背景"
      },
      labels: {
        refId: "货运参考 ID",
        trackingNumber: "追踪单号",
        carrier: "承运商",
        type: "货运类型",
        method: "运输方式",
        status: "当前状态",
        manager: "客户经理",
        origin: "始发地",
        destination: "目的地",
        etd: "预计出发 (ETD)",
        eta: "预计到达 (ETA)",
        linkJob: "关联生产订单",
        linkSample: "关联样品请求",
        toggleJob: "生产订单",
        toggleSample: "样品请求"
      },
      placeholders: {
        trackingEx: "例如 MSKU901283",
        managerName: "经理姓名",
        cityCountry: "城市, 国家",
        selectJob: "选择活跃订单...",
        selectSample: "选择样品请求..."
      },
      errors: {
        trackingRequired: "追踪单号必填",
        managerRequired: "客户经理必填",
        originRequired: "始发地必填",
        destRequired: "目的地必填",
        etaRequired: "ETA 必填",
        linkJobRequired: "请关联一个订单",
        linkSampleRequired: "请关联一个样品请求"
      },
      methods: {
        "Air": "空运",
        "Ocean": "海运 (Ocean)",
        "Sea": "海运 (Sea)",
        "Rail": "铁路",
        "Truck": "陆运/卡车"
      },
      statuses: {
        "Booked": "已订舱",
        "In Transit": "运输中",
        "Customs": "清关中",
        "Delivered": "已送达",
        "Exception": "异常"
      },
      accountTypes: {
        "Usuppli/Axcess": "Usuppli/Axcess 内部",
        "Existing Customer": "现有客户",
        "New Customer": "新客户"
      }
    },
    sample: {
      title: "请求新样品",
      subtitle: "生产样或确认样",
      labels: {
        id: "样品请求 ID (自动)",
        type: "样品类型",
        productModel: "产品型号",
        factory: "工厂",
        estSampleCost: "预计样品费 ($)",
        estCourierCost: "预计快递费 ($)",
        attachments: "附件",
        instructions: "说明 / 备注"
      },
      placeholders: {
        noProducts: "未找到产品",
        noFactories: "未找到工厂",
        uploadCta: "点击上传规格书、图纸或 PDF",
        notesEx: "描述此样品的具体更改或细节..."
      },
      errors: {
        productRequired: "请选择产品型号",
        factoryRequired: "请选择工厂"
      },
      types: {
        "Counter Sample": "确认样 (Counter)",
        "Pre-Production": "产前样 (PP)",
        "Top of Production": "大货样 (TOP)",
        "Photo Sample": "拍摄样",
        "Size Set": "跳码样 (Size Set)"
      }
    },
    job: {
      title: "新生产订单",
      subtitle: "创建作业协议 v2.67",
      headers: {
        scope: "产品与客户",
        logistics: "物流与执行",
        shipping: "运输与财务"
      },
      labels: {
        jobId: "内部订单 ID (自动)",
        jobName: "订单名称 / 参考",
        poNumber: "采购订单号 (PO)",
        productModel: "产品型号",
        quantity: "数量",
        customer: "客户 (可选)",
        leadBuyer: "首席采购员",
        initialStage: "初始阶段",
        priority: "优先级",
        description: "项目描述",
        partner: "制造合作伙伴 (工厂)",
        startDate: "订单开始日期",
        targetDate: "目标出厂日期",
        incoterms: "国际贸易术语",
        shippingMethod: "运输方式",
        destAddress: "目的地地址",
        paymentTerms: "付款条款",
        packInstr: "包装说明"
      },
      placeholders: {
        nameEx: "例如：夏季系列批次 A",
        poEx: "PO-2026-...",
        unassigned: "未分配库存",
        buyerEx: "采购员姓名",
        descEx: "关于此订单的内部备注...",
        whEx: "仓库 / 港口",
        payEx: "例如：30% 定金",
        packEx: "纸箱标记、胶袋细节、贴纸要求..."
      },
      errors: {
        nameRequired: "订单名称必填",
        poRequired: "PO 号必填"
      },
      stages: {
        "Inquiry": "询价",
        "Costing": "核价",
        "Sampling": "打样",
        "Production": "生产"
      },
      priorities: {
        "Low": "低",
        "Medium": "中",
        "High": "高",
        "Urgent": "紧急"
      }
    },
    customer: {
      title: "新客户入驻",
      subtitle: "客户获取协议 v3.0",
      modes: {
        fast: "快速通道 (销售)",
        advanced: "高级通道 (运营)"
      },
      headers: {
        identityContact: "步骤 1：身份与联系方式",
        bizLocation: "步骤 2：业务与位置",
        corpIdentity: "企业身份",
        contactPrefs: "联系方式与偏好",
        globalLoc: "全球位置",
        review: "审核与创建"
      },
      labels: {
        internalId: "内部 ID",
        accountOwner: "客户经理",
        companyName: "公司名称",
        contactPerson: "联系人",
        email: "电子邮箱",
        contactNo: "联系电话",
        bizType: "业务类型",
        socialMedia: "社交媒体",
        address: "地址",
        street: "街道地址",
        city: "城市",
        state: "省/州",
        industry: "所属行业",
        source: "客户来源",
        commPref: "沟通偏好",
        country: "国家/地区",
        zip: "邮编",
        creatingFor: "正在创建活跃客户记录："
      },
      placeholders: {
        salesRep: "销售代表姓名",
        ifBlank: "如为空，则同联系人",
        selectType: "选择类型",
        selectPlatform: "选择平台",
        socialEx: "例如 @MyHandle",
        selectIndustry: "选择行业",
        selectSource: "选择来源",
        typeCountry: "输入国家名称...",
        unassigned: "未分配"
      },
      errors: {
        contactRequired: "联系人必填",
        emailRequired: "邮箱必填",
        phoneRequired: "电话号码必填"
      },
      bizTypes: {
        "Importer": "进口商",
        "Influencer": "网红/KOL",
        "University/School": "大学/学校",
        "Corporation": "企业",
        "Non-Profit / Church / ORG.": "非营利组织",
        "Online / Amazon Seller": "电商/亚马逊卖家",
        "Small Business": "小型企业"
      },
      industries: {
        "Non-Profit": "非营利",
        "Military": "军事/国防",
        "Government": "政府",
        "Retail": "零售",
        "Manufacturing": "制造",
        "Other": "其他"
      },
      sources: {
        "Referral": "推荐",
        "Trade Show": "展会",
        "Other": "其他"
      }
    },
    // --- NEW: SUPPLIER WIZARD ---
    supplier: {
      title: "添加供应商",
      name: "公司名称",
      location: "地点",
      contact: "联系人",
      email: "电子邮件",
      type: "业务类型"
    },
    // --- NEW: NEW PRODUCT WIZARD (Already present, ensuring consistency) ---
    newProduct: {
      title: "新产品向导",
      headers: {
        expressIdentity: "快速识别",
        expressIdentityDesc: "快速定义核心产品细节。",
        sourcingStrategy: "采购策略",
        sourcingStrategyDesc: "指派制造合作伙伴。",
        basicSpecs: "基本规格",
        basicSpecsDesc: "基本属性。",
        roughCosting: "粗略成本估算",
        roughCostingDesc: "预计单位经济效益（可选）。",
        advConcept: "高级：概念",
        advConceptDesc: "详细的产品定义。",
        advEngineering: "高级：工程",
        advBOM: "高级：物料清单 (BOM)",
        advSourcing: "高级：采购",
        advCost: "高级：成本明细",
        advPackaging: "高级：包装",
        reviewComplete: "审核完成",
        reviewDesc: "所有高级规格已捕获。"
      },
      labels: {
        productName: "产品名称",
        brand: "品牌",
        category: "类别",
        primarySupplier: "主要供应商",
        originCountry: "原产国",
        moq: "最小起订量 (MOQ)",
        leadTime: "交货周期",
        skuCode: "SKU 代码",
        hsCode: "海关编码 (HS Code)",
        materialComp: "材质成分",
        estFactoryCost: "预计工厂成本 ($)",
        description: "描述",
        techPack: "技术包",
        externalUrl: "外部链接",
        length: "长 (cm)",
        width: "宽 (cm)",
        height: "高 (cm)",
        bomFile: "BOM 文件",
        materialNotes: "材质备注",
        supplier: "供应商",
        origin: "原产地",
        materialCost: "材料成本",
        laborCost: "人工成本",
        packaging: "包装",
        logistics: "物流",
        packagingType: "包装类型",
        masterCartonQty: "主箱数量",
        unitWeight: "单位重量 (kg)"
      },
      placeholders: {
        nameEx: "例如：无线耳机",
        selectOrType: "选择或输入...",
        selectFactory: "选择工厂...",
        autoGen: "AUTO-GEN",
        hsEx: "0000.00.00",
        materialEx: "例如：100% 棉",
        retailSkip: "快速模式跳过零售价。",
        attachTechPack: "添加技术包 (PDF)",
        driveLink: "https://drive...",
        attachBom: "添加 BOM (.XLS)",
        matNotesEx: "1. 主面料：100% 棉，220gsm..."
      },
      errors: {
        nameRequired: "产品名称为必填项"
      },
      categories: {
        "Consumer Electronics": "消费电子",
        "Apparel & Clothing": "服装与服饰",
        "Home & Garden": "家居与园艺",
        "Health & Beauty Products": "健康与美容",
        "Automotive Parts & Accessories": "汽配与附件",
        "Shoes & Footwear": "鞋靴",
        "Bags, Luggage & Cases": "箱包",
        "Jewelry & Watches": "珠宝与手表",
        "Toys & Games": "玩具与游戏",
        "Sports & Outdoor Equipment": "运动与户外",
        "Lights & Lighting": "照明灯具",
        "Tools & Hardware": "五金工具",
        "Pet Supplies": "宠物用品",
        "Office & School Supplies": "办公与文具",
        "Packaging & Printing": "包装与印刷",
        "Electrical Equipment & Supplies": "电气设备",
        "Security & Surveillance": "安防监控",
        "Home Appliances": "家用电器",
        "Furniture": "家具",
        "Textiles & Fabrics": "纺织面料",
        "Electronic Components": "电子元器件",
        "Industrial Machinery": "工业机械",
        "Construction & Building Materials": "建筑材料",
        "Chemicals & Raw Materials": "化工原料",
        "Food & Beverage Products": "食品饮料",
        "Medical & Healthcare Supplies": "医疗保健",
        "Gifts & Crafts": "礼品工艺品",
        "Baby & Maternity Products": "母婴用品",
        "Fashion Accessories": "时尚配饰",
        "Renewable Energy Products": "新能源产品",
        "Telecommunications Equipment": "通讯设备",
        "Agriculture & Food Processing": "农业与食品加工",
        "Instruments & Measurement Equipment": "仪器仪表",
        "Wedding & Event Supplies": "婚庆用品",
        "Cleaning & Hygiene Supplies": "清洁卫生",
        "Musical Instruments & Equipment": "乐器",
        "Cameras & Photography Equipment": "摄影器材",
        "Vehicles & Transportation": "车辆运输",
        "Material Handling Equipment": "物料搬运",
        "Safety & Protection Equipment": "安全防护"
      },
      packagingOptions: {
        "Polybag": "塑料袋",
        "Retail Box": "零售彩盒",
        "Custom": "定制包装"
      }
    }
  }
};