import { NextApiRequest, NextApiResponse } from "next";
import { User } from "@/modules/users/components/UserProvider";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  return res.status(200).json([
    {
      name: "John Doe",
      age: 25,
    },
    {
      name: "Jane Doe",
      age: 24,
    },
    {
      name: "John Smith",
      age: 30,
    },
  ]);
}
