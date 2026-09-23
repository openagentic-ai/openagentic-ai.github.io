const panels = [
  {title:'一个文件夹，就是起点。', copy:'不用把所有资料都交出去。只读取你指定的笔记，不修改原文件。',items:[['本周安排.md','时间与计划'],['演示记录.md','进度与疑问'],['个人备忘.md','日常待办']]},
  {title:'少一点重复交代。', copy:'保存你明确告诉助手的展示偏好，在下一次生成简报时继续使用。',items:[['语言','简短中文'],['顺序','有截止日期的事项优先'],['依据','每项保留来源文件名']]},
  {title:'有依据，也有下一步。', copy:'整理结果保存在运行助手的机器上。再次打开可查看上次简报，不代表待办已自动执行。',items:[['待办','测试转接线，准备试讲'],['待确认','现场是否可以联网'],['已完成','三份示例笔记已准备']]}
];
const tabs=[...document.querySelectorAll('[data-step]')];
function select(index){tabs.forEach((tab,i)=>{tab.classList.toggle('active',i===index);tab.setAttribute('aria-selected',String(i===index));tab.tabIndex=i===index?0:-1});const p=panels[index];document.getElementById('step-panel').setAttribute('aria-labelledby',`tab-${index}`);document.getElementById('panel-title').textContent=p.title;document.getElementById('panel-copy').textContent=p.copy;document.getElementById('panel-items').replaceChildren(...p.items.map(([name,note])=>{const row=document.createElement('div');const label=document.createElement('span');const sub=document.createElement('small');label.textContent=name;sub.textContent=note;row.append('▤ ',label,sub);return row}))}
tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>select(i));tab.addEventListener('keydown',e=>{let n;if(e.key==='ArrowDown'||e.key==='ArrowRight')n=(i+1)%tabs.length;if(e.key==='ArrowUp'||e.key==='ArrowLeft')n=(i+tabs.length-1)%tabs.length;if(e.key==='Home')n=0;if(e.key==='End')n=tabs.length-1;if(n!==undefined){e.preventDefault();select(n);tabs[n].focus()}})});
