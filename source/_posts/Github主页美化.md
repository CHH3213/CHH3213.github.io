---
title: Github主页美化
tags: 主页
category: 主页美化
reward: true
# toc: true
cover: http://api.mtyqx.cn/tapi/random.php?1203
# coverWidth: 1200
# coverHeight: 750
comments: true
---

## 添加Github状态

实现效果如下：

![image-20220612125324038](https://s2.loli.net/2022/06/12/dyDPRcEV9HLa318.png)





配置地址见：https://github.com/anuraghazra/github-readme-stats



## 添加Github小图标

如何添加下图所示的小图标呢？

![image-20220612135513281](https://s2.loli.net/2022/06/12/SmVoYOB9xyNC6LW.png)





方法很简单：

1. 找到这个网站主页：https://shields.io/，这其实就是一个设计图标的网站。
2. 打开官网主页后，找到下述图中信息，直接填充好文字和信息，以及图标的颜色，点击`Make Badge`，就会生成这个图标的地址。

​	![image-20220612135849183](https://s2.loli.net/2022/06/12/uNKfQRyhGJsjXen.png)

3. 然后在Github主页插入即可。插入方式如下：

```bash
[![](https://img.shields.io/badge/CHH3213-CSDN-red)](https://blog.csdn.net/weixin_42301220?spm=1010.2135.3001.5343)
```

前面的是图标地址，后面的是链接地址。	生成后的图标如下：

[![](https://img.shields.io/badge/CHH3213-CSDN-red)](https://blog.csdn.net/weixin_42301220?spm=1010.2135.3001.5343)






## 使用Wakatime记录你的Coding数据



[WakaTime](https://wakatime.com/) 是一款可以记录你的编码时间的工具，目前支持绝大部分主流的 IDE 以及 Chrome 浏览器。



### 安装Wakatime

1. [注册](https://wakatime.com/signup) WakaTime 账号；
2. 在[官网](https://wakatime.com/plugins)找到对应的 IDE 插件，按照步骤安装 WakaTime 插件；
3. 在[个人设置](https://wakatime.com/settings/account)页面复制 Secret API Key ，填入对应的 WakaTime 插件中；
4. 过一段时间后，你就可以在 WakaTime 网站上看到你的编码情况；



### 接入waka-box

[waka-box](https://github.com/matchai/waka-box)提供了你每周的代码状态，并且更新为类似于下面的内容：



![image-20220612125625163](https://s2.loli.net/2022/06/12/B7QEtZ4UCOJuoh2.png)

下面是接入步骤：

1. 在Github创建一个Gist：[Github Gist](https://gist.github.com/)，标题与内容可随意，成功运行后会被修改，保存 `Gist-url` 上一串 `key`，如：`https://gist.github.com/matchai/6d5f84419863089a167387da62dd7081` 中 `6d5f84419863089a167387da62dd7081`；
2. 创建带有 `gist` 功能 `Github Token` 并保存下来 [Token](https://github.com/settings/tokens/new)
3. 登入 `WakaTime` 页面，没有账号的，请[自行创建](https://wakatime.com/signup)
4. 进入 `WakaTime` [配置页面](https://wakatime.com/settings/profile)，勾选 `Display coding activity publicly` 与 `Display languages, editors, operating systems publicly`
5. 查看 `WakaTime` 账号 [api-key](https://wakatime.com/settings/api-key)，并保存好

项目设置

1. `fork` [项目](https://github.com/matchai/waka-box) 到你自己的仓库

2. 打开 `.github/workflows/schedule.yml` 文件，修改 `GIST_ID`为自己的；

3. 在 `fork` 项目下 `Settings > Secrets`，新增 `GH_TOKEN` 与 `WAKATIME_API_KEY`，Value 分别对应上面生成的 `Github Token` 与 `WakaTime api-key`

   
