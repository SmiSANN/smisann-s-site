import React from "react";
import { IconType } from "react-icons";
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
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiQiita, SiZenn } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss } from "react-icons/si";

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
      description: "個人プロジェクト、UI/UX設計、新技術の実験と検証",
      icon: <FaCode className="h-5 w-5 text-primary" />,
      badges: ["Rust", "UI/UX"]
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
  
  // ソーシャルリンク
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/smiSANN", // あなたのGitHubのURLに変更してください
      icon: <FaGithub className="size-6" />
    },
    {
      platform: "X (Twitter)",
      url: "https://x.com/Smi_sann", // あなたのX(Twitter)のURLに変更してください
      icon: <FaXTwitter className="size-6" />
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/smisann", // あなたのInstagramのURLに変更してください
      icon: <FaInstagram className="size-6" />
    },
    {
        platform: "Qiita",
        url: "https://qiita.com/smisann", // あなたのQiitaのURLに変更してください
        icon: <SiQiita className="size-6" />
    }
  ]
}; 