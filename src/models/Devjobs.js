import { Schema, model } from "mongoose";


const devjob = new Schema({
  id: {
    type: Schema.Types.Number,
    required: true,
  },
  company: {
    type: Schema.Types.String,
    required: true,
  },
  logo: {
    type: Schema.Types.String,
    required: true,
  },
  logoBackground: {
    type: Schema.Types.String,
    required: true,
  },
  position: {
    type: Schema.Types.String,
    required: true,
  },
  postedAt: {
    type: Schema.Types.String,
    required: true,
  },
  contract: {
    type: Schema.Types.String,
    required: true,
  },
  location: {
    type: Schema.Types.String,
    required: true,
  },
  website: {
    type: Schema.Types.String,
    required: true,
  },
  apply: {
    type: Schema.Types.String,
    required: true,
  },
  description: {
    type: Schema.Types.String,
    required: true,
  },
  requirements: {
    content: {
      type: Schema.Types.String,
      required: true,
    },
    items: {
      type: Schema.Types.Array,
      required: true,
    },
  },

  role: {
    content: {
      type: Schema.Types.String,
      required: true,
    },
    items: {
      type: Schema.Types.Array,
      required: true,
    },
  },
});

const Devjobs = model('Devjobs',devjob)

export default Devjobs;