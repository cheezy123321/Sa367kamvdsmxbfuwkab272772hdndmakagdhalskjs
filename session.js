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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVBEK1dTK1JWRy9LUmZNYlFPeWRVVmhRYjEwayt2YTFZbHhkckRVVEEyQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUWFScHJNS3N6VzFDQjd0a05YRElyUEovNmZvNW9UeDJvbk9zaW9vcC9RZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTjk3MVJHbFNvVmtkN3VpZkZSTC9qZUY5YUpCV2RwY251TXcyUE5PS0dnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCdGc1ZGFGdU5vUUU3djRPN1VabldPZXBkTjl0SVFPREZkSXdSQUdaNkRnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdCdXk0Z3hGemhnanBqQzBGa0JjeUdzOXIxTllKelBrVWNNODExQXRjbGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikl5MUtDbXN2KzFhWnVRaGR6bTdhVVpFRVUyc3Y3NG1ndk5vanRPM1JkMjg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0h1K3k0Z2g5ZlhsRlR3dVB0ZDVVYnk0Zm96SWZLNDcwNE81QXRwWjZHYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1Y0cmFlSWp6MERIZGpsTjV6VXM0Nk53WS9vZXA0Nkh1dWM1RGoxcy9qWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlQwVXZjOTEvcVNoKzBCSUQyU2tDSXh5NEZqdTZ6cjFYdEE3MDZ5NnJKTkg5b0gxTHdyeS96N2JqcWZsZVo5c0JxOHErbmJwODZtUmJOZjQ4Z1cxR2dRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkxLCJhZHZTZWNyZXRLZXkiOiJnMTI3clppUDNPT1o2dFZtbloxM2ZIMjVJbGtFcithSTlxTnRuUHdWK3ZRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzczNzU3NTA1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBNTdGRTZCMzBDMEJBQTUxQTc3QzhGNTU1QzM3MTFCRSIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYxNjQzMDcyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5NDc3Mzc1NzUwNUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQTU5NkMyRUQ4N0M0MzA5QTkyRkVCNThCMTQ1NjE2OUEiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MTY0MzA3M30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NzM3NTc1MDVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkE1MTk2NzYwNkMzQkNGQkQ3QkQxOUE5MTlFNUM0RDcyIiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjE2NDMwNzR9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzczNzU3NTA1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBNThENkU3RkYzMEVBNkEwNDgyRjQ2M0QyMTlGMEFDMiIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYxNjQzMDc0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5NDc3Mzc1NzUwNUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQTUyN0RGMUQ4RDZFN0QzMDMzQzQ3RjkzNTREQ0JGRUQiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MTY0MzA5N30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NzM3NTc1MDVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkE1QzE2MkYzRDc4RDE1NTE4QTkxMkJDQ0RCNDJGOTgyIiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjE2NDMwOTh9XSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MiwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiWUFTSVlBTUQiLCJtZSI6eyJpZCI6Ijk0NzczNzU3NTA1OjEwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuqqkfCdk7LhpbTwnZis6qqXIiwibGlkIjoiMTk0MjI3NjQ4NjMwOTAxOjEwQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS09IOE5vRkVLNlVnc2dHR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMGFHSmI2OGJFSDRSM3kwZitwZzY2czhnK1VVd0VxemJscDFxb1QvWTlETT0iLCJhY2NvdW50U2lnbmF0dXJlIjoicTYzcHkrcXlTMTdJVi8zcG56OVlMWjdQSnV2b0lBaTJpOURVTi9RR2c0Z0V1ZWh2cEhnYVNEcVB2UzQrY09pazhUOWdwQ28wL00yKzBKS1dhQzltQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IlVTSnNDUnBvR2RQdlhqczl4UXBhZ2lRM2ZxSWF6ZldIcjkzeEFieEExQjZPNmRuN2xsU3JFL21sbHY3KzI2Vk9XWUtLNi9jb2dJQVkxU0N5blRvdWhBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTk0MjI3NjQ4NjMwOTAxOjEwQGxpZCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkR2hpVyt2R3hCK0VkOHRIL3FZT3VyUElQbEZNQktzMjVhZGFxRS8yUFF6In19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjE2NDQ5MjksImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNV1UifQ",
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
