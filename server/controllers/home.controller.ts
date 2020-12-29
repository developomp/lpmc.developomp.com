import { Request, Response } from "express";


export default (req: Request, res: Response) => {
  let message = "sup"
  console.log(message)
  res.send(message)
}
