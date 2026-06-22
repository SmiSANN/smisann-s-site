import React from "react";
import { FaUnity } from "react-icons/fa";
import { SiKicad } from "react-icons/si";
import { SiArduino } from "react-icons/si";
import { FaRust } from "react-icons/fa";
import {
  FaGithub,
  FaInstagram,
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
  title: "大学2年生・ハードウェア/ソフトウェアを学ぶ学生",
  location: "Tokyo, Japan",
  avatarImage: "avatar.jpg", // 画像を追加したい場合はpublicフォルダに配置
  initials: "K S", // アバター画像がない場合に表示されるイニシャル
  
  // About Me セクション
  about: {
    paragraphs: [
      <>東京工科大学で電気電子工学を学びながら、ハードウェアとソフトウェアの両方に触れています。Arduino・ESP32を使った自作デバイスの試作、KiCadでの基板設計、Unityでの簡単なロジックやエディタツール開発など、作りたいものに合わせて必要な技術を学んでいます。</>,
      <>Rust/C++、C#、Docker、GitHub Actionsなども個人開発の中で少しずつ扱っています。学んだことやつまずいたことはブログやLT会でアウトプットし、自分の言葉で整理して残すことを大切にしています。</>
    ]
  },
  
  // 技術スタック
  techStack: [
    { name: "Rust / C++", icon: <FaRust className="w-3 h-3 mr-1" /> },
    { name: "C#", icon: <FaCode className="w-3 h-3 mr-1" /> },
    { name: "Unity", icon: <FaUnity className="w-3 h-3 mr-1" /> },
    { name: "Arduino / ESP32", icon: <SiArduino className="w-3 h-3 mr-1" /> },
    { name: "KiCad", icon: <SiKicad className="w-3 h-3 mr-1" /> },
    { name: "Docker", icon: <FaCode className="w-3 h-3 mr-1" /> },
    { name: "GitHub Actions", icon: <FaGithub className="w-3 h-3 mr-1" /> },
  ],
  
  // 趣味・興味
  hobbies: [
    {
      title: "Software Development",
      description: "Rust/C++、C#、Docker、GitHub Actionsなどを個人開発で使用。C#ではUnityの簡単なエディタツール開発、GitHub Actionsでは自作アプリのCI構築経験があります。",
      icon: <FaCode className="h-5 w-5 text-primary" />,
      badges: ["Rust", "C++", "C#", "Docker", "GitHub Actions"]
    },
    {
      title: "Unity & VRChat",
      description: "Unityを使った簡単なロジックやエディタツールの実装、VRChat向けギミック制作などに取り組んでいます。",
      icon: <FaUnity className="h-5 w-5 text-primary" />,
      badges: ["Unity", "C#", "VRChat"]
    },
    {
      title: "Electronics & Hardware",
      description: "Arduino・ESP32を使ったキーボードや触覚デバイスなどの試作、KiCadを使った小型化や量産性を意識した基板設計に取り組んでいます。",
      icon: <FaMicrochip className="h-5 w-5 text-primary" />,
      badges: ["Arduino", "ESP32", "KiCad"]
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
      url: "https://blog.smisann.net/posts/2026/imagetovrc",
    },
    {
      name: "MidiAnimatorDriver",
      description: "VRChatワールド内でMIDIコントローラーの入力を受け取り、Animatorのトリガーを発火させるギミック。ライブパフォーマンスや照明制御などに活用できる。",
      url: "https://blog.smisann.net/posts/2026/midi-animator-driver",
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
