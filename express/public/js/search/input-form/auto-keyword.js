import { $ } from '../../utility/util.js';

export default class AutoKeyword {
  constructor() {
    this.$popupMenuList = $('#input-popup-menu-list');
    this.$searchInput = $('.search-input');
    this.count = 1;
  }

  findList(code) {
    if (!this.$popupMenuList.firstElementChild) return;

    if (code === 'ArrowDown') this.chooseWordDownside();
    else if (code === 'ArrowUp') this.chooseWordUpside();
  }

  chooseWordDownside() {
    if (this.count === 12) this.count = 1;

    this.changeInputValue();
    this.count++;
  }

  chooseWordUpside() {
    if (this.count === 0) this.count = 11;
    this.changeInputValue();
    this.count--;
  }

  changeInputValue() {
    const selectedList = $(
      `#input-popup-menu-list > li:nth-child(${this.count}`
    );

    selectedList.style.textDecoration = 'underline';
    selectedList.style.color = '#4285f4';
    this.$searchInput.value = selectedList.textContent;
  }
}