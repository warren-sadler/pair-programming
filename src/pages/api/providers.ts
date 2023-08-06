import { NextApiRequest, NextApiResponse } from "next";
import { Provider } from "@/modules/care/components/CareContext";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Provider[]>
) {
  return res.status(200).json([
    {
      designation: "Coach",
      name: "John Doe",
      age: 25,
    },
    {
      designation: "Therapist",
      name: "Jane Doe",
      age: 24,
    },
    {
      designation: "Therapist",
      name: "John Smith",
      age: 30,
    },
  ]);
}
