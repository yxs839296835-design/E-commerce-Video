const steps = [
  {
    title: "导入商品资料",
    copy: "粘贴商品链接、上传图片或填写卖点，平台会整理基础信息、提炼核心卖点，并建议适合的图片和视频内容结构。",
  },
  {
    title: "选择目标市场",
    copy: "选择亚马逊、独立站、TikTok Shop 或本地社媒渠道，系统会根据市场语言、平台比例和消费者习惯调整内容策略。",
  },
  {
    title: "生成图影内容",
    copy: "批量生成主图、详情组图、短视频分镜、字幕翻译和多版本营销文案，适合快速做 A/B 测试。",
  },
  {
    title: "发布与复盘",
    copy: "把素材按渠道打包导出，记录点击率、转化率和评论反馈，持续优化下一轮图片、视频和翻译表达。",
  },
];

const stepButtons = document.querySelectorAll(".workflow-step");
const panelTitle = document.querySelector("#workflow-panel-title");
const panelCopy = document.querySelector("#workflow-panel-copy");

stepButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const index = Number(button.dataset.step);
    const step = steps[index];

    stepButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    panelTitle.textContent = step.title;
    panelCopy.textContent = step.copy;
  });
});
