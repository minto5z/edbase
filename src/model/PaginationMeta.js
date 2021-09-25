class PaginationMetaModel {

    constructor() {
        this.total = 0;
        this.limit = 10;
        this.totalPage = 0;
        this.currentPage = 0;
    }

    fromJson(data = {}) {
        let obj = new PaginationMetaModel();
        obj.total = data.total ?? 0;
        obj.limit = data.per_page ?? 0;
        obj.totalPage = this.getTotalPage(data.total, data.per_page);
        obj.currentPage = data.current_page ?? 0;
        return obj;
    }

    getTotalPage(total, limit) {
        if (total > 0 && limit > 0) {
            return Math.ceil(total / limit);
        }
        return 1;
    }

}

export const PaginationMeta = new PaginationMetaModel();
