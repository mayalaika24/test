import Repository from './Repository.js'

export default class CrudRepository {
    constructor (resource) {
        this.resource = resource
    }
    async get() {
        const data = await Repository.get(`/${this.resource}`)
        return data
    }
    async getWithPagination(page) {
        const data = await Repository.get(`/${this.resource}?page=${page}`)
        return data
    }
    async post(item) {
        const data = await Repository.post(`/${this.resource}`, item)
        return data
    }
    async delete(id) {
        const data = await Repository.delete(`/${this.resource}`, id)
        return data
    }
}