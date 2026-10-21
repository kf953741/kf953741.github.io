"use strict";
(() => {
  const zh = {
    skip:"跳转到正文",navResearch:"研究成果",navEngine:"数据引擎",navBackground:"个人经历",navMedia:"媒体报道",heroEyebrow:"SKYWORK AI · 模型研究",heroLine1:"世界模型。",heroLine2:"具身智能。",heroDescription:"我在 Skywork AI 从事世界模型、具身基础模型与世界动作模型（WAM）研究，工作涵盖<strong>模型架构、模型训练、后训练和训练数据构建</strong>。",explore:"探索研究成果",previously:"曾任",tencentRole:"3D 引擎技术专家",playDemo:"播放演示",heroCaption:"实时交互式世界生成",officialDemo:"来自官方项目的真实演示",researchEyebrow:"01 / 代表成果",researchTitle:"精选研究成果。",researchIntro:"从交互式虚拟世界，到可执行的机器人策略。",filterAll:"全部研究",filterWorld:"世界模型",filterEmbodied:"具身智能",filter3d:"3D 生成",robotDemos:"机器人演示",embodiedWam:"具身智能 / WAM",riemannSubtitle:"面向物理 AI 的具身世界动作模型。",riemannDescription:"以因果自回归架构，统一可执行的机器人策略与动作条件下的世界模拟。",myContribution:"我的贡献",riemannRole:"论文共同作者。负责<strong>全部模型后训练工作</strong>。",realWorldSr:"真机任务成功率",reportedResults:"以上为项目报告指标，具体评测条件见论文。",paper:"论文",project:"项目主页",methodAndDemos:"技术方案与演示",interactiveWorlds:"交互式世界模型",mg35Subtitle:"以几何感知记忆，构建持续一致的交互世界。",mg35Description:"结合 Patch Memory、相机条件控制和静态—动态世界表示，实现长时场景回忆与主体一致性。",matrixRole:"论文共同作者。负责<strong>数据部分</strong>，并参与<strong>模型架构设计</strong>。",demos:"演示",explore3d:"探索 3D 世界",spatialIntelligence:"空间智能 / 3D",matrix3dSubtitle:"全向、可探索的 3D 世界生成。",matrix3dDescription:"论文共同作者。将轨迹引导的全景视频生成与 3D 重建结合，从文字或单张图像生成可探索的三维世界。",datasetNote:"Matrix-Pano 中带标注的全景视频序列",moreResearch:"其他研究",mg3Compact:"论文共同作者。负责数据部分并参与模型架构设计。5B 模型支持最高 720p / 40 FPS 的记忆增强世界生成。",mg2Compact:"论文共同作者。从零设计并搭建 Unreal Engine 数据生成管线，支持 25 FPS 实时动作条件生成。",mg1Compact:"论文共同作者。17B 交互式世界基础模型，支持可控的 Minecraft 世界生成。",engineEyebrow:"02 / 代表性技术贡献",engineTitle:"面向世界模型的<br>数据引擎。",engineDescription:"我<strong>开创性地使用 Unreal Engine 生成精确同步的动作—视频配对数据</strong>，从零设计并搭建了 Matrix-Game 2.0 中首次公开的世界模型训练数据管线。",readTechnicalRecord:"查看论文中的技术方案",engineDate:"首次公开于 Matrix-Game 2.0 · 2025",step1:"可控的 3D 环境",step2:"精确同步的输入与相机控制",step3:"对齐的动作—视频训练监督",step4:"世界模型训练",backgroundEyebrow:"03 / 个人经历",backgroundTitle:"从 3D 引擎<br>到世界模型。",backgroundIntro:"将 3D 引擎与仿真的技术积累，融入模型研究与训练。",current:"目前",previous:"此前",currentFocus:"世界模型与具身智能",currentDescription:"围绕世界模型、具身基础模型与 WAM，开展模型架构、训练、后训练和训练数据构建。",previousDescription:"积累了 3D 引擎、实时系统与仿真技术经验，并将其应用于交互式世界模型研究。",openSource:"工程与开源贡献",unluaDescription:"修复 Unreal Engine 5 兼容性问题，涉及 Lua 绑定数学类型的 C++ 代码；修改已合并。",mergedPr:"已合并 PR #339",puertsDescription:"Unreal Engine 5.5 + TypeScript 项目模板，涵盖启动、编译和断点调试。",mediaEyebrow:"04 / 媒体报道",mediaTitle:"媒体报道。",mediaIntro:"科技媒体对我参与的研究项目的精选报道。",moreCoverage:"更多报道",connectEyebrow:"保持联系",connectTitle:"欢迎交流。",footerNote:"世界模型。具身智能。",backTop:"返回顶部 ↑"
  };
  Object.assign(zh,{wechat:"微信",copyWechat:"复制微信号"});
  const nodes = [...document.querySelectorAll("[data-i18n]")];
  const en = Object.fromEntries(nodes.map(node => [node.dataset.i18n,node.innerHTML]));
  const languageButton = document.querySelector("#language-toggle");
  const menuButton = document.querySelector("#menu-toggle");
  const navigation = document.querySelector("#navigation");
  const filters = [...document.querySelectorAll("[data-filter]")];
  const projects = [...document.querySelectorAll("article[data-category]")];
  const moreResearch = document.querySelector("#more-research");
  const copyWechat = document.querySelector("#copy-wechat");
  const copyFeedback = document.querySelector("#copy-feedback");
  let copyTimer;
  let language = "en";
  const closeMenu = () => {navigation.classList.remove("is-open");menuButton.setAttribute("aria-expanded","false");menuButton.setAttribute("aria-label",language === "zh"?"打开导航":"Open navigation");};
  const updateCount = () => {const count=projects.filter(node=>!node.hidden).length;document.querySelector("#research-count").textContent=language === "zh"?`${count} 篇论文`:`${count} ${count === 1?"paper":"papers"}`;};
  const setLanguage = value => {
    language=value === "zh"?"zh":"en";
    const strings=language === "zh"?zh:en;
    nodes.forEach(node=>{if(Object.hasOwn(strings,node.dataset.i18n))node.innerHTML=strings[node.dataset.i18n];});
    document.documentElement.lang=language === "zh"?"zh-CN":"en";
    document.title=language === "zh"?"康飞 · Fei Kang | 世界模型与具身智能":"Fei Kang · 康飞 | World Models & Embodied AI";
    languageButton.textContent=language === "zh"?"EN":"中文";
    languageButton.setAttribute("aria-label",language === "zh"?"Switch to English":"Switch to Chinese");
    copyWechat.setAttribute("aria-label",language === "zh"?"复制微信号":"Copy WeChat ID");
    copyFeedback.textContent="";
    document.querySelector("#play-demo").setAttribute("aria-label",language === "zh"?"播放 Matrix-Game 3.0 演示":"Play Matrix-Game 3.0 demonstration");
    const url=new URL(location.href);
    if(url.searchParams.has("lang") || language === "zh"){
      url.searchParams.set("lang",language);
      history.replaceState(null,"",url.pathname+url.search+url.hash);
    }
    closeMenu();updateCount();
    try{localStorage.setItem("fei-kang-language",language);}catch(_){/* Storage is optional. */}
  };
  languageButton.addEventListener("click",()=>setLanguage(language === "en"?"zh":"en"));
  let saved=null;try{saved=localStorage.getItem("fei-kang-language");}catch(_){/* Storage is optional. */}
  setLanguage(new URLSearchParams(location.search).get("lang") || saved || "en");
  copyWechat.addEventListener("click",async()=>{
    clearTimeout(copyTimer);
    try{
      await navigator.clipboard.writeText("kf953741");
      copyWechat.querySelector("span").textContent=language === "zh"?"已复制":"Copied";
      copyFeedback.textContent=language === "zh"?"微信号已复制：kf953741":"WeChat ID copied: kf953741";
      copyTimer=setTimeout(()=>{copyWechat.querySelector("span").textContent=language === "zh"?zh.copyWechat:en.copyWechat;},2500);
    }catch(_){
      const range=document.createRange();range.selectNodeContents(document.querySelector("#wechat-id"));
      const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);
      copyFeedback.textContent=language === "zh"?"请复制已选中的微信号：kf953741":"Please copy the selected WeChat ID: kf953741";
    }
  });
  menuButton.addEventListener("click",()=>{const open=menuButton.getAttribute("aria-expanded")!=="true";navigation.classList.toggle("is-open",open);menuButton.setAttribute("aria-expanded",String(open));menuButton.setAttribute("aria-label",language === "zh"?(open?"关闭导航":"打开导航"):(open?"Close navigation":"Open navigation"));});
  navigation.querySelectorAll("a").forEach(link=>link.addEventListener("click",closeMenu));
  document.addEventListener("keydown",event=>{if(event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true"){closeMenu();menuButton.focus();}});
  window.matchMedia("(min-width: 801px)").addEventListener("change",event=>{if(event.matches)closeMenu();});
  filters.forEach(button=>button.addEventListener("click",()=>{
    const activeFilter=button.dataset.filter;
    filters.forEach(item=>{const selected=item===button;item.classList.toggle("active",selected);item.setAttribute("aria-pressed",String(selected));});
    projects.forEach(project=>{project.hidden=activeFilter!=="all" && project.dataset.category!==activeFilter;});
    moreResearch.hidden=![...moreResearch.querySelectorAll("article")].some(project=>!project.hidden);
    updateCount();
  }));
  const video=document.querySelector("#world-demo"),play=document.querySelector("#play-demo");
  video.controls=false;play.hidden=false;
  play.addEventListener("click",async()=>{play.hidden=true;video.controls=true;try{await video.play();}catch(_){play.hidden=false;video.controls=true;}});
  video.addEventListener("ended",()=>{video.controls=false;play.hidden=false;});
  if("IntersectionObserver" in window){
    const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){navigation.querySelectorAll("a").forEach(link=>{if(link.hash===`#${entry.target.id}`)link.setAttribute("aria-current","location");else link.removeAttribute("aria-current");});}});},{rootMargin:"-15% 0px -65% 0px",threshold:0});
    document.querySelectorAll("main section[id]").forEach(section=>observer.observe(section));
  }
})();
