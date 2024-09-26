const models = require('../../db/models');

class CurdService {
  #models;

  constructor(dbModels) {
    this.#models = dbModels;
  }

  getAllCurds = () => this.#models.Curd.findAll();

  getOneCurd = (id) => this.#models.Curd.findByPk(id);

  addNewCurd = (data) => this.#models.Curd.create({ ...data, userId: 1 });

  editOneCurd = async (id, data) => {
    console.log('gasdgasdgdsgdsgdsagasdg');

    console.log(id);

    await this.#models.Curd.update({ ...data, userId: 1 }, { where: { id } });
    const res = await this.#models.Curd.findByPk(id);
    return res;
  };

  deleteCurd = (id) => {
    this.#models.Curd.destroy({ where: { id } });
  };
}

const curdService = new CurdService(models);
module.exports = curdService;
