---
category: 硬件
tags: 
    - Linux 
    - 驱动
date: 2019-08-08
title: Linux Kernel 驱动 之 PWM
vssue-title: Linux Kernel 驱动 之 PWM
---

新的领域的学习，记录一下

<!-- more -->

## 关于Kernel

### LINUX

从1991年到现在，已经过去了28年时间，首先我们先感谢一下 Linus为开源世界作出的贡献。

Linux本质上是一套符合可移植的操作系统接口的操作系统。即Linux 为我们提供了操作系统硬件的一些小镊子（API）

我们再基于这些小镊子，搭建起符合我们嵌入式开发的Linux操作系统。 比我我们公司的K210开发板和K510开发板。打个广告

### PWM 
PWM就是脉冲宽度调制。

通过PWM的脉冲宽度调制，我们可以调制，一个周期内的，高电压和低电压的比例，从而看到，不一样的亮度。 是不是很聪明呢！我也觉得很聪明。

驱动是怎么实现的呢？我们对外一共提供了三个接口。

1.pwm_init()
这个函数主要是 使能 时钟，Timer不是时钟，是一个计时器，就像JS里面的setTimeOut（）一样。

2.pwm_enable()

这个函数，就是我们要启用那个时钟的那个通道的PWM使能。

3.pwm_set_frequency()
输入一个已经使能的时钟号和通道号，输入频率和占空比。
输入评率以后我们就拿时钟频率除以输入的频率
clk/frequncy=periods
一个评率里，有多少个时钟周期
然后我们就可以分配时钟周期比如periods=100 duty=0.3
那么我就设置高电位是100*0.3=30个时钟周期
低电位是100*0.7=70个时钟周期
此时的亮度是百分之七十。

```c
    timer[pwm_number]->channel[channel].load_count = periods - percent;
    timer[pwm_number]->load_count2[channel] = percent;
```

