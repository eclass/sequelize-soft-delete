'use strict'

/**
 * Class to add softDelete a sequelite model.
 * @class
 */
class SequelizeSoftDelete {
  /**
   * @typedef {import('sequelize').Model} Model
   * @typedef {import('sequelize').UpdateOptions} UpdateOptions
   */
  /**
   * The softDelete options
   * @typedef {Object} SoftDeleteOptions
   * @property {string} [field=deleted] The field of deleted
   * @property {*} [deleted=true] The value of state deleted
   * etc.
   */
  /**
   * Method to append softDelete method to Model.
   *
   * @param {Model} Model - Sequelize Model.
   * @param {SoftDeleteOptions} options -
   * @returns {*} -
   * @example
   * const sequelizeSoftDelete = require('sequelize-soft-delete')
   *
   * sequelizeSoftDelete.softDelete(MyModel)
   */
  softDelete (Model, options) {
    const defaultOptions = { field: 'deleted', deleted: true }
    const deletedOptions = { ...defaultOptions, ...options }
    /**
     * Set deleted to true (Soft delete).
     *
     * @param {UpdateOptions} options - Options to filter query.
     * @returns {Promise<number>} Total updated.
     * @example
     * const updateds = await MyModel.softDelete({ where: { id: 1 } })
     * @memberof Model
     */
    const updateDeleted = async function (options) {
      const docs = await Model.update(
        { [deletedOptions.field]: deletedOptions.deleted },
        options
      )
      return docs.length
    }
    const instanceOrModel = Model.Instance || Model
    // @ts-ignore
    instanceOrModel.softDelete = updateDeleted
  }
}

module.exports = new SequelizeSoftDelete()
