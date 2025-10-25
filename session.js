//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK09CMkNyVmFvTkJXV2hyeXhNcG0rYmlFQ01Dai92alZUSmFRVDJlakxWRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSHU3cVNJU3Vlcmc4eXJJd2tNNGRQREZHcmY0NzBZQXZwSTdFUk5vZHdEcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJT1dmKzNsOGhIeGI0RmU1TDVCRGRSZW1NNkJLNVVRNURiNUxhNHY0VFdNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzcGUybDlZWDF1ZmxjeE8ydDZOWnpqTmlITGtrVUpNNnpFM0FmZTZleFg0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNQL2NNSzlzTU1hejR6OVB6eE5wY3diM3REN213ZzZPb2EveEdxZ01qMDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNxRVp0c1U5NVQ3U1NBZElobUhPZXF6L1pZUEVpTFlmVENWNmtnaTVMVjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0IycnlVZk1lbmluYTcrbThXaldZai9MeVJhN1Vjd2J4UWc5UkRuTkpGVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUg4S2ZqaUxuZzJkb1FUVCtNNTBXQlRtaHl6K2JYWnhuRTdXQk5pdVBIbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFWWUtuYmIzVGd2eXh1M2Jud2N5Y3BtTFdJK2Zib1U3dEt6MWNoTko1U0RvN0JBcHN1NGFRUUwvWXg2ekhSSjZyeWQrYjVkYkxqL09XcFRTTTRFUmdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUsImFkdlNlY3JldEtleSI6IndVQ0NKUTJLcDJ0dWNIYzBlQzFDY3dPMkhZWEpjbFpmc2xVd0R2QnB4MW89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MjA0MTc1OTBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM3OTc0NkEyQjc1ODRDNDhDQUI2QjIxREI2QjUwRTQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MTM1ODAxMH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MjA0MTc1OTBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNBODVBREY2NkMxQ0E0ODlGRjYwRjM5OEVENjQ3QkMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MTM1ODAxMH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoicDZocjdGamVUT2VaMDNkcElVM01wZyIsInBob25lSWQiOiJjYTM0YzY4NS1iZDk4LTQwN2QtYWIxNC01YzI3MjNlM2EwYjEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSzVTNzZlUXYzSXBpUDZsdHRUdHpuZnFTbFhzPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inhqc3AvMDhGK2YvY3ZzcEI2QWw2c3dHMm5ydz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJMSFkyMjE3NSIsIm1lIjp7ImlkIjoiOTQ3MjA0MTc1OTA6NzJAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyNjk3Njc0OTk4NzQzMjc6NzJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNORGY1b0VHRUtqaDhNY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJpNzVGMnA1MTRhVTd0bjAxTG1iTGpQRkxTOVpUc3BzWG44TWFEeklaNEcwPSIsImFjY291bnRTaWduYXR1cmUiOiJoT1l6Ullod2VLaU1NQUhUMmo5UGtYYzJwbGVmM3g0QnpKUllqMFBiZ0hFbzF2WmlFYThXdmFzZm9CWjF6U1lvb0ZGNnNURXRENHRxbEh6emFvRkNEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoidmFBUUMyMXZndld3UDVlSlRuTDdqOFNOc1VMVWN2TGRmQWZBU3ZHaHlKVVRSWmE4YjFxWm9PVHFVNU9odWlNZndsT1o3dlBTNU9JOE00biswZkRRaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyMDQxNzU5MDo3MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZdStSZHFlZGVHbE83WjlOUzVteTR6eFMwdldVN0tiRjUvREdnOHlHZUJ0In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjEzNTgwMDYsImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT2FpIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94773757505",
  PASSWORD: 
    process.env.PASSWORD || "Sadew4321",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94769162583", "94724304850"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
