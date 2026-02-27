import React from "react";
import { FaUnity } from "react-icons/fa";
import { SiKicad } from "react-icons/si";
import { SiArduino } from "react-icons/si";
import { FaRust } from "react-icons/fa";
import {
  FaGithub,
  FaInstagram,
  FaBook,
  FaCode,
  FaMusic,
  FaMicrochip,
  FaAmazon,
  FaBox,
  FaShoppingBag,
} from "react-icons/fa";
import { SiQiita, SiMisskey } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

// パーソナル情報の型定義
export interface PersonalInfo {
  // 基本情報
  name: string;
  title: string;
  location: string;
  avatarImage?: string;
  initials: string;
  description?: string;

  // About Me
  about: {
    paragraphs: React.ReactNode[];
  };

  // Tech Stack
  techStack: {
    name: string;
    icon: React.ReactNode;
  }[];

  // Products
  products: {
    name: string;
    description: string;
    url: string;
  }[];

  // Links
  links: {
    name: string;
    url: string;
  }[];

  // Support Links
  supportLinks: {
    name: string;
    url: string;
  }[];

  // 趣味・興味
  hobbies: {
    title: string;
    description: string;
    icon: React.ReactNode;
    badges: string[];
  }[];

  // 教育歴
  education: {
    period: string;
    school: string;
    description: string;
    badges: string[];
    link?: string;
  }[];

  // ソーシャルリンク
  socialLinks: {
    platform: string;
    url: string;
    icon: React.ReactNode;
  }[];
}

// あなたのパーソナル情報をここで編集してください
export const personalInfo: PersonalInfo = {
  // 基本情報
  name: "重根慧翼/すみさん",
  title: "大学1年生・駆け出しエンジニア",
  location: "Tokyo, Japan",
  avatarImage: "avatar.jpg", // 画像を追加したい場合はpublicフォルダに配置
  initials: "K S", // アバター画像がない場合に表示されるイニシャル
  
  // About Me セクション
  about: {
    paragraphs: [
      <>大学1年生の駆け出しエンジニアです。なんかいろいろな技術に触れています</>
    ]
  },
  
  // 技術スタック
  techStack: [
    { name: "Unity", icon: <FaUnity className="w-3 h-3 mr-1" /> },
    { name: "KiCad", icon: <SiKicad className="w-3 h-3 mr-1" /> },
    { name: "Arduino", icon: <SiArduino className="w-3 h-3 mr-1" /> },
    { name: "Rust", icon: <FaRust className="w-3 h-3 mr-1" /> }
  ],
  
  // 趣味・興味
  hobbies: [
    {
      title: "Learning & Reading",
      description: "技術書やPodcastでのインプット、QiitaやZennでのアウトプットを継続",
      icon: <FaBook className="h-5 w-5 text-primary" />,
      badges: ["Clean Code", "Podcast"]
    },
    {
      title: "Development & Design",
      description: "個人プロジェクト、UI/UX設計、新技術の実験と検証。C#/.NETやRustを使ったアプリ開発、Unityを使ったVRChatギミック制作など",
      icon: <FaCode className="h-5 w-5 text-primary" />,
      badges: ["C#", ".NET", "Unity", "Rust", "UI/UX"]
    },
    {
      title: "Electronics & Hardware",
      description: "マイコンを使った組み込み開発と電子工作。PICやTinyAVR（ATtiny10など）を使った小型デバイス制作、KiCadを使った基板設計",
      icon: <FaMicrochip className="h-5 w-5 text-primary" />,
      badges: ["PIC", "TinyAVR", "Arduino", "KiCad"]
    },
    {
      title: "Music & Entertainment",
      description: "コーディング用BGM、Webゲームでの参考収集、技術系コンテンツの視聴",
      icon: <FaMusic className="h-5 w-5 text-primary" />,
      badges: ["Lo-Fi", "Gaming"]
    }
  ],
  
  // 教育歴
  education: [
    {
      period: "2025 — 現在",
      school: "東京工科大学 工学部",
      description: "",
      badges: ["電気電子工学科"],
      link: "https://www.teu.ac.jp/gakubu/eng/el.html" // 学校のウェブサイトなど（オプション）
    },
    {
      period: "2021 — 2024",
      school: "日本大学高等学校",
      description: "",
      badges: ["普通科"],
    }
  ],
  
  // Products
  products: [
    {
      name: "UnityEditorTracker",
      description: "Unityの作業時間を記録し、Discordと連携するエディタ拡張。",
      url: "https://smi-shop.booth.pm/items/6797985",
    },
    {
      name: "Image to VRC",
      description: "画像をURLTexture用に変換するツール。",
      url: "https://smisann.fanbox.cc/posts/8882303",
    },
    {
      name: "MidiAnimatorDriver",
      description: "VRChatワールド内でMIDIコントローラーの入力を受け取り、Animatorのトリガーを発火させるギミック。ライブパフォーマンスや照明制御などに活用できる。",
      url: "https://github.com/SmiSANN/MidiAnimatorDriver",
    },
  ],

  // Links
  links: [
    { name: "VRChat", url: "https://vrchat.com/home/user/usr_56b6c332-2ffd-4f49-82f3-17bf9f8eb798" },
    { name: "Resonite", url: "https://resonite.com/" },
    { name: "Twitter", url: "https://twitter.com/Smi_sann" },
    { name: "Instagram", url: "https://www.instagram.com/smisann/" },
    { name: "Misskey", url: "https://misskey.resonite.love/@smisann" },
    { name: "Discord", url: "https://discord.com/" },
    { name: "Booth", url: "https://smi-shop.booth.pm/" },
  ],

  // Support Links
  supportLinks: [
    { name: "Amazon Wishlist", url: "https://www.amazon.co.jp/hz/wishlist/ls/1QYBVUXTLOYZQ?ref_=wl_share" },
    { name: "Fanbox", url: "https://smisann.fanbox.cc/" },
  ],

  // ソーシャルリンク
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/smiSANN",
      icon: <FaGithub className="size-6" />
    },
    {
      platform: "X (Twitter)",
      url: "https://x.com/Smi_sann",
      icon: <FaXTwitter className="size-6" />
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/smisann",
      icon: <FaInstagram className="size-6" />
    },
    {
      platform: "Qiita",
      url: "https://qiita.com/smisann",
      icon: <SiQiita className="size-6" />
    },
    {
      platform: "Misskey",
      url: "https://misskey.resonite.love/@smisann",
      icon: <SiMisskey className="size-6" />
    },
    {
      platform: "Booth",
      url: "https://smi-shop.booth.pm/",
      icon: <FaShoppingBag className="size-6" />
    }
  ]
}; 