const search1 = document.querySelector('.list-insearch-toggle');
const closer1 = document.querySelector('.list-insearch-close');
const searchInput1 = document.querySelector('.list-insearch');
const searchHistory = document.querySelector('.list-insearch-history');
let search1Status;
let searchInput1Status;
let searchHistoryStatus;

const search2 = document.querySelector('.dialogue-insearch-toggle');
const closer2 = document.querySelector('.dialogue-insearch-close');
const searchInput2 = document.querySelector('.dialogue-insearch');
let search2Status;
let searchInput2Status;

const toggleUsermenu = document.querySelector(".usermenu-toggle");
const usermenu = document.querySelector(".content__usermenu");
let toggleChecked;
let menuStatus;

const toggleNavi = document.querySelector(".navi-toggle");
const navi = document.querySelector(".content__navi");
let buttonChecked;
let naviStatus;


$("window").on("load", () => {

  if (search1 === null) return; else {search1Status = search1.getAttribute('aria-checked');}
  if (searchInput1 === null) return; else {search1Status = searchInput1.getAttribute('aria-checked');}
  if (searchHistory === null) return; else {searchHistoryStatus = searchHistory.getAttribute('aria-checked');}

  if (search2 === null) return; else {search2Status = search2.getAttribute('aria-checked');}
  if (searchInput2 === null) return; else {searchInput2Status = searchInput2.getAttribute('aria-hidden')}

  if (toggleUsermenu === null) return; else {toggleChecked = toggleUsermenu.getAttribute('aria-checked');}
  if (usermenu === null) return; else {menuStatus = usermenu.getAttribute('aria-hidden');}
  
  if (toggleNavi === null) return; else {buttonChecked = toggleNavi.getAttribute('aria-checked');}
  if (navi === null) return; else {naviStatus = navi.getAttribute('aria-hidden');}
})


const Search = () => {
  if (search1 === null) return; else search1.addEventListener('click', () => {
    if (!search1Status) {
      search1.setAttribute('aria-checked', true);
      search1Status = true;
      searchInput1.setAttribute('aria-hidden', false);
      searchInput1Status = false;
      searchHistory.setAttribute('aria-hidden', false);
      searchHistoryStatus = false;
    } else {
      search1.setAttribute('aria-checked', false);
      search1Status = false;
      searchInput1.setAttribute('aria-hidden', true);
      searchInput1Status = true;
      searchHistory.setAttribute('aria-hidden', true);
      searchHistoryStatus = true;
    }
  }, true)
  if (search2 === null) return; else search2.addEventListener('click', () => {
    if (!search2Status) {
      search2.setAttribute('aria-checked', true);
      search2Status = true;
      searchInput2.setAttribute('aria-hidden', false);
      searchInput2Status = false;

      if (toggleNavi === null) return; else {
        toggleNavi.setAttribute('aria-checked', false);
        buttonChecked = false;
      }
      if (navi === null) return; else {
        navi.setAttribute('aria-hidden', true);
        naviStatus = true;
      }

      if (toggleUsermenu === null) return; else {
        toggleUsermenu.setAttribute('aria-checked', false);
        toggleChecked = false;
      }
      if (usermenu === null) return; else {
        usermenu.setAttribute('aria-hidden', true);
        menuStatus = true;
      }
    } else {
      if (search2 === null) return; else {
        search2.setAttribute('aria-checked', false);
        search2Status = false;
      }
      if (searchInput2 === null) return; else {
        searchInput2.setAttribute('aria-hidden', true);
        searchInput2Status = true;
      }
    }
  }, true)
  if (closer1 === null) return; else closer1.addEventListener('click', () => {
    search1.setAttribute('aria-checked', false);
    search1Status = false;
    searchInput1.setAttribute('aria-hidden', true);
    searchInput1Status = true;
    searchHistory.setAttribute('aria-hidden', true);
    searchHistoryStatus = true;
  })
  if (closer2 === null) return; else closer2.addEventListener('click', () => {
    search2.setAttribute('aria-checked', false);
    search2Status = false;
    searchInput2.setAttribute('aria-hidden', true);
    searchInput2Status = true;
  })
}
Search();

const ToggleHeadNavi = () => {      
  if (toggleNavi === null) return; else toggleNavi.addEventListener('click', () => {
    if (!buttonChecked) { 
      toggleNavi.setAttribute('aria-checked', true);
      buttonChecked = true;
      navi.setAttribute('aria-hidden', false);
      naviStatus = false;
    } else { 
      toggleNavi.setAttribute('aria-checked', false);
      buttonChecked = false;
      navi.setAttribute('aria-hidden', true);
      naviStatus = true;
    }
  }, true)
}
ToggleHeadNavi();

const ToggleHeadUsermenu = () => {      
  if (toggleUsermenu === null) return; else toggleUsermenu.addEventListener('click', () => {
    if (toggleChecked) { 
      toggleUsermenu.setAttribute('aria-checked', false);
      toggleChecked = false;
      usermenu.setAttribute('aria-hidden', true);
      menuStatus = true;
    } else { 
      toggleUsermenu.setAttribute('aria-checked', true);
      toggleChecked = true;
      usermenu.setAttribute('aria-hidden', false);
      menuStatus = false;
    }
  }, true)
}
ToggleHeadUsermenu();

const DialogueHeight = () => {
  const dialogue = document.querySelector('#dialogue');
  const quotation = document.querySelector('.product-quotation');

  if (quotation === null) {return;} else {
    let targeH = quotation.clientHeight;
    dialogue.style.height = `calc(100% - 73px - ${targeH}px)`;
  }
}
DialogueHeight();

function DeleteBottomTarget() {
  document.querySelector(".product-quotation").style.display = 'none';
  DialogueHeight();
}

function ResetInput() {
  document.getElementById("chatbox").placeholder = '';
}


$("#chatbox").on("propertychange change keyup keydown paste input", function() {
	var currentVal = $(this).val();

	if(!(currentVal == '')) { 
		$(this).parent().parent().find('.message-submit').attr('disabled', 'false');
	} else {
		$(this).parent().parent().find('.message-submit').attr('disabled', 'true');
	}
})

$('.aside-list__item').click( function() {
  $('.aside-list__item').removeClass('aside-list__item--active');
  $(this).addClass('aside-list__item--active');
})