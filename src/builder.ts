import { onUser, onProject } from './nodes'
import { User, Project } from './queries'

interface INode {
  user: (...args: any) => string,
  project: (...args: any) => string
}

interface IQuery {
  user: (...args: any) => string,
  project: (...args: any) => string
}
export default class QueryBuilder {
  private _query: string
  private _nodeTitleMap: INode = {
    user: onUser,
    project: onProject
  }

  private _queryTitleMap: IQuery = {
    user: User,
    project: Project
  }

  on (node: keyof INode, params: Record<string, string | number>) {
    const args = Object.entries(params).map(([, val]) => val)
    const nodeFragment = this._nodeTitleMap[node](...args)
    const regex = new RegExp(node, 'g')

    this._query = this._query.replace(regex, nodeFragment)
    return this
  }

  get query () {
    return this._query
  }

  request (query: keyof IQuery, params: Record<string, string | number>) {
    const args = Object.entries(params).map(([, val]) => val)

    this._query = this._queryTitleMap[query](...args)
    return this
  }
}

const QB = new QueryBuilder()

const query = QB.request('user', {
  fields: 'id email age project',
  login: 'ioedeveloper'
}).on('project', {
  fields: 'name dateCreated'
}).query

console.log('query: ', query)
