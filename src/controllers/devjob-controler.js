import Devjobs from "../models/Devjobs.js";

export const getDevjobs = async (req, res) => {
  let { size, page } = req.params;
  size = parseInt(size);
  page = parseInt(page);
  let newData = [];
  if (size === 1) {
    const data = await Devjobs.findOne({ id: page });
    const { _id, ...rest } = data.toObject();
    newData = rest;
    return res.status(200).json(newData);
  } else {
    const max = size * page;
    let min = -1;
    if (page === 1) {
      min = 1;
    } else {
      min = max - size + 1;
    }

    const data = await Devjobs.find({ id: { $gte: min, $lte: max } });

    const newData = data.map((data) => {
      return {
        id: data.id,
        company: data.company,
        logo: data.logo,
        logoBackground: data.logoBackground,
        position: data.position,
        postedAt: data.postedAt,
        contract: data.contract,
        location: data.location,
        website: data.website,
        apply: data.apply,
        description: data.description,
        requirements: data.requirements,
      };
    });

    return res.status(200).json(newData);
  }
};
