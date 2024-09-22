import { supabase } from "@/lib/supabase";

export default async function handler(req, res) {
  // await new Promise((res) => setTimeout(res, 5000));

  if (req.method !== "POST")
    return res.status(405).json({
      success: false,
      message: "Please make a POST request",
    });

  // const contactData = {
  //   fullName: "Jonas",
  //   email: "test",
  //   subject: "booking",
  //   message: "HEY!",
  // };

  const contactData = JSON.parse(req.body);
  console.log(contactData);

  const { error } = await supabase.from("contacts").insert([contactData]);

  if (error)
    res.status(500).json({
      success: false,
      message: "Could not send your message. Please try again.",
    });

  // Success message
  res.status(200).json({
    success: true,
    message: "Thanks for your message! We will be in touch soon :)",
  });
}
