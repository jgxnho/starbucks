const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

// .search의 모든 클래스를 click하면 focus
searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

// searchInputEl 클래스가 focus되면 focused 클래스가 추가되고, placeholder 속성 추가
searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

// searchInputEl 클래스가 blur되면 focused 클래스가 제거되고, placeholder에 빈 문자
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});
