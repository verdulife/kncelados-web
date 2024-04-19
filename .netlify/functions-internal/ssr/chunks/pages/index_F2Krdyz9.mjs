/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, e as addAttribute, o as Fragment, p as defineStyleVars } from '../astro_F6QTHw4D.mjs';
import { $ as $$Layout, e as episodes } from './_id__CtOttWkd.mjs';
import 'core-js/actual/object/group-by.js';
import { findBestMatch } from 'string-similarity';
import slugify from 'slugify';
/* empty css                          */
/* empty css                          */

const $$Astro$n = createAstro("https://www.kncelados.com");
const $$Index$5 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Index$5;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\xBFEres sponsor?", "description": "Si quieres sponsorizarnos, generar una colboraci\xF3n o realizar un patrocinio con Kncelados, dale aqu\xED." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex min-h-screen flex-col items-center justify-center gap-8 bg-knc-red px-4"> <h1 class="text-4xl font-bold lg:text-8xl">Proximamente</h1> <p class="mt-6 max-w-3xl text-center text-base lg:text-xl">
Proximamente abriremos un espacio con toda la información sobre nuestro
      equipo. Mientras tanto, puedes descargar nuestro dossier y enviarnos un
      email.
</p> <div class="flex flex-wrap justify-center gap-4"> <a href="/knc_dossier-web_2024.pdf" target="_blank" class="rounded-md bg-knc-blue px-8 py-3 text-center text-sm uppercase text-gray-50 transition-transform hover:scale-110 lg:text-base">
DESCARGAR DOSSIER
</a> <a href="mailto:hola@kncelados.com" class="rounded-md px-8 py-3 text-center text-sm uppercase transition-transform hover:scale-110 lg:text-base">
hola@kncelados.com
</a> </div> </section> ` })}`;
}, "C:/Users/Gaplogic/kncelados-web/src/pages/contacto/index.astro", void 0);

const $$file$5 = "C:/Users/Gaplogic/kncelados-web/src/pages/contacto/index.astro";
const $$url$5 = "/contacto";

const index$5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$5,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$m = createAstro("https://www.kncelados.com");
const $$VideoHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$VideoHeader;
  const { data } = Astro2.props;
  const { title, description, image, url, id } = data;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result2) => renderTemplate`<link rel="preload"${addAttribute(image, "href")} as="image">` })}${maybeRenderHead()}<section class="flex w-full flex-col items-center gap-8"> <article class="relative flex min-h-[60vh] w-full flex-col items-center justify-end lg:min-h-[65vh]"> <img class="absolute size-full object-cover object-top"${addAttribute(image, "src")}${addAttribute(title, "alt")}> <span class="absolute inset-0 bg-gradient-to-b from-knc-dark via-transparent to-knc-dark"></span> <span class="absolute inset-0 bg-gradient-to-r from-knc-dark from-35% to-transparent"></span> <div class="z-10 mt-32 flex w-full flex-col justify-center px-6 pb-6 lg:mt-48 lg:px-20 lg:pb-20"> <h1 class="max-w-3xl text-4xl lg:text-7xl">${title}</h1> <div class="mt-4 flex lg:mt-10"> <a${addAttribute(`/player/${id}`, "href")} class="rounded-xl bg-knc-red px-8 py-3 transition-transform hover:scale-110">
Reproducir
</a> <a${addAttribute(url, "href")} target="_blank" class="px-8 py-3 transition-transform hover:scale-110">
Más info
</a> </div> <p class="mt-6 max-w-4xl text-gray-300 lg:mt-12 lg:text-xl line-clamp-4"> ${description} </p> </div> </article> </section>`;
}, "C:/Users/Gaplogic/kncelados-web/src/components/VideoHeader.astro", void 0);

const $$Astro$l = createAstro("https://www.kncelados.com");
const $$Play = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Play;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${addAttribute(Astro2.props.class, "class")}> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M7 4v16l13 -8z"></path> </svg>`;
}, "C:/Users/Gaplogic/kncelados-web/src/lib/assets/Play.astro", void 0);

const $$Astro$k = createAstro("https://www.kncelados.com");
const $$VideoCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$VideoCard;
  const { data } = Astro2.props;
  const { title, image, id } = data;
  const slug = slugify(title).toLowerCase();
  return renderTemplate`${maybeRenderHead()}<article class="card relative aspect-video w-2/3 shrink-0 snap-start transition-all duration-300 lg:w-96 lg:hover:w-[30rem]" data-astro-cid-g6m6frnh> <a${addAttribute(`/podcast/${slug}`, "href")} data-astro-cid-g6m6frnh> <picture data-astro-cid-g6m6frnh> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} loading="lazy" decoding="async" data-astro-cid-g6m6frnh> </picture> </a> <span class="fast-play pointer-events-none absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-all duration-500" data-astro-cid-g6m6frnh> <a${addAttribute(`/player/${id}`, "href")} class="rounded-full bg-knc-dark p-4 text-knc-red transition-transform hover:scale-110" data-astro-cid-g6m6frnh> ${renderComponent($$result, "Play", $$Play, { "class": "size-12", "data-astro-cid-g6m6frnh": true })} </a> </span> </article>  `;
}, "C:/Users/Gaplogic/kncelados-web/src/components/VideoCard.astro", void 0);

const $$Astro$j = createAstro("https://www.kncelados.com");
const $$Prev = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Prev;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${addAttribute(Astro2.props.class, "class")}> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M15 6l-6 6l6 6"></path> </svg>`;
}, "C:/Users/Gaplogic/kncelados-web/src/lib/assets/Prev.astro", void 0);

const $$Astro$i = createAstro("https://www.kncelados.com");
const $$Next = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Next;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${addAttribute(Astro2.props.class, "class")}> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M9 6l6 6l-6 6"></path> </svg>`;
}, "C:/Users/Gaplogic/kncelados-web/src/lib/assets/Next.astro", void 0);

const $$Astro$h = createAstro("https://www.kncelados.com");
const $$VideoSlider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$VideoSlider;
  const { data } = Astro2.props;
  const episodes = [...data];
  const current_season = episodes[0].season;
  return renderTemplate`${maybeRenderHead()}<section class="relative flex w-full flex-col pt-4 lg:pt-8" data-astro-cid-dsnbvahf> <h2 class="px-6 text-xl lg:px-20 lg:text-3xl" data-astro-cid-dsnbvahf>Temporada ${current_season}</h2> <div class="slider snap flex h-44 w-full snap-x snap-mandatory scroll-p-6 items-center gap-1 overflow-x-auto lg:h-72 lg:scroll-p-20" data-astro-cid-dsnbvahf> <div class="shrink-0 snap-start" data-astro-cid-dsnbvahf> <div class="w-6 shrink-0 lg:w-20" data-astro-cid-dsnbvahf></div> </div> ${episodes.map((episode) => renderTemplate`${renderComponent($$result, "VideoCard", $$VideoCard, { "data": episode, "data-astro-cid-dsnbvahf": true })}`)} <div class="shrink-0 snap-end" data-astro-cid-dsnbvahf> <div class="w-6 shrink-0 lg:w-20" data-astro-cid-dsnbvahf></div> </div> <button class="prev absolute left-0 z-10 hidden h-full bg-gradient-to-b from-transparent via-black/30 to-transparent lg:inline [&>svg]:hover:scale-110" data-astro-cid-dsnbvahf> ${renderComponent($$result, "Prev", $$Prev, { "class": "w-20 transition-transform", "data-astro-cid-dsnbvahf": true })} </button> <button class="next absolute right-0 z-10 hidden h-full bg-gradient-to-b from-transparent via-black/30 to-transparent lg:inline [&>svg]:hover:scale-110" data-astro-cid-dsnbvahf> ${renderComponent($$result, "Next", $$Next, { "class": "w-20 transition-transform", "data-astro-cid-dsnbvahf": true })} </button> </div> </section>  `;
}, "C:/Users/Gaplogic/kncelados-web/src/components/VideoSlider.astro", void 0);

const $$Astro$g = createAstro("https://www.kncelados.com");
const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Index$4;
  const { slug } = Astro2.params;
  if (!slug)
    return;
  const titles = episodes.map(({ title }) => title);
  const { target } = findBestMatch(slug, titles).bestMatch;
  const current_episode = episodes.find(({ title }) => title === target);
  const seasons_object = Object.groupBy(episodes, ({ season }) => season);
  const seasons = Object.values(seasons_object).reverse();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": current_episode && current_episode.title, "description": current_episode && current_episode.description, "image": current_episode && current_episode.image }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-black text-gray-50"> <div class="bg-knc-blue/40 pb-10"> ${renderComponent($$result2, "VideoHeader", $$VideoHeader, { "data": current_episode })} ${seasons.map((season) => renderTemplate`${renderComponent($$result2, "VideoSlider", $$VideoSlider, { "data": season })}`)} </div> </div> ` })}`;
}, "C:/Users/Gaplogic/kncelados-web/src/pages/podcast/[slug]/index.astro", void 0);

const $$file$4 = "C:/Users/Gaplogic/kncelados-web/src/pages/podcast/[slug]/index.astro";
const $$url$4 = "/podcast/[slug]";

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$4,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$f = createAstro("https://www.kncelados.com");
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Index$3;
  const lastEpisode = episodes[0];
  const seasons_object = Object.groupBy(episodes, ({ season }) => season);
  const seasons = Object.values(seasons_object).reverse();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Podcast", "description": "Si te preguntas d\xF3nde ver el podcast de Kncelados, est\xE1s en el lugar adecuado. Tanto en esta p\xE1gina web, como en nuestro canal de YouTube encontrar\xE1s todos los episodios." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-black text-gray-50"> <div class="bg-knc-blue/40 pb-10"> ${renderComponent($$result2, "VideoHeader", $$VideoHeader, { "data": lastEpisode })} ${seasons.map((season) => renderTemplate`${renderComponent($$result2, "VideoSlider", $$VideoSlider, { "data": season })}`)} </div> </div> ` })}`;
}, "C:/Users/Gaplogic/kncelados-web/src/pages/podcast/index.astro", void 0);

const $$file$3 = "C:/Users/Gaplogic/kncelados-web/src/pages/podcast/index.astro";
const $$url$3 = "/podcast";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$3,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$e = createAstro("https://www.kncelados.com");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "KNC Shorts", "description": "Proximamente todos nuestros cortos estaran online" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex h-screen flex-col items-center justify-center gap-8 bg-knc-red px-4"> <h1 class="text-4xl font-bold lg:text-8xl">Proximamente</h1> <a href="/" class="rounded-md bg-knc-blue px-8 py-3 text-sm uppercase text-gray-50 transition-transform hover:scale-110 lg:text-base">
VOLVER
</a> </section> ` })}`;
}, "C:/Users/Gaplogic/kncelados-web/src/pages/shorts/index.astro", void 0);

const $$file$2 = "C:/Users/Gaplogic/kncelados-web/src/pages/shorts/index.astro";
const $$url$2 = "/shorts";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$d = createAstro("https://www.kncelados.com");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "KNC Store | Tienda oficial", "description": "Proximamente en la tienda oficial KNC Store, podr\xE1s encontrar camisetas, tote bags, l\xE1minas, stickers, fondos de pantalla y m\xE1s." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex h-screen flex-col items-center justify-center gap-8 bg-knc-red px-4"> <h1 class="text-4xl font-bold lg:text-8xl">Proximamente</h1> <a href="/" class="rounded-md bg-knc-blue px-8 py-3 text-sm uppercase text-gray-50 transition-transform hover:scale-110 lg:text-base">
VOLVER
</a> </section> ` })}`;
}, "C:/Users/Gaplogic/kncelados-web/src/pages/tienda/index.astro", void 0);

const $$file$1 = "C:/Users/Gaplogic/kncelados-web/src/pages/tienda/index.astro";
const $$url$1 = "/tienda";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$c = createAstro("https://www.kncelados.com");
const $$Welcome = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Welcome;
  return renderTemplate`${maybeRenderHead()}<section class="relative flex min-h-[90vh] w-full flex-col items-center justify-center gap-8"> <img src="/kncelados-podcast.jpg" alt="Kncelados Podcast" class="absolute inset-0 -z-10 size-full object-cover object-[40%_30%] opacity-15"> <article class="flex w-full flex-col items-center justify-center px-6 pb-6 text-center lg:px-20 lg:pb-20"> <h1 class="mt-24 max-w-3xl text-5xl lg:text-8xl">
Un podcast de tonterías varias
</h1> <p class="mt-6 max-w-5xl text-lg text-gray-300 lg:text-2xl">
Un podcast de tonterías varias. Quizá no aprendes nada, pero seguro que te
      ríes un rato. Dónde ver el podcast, quienes son estos Kncelados, todo esta
      aquí.
</p> <div class="flex flex-wrap justify-center mt-10"> <a href="/podcast" class="rounded-xl bg-knc-red px-8 py-3 transition-transform hover:scale-110">
Último episodio
</a> <a href="/#nosotros" class="px-8 py-3 transition-transform hover:scale-110">
Nosotros
</a> </div> </article> </section>`;
}, "C:/Users/Gaplogic/kncelados-web/src/sections/Welcome.astro", void 0);

const $$Astro$b = createAstro("https://www.kncelados.com");
const $$NextEpisode = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$NextEpisode;
  const EVENT_TIMESTAMP = 17125992e5;
  return renderTemplate`${maybeRenderHead()}<section id="proximo-episodio" class="mt-[-30px] lg:mt-[-100px] flex w-full flex-col items-center justify-center bg-knc-red px-4 py-28 lg:py-48 text-center" data-astro-cid-n7ugbtru> <h2 class="max-w-5xl text-3xl font-medium lg:text-5xl" data-astro-cid-n7ugbtru>
Disfruta de un nuevo episodio del podcast de Kncelados todos los lunes a las
    20:00h
</h2> <p class="mt-16 lg:mt-24 text-lg uppercase" data-astro-cid-n7ugbtru>Próximo episodio</p> <div${addAttribute(EVENT_TIMESTAMP, "data-date")} class="flex scale-90 justify-center gap-2 text-center lg:scale-100 lg:gap-4" data-astro-cid-n7ugbtru> <div class="flex flex-col items-center" data-astro-cid-n7ugbtru> <span data-days class="text-5xl font-bold tabular-nums lg:text-8xl" data-astro-cid-n7ugbtru>
00
</span> <p class="text-xs uppercase lg:text-sm" data-astro-cid-n7ugbtru>días</p> </div> <span aria-hidden="true" class="text-5xl font-bold lg:text-8xl" data-astro-cid-n7ugbtru>:</span> <div class="flex flex-col items-center" data-astro-cid-n7ugbtru> <span data-hours class="text-5xl font-bold tabular-nums lg:text-8xl" data-astro-cid-n7ugbtru>
00
</span> <p class="text-xs uppercase lg:text-sm" data-astro-cid-n7ugbtru>horas</p> </div> <span aria-hidden="true" class="text-5xl font-bold lg:text-8xl" data-astro-cid-n7ugbtru>:</span> <div class="flex flex-col items-center" data-astro-cid-n7ugbtru> <span data-minutes class="text-5xl font-bold tabular-nums lg:text-8xl" data-astro-cid-n7ugbtru>
00
</span> <p class="text-xs uppercase lg:text-sm" data-astro-cid-n7ugbtru>minutos</p> </div> <span aria-hidden="true" class="text-5xl font-bold lg:text-8xl" data-astro-cid-n7ugbtru>:</span> <div class="flex flex-col items-center" data-astro-cid-n7ugbtru> <span data-seconds class="text-5xl font-bold tabular-nums lg:text-8xl" data-astro-cid-n7ugbtru>
00
</span> <p class="text-xs uppercase lg:text-sm" data-astro-cid-n7ugbtru>segundos</p> </div> </div> </section>  `;
}, "C:/Users/Gaplogic/kncelados-web/src/sections/NextEpisode.astro", void 0);

const $$Astro$a = createAstro("https://www.kncelados.com");
const $$Podcast = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Podcast;
  const seasons_object = Object.groupBy(episodes, ({ season }) => season);
  const seasons = Object.values(seasons_object);
  const seconds = "60s";
  const gap = "1rem";
  const $$definedVars = defineStyleVars([{ seconds, gap }]);
  return renderTemplate`${maybeRenderHead()}<section id="podcast" class="flex w-full flex-col items-center justify-center pt-20 text-center lg:py-24" data-astro-cid-sno7gknq${addAttribute($$definedVars, "style")}> <h2 class="max-w-5xl px-4 text-5xl lg:text-7xl" data-astro-cid-sno7gknq${addAttribute($$definedVars, "style")}>El podcast</h2> <p class="mt-6 max-w-4xl px-4 text-lg lg:text-2xl" data-astro-cid-sno7gknq${addAttribute($$definedVars, "style")}>
Si te preguntas dónde ver el podcast de Kncelados, estás en el lugar
    adecuado. Tanto en esta página web, como en nuestro canal de YouTube
    encontrarás todos los episodios.
</p> <a href="/podcast" class="mt-10 min-w-48 rounded-xl bg-knc-red px-8 py-3 transition-transform hover:scale-110" data-astro-cid-sno7gknq${addAttribute($$definedVars, "style")}>
Ver podcast
</a> <div class="relative mt-16 origin-top lg:scale-150" data-astro-cid-sno7gknq${addAttribute($$definedVars, "style")}> <div class="absolute left-[16%] top-0 z-10 hidden h-full w-1/4 bg-gradient-to-r from-knc-dark from-20% via-knc-dark/90 to-transparent lg:flex" data-astro-cid-sno7gknq${addAttribute($$definedVars, "style")}></div> <div class="absolute right-[16%] top-0 z-10 hidden h-full w-1/4 bg-gradient-to-l from-knc-dark from-20% via-knc-dark/90 to-transparent lg:flex" data-astro-cid-sno7gknq${addAttribute($$definedVars, "style")}></div> ${seasons.map((season, i) => renderTemplate`<span class="relative mt-4 flex w-full overflow-hidden" data-astro-cid-sno7gknq${addAttribute($$definedVars, "style")}> <ul${addAttribute(["flex shrink-0", i % 2 && "reverse"], "class:list")} data-astro-cid-sno7gknq${addAttribute($$definedVars, "style")}> ${season?.map(({ title, image }) => renderTemplate`<li data-astro-cid-sno7gknq${addAttribute($$definedVars, "style")}> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} width="240" height="135" loading="lazy" decoding="async" class="w-60" data-astro-cid-sno7gknq${addAttribute($$definedVars, "style")}> </li>`)} </ul> <ul${addAttribute(["flex shrink-0", i % 2 && "reverse"], "class:list")} data-astro-cid-sno7gknq${addAttribute($$definedVars, "style")}> ${season?.map(({ title, image }) => renderTemplate`<li data-astro-cid-sno7gknq${addAttribute($$definedVars, "style")}> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} width="240" height="135" loading="lazy" decoding="async" class="w-60" data-astro-cid-sno7gknq${addAttribute($$definedVars, "style")}> </li>`)} </ul> </span>`)} </div> </section> `;
}, "C:/Users/Gaplogic/kncelados-web/src/sections/Podcast.astro", void 0);

const $$Astro$9 = createAstro("https://www.kncelados.com");
const $$Shorts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Shorts;
  return renderTemplate`${maybeRenderHead()}<section id="knc-shorts" class="relative mt-24 flex w-full flex-col items-center justify-center gap-6 bg-knc-blue bg-[radial-gradient(transparent,#000)] px-4 py-28 text-center lg:mt-48 lg:py-48" data-astro-cid-wqwocuc4> <img src="/knc-shorts.jpg" alt="KNC Shorts" loading="lazy" decoding="async" class="absolute inset-0 -z-10 size-full object-cover opacity-5" data-astro-cid-wqwocuc4> <h2 class="text-center text-5xl lg:text-7xl" data-astro-cid-wqwocuc4>KNC Shorts</h2> <p class="mb-8 mt-2 max-w-5xl text-center text-lg lg:text-2xl" data-astro-cid-wqwocuc4>
Y cuando nos da la vida y la gana, hacemos cortos, y como somos muy
    creativos los llamamos KNC Shorts. No es KN coches, pero por algo se
    empieza.
</p> <a href="/podcast" class="min-w-48 rounded-xl bg-knc-red px-8 py-3 transition-transform hover:scale-110" data-astro-cid-wqwocuc4>
Ver shorts
</a> </section> `;
}, "C:/Users/Gaplogic/kncelados-web/src/sections/Shorts.astro", void 0);

const $$Astro$8 = createAstro("https://www.kncelados.com");
const $$Us = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Us;
  return renderTemplate`${maybeRenderHead()}<section id="nosotros" class="flex w-full max-w-5xl flex-col items-center justify-center gap-6 px-4 py-24 lg:py-48" data-astro-cid-7fcb7qea> <h2 class="text-center text-5xl lg:text-7xl" data-astro-cid-7fcb7qea>¿Quiénes son estos?</h2> <p class="mb-8 mt-2 max-w-4xl text-center text-lg lg:text-2xl" data-astro-cid-7fcb7qea>
¿Quién son estos Kncelados? Colectivamente, son amigos, individualmente, eso
    lo tendrás que descubrir tú mismo.
</p> <div class="lg:mt-16 grid w-full max-w-3xl grid-cols-2 gap-2 text-center lg:gap-4" data-astro-cid-7fcb7qea> <article class="shadow-knc-black/70 flex aspect-[3/4] w-full flex-col items-center overflow-hidden bg-knc-blue shadow-2xl transition-transform hover:z-10 hover:-rotate-3 hover:scale-110" data-astro-cid-7fcb7qea> <h3 class="z-20 w-full text-xl font-bold text-white py-4 lg:py-8 lg:text-7xl" data-astro-cid-7fcb7qea>
Rup
</h3> <picture class="h-full bg-knc-blue bg-[url('/sprites/rup.png')]" data-astro-cid-7fcb7qea></picture> </article> <article class="shadow-knc-black/70 flex aspect-[3/4] w-full flex-col items-center overflow-hidden bg-knc-red shadow-2xl transition-transform hover:z-10 hover:-rotate-3 hover:scale-110" data-astro-cid-7fcb7qea> <h3 class="z-20 w-full text-xl font-bold text-white py-4 lg:py-8 lg:text-7xl" data-astro-cid-7fcb7qea>
Dani
</h3> <picture class="h-full bg-knc-red bg-[url('/sprites/dani.png')]" data-astro-cid-7fcb7qea></picture> </article> <article class="shadow-knc-black/70 flex aspect-[3/4] w-full flex-col items-center overflow-hidden bg-knc-red shadow-2xl transition-transform hover:z-10 hover:-rotate-3 hover:scale-110" data-astro-cid-7fcb7qea> <h3 class="z-20 w-full text-xl font-bold text-white py-4 lg:py-8 lg:text-7xl" data-astro-cid-7fcb7qea>
Ander
</h3> <picture class="h-full bg-knc-red bg-[url('/sprites/ander.png')]" data-astro-cid-7fcb7qea></picture> </article> <article class="shadow-knc-black/70 flex aspect-[3/4] w-full flex-col items-center overflow-hidden bg-knc-blue shadow-2xl transition-transform hover:z-10 hover:-rotate-3 hover:scale-110" data-astro-cid-7fcb7qea> <h3 class="z-20 w-full text-xl font-bold text-white py-4 lg:py-8 lg:text-7xl" data-astro-cid-7fcb7qea>
Joz
</h3> <picture class="h-full bg-knc-blue bg-[url('/sprites/joz.png')]" data-astro-cid-7fcb7qea></picture> </article> </div> </section> `;
}, "C:/Users/Gaplogic/kncelados-web/src/sections/Us.astro", void 0);

const $$Astro$7 = createAstro("https://www.kncelados.com");
const $$Youtube = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Youtube;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 -3 20 20"${addAttribute(Astro2.props.class, "class")}> <g transform="translate(-300.000000, -7442.000000)" fill="currentColor"> <g transform="translate(56.000000, 160.000000)"> <path d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289"></path> </g> </g> </svg>`;
}, "C:/Users/Gaplogic/kncelados-web/src/lib/assets/Youtube.astro", void 0);

const $$Astro$6 = createAstro("https://www.kncelados.com");
const $$Instagram = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Instagram;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 20 20"${addAttribute(Astro2.props.class, "class")}> <g transform="translate(-340.000000, -7439.000000)" fill="currentColor"> <g transform="translate(56.000000, 160.000000)"> <path d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792"></path> </g> </g> </svg>`;
}, "C:/Users/Gaplogic/kncelados-web/src/lib/assets/Instagram.astro", void 0);

const $$Astro$5 = createAstro("https://www.kncelados.com");
const $$Tiktok = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Tiktok;
  return renderTemplate`${maybeRenderHead()}<svg fill="currentColor" viewBox="0 0 32 32"${addAttribute(Astro2.props.class, "class")}> <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path> </svg>`;
}, "C:/Users/Gaplogic/kncelados-web/src/lib/assets/Tiktok.astro", void 0);

const $$Astro$4 = createAstro("https://www.kncelados.com");
const $$Spotify = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Spotify;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 20 20"${addAttribute(Astro2.props.class, "class")}> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g transform="translate(-140.000000, -7479.000000)" fill="currentColor"> <g transform="translate(56.000000, 160.000000)"> <path d="M99.915,7327.865 C96.692,7325.951 91.375,7325.775 88.297,7326.709 C87.803,7326.858 87.281,7326.58 87.131,7326.085 C86.981,7325.591 87.26,7325.069 87.754,7324.919 C91.287,7323.846 97.159,7324.053 100.87,7326.256 C101.314,7326.52 101.46,7327.094 101.196,7327.538 C100.934,7327.982 100.358,7328.129 99.915,7327.865 L99.915,7327.865 Z M99.81,7330.7 C99.584,7331.067 99.104,7331.182 98.737,7330.957 C96.05,7329.305 91.952,7328.827 88.773,7329.792 C88.36,7329.916 87.925,7329.684 87.8,7329.272 C87.676,7328.86 87.908,7328.425 88.32,7328.3 C91.951,7327.198 96.466,7327.732 99.553,7329.629 C99.92,7329.854 100.035,7330.334 99.81,7330.7 L99.81,7330.7 Z M98.586,7333.423 C98.406,7333.717 98.023,7333.81 97.729,7333.63 C95.381,7332.195 92.425,7331.871 88.944,7332.666 C88.609,7332.743 88.274,7332.533 88.198,7332.197 C88.121,7331.862 88.33,7331.528 88.667,7331.451 C92.476,7330.58 95.743,7330.955 98.379,7332.566 C98.673,7332.746 98.766,7333.129 98.586,7333.423 L98.586,7333.423 Z M94,7319 C88.477,7319 84,7323.477 84,7329 C84,7334.523 88.477,7339 94,7339 C99.523,7339 104,7334.523 104,7329 C104,7323.478 99.523,7319.001 94,7319.001 L94,7319 Z"></path> </g> </g> </g> </svg>`;
}, "C:/Users/Gaplogic/kncelados-web/src/lib/assets/Spotify.astro", void 0);

const $$Astro$3 = createAstro("https://www.kncelados.com");
const $$Telegram = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Telegram;
  return renderTemplate`${maybeRenderHead()}<svg fill="currentColor" viewBox="0 0 48 48"${addAttribute(Astro2.props.class, "class")}> <path d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z"></path> </svg>`;
}, "C:/Users/Gaplogic/kncelados-web/src/lib/assets/Telegram.astro", void 0);

const $$Astro$2 = createAstro("https://www.kncelados.com");
const $$Patreon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Patreon;
  return renderTemplate`${maybeRenderHead()}<svg fill="currentColor" viewBox="0 0 32 32"${addAttribute(Astro2.props.class, "class")}> <path d="M20.23 1.604c-0.008-0-0.017-0-0.027-0-5.961 0-10.793 4.832-10.793 10.793s4.832 10.793 10.793 10.793c5.955 0 10.783-4.822 10.793-10.775v-0.001c-0.004-5.953-4.816-10.781-10.763-10.809h-0.003zM1.004 1.604v28.792h5.274v-28.792z"></path> </svg>`;
}, "C:/Users/Gaplogic/kncelados-web/src/lib/assets/Patreon.astro", void 0);

const $$Astro$1 = createAstro("https://www.kncelados.com");
const $$Collaborate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Collaborate;
  return renderTemplate`${maybeRenderHead()}<section id="colabora" class="flex w-full flex-col items-center justify-center gap-6 bg-knc-red px-4 py-28 text-gray-100 lg:py-48" data-astro-cid-ytbflp44> <h2 class="text-center text-5xl lg:text-7xl" data-astro-cid-ytbflp44>Colabora con nosotros</h2> <p class="max-w-5xl text-center text-lg lg:mt-6 lg:text-2xl" data-astro-cid-ytbflp44>
Si te gusta nuestro contenido y quieres colaborar con nosotros, suscribirte
    a nuestro canal de youtube y siguenos en nuestras redes. Pero si esto te
    sabe a poco, también puedes colaborar realizando una compra en nuestra
    tienda (proximamente), o participando en nuestro Patreon (proximamente).
</p> <div class="mt-8 flex items-center gap-6 lg:gap-10 [&_a]:transition-transform hover:[&_a]:scale-110" data-astro-cid-ytbflp44> <a href="https://www.youtube.com/@kncelados" target="_blank" data-astro-cid-ytbflp44> ${renderComponent($$result, "Youtube", $$Youtube, { "class": "size-6 lg:size-8", "data-astro-cid-ytbflp44": true })} <span class="sr-only" data-astro-cid-ytbflp44>Youtube de Kncelados</span> </a> <a href="https://www.instagram.com/kncelados" target="_blank" data-astro-cid-ytbflp44> ${renderComponent($$result, "Instagram", $$Instagram, { "class": "size-6 lg:size-8", "data-astro-cid-ytbflp44": true })} <span class="sr-only" data-astro-cid-ytbflp44>Instagram de Kncelados</span> </a> <a href="https://www.tiktok.com/@kncelados" target="_blank" data-astro-cid-ytbflp44> ${renderComponent($$result, "Tiktok", $$Tiktok, { "class": "size-6 lg:size-8", "data-astro-cid-ytbflp44": true })} <span class="sr-only" data-astro-cid-ytbflp44>Tiktok de Kncelados</span> </a> <a href="https://open.spotify.com/show/5bDQAbJUSdfHYdii8A8eX0" target="_blank" data-astro-cid-ytbflp44> ${renderComponent($$result, "Spotify", $$Spotify, { "class": "size-6 lg:size-8", "data-astro-cid-ytbflp44": true })} <span class="sr-only" data-astro-cid-ytbflp44>Spotify de Kncelados</span> </a> <a href="https://t.me/kncelados" target="_blank" data-astro-cid-ytbflp44> ${renderComponent($$result, "Telegram", $$Telegram, { "class": "size-6 lg:size-8", "data-astro-cid-ytbflp44": true })} <span class="sr-only" data-astro-cid-ytbflp44>Telegram de Kncelados</span> </a> <a href="https://www.patreon.com/kncelados" target="_blank" data-astro-cid-ytbflp44> ${renderComponent($$result, "Patreon", $$Patreon, { "class": "size-6 lg:size-8", "data-astro-cid-ytbflp44": true })} <span class="sr-only" data-astro-cid-ytbflp44>Patreon de Kncelados</span> </a> </div> </section> `;
}, "C:/Users/Gaplogic/kncelados-web/src/sections/Collaborate.astro", void 0);

const $$Astro = createAstro("https://www.kncelados.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result2) => renderTemplate`<link rel="preload" href="/kncelados-podcast.jpg" as="image">` })}${renderComponent($$result, "Layout", $$Layout, { "title": "Kncelados | Un podcast de tonter\xEDas varias", "description": "Un podcast de tonter\xEDas varias. Quiz\xE1 no aprendes nada, pero seguro que te r\xEDes un rato. Mira nuestros \xFAltimos videos descubre nuestro equipo sin filtros." }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="flex w-full flex-col items-center">${renderComponent($$result2, "Welcome", $$Welcome, {})}${renderComponent($$result2, "NextEpisode", $$NextEpisode, {})}${renderComponent($$result2, "Podcast", $$Podcast, {})}${renderComponent($$result2, "Shorts", $$Shorts, {})}${renderComponent($$result2, "Us", $$Us, {})}${renderComponent($$result2, "Collaborate", $$Collaborate, {})}</main>` })}`;
}, "C:/Users/Gaplogic/kncelados-web/src/pages/index.astro", void 0);

const $$file = "C:/Users/Gaplogic/kncelados-web/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$4 as a, index$3 as b, index$2 as c, index$1 as d, index as e, index$5 as i };
