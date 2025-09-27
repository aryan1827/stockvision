const { model } = require("mongoose");
const bcrypt = require("bcrypt");

const { UsersSchema } = require("../schemas/UsersSchema");

UsersSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

const UsersModel = new model("user", UsersSchema);
module.exports = { UsersModel };
