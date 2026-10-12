const sourceText=document.getElementById("sourceText");
const preview=document.getElementById("preview");
const charCount=document.getElementById("charCount");
const status=document.getElementById("status");
const styleButtons=[...document.querySelectorAll(".style-btn")];
let currentMode="sentence";
function toSentenceCase(text){const lower=text.toLocaleLowerCase();return lower.replace(/(^\s*[a-z]|\.\s+[a-z]|!\s+[a-z]|\?\s+[a-z]|(?:\n\s*)+[a-z])/g,match=>match.toLocaleUpperCase())}
function toTitleCase(text){const minorWords=new Set(["a","an","the","and","but","or","for","nor","on","at","to","from","by","of","in"]);return text.toLocaleLowerCase().replace(/\b[\p{L}\p{N}][\p{L}\p{N}'’\-]*/gu,(word,offset)=>offset!==0&&minorWords.has(word)?word:word.charAt(0).toLocaleUpperCase()+word.slice(1))}
function formatText(text,mode){switch(mode){case"title":return toTitleCase(text);case"upper":return text.toLocaleUpperCase();case"lower":return text.toLocaleLowerCase();default:return toSentenceCase(text)}}
function render(){const raw=sourceText.value;charCount.textContent=raw.length+" character"+(raw.length===1?"":"s");const output=formatText(raw,currentMode);preview.textContent=output||"Your formatted text will appear here.";preview.classList.toggle("empty",!output);status.textContent=""}
sourceText.addEventListener("input",render);
styleButtons.forEach(button=>button.addEventListener("click",()=>{currentMode=button.dataset.mode;styleButtons.forEach(item=>{const selected=item===button;item.classList.toggle("active",selected);item.setAttribute("aria-pressed",String(selected))});render()}));
document.getElementById("copyBtn").addEventListener("click",async()=>{const output=formatText(sourceText.value,currentMode);if(!output.trim()){status.style.color="#ffbd9e";status.textContent="Add some text first.";return}try{await navigator.clipboard.writeText(output);status.style.color="#78e4c2";status.textContent="Copied! Paste it into your Gmail message."}catch{sourceText.focus();sourceText.select();status.style.color="#ffbd9e";status.textContent="Clipboard unavailable. Select and copy the text manually."}});
document.getElementById("clearBtn").addEventListener("click",()=>{sourceText.value="";sourceText.focus();render()});
styleButtons.forEach(button=>button.setAttribute("aria-pressed",String(button.dataset.mode===currentMode)));
render();