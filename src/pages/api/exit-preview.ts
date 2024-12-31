import type { NextApiRequest, NextApiResponse } from "next";

export default function exit(req: NextApiRequest, res: NextApiResponse) {
  res.setDraftMode({ enable: false });
  res.writeHead(307, { location: "/" });
  res.end();
}
