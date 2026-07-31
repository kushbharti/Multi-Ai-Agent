import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const createConversation = async (req, res) => {
  try {
    const userId = req.headers["x-user-id"];
    console.log("userId", userId);
    const conversation = await Conversation.create({
      userId: userId,
    });
    res.status(201).json({ conversation });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `create conversation error ${error}` });
  }
};

export const getConversation = async (req, res) => {
  try {
    const userId = req.headers["x-user-id"];

    console.log("userId", userId);

    const conversation = await Conversation.find({
      userId: userId,
    }).sort({ createdAt: -1 });

    res.status(200).json({ conversation });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `get conversation error ${error}` });
  }
};
export const updateConversation = async (req, res) => {
  try {
    console.log(req.body);

    const { id, title } = req.body;

    const conversation = await Conversation.findByIdAndUpdate(
      id,
      { title },
      { returnDocument: "after" },
    );

    console.log(conversation);

    res.json(conversation);
  } catch (err) {
    console.log(err);
  }
};

export const saveMessage = async (req, res) => {
  try {
    const { conversationId, role, content } = req.body;
    const message = await Message.create({
      conversationId,
      role,
      content,
    });
    res.status(201).json(message);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `save message error ${error}` });
  }
};

export const getMessage = async (req, res) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).json(messages);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `get message error ${error}` });
  }
};
