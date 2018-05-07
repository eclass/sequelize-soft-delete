'use strict'

class SequelizeSoftDelete {
  constructor (options = {}) {
    this.deleted = options.deleted || true
  }
  /**
   * soft delete
   * Set deleted to true
   * @param {Object} options Options to filter query
   * @return {Number} Total updated
   */
  async softDelete (options) {
    const docs = await this.update({ deleted: this.deleted }, options)
    return docs.length
  }
}

/**
 * Sequelize Model
 * @external {Model} http://docs.sequelizejs.com/class/lib/model.js~Model.html
 */
/**
 * The softDelete options
 * @typedef {Object} SoftDeleteOptions
 * @property {Any} [deleted=true] The value of state deleted
 * etc.
 */
/**
 * Method to append softDelete method to Model
 * @param {Model} Model Sequelize Model
 * @param {SoftDeleteOptions} options
 */
module.exports = (Model, options) => {
  const sequelizeSoftDelete = new SequelizeSoftDelete(options)
  Model.softDelete = sequelizeSoftDelete.softDelete
}
