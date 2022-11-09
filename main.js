const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btn = $('#btn');
const link = $('.href');
const input = $('input[name="name"]');
const text = $('.text');
const linkHome = $('#link-home');

const optionHeart = [...$$('.option-heart')];

const getParams = (link = window.location.search) => new Proxy(new URLSearchParams(link), {
	get: (searchParams, prop) => searchParams.get(prop),
});

const app = {

  ENV: {
    localhost: '',
    production: 'https://duyduc2003.github.io/heart/'
  },

  params: {
    name: getParams().name
  },

  option: {
    current: 'pink',
    PINK: 'pink',
    RED: 'red'
  },
  
  btnClick : function () {
    if (btn) {
      btn.onclick = e => {
        link.href = this.ENV.production + `/${this.option.current == this.option.PINK ? 'heart-pink' : 'heart'}.html?name=${input.value || 'Duy Duc handsome'}`
        link.click();
      }
    }
  },


  renderHeartPage() {
    if (text) {
      text.innerHTML = this.params.name;
    }
  },

  optionHeartClick() {
    if (optionHeart) {
      for (let o of optionHeart) {
        
        o.onclick = e => {
          this.option.current = o.dataset.option;
          console.log("🚀 ~ file: main.js ~ line 48 ~ optionHeartClick ~ this.option.current", this.option.current)
          optionHeart.forEach(i => i.classList.remove('option-active'))
          o.classList.add('option-active')
        }
      }
    }
  },

  linkHomeClick() {
    if (linkHome) {
      linkHome.onclick = e => {
        linkHome.href = this.ENV.production;
        linkHome.click();
      }
    }
  },
  
  init() {
    this.btnClick();
    this.renderHeartPage();
    this.optionHeartClick();
    this.linkHomeClick();

    
  } 
}


app.init();