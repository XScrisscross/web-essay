### 1.git如何创建一个基本的仓库?
- 可以在本地初始化创建仓库,再推送到远程仓库
- 也可以从远程克隆仓库

### 2.git如何在多台电脑上使用?
- 在不同的电脑生成公钥然后进行配置(同一个账号下的)
- 查看本机是否有公钥:~/.ssh
- 生成公钥:ssh-keygen -t rsa -C "YOUR_EMAIL@YOUREMAIL.COM" -f ~/.ssh/otherkey

### 3.git如何提交提同时总是忽略某些文件?
- 创建一个.gitignore文件,添加需要忽略的文件或后缀

### 4.git忘记pull后在修改大量代码时应该如何解决?
- add -> commit -> pull -> push

### 5.版本如何回退?
- git commit 相当于一个快照,存档点(提交到当前分支)
- git log (提交日志,显示最近三次提交的情况,里面包含了版本号)
- git reset --hard HEAD^ (上个)
- git reset --hard HEAD^^ (前两个)
- git reset --hard HEAD~100 (回退到前100个版本)
- git reset --hard commit_id (这并不是回退,而是,根据版本号,改变指针指向,前往某个版本)
- 注意:是本地版本回退,提交冲突如何解决:git push -f(强制提交)

### 6.git的结构?
- 工作区即文件目录,add将工作区内容添加到暂存区,commit将内容提交到当前分支,注意提交时提交的是暂存区的内容

### 7.如何对修的改文件回撤?
- git checkout -- file回撤的两种情况(未push,一般用于未提交到暂存区的回退):
  没有被放到暂存区,撤销修改就回到和版本库原状态
  已经添加到暂存区后,又作了修改,撤销修改就回到添加到暂存区后的状态
- git reset HEAD <file>使用情况(未push,用于已经提交到暂存区的回退):
  可以撤销暂存区 
  可以回退版本
- 注意:可以结合使用,先试用git reset HEAD <file>回退到(丢弃暂存区),之后git checkout -- file回撤到原始库

### 8.git如何删除文件
- rm 文件名  ->  删除文件
- git rm  ->  确认删除(也可以git checkout -- file)

### 9.如何将本地仓库与远程仓库进行连接?
- git remote add origin <远程仓库名(地址)>  "origin "是远程库的名字 

### 10.分支管理
- 主分支发布,副分支工作
- 创建分支:git branch 分支名
- 创建并切换到另一个分支:git checkout -b  dev(分支名)
- 检查当前有多少分支:git branch   (可以选中当前副分支进行提交)
- 切换分支:git checkout 分支名
- 合并其他分支到当前分支:git merge 其他分支(实质上是指针的改变)
- 合并其他分支到当前分支并且不删除分支信息:git merge 其他分支 --no-ff
- 删除其他分支:git branch -d 其他分支 
- 查看文件内容:cat 文件名
- 修改文件内容:vi 文件名
- 注意:修改之后为想要的内容,可随意

### 11.git中的vi命令?
- vi 文件名:打开文件
- i 进入编辑模式
- esc 退出编辑模式,进入命令模式
- :w 保存
- :q 退出vi
- :q!  不保存文件退出vi
- :e!  放弃所有修改

### 12.分支冲突
- 产生:两人修改同一部分的代码进行commit
- 方法:手动跟新或强制跟新

### 13.在工作到一半时如何去解决bug?
- git status 时发现工到一半,工作区不干净.(状况:在A分支上工作,昨天提交的B分支上出现BUG)
- 此时git stash 保存状态
- 然后切换到BUG分支,检出新分支修复BUG,并切合并到原分支上,ok...
- 回到工作分支上,写的东西呢?????
- 此时,使用git stash apply可以回复,之后git stash drop可以删除保存状态的内容
- (也可以直接git stash pop)
- git stash list 可以查看保存列表
- git stash drop@{n} 删除指定序号处的保存

### 13.如何强行删除分支?
- git branch -D <name>
- git remote 查看远程仓库名
- git remote -v 查看远程仓库名信息  可以看到远程仓库名

### 14.远程分支?
- 远程也可以创建分支:分支分为远程与本地
- git push orign(远程仓库名) dev:将分支推送到远程分支 
- master 与  dev 为远程仓库分支在dev远程分支开发  master远程分支用于合并
- 创建远程的orgin仓库的dev分支到本地开发:git checkout -b dev origin/dev

### 15.本地分支提交到远程仓库的分支
- git push origin <仓库名> master <分支名>

### 16.fetch与直接pull
- fetch + merge ~ pull

### 17.git多版本不同分支开发
- 远程仓库可创建主分支以及多个不同的分支
- 在本定也创建不同的本地分支与远程仓库对应
- 不同分支提交到不同的远程分支 -> 远程本地分支合并到主分支开发分支 -> 所有同步从远程主分支开发分支上拉取
- 实际上规范下来就是梯形的开发模式

### 18.查看远程链接的库
- git remote -v 
- git remote -a 
- git remote add <地址> 
- git remote remove <地址>

### 19.可查看各种提交信息
- git log --graph
- git log --oneline

### 20.git与远程分支建立联系
- git remote -u origin/feature feature
