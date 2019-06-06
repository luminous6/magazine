// components/article/cmp.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        articleDetail: Object
    },

    /**
     * 组件的初始数据
     */
    data: {
        likeStatus: false
    },
    attached() {
        let articleDetail = this.data.articleDetail;
        let artId = articleDetail.artId;
        let likeList = wx.getStorageSync("likeList") || [];
        let likeStatus = false;
        likeList.forEach((item, index) => {
            if (item.artId == artId) {
                likeStatus = true
            }
        })
        this.setData({
            likeStatus
        })
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onLike(e) {
            let like = e.detail.like;
            let articleDetail = this.data.articleDetail;
            let artId = articleDetail.artId;
            let likeList = wx.getStorageSync("likeList") || [];
            if (like) {
                likeList.unshift(articleDetail)
                wx.setStorageSync('likeList', likeList)
            } else {
                let tempIndex = 0
                likeList.forEach((item, index) => {
                    if (item.artId == artId) {
                        tempIndex = index
                    }
                })
                likeList.splice(tempIndex, 1)
                wx.setStorageSync('likeList', likeList)
            }
        }
    }
})