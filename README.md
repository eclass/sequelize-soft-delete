# sequelize-soft-delete

[![npm version](https://img.shields.io/npm/v/sequelize-soft-delete.svg?style=flat-square)](https://www.npmjs.com/package/sequelize-soft-delete)
[![npm downloads](https://img.shields.io/npm/dm/sequelize-soft-delete.svg?style=flat-square)](https://www.npmjs.com/package/sequelize-soft-delete)
[![devDependency Status](https://img.shields.io/david/dev/eclass/sequelize-soft-delete.svg?style=flat-square)](https://david-dm.org/eclass/sequelize-soft-delete#info=devDependencies)

> Sequelize model plugin for add soft-delete method

## Installation

```bash
npm i sequelize-soft-delete
```

## Use

```js
// model.js
const sequelizeSoftDelete = require('sequelize-soft-delete')

module.exports = (sequelize, DataTypes) => {
  const MyModel = sequelize.define(
    'MyModel',
    {
      deleted: {
        type: DataTypes.INTEGER(1),
        defaultValue: 0
      }
    },
    {
      defaultScope: {
        where: {
          deleted: 0
        }
      }
    }
  )
  const options = {deleted: 1}
  sequelizeSoftDelete(MyModel, options)
  return MyModel
}

// controller.js
const updated = await db.MyModel.softDelete({ where: { id: 1 } })
```

## License

[MIT](https://tldrlegal.com/license/mit-license)
