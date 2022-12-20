export type ResponseWines = {
  wines?: WineType[]
};

export type WineType = {
  millesimed: Boolean,
  year: String,
  grapeVarieties: String,
  logo: String,
  region: String,
  agingPotential: Number,
  createdDate: String,
  appelation: String,
  price: String,
  note: String,
  appellationType: String,
  name: String,
  type: String,
  size: Number,
  cuve: String,
  description: String,
  winePaired: String[]
};