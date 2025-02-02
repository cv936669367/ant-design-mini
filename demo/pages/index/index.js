import { componentList, allComponents } from '../../utils/constants.ts';

Page({
  data: {
    componentList,
    finding: false,
    searchResult: [],
  },
  onShow() {
    this.setData({
      finding: false,
      searchResult: [],
    });
  },
  onClearSearch() {
    this.setData({
      finding: false,
      searchResult: [],
    });
  },
  onSearch(e) {
    if (e.length > 0) {
      const result = [];
      allComponents.forEach((searchKey) => {
        if (searchKey.name.toLowerCase().match(e)) {
          result.push(searchKey);
        }
      });
      this.setData({
        finding: true,
        searchResult: result,
      });
    } else {
      this.setData({
        finding: false,
        searchResult: [],
      });
    }
  },
  listPress(e) {
    my.navigateTo({
      url: e.currentTarget.dataset.url,
    });
  },
});
