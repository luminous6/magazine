//index.js
import { IndexModel } from "../../model/index.js";
import { randomStr } from "../../utils/randomStr"
const indexModel = new IndexModel()
    //获取应用实例
const app = getApp()

Page({
    data: {
        more: "",
        magazineId: 0,
        loading: true
    },
    //事件处理函数

    onLoad: function() {
        this.getData()
    },

    onReachBottom() {
        this.setData({
            more: randomStr(20)
        })
    },
    getData(magazineId) {
        const article = indexModel.getArticle(magazineId);
        const typeList = indexModel.getTypeList(magazineId);
        const recommend = indexModel.getRecommendInfo(magazineId);
        Promise.all([article, typeList, recommend]).then(res => {

            this.setData({
                loading: false,
                articleList: res[0],
                typeList: res[1],
                recommendList: res[2]
            })
        })
    },
    onCatalog() {
        wx.switchTab({
            url: "/pages/catalog/catalog"
        })
    },
    onNav(e) {
        let magazineId = e.detail.index;
        this.setData({
            magazineId
        })
        this.reSetData();
        this.scrollPageTop();
        this.getData(magazineId)
    },

    reSetData() {
        this.setData({
            articleList: [],
            typeList: [],
            recommendList: {}
        })
    },
    scrollPageTop() {
        wx.pageScrollTo({
            scrollTop: 0,
            duration: 0,
        })
    }
})