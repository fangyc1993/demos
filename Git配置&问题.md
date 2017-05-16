# Git全局配置

git config --global user.name xxx #方便产品经理找（怼）你 git config --global user.email yyy #方便产品经理找（怼）你 git config --global push.default simple git config --global core.quotepath false #防止文件名变成数字 git config --global core.editor "vim" #使用vim编辑提交信息 git config --global core.ignorecase false #让git区分大小写

# 错误收集

> fatal: refusing to merge unrelated histories
新仓库初始化了readme或者有人提交了新内容.

解决:加如下选项

> –allow-unrelated-histories


# SSH配置

## 前言

在没有配置ssh的情况下使用ssh链接操作github库的时候会出现如下异常:

```

$ git clone git@github.com:linmuxi/test-git.git
Cloning into 'test-git'...
Warning: Permanently added the RSA host key for IP address '192.30.252.129' to the list of known hosts.
Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
~

```
## 步骤

1.检查ssh keys是否存在

  `ls -al ~/.ssh`
  

2.生成ssh key

  `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
  

3.将ssh key添加到ssh-agent

先确认ssh-agent是可用的

```

# eval $(ssh-agent -s)
Agent pid xxxxx

```
将ssh key添加到ssh-agent

   `ssh-add ~/.ssh/id_rsa`
将ssh key配置到github

4.复制key内容

  `clip < ~/.ssh/id_rsa.pub`
​
