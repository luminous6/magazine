// components/articleList/cmp.js
import { IndexModel } from "../../model/index";
import { SearchModel } from "../../model/search"
const indexModel = new IndexModel()
const searchModel = new SearchModel()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        articleList: {
            type: Array,
            value: [],

        },
        more: {
            type: String,
            observer(val) {
                if (this.data.type == 'search') {
                    let word = this.data.word
                    let start = this.data.articleList.length
                    searchModel.getSearchArticleList(word, start).then(res => {
                        this.setMoreData(res)
                    })
                } else {
                    this.getMoreData()
                }

            }
        },
        magazineId: {
            type: Number,
            value: 0,
            observer() {
                this.setData({
                    noMoreData: false
                })
            }
        },
        word: String,
    },

    /**
     * 组件的初始数据
     */
    data: {
        loading: false,
        noMoreData: false
    },
    attached() {
        let curPages = getCurrentPages();
        let index = curPages.length - 1;
        console.log(curPages[index]);
        let type = ''
        if (curPages[index].route == "pages/search/search") {
            type = "search"
        } else {
            type = "index"
        }
        this.setData({
            type
        })
    },

    /**
     * 组件的方法列表
     */
    methods: {

        getMoreData() {
            if (this.data.loading || this.data.noMoreData) return;
            this.setData({
                loading: true
            })
            let magazineId = this.data.magazineId;
            let start = this.data.articleList.length;
            indexModel.getArticle(magazineId, start).then(res => {
                this.setMoreData(res)
            })
        },
        setMoreData(data) {
            let tempArr = this.data.articleList.concat(data);
            if (tempArr.length == this.data.articleList.length) {
                this.setData({
                    noMoreData: true,
                    loading: false
                })
                return;
            }

            this.setData({
                articleList: tempArr,
                loading: false
            })
        }
    }
})