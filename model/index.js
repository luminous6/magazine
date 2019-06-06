import { Request } from "../utils/request";
class IndexModel extends Request {
    getArticle(magazineId = 0, start = 0) {
        return this.getData({
            url: `/getIndexArticleList/${magazineId}/${start}`
        })
    }
    getTypeList(magazineId = 0) {
        return this.getData({
            url: `/getMarkTypeList/${magazineId}`
        })
    }
    getRecommendInfo(magazineId = 0) {
        return this.getData({
            url: `/getRecommendInfo/${magazineId}`
        })
    }
}

export { IndexModel }