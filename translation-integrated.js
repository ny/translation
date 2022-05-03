document.addEventListener('DOMContentLoaded', function() {
  var div = document.createElement('nysds-banner');
  document.body.appendChild(div);
  var closeclose = document.getElementById("nysds-close");
      if(closeclose){
      closeclose.addEventListener("click", closetranslate);
      function closetranslate () {
      document.getElementById("nysds-hide-this").style.display = "none";
      }
  }
}, false);

class nysdsBanner extends HTMLElement {
constructor() {
  super();
}
connectedCallback() {
  this.render();
}
render() {
  this.innerHTML = `
  <article id="nysds-hide-this" class="nysds-static-banner">

      <button id="nysds-close" class="nysds-close-button nysds-close-icon" aria-labelledby="close-button-label">
          <span class="sr-only" id="close-button-label">Close this notification banner</span>
      </button>

      <div class="nysds-static-wrap disclaimer-es">
          <div class="nysds-disclaimer"> Las traducciones automáticas no son perfectas y no pretenden reemplazar a los traductores humanos. Es posible que algunas páginas o parte del contenido no estén traducidos de forma precisa debido a las limitaciones del software de traducción. <a href="https://es.ny.gov/web-translation-services">Lea la exención de responsabilidad completa</a></div>
      </div>

      <div class="nysds-static-wrap disclaimer-fr">
          <div class="nysds-disclaimer"> Aucune traduction automatique n’est parfaite, ni n'est destinée à remplacer les traducteurs humains. Certaines pages ou du contenu peuvent ne pas être traduits exactement en raison des limitations du logiciel de traduction. <a href="https://fr.ny.gov/web-translation-services">Lire entièrement la clause de non-responsabilité</a></div>
      </div>

      <div class="nysds-static-wrap disclaimer-ar">
          <div class="nysds-disclaimer"> الترجمة الآلية لا تكون مثالية بأي حال من الأحوال، ولا يقصد بها أن تحل محل المترجمين من بني البشر. قد تكون ترجمة بعض المحتويات أو الصفحات غير دقيقة بسبب محددات برمجية الترجمة. <a href="https://ar.ny.gov/web-translation-services">اقرأ بيان إخلاء المسؤولية بالكامل</a></div>
      </div>

      <div class="nysds-static-wrap disclaimer-bn">
          <div class="nysds-disclaimer"> কোন স্বয়ংক্রিয় অনুবাদ নিখুঁত নয়, না এর উদ্দেশ্য মানুষ অনুবাদকদের প্রতিস্থাপন করা। অনুবাদ সফ্টওয়্যারের সীমাবদ্ধতার কারণে কিছু পৃষ্ঠা বা বিষয়বস্তু সঠিকভাবে অনুবাদ নাও করা হতে পারে। <a href="https://bn.ny.gov/web-translation-services">اসম্পূর্ণ দায়-পরিত্যাগকারী বিজ্ঞপ্তিটি পড়ুন</a></div>
      </div>

      <div class="nysds-static-wrap disclaimer-zh">
          <div class="nysds-disclaimer"> 自動翻譯並不完美、也不是為了取代人工翻譯。由於翻譯軟體限制、某些頁面或內容可能無法準確翻譯。<a href="https://zh.ny.gov/web-translation-services">閱讀完整的免責聲明</a></div>
      </div>

      <div class="nysds-static-wrap disclaimer-ht">
          <div class="nysds-disclaimer"> Okenn tradiksyon otomatik pa pafè, ni pa gen entansyon pou ranplase tradiktè imen. Gen kèk paj oswa kontni ki ka pa tradui avèk presizyon akòz limit nan lojisyèl tradiksyon an. <a href="https://ht.ny.gov/web-translation-services">Li Tout Avi sou Dechaj Responsabilite a</a></div>
      </div>

      <div class="nysds-static-wrap disclaimer-it">
          <div class="nysds-disclaimer"> Nessuna traduzione automatica è perfetta, né è destinata a sostituire i traduttori umani. Alcune pagine o contenuti potrebbero non essere tradotti accuratamente a causa delle limitazioni del software di traduzione. <a href="https://it.ny.gov/web-translation-services">Leggere l’intera liberatoria</a></div>
      </div>

      <div class="nysds-static-wrap disclaimer-ko">
          <div class="nysds-disclaimer"> 자동 번역은 완벽하지 않으며, 번역가를 대체하기 위해 의도된 것도 아닙니다. 번역 소프트웨어의 한계로 인해 일부 페이지 또는 내용이 정확하게 번역되지 않을 수 있습니다 <a href="https://ko.ny.gov/web-translation-services">면책 조항 전문 읽기</a></div>
      </div>

      <div class="nysds-static-wrap disclaimer-pl">
          <div class="nysds-disclaimer"> Żadne tłumaczenie automatyczne nie jest doskonałe, ani też nie ma na celu zastąpienia tłumaczeń wykonywanych przez ludzi. Niektóre strony lub treści mogą być niedokładnie przetłumaczone z powodu ograniczeń oprogramowania do wykonywania tłumaczeń <a href="https://pl.ny.gov/web-translation-services">Przeczytaj pełną klauzulę wyłączenia odpowiedzialności</a></div>
      </div>

      <div class="nysds-static-wrap disclaimer-ru">
          <div class="nysds-disclaimer"> Автоматический перевод не является безупречным и не может заменить переводчика-человека. Некоторые страницы или их содержимое могут быть переведены неточно из-за ограничений программного обеспечения для перевода. <a href="https://ru.ny.gov/web-translation-services">Ознакомьтесь с полным текстом отказа от ответственности</a></div>
      </div>

      <div class="nysds-static-wrap disclaimer-ur">
          <div class="nysds-disclaimer"> کوئی بھی خود کار ترجمہ بالکل درست نہیں ہوتا ہے، نہ ہی اس کا مقصد انسانی ترجمہ نگاروں کی جگہ لینا ہوتا ہے۔ ممکن ہے کہ ترجمہ سافٹ ویئر کی محدود صلاحیتوں کی وجہ سے کچھ صفحات یا مواد کا ترجمہ بالکل درست نہ ہو پائے۔ <a href="https://ur.ny.gov/web-translation-services">مکمل براءت نامہ پڑھیں</a></div>
      </div>

      <div class="nysds-static-wrap disclaimer-yi">
          <div class="nysds-disclaimer"> קיין איין אויטאמאטישע איבערזעצונג איז נישט אינגאנצן פארלעסליך, און עס איז נישט געמאכט צו ערזעצן א מענטשליכע איבערזעצער. טייל בלעטער אדער אינהאלט זענען מעגליך נישט פונקטליך איבערגעזעצט צוליב די באגרעניצטע מעגליכקייטן פון די איבערזעצונג טעכנאלאגיע. <a href="https://yi.ny.gov/web-translation-services">לייענט די פולע אויסקלארונג</a></div>
      </div>

  </article>
    `;
}
 
}
customElements.define("nysds-banner", nysdsBanner);
