import Instagram from "@/assets/svg/instagram.svg";
import Redbook from "@/assets/svg/redbook.svg";
import Weibo from "@/assets/svg/weibo.svg";

// 语言
export const enum LANGUAGE_TYPE {
  CHINESE = "zh",
  ENGLISH = "en",
}

export const LANGUAGE_TYPE_LABEL = {
  [LANGUAGE_TYPE.CHINESE]: "简体中文",
  [LANGUAGE_TYPE.ENGLISH]: "English",
};

//网站
export const WEBSITES = [
  {
    title: 'Instagram',
    icon: Instagram,
    path: "https://www.instagram.com/tu1ko0o0_ss/",
  },
  {
    title: 'Redbook',
    icon: Redbook,
    path: "https://www.xiaohongshu.com/user/profile/5f3e257100000000010070c5",
  },
  {
    title: 'Weibo',
    icon: Weibo,
    path: "https://weibo.com/u/5655409705",
  },
];
