---
title: Windows远程桌面工具连接Ubuntu系统
top: false
cover: http://api.mtyqx.cn/tapi/random.php?
coverWidth: 1200
coverHeight: 750
toc: true
mathjax: true
date: 2022-10-18 14:32:01
tags: Remote
category: 实用技巧
---


# 1. 前言

## 1.1 常见远程桌面软件推荐

随着过去一年多的研究生生涯，也陆陆续续用了几款远程桌面软件。目前来看都还不错。我主要用过的是4款：[TeamViewer](https://www.teamviewer.cn/cn/)，[RustDesk](https://rustdesk.com/zh/), [向日葵](https://sunlogin.oray.com/download), [ToDesk](http://www.hellodesk.cn/download.html)。这4款ubuntu和windows下均可使用。

4个软件的界面分别如下：

![](https://img-blog.csdnimg.cn/340cf47adb58419b9bc6a790a8540f34.png#pic_center)  
![](https://img-blog.csdnimg.cn/aa8f3c29acf14bcb87db5bc50803f45a.png#pic_center)  
![](https://img-blog.csdnimg.cn/df6a1ea3673442a2a7ae941521856fca.png#pic_center)  
![](https://img-blog.csdnimg.cn/334aee6b208c485bbf5eb6c03285445b.png#pic_center)  



## 1.2 比较

- 其中，个人体验而言，TeamViewer，RustDesk,ToDesk是优于向日葵的。因为向日葵免费版不能够**进行传输文件**，**剪贴板**也不能共享（不能相互之间复制粘贴文字）。
- 速度而言，使用局域网时，体验上三者没有什么差别；不使用局域网连接时，向日葵速度>TeamViewer>RustDesk=ToDesk。所以，使用局域网时，还是推荐使用后三者的。不过可以自建服务器，不过我自己没有试过，还不懂咋搞。。。
- 使用向日葵可能会碰到的一个问题，就是远程连接Ubuntu时，一连接就秒断的问题。具体可参考[这个](https://www.jianshu.com/p/0274a4b5e303)。之前实验室的服务器就碰到了这个问题，折腾了很久都没解决，还差点把系统搞崩了，因此果断放弃在服务器上使用向日葵，转为使用后3种了。

# 2. 使用windows远程桌面连接ubuntu

用过windows远程桌面连接的小伙伴们都知道，使用起来非常顺畅丝滑，界面清晰。但它只能在windows之间使用，远程连接ubutnu还需要进行一些配置。

## 2.1 安装xrdp

Xrdp 是一个微软远程桌面协议（RDP）的开源实现，它允许我们通过图形界面控制远程系统。这里使用RDP而不是VNC作为远程桌面，是因为Windows自带的远程桌面连接软件用的就是RDP协议，RDP在Windows下的体验非常好，包括速度很快（因为压缩方案做得比较好），可以直接在主机和远程桌面之间复制粘贴等等。
 
> 有的Xwindow软件是不太兼容xrdp的（比如ubuntu 18.04的默认桌面），但是ubuntu 20.04使用的Gnome是完全ok的。

安装过程如下：

```bash
sudo apt install xrdp
```

安装完成xrdp 服务将会自动启动，可以输入下面的命令验证它：

```bash
sudo systemctl status xrdp
```

默认情况下，xrdp 使用`/etc/ssl/private/ssl-cert-snakeoil.key`，它仅仅对ssl-cert用户组成语可读，所以需要运行下面的命令，将xrdp用户添加到这个用户组：

```bash
sudo adduser xrdp ssl-cert  
sudo systemctl restart xrdp
```

然后使用Windows自带的远程桌面软件连接服务器IP地址或者域名就行了。

## 2.2 问题1：远程连接后出现黑屏

==连接远程桌面输入账户和密码后，进入ubuntu20.04后，如果出现的是黑屏==，<font color=red>ubuntu系统下登出用户（log out），远程连接正常。</font>

或者使用下面步骤解决根本问题。

详情可阅读[参考资料2.](https://askubuntu.com/questions/1245020/xrdp-on-ubuntu-20-04)

- 打开`startwm.sh`文件

    ```bash
    sudo vim /etc/xrdp/startwm.sh
    ```

- 在以下位置添加如下内容：

    ```bash
    unset DBUS_SESSION_BUS_ADDRESS
    unset XDG_RUNTIME_DIR
    ```
    ![](https://img-blog.csdnimg.cn/88093ffce5284e3294f86a5b867ec5be.png#pic_center)  

<!-- <center><img src="https://img-blog.csdnimg.cn/88093ffce5284e3294f86a5b867ec5be.png" width=60%></center> -->



- 然后重启xrdp服务，重新尝试连接即可。

    ```bash
    sudo systemctl restart xrdp
    ```

> 除此之外，若远程登录后不登出直接关闭远程窗口，ubuntu系统登录后无法看到桌面，需要远程后登出才可以使用。

## 2.3 问题2：远程连接只能登陆root用户，无法登录普通用户

- 进行 `~/.xsession`的配置，以下以ubuntu20.04 gnome桌面类型配置为例。

    ```bash
    echo gnome-session > ~/.xsession
    ```

- 修改`startwm.sh`

    ```bash
    sudo vim /etc/xrdp/startwm.sh
    ```

	在`test -x /etc/X11/Xsession && exec /etc/X11/Xsession`前添加如下代码：
 
    ```bash
    gnome-session
    . /etc/X11/Xsession
    ```

    ![](https://img-blog.csdnimg.cn/7a711d14430c46a7b2bfcd585a5ce391.png#pic_center)  


- 重启xrdp服务
    ```bash
    sudo systemctl restart xrdp
    ```

- 使用windows远程连接工具连接Ubuntu，输入相应的用户密码后即可进入

# 3. 进行内网穿透

> 进行内网穿透的手段还可以参考[博客](https://chh3213.github.io/2022/10/15/SakuraFrp%E5%86%85%E7%BD%91%E7%A9%BF%E9%80%8F%E5%B7%A5%E5%85%B7/)。这里不再赘述


# 参考资料

- [https://zhuanlan.zhihu.com/p/336429888](https://zhuanlan.zhihu.com/p/336429888)
- [https://askubuntu.com/questions/1245020/xrdp-on-ubuntu-20-04](https://askubuntu.com/questions/1245020/xrdp-on-ubuntu-20-04)
- [https://blog.csdn.net/Fatmear/article/details/122037566](https://blog.csdn.net/Fatmear/article/details/122037566)
