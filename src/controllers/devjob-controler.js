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
    let min = -1
    if(page === 1){
        min = 1;
    }else {
        min = max - size + 1;
    }
    
    const data = await Devjobs.find({ id: { $gte: min, $lte: max } });
    const newData = data.map((obj) => {
      const newObj = Object.keys(obj).filter((key) => key !== '_id').reduce((acc, key) => {
          acc[key] = obj[key];
          return acc;
        }, {});
      return newObj;
    });
    return res.status(200).json(newData);
  }
};
