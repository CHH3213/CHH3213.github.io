---
title: ubuntu20.04配置Qv2ray
tags: VPN
date: 2022-04-15 22:48:35
---




## 参考资料：

[Ubuntu20.04下成功配置Qv2ray ](https://bella722.github.io/post/a231f91f.html)

## 1. 安装客户端


软件中心搜索`qv2ray`安装即可

## 2. 配置客户端
### 2.1 软件配置 
打开Qv2ray, 会在主文件夹下的snap下自动生成一个名为`
qv2ray`的文件夹

![在这里插入图片描述](https://img-blog.csdnimg.cn/bbe8e7bc15dd4c7aa12bee2f5457d02d.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQ0hIMzIxMw==,size_20,color_FFFFFF,t_70,g_se,x_16)


进入[https://github.com/v2ray/v2ray-core/releases](https://github.com/v2fly/v2ray-core/releases/tag/v4.31.0) ，根据自己的系统下载相应的核心文件，我这边下载的是v2ray-linux-64.zip


![在这里插入图片描述](https://img-blog.csdnimg.cn/6b8a81295d094a3e8a8634d7622f0bfe.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQ0hIMzIxMw==,size_20,color_FFFFFF,t_70,g_se,x_16)

而后在目录`/home/your_user_name/snap/qv2ray/4576/.config/qv2ray`文件夹下新建`vcore`文件夹，并将之前下载的核心文件解压缩后全部拷贝到`vcore`文件夹内。注意这里的4576版本号是不固定的，根据自己的来就好。另外就是需要按住`ctrl+h`才能显示隐藏的.config文件夹。

以上完成后验证核心文件。点击Qv2ray界面中的`首选项`：


![在这里插入图片描述](https://img-blog.csdnimg.cn/12a1028766814baaaee3d4a93e8db503.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQ0hIMzIxMw==,size_20,color_FFFFFF,t_70,g_se,x_16)



然后点击`内核设置`-->`检查V2Ray核心设置`：

![在这里插入图片描述](https://img-blog.csdnimg.cn/26cc2fde75ca4ed38a786da764fd82ea.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQ0hIMzIxMw==,size_20,color_FFFFFF,t_70,g_se,x_16)

如果一切正常，则会出现检查通过提示：

![在这里插入图片描述](https://img-blog.csdnimg.cn/ff22ca92a08448ae957c7a3376478a42.png)


然后便可以点击OK，关闭。
除此之外，还需配置网络代理，首先查看`入站设置`中的默认网络代理：

![在这里插入图片描述](https://img-blog.csdnimg.cn/ab0725760a66464f8280a4e51cedc5c7.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQ0hIMzIxMw==,size_20,color_FFFFFF,t_70,g_se,x_16)

例如我这里默认的是socks端口为`7891`,http端口为`7890`.这个端口号是可以修改的，这里用默认的就行。随后，ubuntu桌面右上角打开ubuntu的系统设置，选择`网络`-->`网络代理`

![在这里插入图片描述](https://img-blog.csdnimg.cn/b904c9467004414590fbc8d2f6485bfe.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQ0hIMzIxMw==,size_20,color_FFFFFF,t_70,g_se,x_16)

将网络代理切换为`手动`，如图所示，将HTTP和HTTPS代理端口填写为上面获取到的HTTP端口，Socks主机端口号也填写成上面获取到的端口号即可。

![在这里插入图片描述](https://img-blog.csdnimg.cn/0beb3062e67e42799f3d0110fce96745.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQ0hIMzIxMw==,size_20,color_FFFFFF,t_70,g_se,x_16)

这一部分配置完成。

> 注：默认端口号是可以更改的，只需要让**软件**中的端口号和**ubuntu**系统设置中的网络代理端口号保持一致，即可。



### 2.2 node配置

回到软件首页配置入网config文件。选择`新建`,出现如下信息：

![在这里插入图片描述](https://img-blog.csdnimg.cn/b6f1a0c64c3d4334aad73f5addc2651a.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQ0hIMzIxMw==,size_20,color_FFFFFF,t_70,g_se,x_16)


我们需要将获取到的node复制粘贴到所述的`分享链接`框内即可。
至于节点的获取，在这里分享一个github上的`free`获取地址：[free node](https://github.com/iwxf/free-v2ray)
导入node后，就会出现类似如图所示的界面：

![在这里插入图片描述](https://img-blog.csdnimg.cn/b78a1191f6ae4fa1806684be661c948c.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQ0hIMzIxMw==,size_20,color_FFFFFF,t_70,g_se,x_16)


双击任何一个node，即可连接成功。
如果不需要连接时，点击断开连接以及将ubuntu系统中的网络代理从`手动`切换为`禁用`。
最后祝小伙伴们使用愉快。





