import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  heading1: {
    type: String,
    required: true
  },
  paragraph1: {
    type: String,
    required: true
  },
  heading2: {
    type: String,
    required: true
  },
  paragraph2: {
    type: String,
    required: true
  },
  heading3: {
    type: String,
    required: true
  },
  paragraph3: {
    type: String,
    required: true
  },
  subheading1: {
    type: String,
    required: true
  },
  paragraph4: {
    type: String,
    required: true
  },
  subheading2: {
    type: String,
    required: true
  },
  paragraph5: {
    type: String,
    required: true
  },
  subheading3: {
    type: String,
    required: true
  },
  paragraph6: {
    type: String,
    required: true
  },
});

export default mongoose.model('Data', dataSchema);
