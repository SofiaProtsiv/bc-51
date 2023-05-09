import Pagination from "tui-pagination";

const refs = {
  form: document.querySelector(".js-search-form"),
  list: document.querySelector(".js-gallery"),
  paginationEl: document.querySelector(".tui-pagination"),
};
const { form, list, paginationEl } = refs;

form.addEventListener("submit", handleSubmit);

class UnsplashAPI {
  #BASE_URL = "https://api.unsplash.com/search/photos";
  #API_KEY = "LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc";

  #page;
  #searchQuery;

  #searchParams = new URLSearchParams({
    per_page: 30,
    client_id: this.#API_KEY,
    color: "black",
    orientation: "portrait",
  });

  constructor() {
    this.#page = 1;
    this.#searchQuery = "";
  }

  getImages() {
    return fetch(
      `${this.#BASE_URL}?query=${this.#searchQuery}&page=${this.#page}&${
        this.#searchParams
      }`
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(res.statusText);
    });
  }

  updadePage() {
    this.#page += 1;
  }

  get page() {
    return this.#page;
  }

  set page(newPage) {
    this.#page = newPage;
  }

  set searchQuery(newQuery) {
    this.#searchQuery = newQuery;
  }
  get searchQuery() {
    return this.#searchQuery;
  }
}

const unsplashApi = new UnsplashAPI();

function createGalleryCards(images) {
  return images
    .map(
      ({ urls, alt_description }) => `<li class="gallery__item">
      <img src="${urls.small}" alt="${alt_description}" class="gallery-img">
  </li>`
    )
    .join("");
}

function handleSubmit (event) {
  event.preventDefault();

  const { query } = event.currentTarget.elements;
  unsplashApi.searchQuery = query.value.trim();

  if (unsplashApi.searchQuery === "") return;

  list.innerHTML = "";
  unsplashApi.page = 1;

  unsplashApi.getImages().then(({ results, total }) => {
    if (!results) return;

    initPagination({
      page: unsplashApi.page,
      itemsPerPage: 30,
      totalItems: total,
    });

    list.insertAdjacentHTML("beforeend", createGalleryCards(results));
  });
};

function initPagination({ page, itemsPerPage, totalItems }) {
  const options = {
    page,
    itemsPerPage,
    totalItems,
    visiblePages: 5,
    centerAlign: true,
    usageStatistics: false,
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        "</a>",
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        "</span>",
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        "</a>",
    },
  };

  const pagination = new Pagination(paginationEl, options);

  pagination.on("afterMove", ({ page }) => {
    unsplashApi.page = page;

    unsplashApi.getImages().then(({ results }) => {
      const markup = createGalleryCards(results);
      list.innerHTML = markup;
    });
  });

  return pagination;
}
