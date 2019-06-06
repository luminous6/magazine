// components/nineImg/cmp.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        mainTitle: String,
        imgArr: Array
    },

    /**
     * 组件的初始数据
     */
    data: {
        imgArr: []
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onTap(e) {
            let index = e.currentTarget.dataset.index
            let array = this.data.imgArr
            wx.previewImage({
                current: array[index],
                urls: array
            })
        }
    }
})