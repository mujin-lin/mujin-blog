import {Banner} from "vitepress-theme-teek/es/config/interface";
import {imageLink} from "../image/imageLink";

const bannerName = "Mujin Blog";

const bannerDescription = [
    "忙碌的生活里，也要记得给自己一点甜，就像小时候那颗最爱的糖果",
    "不积跬步无以至千里,不积小流无以成江海。—《劝学》",
    "业精于勤荒于嬉,行成于思而毁于随。— 唐·韩愈",
]
// 单位毫秒
const imgIntervalMills = 50000;

// 博客默认配置
export const partImgBanner: Banner = {
    name: bannerName,
    imgSrc:imageLink,
    description: bannerDescription[Math.floor(Math.random() * 4)],
    descStyle: "default",
    bgStyle: "partImg",
    imgInterval: imgIntervalMills
};

// 博客小图配置
export const blogSmallPicture: Banner ={
    name: bannerName,
    bgStyle: "partImg",
    imgSrc: imageLink,
    description: bannerDescription,
    descStyle: "switch",
    imgInterval: imgIntervalMills
};

// 博客大图配置
export const fullImgBanner: Banner= {
    name: bannerName,
    bgStyle: "fullImg",
    imgSrc: imageLink,
    description: bannerDescription,
    descStyle: "types",
    imgInterval: imgIntervalMills
};

// 博客全图配置
export const blogAllPicture : Banner ={
    name: bannerName,
    bgStyle: "fullImg",
    description: bannerDescription,
    descStyle: "types",
    imgInterval: imgIntervalMills
};