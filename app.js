const tools = [
  {name:"ChatGPT",letter:"C",category:"Writing",access:"Freemium",description:"An AI assistant for writing, brainstorming, learning, coding and everyday problem-solving.",url:"https://chatgpt.com/",popular:100},
  {name:"Claude",letter:"Cl",category:"Writing",access:"Freemium",description:"An AI assistant for thoughtful writing, analysis, coding and working with long documents.",url:"https://claude.ai/",popular:96},
  {name:"Google Gemini",letter:"G",category:"Productivity",access:"Freemium",description:"Google's AI assistant for research, planning, multimodal tasks and productivity.",url:"https://gemini.google.com/",popular:94},
  {name:"Perplexity",letter:"P",category:"Research",access:"Freemium",description:"An answer engine that helps explore questions with linked sources and follow-up research.",url:"https://www.perplexity.ai/",popular:92},
  {name:"GitHub Copilot",letter:"⌘",category:"Coding",access:"Freemium",description:"AI coding assistance integrated into supported editors and developer workflows.",url:"https://github.com/features/copilot",popular:90},
  {name:"Cursor",letter:"Cu",category:"Coding",access:"Freemium",description:"An AI-powered code editor designed to help developers understand and change code.",url:"https://cursor.com/",popular:89},
  {name:"Codeium / Windsurf",letter:"W",category:"Coding",access:"Freemium",description:"AI-assisted coding tools and editor workflows for software development.",url:"https://windsurf.com/",popular:87},
  {name:"Canva Magic Studio",letter:"Ca",category:"Image",access:"Freemium",description:"AI-assisted design features for presentations, graphics, social posts and more.",url:"https://www.canva.com/magic/",popular:88},
  {name:"Adobe Firefly",letter:"A",category:"Image",access:"Freemium",description:"Generative AI tools for creating and editing images and other creative assets.",url:"https://firefly.adobe.com/",popular:86},
  {name:"Ideogram",letter:"I",category:"Image",access:"Freemium",description:"An image generation platform known for design-oriented visuals and text rendering.",url:"https://ideogram.ai/",popular:82},
  {name:"Runway",letter:"R",category:"Video",access:"Freemium",description:"Creative AI tools for generating and editing video and visual content.",url:"https://runwayml.com/",popular:85},
  {name:"Pika",letter:"Pi",category:"Video",access:"Freemium",description:"AI video creation tools for turning ideas and visual inputs into clips.",url:"https://pika.art/",popular:80},
  {name:"ElevenLabs",letter:"11",category:"Audio",access:"Freemium",description:"AI voice, text-to-speech and audio tools for creators and developers.",url:"https://elevenlabs.io/",popular:84},
  {name:"Suno",letter:"S",category:"Audio",access:"Freemium",description:"An AI music creation platform for generating songs from prompts.",url:"https://suno.com/",popular:83},
  {name:"Notion AI",letter:"N",category:"Productivity",access:"Paid",description:"AI features inside Notion for writing, summarizing and organizing work.",url:"https://www.notion.com/product/ai",popular:78},
  {name:"Hugging Face",letter:"H",category:"Coding",access:"Free",description:"A community platform for discovering, sharing and collaborating on machine learning models and datasets.",url:"https://huggingface.co/",popular:91}
];

const grid = document.querySelector("#tool-grid");
const searchInput = document.querySelector("#search-input");
const sortSelect = document.querySelector("#sort-select");
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");
let category = "All";
let access = "All";

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}
function render() {
  const query = searchInput.value.trim().toLowerCase();
  let filtered = tools.filter(tool => {
    const matchesCategory = category === "All" || tool.category === category;
    const matchesAccess = access === "All" || tool.access === access;
    const haystack = [tool.name, tool.category, tool.description, tool.access].join(" ").toLowerCase();
    return matchesCategory && matchesAccess && haystack.includes(query);
  });
  if (sortSelect.value === "name") filtered.sort((a,b) => a.name.localeCompare(b.name));
  if (sortSelect.value === "popular") filtered.sort((a,b) => b.popular-a.popular);
  resultCount.textContent = filtered.length + (filtered.length === 1 ? " tool" : " tools");
  emptyState.hidden = filtered.length !== 0;
  grid.hidden = filtered.length === 0;
  grid.innerHTML = filtered.map(tool => `
    <article class="tool-card">
      <div class="card-top"><span class="tool-icon" aria-hidden="true">${escapeHTML(tool.letter)}</span><span class="pricing ${tool.access === "Free" ? "free" : ""}">${escapeHTML(tool.access)}</span></div>
      <h3>${escapeHTML(tool.name)}</h3>
      <p>${escapeHTML(tool.description)}</p>
      <div class="card-bottom"><span class="category-tag">${escapeHTML(tool.category)}</span><a class="visit-link" href="${escapeHTML(tool.url)}" target="_blank" rel="noopener noreferrer">Visit website ↗</a></div>
    </article>`).join("");
}
function setActive(selector, dataKey, value) {
  document.querySelectorAll(selector).forEach(button => {
    const active = button.dataset[dataKey] === value;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}
document.querySelector("#category-filters").addEventListener("click", event => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  category = button.dataset.category;
  setActive(".filter-chip", "category", category);
  render();
});
document.querySelector(".access-row").addEventListener("click", event => {
  const button = event.target.closest("button[data-access]");
  if (!button) return;
  access = button.dataset.access;
  setActive(".access-chip", "access", access);
  render();
});
searchInput.addEventListener("input", render);
sortSelect.addEventListener("change", render);
document.querySelector("#clear-filters").addEventListener("click", () => {
  category = "All"; access = "All"; searchInput.value = ""; sortSelect.value = "featured";
  setActive(".filter-chip", "category", category);
  setActive(".access-chip", "access", access);
  render(); searchInput.focus();
});
document.addEventListener("keydown", event => {
  if (event.key === "/" && !["INPUT","TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault(); searchInput.focus();
  }
});
render();
