import { onUser } from './nodes'

export default class QueryBuilder {
  private _query: string
  private _queryTitleMap: Record<string, (...args: any) => string> = {
    user: onUser
  }

  on (node: string, params: Record<string, any>) {
    this._query.replace(node, this._queryTitleMap[node](params.fields))
    return this
  }

  get query () {
    return this._query
  }
}

const QB = new QueryBuilder()

const query = QB.on('users', {
  fields: 'id, email, age, projects',
  first: 10
}).on('projects', {
  fields: 'name, dateCreated'
}).query
