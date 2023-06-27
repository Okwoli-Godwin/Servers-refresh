import { Request, Response } from "express";
import textsmodel from "../model/textmodel";

export const post = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { writeups, button } = req.body;
    const newtext = await textsmodel.create({
      writeups,
      button,
    });

    return res.status(200).json({
      message: "texts posted",
      data: newtext,
    });
  } catch (error) {
    return res.status(404).json({
      message: "failed to post texts",
      data: error,
    });
  }
};

export const update = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { writeups, button } = req.body;
    const gettexts = await textsmodel.findById(req.params.textId);
    const update = await textsmodel.findByIdAndUpdate(
      gettexts?._id,
      { writeups, button },
      { new: true }
    );

    return res.status(201).json({
      message: "texts updated",
      data: update,
    });
  } catch (error) {
    return res.status(404).json({
      message: "failed to update text",
      data: error,
    });
  }
};

export const getData = async (req: Request, res: Response) => {
  try {
    const getText = await textsmodel.find();
    return res.status(200).json({
      message: "Data Successfully gotton",
      data: getText,
    });
  } catch (error) {
    res.status(400).json({
      message: "An error occured in getData",
      error: error,
    });
  }
};
