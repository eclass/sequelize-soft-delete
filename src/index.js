'use strict'

class SequelizeSoftDelete {
  /**
   * Sequelize Model
   * @external {Model} http://docs.sequelizejs.com/class/lib/model.js~Model.html
   */
  /**
   * The softDelete options
   * @typedef {Object} SoftDeleteOptions
   * @property {String} [field=deleted] The field of deleted
   * @property {Any} [deleted=true] The value of state deleted
   * etc.
   */
  /**
   * Method to append softDelete method to Model
   * @param {Model} Model Sequelize Model
   * @param {SoftDeleteOptions} options
   */
  softDelete (Model, options) {
    const defaultOptions = { field: 'deleted', deleted: true }
    const deletedOptions = { ...options, ...defaultOptions }
    /**
     * soft delete
     * Set deleted to true
     * @param {Object} options Options to filter query
     * @return {Number} Total updated
     */
    const updateDeleted = async function (options) {
      const docs = await Model.update(
        { deleted: deletedOptions.deleted },
        options
      )
      return docs.length
    }
    const instanceOrModel = Model.Instance || Model
    instanceOrModel.softDelete = updateDeleted
  }
}

module.exports = new SequelizeSoftDelete()
