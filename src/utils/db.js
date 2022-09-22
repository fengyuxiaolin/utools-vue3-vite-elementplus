let db = window.utools.db

/**
 * 生成一个数据库 id
 *
 * @param {string} prefix id前缀
 * @returns 数据库id
 */
export const createId = (prefix) => {
  return `${prefix}/${new Date().getTime()}`
}

/**
 * @typedef {object} DbDoc 数据库文档
 * @property {string} _id 数据id
 * @property {object} data 数据data
 * @property {string} _rev 数据版本号
 */
/**
 * 新增数据库文档
 *
 * @param {DbDoc} dbDoc 数据库文档
 * @returns 新增结果
 */
export const postApi = ({ prefix = 'db/data', data, _rev }) => {
  let _id = createId(prefix)
  return db.promises.put({ _id, data, _rev })
}
/**
 * 新增或修改数据库文档
 *
 * @param {DbDoc} param 数据库文档
 * @returns 修改结果
 */
export const saveApi = ({ _id, data, _rev }) => {
  _id = _id || createId('data/db')
  return db.promises.put({ _id, data, _rev })
}

/**
 * 根据id获取db数据
 *
 * @param {string} id 数据id
 * @returns db数据
 */
export const getApi = (id) => {
  return db.promises.get(id)
}

/**
 * 删除数据文档
 *
 * @param {string | DbDoc} doc
 * @returns 删除结果
 */
export const removeApi = (doc) => {
  return db.promises.remove(doc)
}

/**
 * 获取(指定前缀的)所有文档
 *
 * @param {string | undefined} key 文档id前缀
 * @returns 文档列表
 */
export const allDocsApi = (key) => {
  return db.promises.allDocs(key)
}
