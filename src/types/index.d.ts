type WebsiteSort = WebsiteSortOld | WebsiteSortNew;

type WebsiteSortOld = {
  id: number;
  title: string;
};

type WebsiteSortNew = {
  title: string;
  sites?: Omit<WebsiteItem, "sortId">[];
};

interface WebsiteItem {
  sortId: number;
  title: string;
  description?: string;
  url: string;
  icon?: string;
  /** 预览截图，留空则按 url 自动对应 /previews/<host>.webp */
  preview?: string;
  color?: string;
}
