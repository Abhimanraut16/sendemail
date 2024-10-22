
import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const { firstName, secondName, email, numer, jobTitle, creatorStatus } =
      req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "abhimanurauttharu@gmail.com",
        pass: "ishb itck wmko ures",
      },
    });

    const mailOptions = {
      from: "abhimanurauttharu@gmail.com",
      to: "abhimanurauttharu@gmail.com",
      subject: "From Submission",
      text: `first Name: ${firstName}\nsecond Name: ${secondName}\nemail:${email}\nnumer :${numer} \njobtitle:${jobTitle}\ncreatorStatus:${creatorStatus}`,
    };
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent succefully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error sending mail" });
    }
  
  }else{
    res.status(405).json({error:"method not Allowed"})
  }
}
