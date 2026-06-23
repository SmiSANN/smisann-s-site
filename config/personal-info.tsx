import React from "react";
import { FaUnity } from "react-icons/fa";
import { SiKicad } from "react-icons/si";
import { SiArduino } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaRust, FaDocker } from "react-icons/fa";
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
    tags?: string[];
    repoUrl?: string;
    featured?: boolean;
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
      <>東京工科大学で電気電子工学を学びながら、ハードウェアとソフトウェアの両方に触れています。Arduino・ESP32を使った自作デバイスの試作、KiCadでの基板設計、Unityでの簡単なロジックやエディタツール開発に加え、Cloudflare Workers / Pages を使ったWeb・サーバーサイドにも少しずつ触れています。作りたいものに合わせて、ハード・ソフト・Webを横断しながら必要な技術を学んでいます。</>,
      <>Rust/C++、C#、Docker、GitHub Actionsなども個人開発の中で少しずつ扱っています。面白いものは人にも入門されるべきだと思っていて、学んだことやつまずいたことをブログやLT会でアウトプットしたり、作ったものは基本的にすべてオープンソースで公開しています。</>,
      <>「すべての技術者は、技術を知らない人にこそ技術を提供する」——これを行動理念に、いわば&quot;他人駆動開発&quot;を続けています。欲しいと言われたものは作るし、欲しいと聞こえてきたものも作る。そのために必要な知識は「面白そう」という好奇心のまま自分で掘り下げていて、その積み重ねがハードからWebまでのフルスタックな引き出しになっています。</>
    ]
  },
  
  // 技術スタック
  techStack: [
    { name: "Rust", icon: <FaRust className="w-3 h-3 mr-1" /> },
    { name: "C++", icon: <SiCplusplus className="w-3 h-3 mr-1" /> },
    { name: "C#", icon: <TbBrandCSharp className="w-3 h-3 mr-1" /> },
    { name: "Unity", icon: <FaUnity className="w-3 h-3 mr-1" /> },
    { name: "Arduino / ESP32", icon: <SiArduino className="w-3 h-3 mr-1" /> },
    { name: "KiCad", icon: <SiKicad className="w-3 h-3 mr-1" /> },
    { name: "Docker", icon: <FaDocker className="w-3 h-3 mr-1" /> },
    { name: "GitHub Actions", icon: <FaGithub className="w-3 h-3 mr-1" /> },
  ],
  
  // 趣味・興味
  hobbies: [
    {
      title: "Electronics & Hardware",
      description: "Arduino・ESP32を使ったキーボードや触覚デバイスなどの製作、KiCadでの基板設計に取り組んでいます。今後はノイズ耐性・高速通信・量産性を意識した、より実践的な基板設計を身につけていきたいと考えています。",
      icon: <FaMicrochip className="h-5 w-5 text-primary" />,
      badges: ["Arduino", "ESP32", "KiCad"]
    },
    {
      title: "Unity & VRChat",
      description: "Unityでのロジックやエディタ拡張の実装、VRChat向けギミック制作などに取り組んでいます。",
      icon: <FaUnity className="h-5 w-5 text-primary" />,
      badges: ["Unity", "VRChat"]
    },
    {
      title: "Software & Web",
      description: "個人開発全般。GitHub ActionsやDockerでのCI構築や、Cloudflareを使ったサーバーレスなWeb・バックエンドにも挑戦しています。",
      icon: <FaCode className="h-5 w-5 text-primary" />,
      badges: ["Cloudflare", "Docker", "GitHub Actions"]
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
      name: "MnemoVR",
      description:
        "VRChatのスクリーンショットをワールド・撮影日時ごとに自動整理するデスクトップアプリ。ローカルのRustバックエンドでメタデータを解析し、カレンダー/ワールド/お気に入りなど複数ビューで思い出を振り返れる。Discordログインでワールドランキングの共有にも対応。Tauri + React + Rust + Cloudflare Workersのフルスタック個人開発。",
      url: "https://github.com/SmiSANN/MnemoVR",
      tags: ["Tauri", "Cloudflare Workers", "SQLite", "VRChat"],
      featured: true,
    },
    {
      name: "UnityEditorTracker",
      description: "Unityの作業時間を記録し、Discordと連携するエディタ拡張。",
      url: "https://smi-shop.booth.pm/items/6797985",
      tags: ["Unity", "Editor拡張", "Discord"],
    },
    {
      name: "Image to VRC",
      description: "画像をVRChatのURLTexture用URLに変換するWebツール。アップロード・URL変換・プロキシ生成に対応し、サーバーレスで画像のリホストと配信を行う。",
      url: "https://blog.smisann.net/posts/2026/imagetovrc",
      repoUrl: "https://github.com/SmiSANN/image2vrc",
      tags: ["Web App", "Cloudflare Pages", "R2"],
    },
    {
      name: "MidiAnimatorDriver",
      description: "VRChatワールド内でMIDIコントローラーの入力を受け取り、Animatorのトリガーを発火させるギミック。ライブパフォーマンスや照明制御などに活用できる。",
      url: "https://blog.smisann.net/posts/2026/midi-animator-driver",
      repoUrl: "https://github.com/SmiSANN/MidiAnimatorDriver",
      tags: ["Unity", "VRChat", "MIDI"],
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
