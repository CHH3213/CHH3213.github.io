---
title: 内网穿透工具——cpolar
top: false
cover: http://api.mtyqx.cn/tapi/random.php?15156
coverWidth: 1200
coverHeight: 750
toc: true
mathjax: true
date: 2022-10-15 20:16:58
tags: 内网穿透
category: 实用技巧
coments: true
---

在之前介绍了[SakuraFrp](https://chh3213.github.io/2022/10/15/SakuraFrp%E5%86%85%E7%BD%91%E7%A9%BF%E9%80%8F%E5%B7%A5%E5%85%B7/)内网穿透工具，后来又发现了一个也比较好的内网穿透工具[cpolar](<https://www.cpolar.com/>)。

打开官网后直接选择对应版本下载安装即可。

![](内网穿透工具——cpolar/下载.png#pic_center)  

下面介绍windows下和ubuntu的安装。

## ☺️windows 被控端安装

在官网注册好账号后，到官方界面下载对应的安装包，解压后默认安装即可。cpolar安装后会默认安装两条样例隧道:

- 一个是Website隧道，指向http 8080端口
- 一个是远程桌面隧道（win系统），指向tcp 3389端口

因此，我们安装完成后，只需要启动远程桌面隧道服务，就可以获得公网地址。


浏览器访问`127.0.0.1:9200`，登录cpolar web-ui管理界面。点击左侧仪表盘——隧道管理——隧道列表，找到远程桌面隧道，点击启动该隧道

![](内网穿透工具——cpolar/隧道列表.png#pic_center)  

隧道启动成功后，点击左侧仪表盘——状态——在线隧道列表，找到远程桌面隧道，可以看到已经有生成了相应的公网地址，复制下来。

安装完成后，在另外一台windows电脑进行远程桌面连接，填入刚才生成的公网TCP端口地址（是`tcp://`后面的地址），就可以实现内网穿透远程桌面连接。

## ☺️linux被控端安装

当服务器为linux系统时，我们可以通过SSH远程连接，同样正常在服务器安装cpolar客户端，然后映射内网端口即可。

linux系统官网已经给了一键自动安装脚本

- 国内使用
    ```bash
    curl -L https://www.cpolar.com/static/downloads/install-release-cpolar.sh | sudo bash
    ```
- 国外使用

    ```bash
    curl -sL https://git.io/cpolar | sudo bash
    ```

注意root权限问题。

安装完成后，登录账号查看认证的token：

![](内网穿透工具——cpolar/token.png#pic_center)

然后终端输入：
```
cpolar authtoken 输入token数字xxxxxxxxxxxxxxxxxx
```

- 如果需要配置cpolar开机自启动:
    ``` bash
    sudo systemctl enable cpolar
    ```
- 启动服务时输入命令：
    ``` bash
    sudo systemctl start cpolar
    ```
- 通过查看服务状态来检查是否启动成功：
    ```bash
    sudo systemctl status cpolar
    ```
    如显示`active`，则说明已经启动成功。
- 关闭命令：

    ```bash
    sudo systemctl stop cpolar
    ```

- cpolar 卸载方法
    ```bash
    curl -L https://www.cpolar.com/static/downloads/install-release-cpolar.sh | sudo bash -s -- --remove
    ```


```bash
cpolar默认安装路径 /usr/local/bin/cpolar,
安装脚本会自动配置systemd服务脚本，启动以后，可以开机自启动。
如果第一次安装，会默认配置一个简单的样例配置文件，创建了两个样例隧道，一个web，一个ssh
cpolar配置文件路径: /usr/local/etc/cpolar/cpolar.yml
```



启动成功后，登录cpolar官网后台查看[状态](https://dashboard.cpolar.com/status)，可以查看到所有在线隧道的公网地址，找到SSH隧道的公网地址，复制下来。

![](内网穿透工具——cpolar/ssh状态.png#pic_center)  


然后就可以使用ssh相关工具通过公网ip登录了。
```bash
ssh username@公网地址 -p 端口号
```
如
```bash
ssh pi@1.tcp.vip.cpolar.cn -p 20013
```
由于我们的本地22端口到了公网被映射到了20013端口，所以，ssh命令需要加-p参数，后面加公网隧道端口号。


