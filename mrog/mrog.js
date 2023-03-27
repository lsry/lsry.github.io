let mrogs = [
  {
    "time": "1678467391804",
    "text": "<p>對於雙指針的題目來説，需要在數組中尋找某個子數組使其具有性質f(x)，該性質應該具有二段性，具體爲當存在指針 low, high 且 low < high, 任意的 i > 0, SUM(A[low, high+i]) >= SUM(A[low, high])，而 SUM(A[low + i, high]) <= SUM(A[low, high])。或者反過來也成立。</p>\
    <p>可以用雙指針的例子為在均爲非負值的數組中求最長的和爲 sum 的子數組，增加 high 子數組和一直增大，增加 low 子數組和一直減少。但是若正負值均有，則有可能在 high 不變的情況下，增加 low，導致和增大，從而破壞了二段性。</p>"
  },
  {
    "time": "1664422563391",
    "text": "<p>在接口設計中，入口參數和出口參數是需要著重考慮的。首先要考慮接口的汎用性，盡可能讓接口的適用範圍增大，因此入口參數類型盡量使用在繼承樹中的頂層類型，例如接口或抽象類等。此外對於出口參數要考慮給用戶的信息越多越好，方便用戶做合適的選擇。因此要盡量細化，使用繼承樹中的靠下層類型。</p>\
    <p>一個反面例子當屬 java 的 Arrays.asList 方法，其返回值為 List 接口。沒有看過該方法源碼的用戶可能就會誤以爲其 List 可變，而調用 add 等修改集合的方法導致錯誤產生。</p>"
  },
  {
    time: "1662495458426",
    text: "<p>在对任何概念的理解过程中，比喻或许可以增加对概念的亲和性，从直观上理解概念。但是绝不可以替代真正的定义去对概念产生真正的领会。无论怎样，就算可能不理解也应该第一步从定义出发熟记概念。当有人希望你解释一个概念时，脑海里第一想法应该是对应的概念，而不是妄图以比喻去阐述。</p>"
  },
  {
    time: "1660872009665",
    text: "<p>使用 markdown 时的标题序号设置：</p> \
           <p>一级标题：中文文字型数字（壹、贰。。。）</p> \
           <p>二级标题：中文大写数字（一、二。。。）</p> \
           <p>三级标题：罗马数字（Ⅰ、Ⅱ。。。）</p> \
           <p>四级标题：阿拉伯数字（1、2。。。）</p> \
           <p>五级标题：圈号数字（①、②。。。）</p>"
  },
  {
    time: "1644508824042",
    text: "<p>一部作品是作者创作出来的世界，尽管可能和生活的现实世界有关联，但终究是不同的。因此在评价作品时产生了以下两个角度：</p>\
           <p>一是遵循作者的设定，然后根据这些设定去推断作者剧情的合理性。以这样的想法去分析作品时，当我们看到作者书写的某些情节可能在现实世界看来缺乏合理性，但在作品中采取这样的行为未必是值得观看者批判的。</p>\
           <p>二是质疑作者的设定。不过这样以来需要谨记的是我们的评价后产生的作品已经不是作者的作品了，而是我们自己的作品。这在自己需要写类似的作品时是需要转变的一个观念，但是作为普通观众持有这样的观点而对作品大加批判或许是欠考虑的。</p>"
  },
  {
    time: "1638544206790",
    text: "<p>maven version 3.8.1 强制仓库URL为 https 前缀的，否则会导致 'Blocked mirror for repository' 错误，之后相关 jar 包无法下载。记录的原因在于此问题在 maven release notes 中提到。谨记相关软件升级出现问题，需要首先到软件升级说明中查找。</p>"
  },
  {
    time:"1635434889367",
    text:"<p>被分片库坑的几点：</p>\
          <p>1. 查询时没有指定片键或片键为空</p>\
          <p>2. 插入时片键为空</p>"
  },
  {
    time:"1634222607895",
    text:"<p>当前新技术不断涌现，作为普通人只能不断去追逐这些。今日学四个，明日学五个，然后得一夕安寝，起视四方，而技术又至矣。有些人就会安慰自己：“书山有路勤为径，学海无涯苦作舟”。但这是被环境推着走的思考方式，如果有可能的话，还是尽量找到自己的东西，并专精于此，以自己来引领环境。</p>"
  },
  {
    time:"1621055629135",
    text:"<p>尽管推荐算法根据喜好，浏览历史等因素向用户推荐，让用户能尽快找到相似内容，这在短期内是有效的。长期来看这会导致用户处于信息茧房中而不知，时间一长，失去了开拓眼界的能力，同时强化了自我认知，对外界渐渐失去了包容心。</p><p>作为用户应该尽量去寻找与当前不同的内容，倾听不同的声音。此外一个软件的兴趣推荐算法应当存在，因为这方便发现同类，同时也应该拥有随机推荐不同种类内容的功能，避免极端化，损失其余。</p>"
  },
  {
    time: "1619422169119",
    text: "<p>意外重装了系统，C盘重置了。git的.ssh文件夹被删，重新生成ssh-key后,向远程主机提交会出现[Host key verification failed.]， 因为远程主机的IP被删，git无法确定是否合法。这个时候需要在仓库中用命令行执行 [git push -u origin master], 忽略 fingerprint，可以将远程主机的 IP 添加到 .ssh/known_hosts 中。</p>"
  },
  {
    time: "1619238509549",
    text: "<p>对于作品来说，应该避免出现<strong>杀必死</strong>的情节。这种情节对内容，逻辑并没有太大作用，纯粹是为吸引观众的噱头。</p> \
          <p>在日本从上个世纪出现的典型的如《哆啦A梦》中偷看静香洗澡的行为，《龙珠》中的相关软色情，到《刀剑神域》中的学妹事件都是这种情节的使用，普遍的如对动画“自古七八出福利”的相关评价等。</p> \
          <p>而中国的网络小说这种情节也经常出现，例如主角出门，总会遇到一位女性，然后由于意外吃了类似春药的效果，而不得不进行love的情节。</p> \
          <p>个人意见还是应该天堂的归天堂，地狱的归地狱。作品需要以硬实力说话。不过近年来这两方进行混合的现象越发普遍了，稍不注意就会出现在相关作品中，引发对“雷点”的讨论。如果是R18作品也就罢了，若是正常有价值的作品，不免令人扼腕叹息。</p>"
  },
  {
    time: "1617768720000",
    text: "<p>当二分查找用在旋转数组中，如果目标值和中值不匹配，那么就需要在左右半边选择，但是由于中值可能处于左上升或者右上升区间，因此有四种可能性。</p> \
           <p>如果先考虑目标值和中值大小关系，不妨设目标值大于中值，如果中值在左上升区间，则需要选择右半边，但是如果在右上升区间，则无法确定选择。 </p> \
           <p> 因此首先确定中值位置，那么就可以知道一个上升区间，判断目标值是否位于该区间中，就可以进一步二分 </p>\
           <p>当存在重复值时，可以利用中值和左右边界判断是否相等，则可以减少一个半边，如果左右边界值和中值均相等，那么直接向内减少一个边界索引即可。</p>"
  }
] 