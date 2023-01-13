import type { NextApiRequest, NextApiResponse } from "next"
import { Bibles } from "../_interface"

const objects: Bibles = {
  data: [
    {
      id: "string",
      dblId: "string",
      abbreviation: "string",
      abbreviationLocal: "string",
      language: {
        id: "string",
        name: "string",
        nameLocal: "string",
        script: "string",
        scriptDirection: "string",
      },
      countries: [
        {
          id: "string",
          name: "string",
          nameLocal: "string",
        },
      ],
      name: "string",
      nameLocal: "string",
      description: "string",
      descriptionLocal: "string",
      relatedDbl: "string",
      type: "string",
      updatedAt: new Date(),
      audioBibles: [
        {
          id: "string",
          name: "string",
          nameLocal: "string",
          description: "string",
          descriptionLocal: "string",
        },
      ],
    },
  ],
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Bibles>
) {
  res.status(200).json(objects)
}
