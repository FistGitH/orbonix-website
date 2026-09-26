/* =========================================================
   RETURN HOME
========================================================= */

const returnButton =
    document.querySelector(".return");




/* =========================================================
   STAR PARALLAX
========================================================= */

const stars =
document.querySelector(".stars");

const smallStars =
document.querySelector(".stars-small");


document.addEventListener(
"mousemove",
function(event) {

    const x =
        event.clientX /
        window.innerWidth -
        0.5;

    const y =
        event.clientY /
        window.innerHeight -
        0.5;


    stars.style.transform =
        `translate(
            ${x * 20}px,
            ${y * 20}px
        )`;


    smallStars.style.transform =
        `translate(
            ${x * -12}px,
            ${y * -12}px
        )`;

});



/* =========================================================
   NEWS CARDS
========================================================= */

let cards =
document.querySelectorAll(".news-card");

const filters =
document.querySelectorAll(".filter");

const search =
document.getElementById("search");

const noResults =
document.getElementById("noResults");

const loadMore =
document.getElementById("loadMore");


let currentFilter = "all";

let visibleCount = 6;



/* =========================================================
   SHOW CARDS
========================================================= */

function updateCards() {

    const query =
        search.value
        .toLowerCase()
        .trim();


    let visible = 0;


    cards.forEach((card, index) => {

        const category =
            card.dataset.category;

        const title =
            card.dataset.title
            .toLowerCase();


        const matchesFilter =
            currentFilter === "all" ||
            category === currentFilter;


        const matchesSearch =
            title.includes(query);


        const matchingCards =
            [...cards].filter(item => {

                const itemCategory =
                    item.dataset.category;

                const itemTitle =
                    item.dataset.title
                        .toLowerCase();

                return (
                    (
                        currentFilter === "all" ||
                        itemCategory === currentFilter
                    )
                    &&
                    itemTitle.includes(query)
                );

            });


        const matchingIndex =
            matchingCards.indexOf(card);


        const shouldShow =
            matchesFilter &&
            matchesSearch &&
            matchingIndex < visibleCount;


        if (shouldShow) {

            card.style.display =
                "block";

            setTimeout(() => {

                card.classList.add("show");

            }, matchingIndex * 45);

            visible++;

        }

        else {

            card.classList.remove("show");

            card.style.display =
                "none";

        }

    });


    if (visible === 0) {

        noResults.style.display =
            "block";

    }

    else {

        noResults.style.display =
            "none";

    }


    const totalMatching =
        [...cards].filter(card => {

            const category =
                card.dataset.category;

            const title =
                card.dataset.title
                .toLowerCase();

            return (
                (
                    currentFilter === "all" ||
                    category === currentFilter
                )
                &&
                title.includes(query)
            );

        }).length;


    if (visibleCount >= totalMatching) {

        loadMore.style.display =
            "none";

    }

    else {

        loadMore.style.display =
            "inline-block";

    }

}



/* =========================================================
   FILTER BUTTONS
========================================================= */

filters.forEach(filter => {

    filter.addEventListener(
        "click",
        function() {

            filters.forEach(
                item =>
                    item.classList.remove("active")
            );


            this.classList.add("active");


            currentFilter =
                this.dataset.filter;


            visibleCount = 6;


            updateCards();

        }
    );

});



/* =========================================================
   SEARCH
========================================================= */

search.addEventListener(
"input",
function() {

    visibleCount = 6;

    updateCards();

});



/* =========================================================
   LOAD MORE
========================================================= */

loadMore.addEventListener(
"click",
function() {

    visibleCount += 3;

    updateCards();

});



/* =========================================================
   INITIAL ANIMATION
========================================================= */

window.addEventListener(
"load",
function() {

    updateCards();

});



/* =========================================================
   SCROLL REVEAL
========================================================= */

const observer =
new IntersectionObserver(
entries => {

    entries.forEach(entry => {

        if (
            entry.isIntersecting
        ) {

            entry.target.classList.add(
                "show"
            );

            observer.unobserve(
                entry.target
            );

        }

    });

},
{
    threshold: .12
});


cards.forEach(card => {

    observer.observe(card);

});

// Refresh the existing grid and keep its filters, search and load-more controls.
const newsStatus=document.createElement('p');newsStatus.setAttribute('role','status');
document.getElementById('newsGrid').before(newsStatus);
function newsCategory(title){if(/telescope|webb|hubble/i.test(title))return 'telescopes';if(/astronaut|crew|artemis|station/i.test(title))return 'human-spaceflight';if(/mars|moon|planet|asteroid|comet/i.test(title))return 'planets';if(/launch|rocket|satellite/i.test(title))return 'missions';return 'astronomy';}
function renderLiveNews(articles,stale){
 const grid=document.getElementById('newsGrid');const fragment=document.createDocumentFragment();
 const safe=u=>{try{return new URL(u).protocol==='https:';}catch{return false;}};
 for(const item of articles){if(!safe(item.url)||!item.title)continue;
 const card=document.createElement('article');card.className='news-card';card.dataset.category=newsCategory(item.title);card.dataset.title=item.title;
 const wrapper=document.createElement('div');wrapper.className='news-image-wrapper';const img=document.createElement('img');img.className='news-image';img.src=safe(item.image)?item.image:'/favicon.png';img.alt=item.title;img.loading='lazy';img.referrerPolicy='no-referrer';img.onerror=()=>{img.onerror=null;img.src='/favicon.png';};wrapper.append(img);
 const content=document.createElement('div');content.className='news-content';const date=document.createElement('div');date.className='news-date';const when=new Date(item.date);date.textContent=Number.isNaN(+when)?'':when.toLocaleDateString(document.documentElement.lang||'en');
 const title=document.createElement('h2');title.className='news-title';title.textContent=item.title;title.translate=false;
 const source=document.createElement('p');source.className='news-source';source.textContent=item.source;source.translate=false;
 const link=document.createElement('a');link.className='read-button';link.href=item.url;link.rel='noopener noreferrer';link.target='_blank';link.textContent='READ STORY →';content.append(date,title,source,link);card.append(wrapper,content);fragment.append(card);
 }
 if(!fragment.children.length)throw Error('No news');grid.replaceChildren(fragment);cards=grid.querySelectorAll('.news-card');newsStatus.textContent=stale?'Showing saved news. The latest update is unavailable.':'News updated automatically. Headlines are shown in the source language.';updateCards();
}
async function refreshNews(){
 try{let articles;
 const response=await fetch('/api/news',{signal:AbortSignal.timeout(12000)});if(response.ok&&response.headers.get('content-type')?.includes('application/json')){const data=await response.json();if(data.articles?.length){articles=data.articles;renderLiveNews(articles,data.stale);}}
 if(!articles){const r=await fetch('https://api.spaceflightnewsapi.net/v4/articles/?limit=30&ordering=-published_at',{signal:AbortSignal.timeout(12000)});if(!r.ok)throw Error('News unavailable');const data=await r.json();articles=data.results.map(a=>({title:a.title,url:a.url,image:a.image_url,source:a.news_site,date:a.published_at}));renderLiveNews(articles,false);}
 try{localStorage.setItem('orbonix-news',JSON.stringify(articles));}catch{}
 }catch{let cached;try{cached=JSON.parse(localStorage.getItem('orbonix-news'));}catch{}if(cached?.length){try{renderLiveNews(cached,true);}catch{newsStatus.textContent='News temporarily unavailable. Please try again later.';}}else newsStatus.textContent='Live news unavailable. Showing the editorial archive below.';}
}
refreshNews();setInterval(()=>{if(!document.hidden)refreshNews();},1800000);
