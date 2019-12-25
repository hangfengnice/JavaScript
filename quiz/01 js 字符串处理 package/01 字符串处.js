function charCheck(str){
  var regs = [
      {
          reg:/[\u4e00-\u9fa5][a-z]|[a-z][\u4e00-\u9fa5]/gi,
          txt:'中英文之间需要增加空格'
      },
      {
          reg:/([\u4e00-\u9fa5]\d|\d[\u4e00-\u9fa5])/g,
          txt:'中文与数字之间需要增加空格'
      },
      {
          reg:/\d[A-Z]+/g,
          txt:'数字与单位之间需要增加空格'
      },
      // var strPunct = '！（）【】『』「」《》“”‘’；：，。？、';
      // // 使用管道符连接
      // var regPunct = strPunct.split('').join('|');
      // // 此时的正则表达式
      // new RegExp('['+ regPunct +'] +| +['+ regPunct +']', 'g');
      {
          reg:/([\s\S]{2}[\！|\·|\【|\】|\「|\」|\；|\：|\“|\”|\，|\《|\。|\》|\、|\？]\s+)|[\s+(\！|\·|\【|\】|\「|\」|\；|\：|\“|\”|\，|\《|\。|\》|\、|\？)[\s\S]{2}]/g,
          txt:'全角标点与其他字符之间不加空格'
      },
      // new RegExp(`(${regPunct})\\1+`, 'g')
      {
          reg:/(\~|\`|\!|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?|\！|\·|\【|\】\「\」|\；|\：|\“|\”|\，|\《|\。|\》|\、|\？)\1+/g,
          txt:'不重复使用标点符号'
      },
      {
          reg:/(\S(——)|(——)\S)/g,
          txt:'破折号前后需要增加一个空格'
      },
      {
          reg:/([^A-Za-z][\~|\`|\!|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?][^A-Za-z])/g,
          txt:'使用全角中文标点'
      },
      {
          reg:/[\uFF10-\uFF19]+/g,
          txt:'数字使用半角字符'
      },
      {
          reg:/(\「[A-Za-z\s\~|\`|\!|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]*[\！|\·|\；|\：|\“|\”|\，\。|\、|\？][^\」]*\」)|(\《[A-Za-z\s\~|\`|\!|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]*[\！|\·|\；|\：|\“|\”|\，\。|\、|\？][^\》]*\》)/g,
          txt:'遇到完整的英文整句、特殊名词，其內容使用半角标点'
      },
  ]
  regs.forEach(function(d,i){
      var res = str.match(d.reg);
      if(res){
          console.group("%c错误"+(i+1)+"："+d.txt,"color:red");
          console.log(res)
          console.groupEnd();
      }
  })
}
charCheck('在 LeanCloud上，，数据存储13是——围绕AVObject 进行3DAY的。。，每个 AVObject都包含,了与 JSON 兼容的key-value,对应的 ——数据。 数据是 schema-free 的， 你不需要１０００在每个 AVObject 上提前指定存《Stay hungry，stay foolish.》在哪些键 ， 只要直接设定对应的 key-value 即可。乔布斯那「Stay hungry，stay foolish.」句话是怎么说的？「Stay hungry,stay foolish。」')