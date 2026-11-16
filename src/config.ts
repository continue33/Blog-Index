/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "General",
    sites: [
      {
        title: "Blog",
        description: "博客主站",
        url: "https://blog.trageek.com",
        icon: "https://imgbed-idk.pages.dev/file/favicons/1762659079818_blog.trageek.com.jpg",
      },
      {
        title: "Blog-Backup",
        description: "博客备用站点",
        url: "https://blog.itvoyager.us",
        icon: "https://imgbed-idk.pages.dev/file/favicons/1762659078058_blog.itvoyager.us.jpg",
      },
      {
        title: "Monitor",
        description: "服务监控1号",
        url: "https://monitor.itvoyager.us",
        icon: "https://imgbed-idk.pages.dev/file/favicon/1794801001941_kuma-mieru-logo.svg",
      },
      {
        title: "Monitor-Backup",
        description: "服务监控2号",
        url: "https://uptimer.trageek.com/status/idkbungle",
        icon: "https://imgbed-idk.pages.dev/file/favicons/1762659089662_uptimer.trageek.com.png",
      },
    ],
  },
  {
    title: "AI&LLM",
    sites: [
      {
        title: "Gemini-Live-Interpretation",
        description: "Gemini Live 实时语音同传互译",
        url: "https://gemini-live-interpretation.pages.dev",
        icon: "https://imgbed-idk.pages.dev/file/favicon/1794829688943_gemini-live-interpretation.svg",
      },
      {
        title: "HaloWebUI",
        description: "多模型 AI 对话平台",
        url: "https://walmartshoppingbag-halowebui.hf.space",
        icon: "https://imgbed-idk.pages.dev/file/favicon/1794829693586_halowebui.png",
      },
      {
        title: "AssemblyAI-Hub",
        description: "AssemblyAI 转写网关与多账号管理",
        url: "https://assemblyai-hub.onrender.com",
        icon: "https://imgbed-idk.pages.dev/file/favicon/1794829690761_assemblyai-hub.svg",
      },
      {
        title: "OpenWebUI",
        description: "开源自托管AI平台",
        url: "https://idktangle-openllm.hf.space",
        icon: "https://imgbed-idk.pages.dev/file/favicons/1762659079786_idktangle-openllm.hf.space.png",
      },
      {
        title: "Gemini-Chat",
        description: "私有化 Gemini 应用",
        url: "https://gemini-chat-idk.vercel.app",
        icon: "https://imgbed-idk.pages.dev/file/favicons/1762659076797_gemini-chat-idk.vercel.app.svg",
      },
      {
        title: "Gemini-Balance",
        description: "Gemini API 代理轮询系统",
        url: "https://gemini-balance-idk.onrender.com",
        icon: "https://imgbed-idk.pages.dev/file/favicons/1762659075551_gemini-balance-idk.onrender.com.png",
      },
      {
        title: "GPT-Load",
        description: "LLM API 接口透明代理服务",
        url: "https://gpt-load-idk.onrender.com",
        icon: "https://imgbed-idk.pages.dev/file/favicons/1762659076916_gpt-load-idk.onrender.com.png",
      },
      {
        title: "Veloera",
        description: "LLM API 接口聚合管理网关系统",
        url: "https://veloera-idk.onrender.com",
        icon: "https://imgbed-idk.pages.dev/file/favicons/1762659091526_veloera-idk.onrender.com.png",
      },
      {
        title: "Done-Hub",
        description: "OpenAI 接口聚合管理与二次分发",
        url: "https://done-hub-idk.onrender.com",
        icon: "https://imgbed-idk.pages.dev/file/favicons/1762659079640_done-hub-idk.onrender.com.ico",
      },
      {
        title: "API-Tracker",
        description: "OpenAl API链路溯源，检测API中转",
        url: "https://api-tracker.itvoyager.us",
      },
      {
        title: "Nano-Banana",
        description: "Nano-Banana改图修图",
        url: "https://nano-bananana.pages.dev",
      },
      {
        title: "Siliconflow-STT-TTS",
        description: "音频转录校准工具",
        url: "https://siliconflow-stt-idk.onrender.com",
        icon: "https://imgbed-idk.pages.dev/file/favicons/1762659083863_siliconflow-stt-idk.onrender.com.svg",
      },
      {
        title: "Voicehub",
        description: "AI 语音服务（STT, TTS)",
        url: "https://voicehub.trageek.com",
      },
      {
        title: "Libre-TTS",
        description: "OpenAI, Edge TTS与STT",
        url: "https://libre-tts.trageek.com",
        icon: "https://imgbed-idk.pages.dev/file/favicons/1762659083851_libre-tts.trageek.com.png",
      },
      {
        title: "TTSFM",
        description: "openai.fm逆向TTS",
        url: "https://ttsfm-idk.onrender.com",
      },
    ],
  },
  {
    title: "Web-Tools",
    sites: [
      {
        title: "Gotify",
        description: "自托管消息推送服务",
        url: "https://gotify.trageek.com",
        icon: "https://imgbed-idk.pages.dev/file/favicon/1794829694680_gotify.png",
      },
      {
        title: "Ntfy",
        description: "HTTP 推送通知服务",
        url: "https://ntfy.trageek.com",
        icon: "https://imgbed-idk.pages.dev/file/favicon/1794829674789_ntfy.png",
      },
      {
        title: "Baimiao-OCR",
        description: "白描 OCR：文字、表格、公式识别",
        url: "https://baimiao.hissor.dpdns.org",
        icon: "https://imgbed-idk.pages.dev/file/favicon/1794829687416_baimiao.png",
      },
      {
        title: "Resend-Pool",
        description: "Resend批量发送邮件系统",
        url: "https://resend-pool.pages.dev",
      },
      {
        title: "ZuzUrl",
        description: "短链接服务",
        url: "https://sau.us.kg",
        icon: "https://imgbed-idk.pages.dev/file/favicons/1762659086101_sau.us.kg.svg",
      },
      {
        title: "HubProxy",
        description: "GitHub & Docker加速",
        url: "https://hubproxy-idk.onrender.com",
        icon: "https://imgbed-idk.pages.dev/file/favicons/1762659076268_hubproxy-idk.onrender.com.png",
      },
      {
        title: "Cors-Anywhere",
        description: "前端跨域请求代理",
        url: "https://cors-anywhere-idk.onrender.com",
      },
      {
        title: "It-Tools",
        description: "在线IT工具箱",
        url: "https://it-tools-idk.onrender.com",
        icon: "https://imgbed-idk.pages.dev/file/favicons/1762659078442_it-tools-idk.onrender.com.ico",
      },
      {
        title: "MS-Email",
        description: "Microsoft Oauth2API",
        url: "https://ms-email-latest.onrender.com",
      },
      {
        title: "SearXNG",
        description: "开放元搜索引擎",
        url: "https://searxng-idk.onrender.com",
        icon: "https://imgbed-idk.pages.dev/file/favicons/1762659089240_searxng-idk.onrender.com.png",
      },
      {
        title: "LibreSearch",
        description: "开源元搜索引擎2",
        url: "https://libresearch-idk.onrender.com",
        icon: "https://imgbed-idk.pages.dev/file/favicons/1762659081685_libresearch-idk.onrender.com.png",
      },
      {
        title: "MusicTool",
        description: "Navidrom歌单同步",
        url: "https://musictool-web-idk.onrender.com",
        icon: "https://imgbed-idk.pages.dev/file/favicons/1762659083327_musictool-web-idk.onrender.com.png",
      },
      {
        title: "Smart-Mermaid",
        description: "AI思维导图",
        url: "https://smart-mermaid-idk.onrender.com",
        icon: "https://imgbed-idk.pages.dev/file/favicons/1762659073259_smart-mermaid-idk.onrender.com.ico",
      },
      {
        title: "LRC-API",
        description: "歌词匹配API",
        url: "https://lrcapi-idk.onrender.com",
        icon: "https://imgbed-idk.pages.dev/file/favicons/1762659082943_lrcapi-idk.onrender.com.svg",
      },
      {
        title: "CookieCloud",
        description: "cookie跨浏览器跨设备传输",
        url: "https://cookiecloud-idk.onrender.com",
      },
      {
        title: "Pansou-UI",
        description: "网盘资源搜索API",
        url: "https://pansou-ui-idk.vercel.app",
        icon: "https://imgbed-idk.pages.dev/file/favicons/1762659090744_pansou-ui-idk.vercel.app.png",
      },
      {
        title: "Nodecrypt",
        description: "端到端加密聊天室",
        url: "https://nodecrypt.lichensheng.workers.dev",
        icon: "https://imgbed-idk.pages.dev/file/favicons/1762659083217_nodecrypt.lichensheng.workers.dev.svg",
      },
      {
        title: "Outlook-Helper",
        description: "微软Oauth2API收件",
        url: "https://outlook-helper.pages.dev",
      },
      {
        title: "Outlook-Helper-Batch",
        description: "微软Oauth2API批量收件",
        url: "https://outlook-helper-batch.pages.dev",
      },
    ],
  },
  {
    title: "Multi-Manager",
    sites: [
      {
        title: "GitHub-Manager",
        description: "GitHub 多账户仓库、Star、Token 管理",
        url: "https://github-manager.ilovehark.workers.dev",
        icon: "https://imgbed-idk.pages.dev/file/favicon/1794829695507_github-manager.svg",
      },
      {
        title: "CF-Manager",
        description: "Cloudflare 多账户管理",
        url: "https://cf-manager-idk.pages.dev",
        icon: "https://imgbed-idk.pages.dev/file/favicon/1794831396973_cf-manager.png",
      },
      {
        title: "R2-Manager-S3",
        description: "R2 多账户管理（S3 API 版）",
        url: "https://r2-manager-s3.trageek.com",
        icon: "https://imgbed-idk.pages.dev/file/favicon/1794829702704_r2-manager-s3.svg",
      },
      {
        title: "R2-Manager",
        description: "R2 多账户批量管理（CF API 版）",
        url: "https://r2-manager.trageek.com",
        icon: "https://imgbed-idk.pages.dev/file/favicon/1794829697853_r2-manager.svg",
      },
      {
        title: "HF-Storage-CF",
        description: "Hugging Face 多账户数据集与 Bucket 管理",
        url: "https://hf-storage.trageek.com",
        icon: "https://imgbed-idk.pages.dev/file/favicon/1794829696769_hf-storage.svg",
      },
      {
        title: "HF-Manager-CF",
        description: "Hugging Face 多账户 Space 控制台",
        url: "https://hf-manager-cf.itvoyager.us",
        icon: "https://imgbed-idk.pages.dev/file/favicon/1794829693695_hf-manager-cf.svg",
      },
      {
        title: "Aiven-Live",
        description: "Aiven 免费服务多账户保活",
        url: "https://aiven-live.itvoyager.us",
        icon: "https://imgbed-idk.pages.dev/file/favicon/1794829683926_aiven-live.svg",
      },
    ],
  },
  {
    title: "Show",
    sites: [
      {
        title: "ImgBed",
        description: "CloudFlare 图床与文件托管",
        url: "https://imgbed-idk.pages.dev",
        icon: "https://imgbed-idk.pages.dev/file/favicon/1794829695514_imgbed.png",
      },
      {
        title: "Meow-Pics",
        description: "沉浸式猫系瀑布流",
        url: "https://meow-pics.pages.dev",
        icon: "https://imgbed-idk.pages.dev/file/favicons/1762659081587_meow-pics.pages.dev.svg",
      },
      {
        title: "Advanced-En-6TH",
        description: "高级英语课文解析",
        url: "https://advanced-en-6th.pages.dev",
      },
      {
        title: "OpenList",
        description: "聚合网盘服务",
        url: "https://openlist.trageek.com",
        icon: "https://imgbed-idk.pages.dev/file/favicons/1762659074408_ebsoabbcsrma.us-west-1.clawcloudrun.com.svg",
      },
      {
        title: "MoonTV",
        description: "跨平台的影视聚合播放器",
        url: "https://moontv-idk.onrender.com",
        icon: "https://imgbed-idk.pages.dev/file/favicons/1762659082408_moontv-idk.onrender.com.png",
      },
      {
        title: "Navidrome",
        description: "音樂串流伺服器服務",
        url: "https://idkbunglle-navi.hf.space",
        icon: "https://imgbed-idk.pages.dev/file/favicons/1762659079944_idkbunglle-navi.hf.space.png",
      },
    ],
  },
  {
    title: "Webmail",
    sites: [
      {
        title: "WR.DO",
        description: "一站式域名服务平台（短链、子域名托管、无限邮箱）",
        url: "https://idkbunglle.dpdns.org/emails",
        icon: "https://imgbed-idk.pages.dev/file/favicon/1794829704961_wr-do.png",
      },
      {
        title: "OmniMail",
        description: "简洁私有的 Cloudflare 域名邮箱",
        url: "https://omnia.dpdns.org",
        icon: "https://imgbed-idk.pages.dev/file/favicon/1794829699330_omnimail.svg",
      },
      {
        title: "Resend-Pool-CF",
        description: "Resend 多 Key 批量发信（Workers 版）",
        url: "https://resend-pool-cf.lichensheng7.workers.dev",
        icon: "https://imgbed-idk.pages.dev/file/favicon/1794829707948_resend-pool-cf.png",
      },
      {
        title: "Sendflare-Pool-CF",
        description: "Sendflare 多 Key 批量发信（Workers 版）",
        url: "https://sendflare-pool-cf.lichensheng7.workers.dev",
        icon: "https://imgbed-idk.pages.dev/file/favicon/1794829707420_sendflare-pool-cf.png",
      },
      {
        title: "SMTP-Relay-Configurator",
        description: "Resend / Sendflare 发信域名 DNS 一键配置",
        url: "https://smtp-relay-configurator-cf.qihaolouzhang.workers.dev",
        icon: "https://imgbed-idk.pages.dev/file/favicon/1794829704036_smtp-relay-configurator.svg",
      },
      {
        title: "Cloud-Mail",
        description: "cloudflare邮局之cloud-mail",
        url: "https://email.trageek.com",
        icon: "https://imgbed-idk.pages.dev/file/favicons/1762659081936_email.trageek.com.svg",
      },
      {
        title: "Cloudflare_temp_email",
        description: "cloudflare邮局之Cloudflare_temp_email",
        url: "https://email.itvoyager.us",
        icon: "https://imgbed-idk.pages.dev/file/favicons/1762659074306_email.itvoyager.us.png",
      },
      {
        title: "Moemail",
        description: "cloudflare邮局之Moemail",
        url: "https://moemail-6-23.pages.dev",
        icon: "https://imgbed-idk.pages.dev/file/favicons/1762659086271_moemail-6-23.pages.dev.ico",
      },
    ],
  },
];

/** Website 配置（2023.3.29 已废弃） */
const WEBSITE_ITEMS: WebsiteItem[] = [];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "Leo's Constellation Field - Built by Leo",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://blog.trageek.com",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: null,
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/idkbungle",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "",
  ICP_URL: "https://beian.miit.gov.cn/",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    // 第一句为主标语，出现概率更高（见 CenterLogo.vue 中的 PRIMARY_SLOGAN_WEIGHT）
    "Where Possible Begins!",
    "Stay hungry, stay compiling.",
    "PRs welcome. Ego optional.",
    "Works locally, ships globally.",
    "Fork ideas, merge kindness.",
    "Build in public, learn in public.",
    "Somewhere, something compiling.",
  ],
  /**
   * Website 分类配置
   */
  WEBSITE_SORTS,
  /**
   * Website 配置（2023.3.29 已废弃）
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "Leo's Constellation Field - Built by Leo",
    keywords: "Blog, Index, Landing Page",
    description: "This is my personal website landing page.",
  },
};

export default GLOBAL_CONFIG;
