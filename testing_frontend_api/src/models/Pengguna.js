const { default: mongoose, Schema } = require("mongoose");

const PenggunaSchema = new Schema({
	first_name: String,
	last_name: String,
	email: String,
	password: String,
	roles: String,
	receives: String,
	refresh_token: String,
});

const Pengguna = mongoose.model("pengguna", PenggunaSchema, "pengguna");

module.exports = Pengguna;
