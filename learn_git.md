# git

标签（空格分隔）： 未分类

---

1、配置

ssh密钥
 
> git config --global user.name "用户名"    

> git config --global user.email "邮箱"

生成密钥
> ssh-keygen -t rsa -C "邮箱"

添加密钥到ssh-agent
> eval "$(ssh-agent -s)"

添加生成的 SSH key 到 ssh-agent。
> ssh-add ~/.ssh/id_rsa

复制ssh-key
> vim .ssh/id_rsa.pub

测试ssh连接

> ssh -T git@github.com

2、代码提交

clone到本地
> git clone git@github.com:noworg/js.git

初始化
> git init


添加代码
> git add file(--all)

添加提交且有注释
> git commit -m "注释内容"




关联本地仓库
> git remote add origin git@github.com:noworg/js.git

首次提交
> git push -u origin master


第二次修改并提交
> git commit -am "注释"
> git push

更新代码

> git pull

 3、版本管理
 4、分支管理

