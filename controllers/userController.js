import jwt from "jsonwebtoken";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

import "dotenv/config";
export const signin = async (req, res) => {
  const { email, password } = req.body;
  const JWT_SECRET = "42isTheAnswer42";
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) return res.status(404).send("Usuário não encontrado");
    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordValid) return res.status(400).send("Senha inválida");

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Erro ao tentar logar" });
  }
};

export const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName, phoneNumber } =
    req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).send("Usuário já existe");

    if (password !== confirmPassword)
      return res.status(400).send("Senhas diferentes");

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
      phoneNumber: phoneNumber,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ result, token });
  } catch {
    res.status(500).json({ message: "Erro ao tentar cadastrar" });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { id: _id } = req.params;
  const updatedUser = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).json({ message: "Id inválido" });

  await User.findByIdAndUpdate(_id, updatedUser, { new: true });
  res.json(updatedUser);
};

export const deleteUser = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).json({ message: "Id inválido" });

  await User.findByIdAndRemove(_id);
  res.json({ message: "Usuário deletado com sucesso" });
};
