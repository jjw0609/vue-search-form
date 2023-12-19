import View from './View.js';

const tag = '[KeywordView]';

const KeywordView = Object.create(View);

KeywordView.setup = function(el) {
    this.init(el);
}

KeywordView.render = function(data = []) {
    this.el.innerHTML = data.length ? this.getKeywordsHtml(data) : '추천 검색어가 없습니다.';
    this.show();
}

KeywordView.getKeywordsHtml = function(data) {
    return data.reduce((html, item, index) => {
        html += `
            <li>
                <span class="number">${index + 1}</span>
                ${item.keyword}
            </li>
        `;

        return html;
    }, '<ul class="list">') + '</ul>';
}

export default KeywordView;