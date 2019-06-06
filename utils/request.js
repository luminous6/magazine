class Request {
    baseUrl = "https://easy-mock.com/mock/5bd149fab36f2c5eac3a9274/QM_magazine";

    getData({ url, success, method = "GET", data = {} }) {
        const promise = new Promise((resolve, reject) => {
            wx.request({
                url: this.baseUrl + url,
                method: method,
                success: res => {
                    if (res.data.code == 0) {
                        resolve(res.data.data)
                    } else {
                        this.showErr()
                    }
                },
                fail: err => {
                    reject();
                    this.showErr()
                }
            })
        })
        return promise

    }
    showErr() {
        wx.showToast({
            title: "请求错误",
            icon: "none"
        })
    }
}

export { Request }