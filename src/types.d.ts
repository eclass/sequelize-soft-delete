import { Model, UpdateOptions } from 'sequelize'

export interface SoftDeleteOptions {
  field?: string
  deleted?: any
}

export class SequelizeSoftDelete<TInstance, TAttributes> {
  public softDelete(
    Model: Model<TInstance, TAttributes>,
    options: SoftDeleteOptions
  ): void
}

export function softDelete<TInstance, TAttributes>(
  Model: Model<TInstance, TAttributes>,
  options: SoftDeleteOptions
): void
export function updateDeleted(options: UpdateOptions): Promise<number>
