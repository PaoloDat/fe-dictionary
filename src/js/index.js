import * as searchView from './view/searchView';
import {elements} from "./view/base";

import Search from './model/Search';



const state = {};
window.state = state;

/**
 * SEARCH CONTROLLER
 *
 */

const controlSearch = async () => {
    const query = searchView.getInput().trim();
    if (query) {
        state.search = new Search(query);
        await state.search.getResult();
        console.log(state.search.result);
    }

};

elements.searchSubmit.addEventListener('click', controlSearch);
elements.searchInput.addEventListener('keypress', event => {
    if (event.keyCode === 13 || event.which === 13) {
        controlSearch();
    }
});