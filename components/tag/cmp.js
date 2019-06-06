// components/tag/cmp.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        tag: String,
        tagId: String
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        onTap() {
            let tagId = this.properties.tagId
            wx.navigateTo({
                url: "/pages/type/type?tagId=" + tagId
            })
        }
    }
})