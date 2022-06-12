---
title: windows下配置Qv2ray
tags: VPN
date: 2022-04-15 22:45:54
category: VPN教程
reward: true
# toc: true
cover: http://api.mtyqx.cn/tapi/random.php?123
# coverWidth: 1200
# coverHeight: 750
comments: true
---

## 参考资料

[Windows下成功配置Qv2ray ](https://bella722.github.io/post/a6ffce94.html)
## 1. 软件下载

点击[https://github.com/Qv2ray/Qv2ray/releases](https://github.com/Qv2ray/Qv2ray/releases)，根据自己系统选择对应的下载，我这边选的是

![在这里插入图片描述](https://img-blog.csdnimg.cn/184030d4a7d84df0b758302180986f47.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQ0hIMzIxMw==,size_20,color_FFFFFF,t_70,g_se,x_16)
## 2. 配置核心文件

点击[https://github.com/v2fly/v2ray-core/releases](https://github.com/v2fly/v2ray-core/releases)，
根据你自己的环境选择对应的压缩包下载，成功后先从桌面打开qv2ray, 进入界面后在设置里根据提示的核心文件路径进行配置。

![在这里插入图片描述](https://img-blog.csdnimg.cn/e3a364ecd3d94f188b74f56fccc1e15b.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQ0hIMzIxMw==,size_20,color_FFFFFF,t_70,g_se,x_16)![在这里插入图片描述](https://img-blog.csdnimg.cn/a1548a747ac9401c9d6db52a4d832b56.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQ0hIMzIxMw==,size_20,color_FFFFFF,t_70,g_se,x_16)

根据路径提示需要有一个名为vcore的文件夹，因此这里必须在相应路径下新建该文件夹。vcore文件夹新建好之后需要将刚才下载的压缩包里的核心文件拷贝过来。
![在这里插入图片描述](https://img-blog.csdnimg.cn/50d0c1de012145a29fb10d4d6fff2bb2.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQ0hIMzIxMw==,size_20,color_FFFFFF,t_70,g_se,x_16)

接着通过核心验证。

![在这里插入图片描述](https://img-blog.csdnimg.cn/4fe99280cead45a98119e31f758eadf0.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQ0hIMzIxMw==,size_20,color_FFFFFF,t_70,g_se,x_16)

## 3. node配置

回到软件首页，选择`导入`,出现如下信息：

![在这里插入图片描述](https://img-blog.csdnimg.cn/9375283d8c7f493fa9d89731edf57d89.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQ0hIMzIxMw==,size_20,color_FFFFFF,t_70,g_se,x_16)

我们需要将获取到的node复制粘贴到所述的`分享链接`框内即可。
至于节点的获取，在这里分享一个github上的`free`获取地址：[free node](https://github.com/iwxf/free-v2ray)
导入node后，就会出现类似如图所示的界面：

![在这里插入图片描述](https://img-blog.csdnimg.cn/8b2904c2640d43a6ab2ef7492ec36edd.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQ0hIMzIxMw==,size_20,color_FFFFFF,t_70,g_se,x_16)

双击默认分组，可以看到所有节点

![在这里插入图片描述](https://img-blog.csdnimg.cn/ac5c0eac89b94e43894ca6204cecfa4f.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQ0hIMzIxMw==,size_20,color_FFFFFF,t_70,g_se,x_16)

双击任何一个node，即可连接成功。
如果不需要连接时，点击断开连接即可。
最后祝小伙伴们使用愉快。







