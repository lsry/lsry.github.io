let mrogs = [
  {
    time:"1621055629135",
    text:"<p>尽管推荐算法根据喜好，浏览历史等因素向用户推荐，让用户能尽快找到相似内容，这在短期内是有效的。长期来看这会导致用户处于信息茧房中而不知，\
          时间一长，失去了开拓眼界的能力，同时强化了自我认知，对外界渐渐失去了包容心。</p><p>作为用户应该尽量去寻找与当前不同的内容，倾听不同的声音。此外一个软件的\
          的兴趣推荐算法应当存在，因为这方便发现同类，同时也应该拥有随机推荐不同种类内容的功能，避免极端化，损失其余。</p>"
  },
  {
    time: "1619422169119",
    text: "<p>意外重装了系统，C盘重置了。git的.ssh文件夹被删，重新生成ssh-key后,向远程主机提交会出现[Host key verification failed.]， 因为远程主机的IP被删，git无法确定是否合法。\
          这个时候需要在仓库中用命令行执行 [git push -u origin master], 忽略 fingerprint，可以将远程主机的 IP 添加到 .ssh/known_hosts 中。 </p>"
  },
  {
    time: "1619238509549",
    text: "<p>对于作品来说，应该避免出现<strong>杀必死</strong>的情节。这种情节对内容，逻辑并没有太大作用，纯粹是为吸引观众的噱头。</p> \
          <p>在日本从上个世纪出现的典型的如《哆啦A梦》中偷看静香洗澡的行为，《龙珠》中的相关软色情，到《刀剑神域》中的学妹事件都是这种情节的使用，普遍的如对动画“自古七八出福利”的相关评价等。</p> \
          <p>而中国的网络小说这种情节也经常出现，例如主角出门，总会遇到一位女性，然后由于意外吃了类似春药的效果，而不得不进行love的情节。</p> \
          <p>个人意见还是应该天堂的归天堂，地狱的归地狱。作品需要以硬实力说话。不过近年来这两方进行混合的现象越发普遍了，稍不注意就会出现在相关作品中，引发对“雷点”的讨论。\
          如果是R18作品也就罢了，若是正常有价值的作品，不免令人扼腕叹息。</p>"
  },
  {
    time: "1617768720000",
    text: "<p>当二分查找用在旋转数组中，如果目标值和中值不匹配，那么就需要在左右半边选择，但是由于中值可能处于左上升或者右上升区间，因此有四种可能性。</p> \
           <p>如果先考虑目标值和中值大小关系，不妨设目标值大于中值，如果中值在左上升区间，则需要选择右半边，但是如果在右上升区间，则无法确定选择。 </p> \
           <p> 因此首先确定中值位置，那么就可以知道一个上升区间，判断目标值是否位于该区间中，就可以进一步二分 </p>\
           <p>当存在重复值时，可以利用中值和左右边界判断是否相等，则可以减少一个半边，如果左右边界值和中值均相等，那么直接向内减少一个边界索引即可。</p>"
  }
] 