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
  FaMicrochip,
  FaShoppingBag,
} from "react-icons/fa";

import { SiMisskey } from "react-icons/si";
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
      <>ハードウェアからソフトウェアまで、気になった技術には何でも手を動かして試すのが好きです。KiCadで基板を設計したり、Rustで何かを書いたり、UnityでVRChatのギミックを作ったり。プログラミングと電子工作の境界がないところが一番楽しいと感じています。</>,
      <>学んだことやつまずいたことはブログやLT会でアウトプットするようにしています。インプットだけで終わらせず、自分の言葉で整理して発信することを大切にしています。</>
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
      description: "技術書やPodcastでのインプット、ブログやLT会でのアウトプットを継続",
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