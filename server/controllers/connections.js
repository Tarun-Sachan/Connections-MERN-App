const Connections = require("../models/Connections");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllConnections = async (req, res) => {
  const connections = await Connections.find({
    createdBy: req.user.userId,
  }).sort("createdAt");
  res.status(StatusCodes.OK).json({ connections, count: connections.length });
};

const getConnection = async (req, res) => {
  const {
    user: { userId },
    params: { id: connectionId },
  } = req;

  const connection = await Connections.findOne({
    _id: connectionId,
    createdBy: userId,
  });

  if (!connection) {
    throw new NotFoundError(`No connection with id ${connectionId}`);
  }
  res.status(StatusCodes.OK).json({ connection });
};

const createConnection = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const connection = await Connections.create(req.body);
  res.status(StatusCodes.CREATED).json({ connection });
};

const updateConnection = async (req, res) => {
  const {
    user: { userId },
    params: { id: connectionId },
  } = req;

  if (company === "" || position === "") {
    throw new BadRequestError("Company or Position filed cannot be empty");
  }
  const connection = await Connections.findByIdAndUpdate(
    { _id: connectionId, createdBy: userId },
    req.body,
    { new: true, runValidators: true }
  );
  if (!connection) {
    throw new NotFoundError(`No connection with id ${connectionId}`);
  }
  res.status(StatusCodes.OK).json({ connection });
};

const deleteConnection = async (req, res) => {
  const {
    user: { userId },
    params: { id: connectionId },
  } = req;

  const connection = await Connections.findByIdAndRemove({
    _id: connectionId,
    createdBy: userId,
  });
  if (!connection) {
    throw new NotFoundError(`No connection with id ${connectionId}`);
  }
  res.status(StatusCodes.OK).json({ connection });
};

module.exports = {
  getAllConnections,
  getConnection,
  createConnection,
  updateConnection,
  deleteConnection,
};
