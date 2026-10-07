const menu = {
  coffee: [
    ['The LAMSA Latte','Espresso, steamed milk, a touch of spice',45,'لاتيه لمسة','إسبريسو، حليب، ولمسة من التوابل'],
    ['Cappuccino','A classic, with perfectly balanced foam',32,'كابتشينو','قهوة كلاسيكية مع رغوة متوازنة'],
    ['Flat White','Double espresso, silky microfoam',35,'فلات وايت','إسبريسو مزدوج مع رغوة حليب ناعمة'],
    ['Espresso','Small cup. Full character.',22,'إسبريسو','فنجان صغير، نكهة غنية']
  ],
  cold: [
    ['Iced Pistachio','Espresso, milk, pistachio cream',48,'قهوة الفستق المثلجة','إسبريسو، حليب، وكريمة الفستق'],
    ['Iced Latte','Espresso and cold milk over ice',38,'لاتيه مثلج','إسبريسو وحليب بارد مع الثلج'],
    ['Cold Brew','Slow-steeped coffee, smooth and refreshing',35,'كولد برو','قهوة منقوعة ببطء، ناعمة ومنعشة'],
    ['Iced Americano','Double espresso, water, ice',28,'أمريكانو مثلج','إسبريسو مزدوج، ماء، وثلج']
  ],
  tea: [
    ['Matcha Latte','Matcha and silky steamed milk',42,'ماتشا لاتيه','ماتشا مع حليب ناعم'],
    ['Moroccan Mint Tea','Green tea, fresh mint, a familiar ritual',25,'شاي مغربي بالنعناع','شاي أخضر ونعناع طازج'],
    ['Iced Matcha','Matcha, cold milk, ice',45,'ماتشا مثلجة','ماتشا وحليب بارد وثلج'],
    ['Hot Chocolate','Rich cocoa, warm milk',35,'شوكولاتة ساخنة','كاكاو غني وحليب دافئ']
  ],
  sweet: [
    ['Butter Croissant','Golden, flaky, freshly baked',20,'كرواسون بالزبدة','ذهبي ومقرمش ومخبوز طازجاً'],
    ['LAMSA Tiramisu','Coffee-soaked layers, mascarpone, cocoa',45,'تيراميسو لمسة','طبقات بالقهوة، ماسكاربوني، وكاكاو'],
    ['Chocolate Cookie','Soft centre, dark chocolate pieces',22,'كوكيز الشوكولاتة','قلب طري وقطع شوكولاتة داكنة'],
    ['Pistachio Cheesecake','Creamy cheesecake, pistachio finish',48,'تشيز كيك الفستق','تشيز كيك كريمي بلمسة فستق']
  ]
};
const translations = {
  navStory:'حكايتنا',navSignatures:'لمساتنا',navMenu:'القائمة',navGallery:'المكان',visit:'زورونا',location:'سباتة، الدار البيضاء',
  heroTitle:'في كل فنجان<br><em>لمسة.</em>',heroDescription:'قهوة لذيذة. تفاصيل بعناية.<br>لحظة صغيرة، من أجلك.',explore:'اكتشف القائمة',heroFoot:'نُحضّرها بعناية. تستمتع بها على مهلك.',discover:'اكتشف لمسة',meaning:'لمسة. إحساس. لحظة.',ourStory:'روح لمسة',storyTitle:'تفاصيل صغيرة.<br><em>أثر يبقى.</em>',storyDescription:'لمسة هي العناية في كل فنجان، ودفء الترحيب، ومتعة التمهّل. ركن جديد في الدار البيضاء، صُنع للحظاتك اليومية.',spaceLink:'اعثر على لحظتك',collection:'مجموعة لمسة',signatureTitle:'نكهات مألوفة.<br><em>بلمستنا الخاصة.</em>',fullMenu:'اكتشف القائمة كاملة',houseSignature:'لمستنا الخاصة',somethingCool:'انتعاش مختلف',sweet:'الجانب الحلو',latte:'لاتيه لمسة',latteDesc:'إسبريسو ناعم. ولمسة خفيفة من التوابل.',pistachio:'قهوة الفستق المثلجة',pistachioDesc:'كريمية وغنية، ومختلفة قليلاً.',pastry:'استراحة ذهبية صغيرة',pastryDesc:'طبقات بالزبدة، مع فنجانك المفضل.',concept:'لمحة عمّا نخطط له — صور تصورية واختيارات تجريبية.',yourCorner:'ركنك الصغير في الدار البيضاء',experienceTitle:'ابقَ قليلاً.<br><em>كأنك في بيتك.</em>',experienceDesc:'صباح هادئ. لقاء يتحوّل إلى أمسية. أو مجرد فنجان قهوة مع نفسك. في لمسة، لكل شخص لحظته.',seeYou:'نراك هنا',madeFor:'لحظاتك اليومية',menuTitle:'ماذا تشتهي<br><em>اليوم؟</em>',menuDesc:'من أول رشفة إلى آخر لقمة.<br>اكتشف شيئاً تحبه.',menuNote:'قائمة تجريبية · أسعار نموذجية بالدرهم',menuBottom:'العناية تصنع الفرق. اسأل فريقنا عن المكونات ومسببات الحساسية.',comeBy:'مكان جديد للقاء',visitTitle:'قهوتك القادمة.<br><em>عندنا.</em>',neighbourhood:'سباتة، الدار البيضاء',visitDetails:'حكايتنا تبدأ الآن.<br>العنوان الدقيق ومواعيد العمل قريباً.',map:'اكتشف الحي',footerTag:'في كل فنجان لمسة.<br>مكان في يومك.',backTop:'إلى الأعلى',footerLocation:'بلمسة من الدار البيضاء'
};
let language = 'en';
let activeCategory = 'coffee';
const originals = new Map();
document.querySelectorAll('[data-i18n]').forEach(element => originals.set(element, element.innerHTML));
const categories = { coffee:['Coffee','القهوة'], cold:['Something cold','مشروبات باردة'], tea:['Matcha & tea','ماتشا وشاي'], sweet:['Sweet bites','حلويات'] };
function renderMenu() {
  const tabs = document.querySelector('.menu-tabs');
  tabs.innerHTML = Object.entries(categories).map(([key,labels]) => `<button type="button" role="tab" id="tab-${key}" aria-controls="menu-panel" aria-selected="${key === activeCategory}" tabindex="${key === activeCategory ? 0 : -1}" data-category="${key}">${labels[language === 'ar' ? 1 : 0]}</button>`).join('');
  const panel = document.querySelector('.menu-items');
  panel.setAttribute('aria-labelledby',`tab-${activeCategory}`);
  panel.innerHTML = menu[activeCategory].map(item => `<article class="menu-item"><div><h3>${item[language === 'ar' ? 3 : 0]}</h3><p>${item[language === 'ar' ? 4 : 1]}</p></div><span class="menu-price">${item[2]} <small>${language === 'ar' ? 'د.م.' : 'MAD'}</small></span></article>`).join('');
}
document.querySelector('.menu-tabs').addEventListener('click',event => {
  const button = event.target.closest('[data-category]');
  if(!button) return;
  activeCategory = button.dataset.category; renderMenu();
  document.querySelector(`[data-category="${activeCategory}"]`).focus({preventScroll:true});
});
document.querySelector('.menu-tabs').addEventListener('keydown',event => {
  const keys = Object.keys(categories);
  let index = keys.indexOf(activeCategory);
  if(event.key === 'ArrowRight') index = (index + 1) % keys.length;
  else if(event.key === 'ArrowLeft') index = (index + keys.length - 1) % keys.length;
  else if(event.key === 'Home') index = 0;
  else if(event.key === 'End') index = keys.length - 1;
  else return;
  event.preventDefault(); activeCategory = keys[index]; renderMenu();
  document.querySelector(`[data-category="${activeCategory}"]`).focus();
});
document.querySelector('.language').addEventListener('click',() => {
  language = language === 'en' ? 'ar' : 'en';
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(element => { element.innerHTML = language === 'ar' ? translations[element.dataset.i18n] : originals.get(element); });
  const button = document.querySelector('.language');
  button.textContent = language === 'ar' ? 'EN' : 'العربية';
  button.setAttribute('aria-label',language === 'ar' ? 'Switch to English' : 'Switch to Arabic');
  renderMenu();
});
const toggle = document.querySelector('.mobile-toggle');
function closeNavigation(){ document.querySelector('.navigation').classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');toggle.textContent='☰'; }
toggle.addEventListener('click',() => {
  const opened = document.querySelector('.navigation').classList.toggle('open');
  toggle.setAttribute('aria-expanded',String(opened));toggle.setAttribute('aria-label',opened ? 'Close navigation' : 'Open navigation');toggle.textContent=opened ? '×' : '☰';
});
document.querySelectorAll('.navigation a').forEach(link => link.addEventListener('click',closeNavigation));
document.addEventListener('keydown',event => { if(event.key === 'Escape') closeNavigation(); });
document.getElementById('year').textContent = new Date().getFullYear();
renderMenu();
if(location.pathname.replace(/\/$/,'') === '/menu') requestAnimationFrame(() => document.querySelector('#menu').scrollIntoView({behavior:'instant'}));
