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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0Z5REpRbGMwa3pwM1U3cmxubHdNZ05aaHVDbDd6L1JjTHBUWEYydzkxbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0ZsZGJtQU93U3o1SkhKNGcweS8xY2FsM0t2VmcyVFZNSEdXdDNlMy9tZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSTlnWjZnUG1mdDM3MisxMUlwNHQyQTVQVCtFUk45UCt3QVB5dXFvU1UwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOMzdoM0R6T0ZXTE43ZE1hTFNTMWVxSWNiVm0vNE56d2t0VHZ5azIzOUI4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9KRjhaMnlBZ2ZhTktGWnNEMFUyYTBWT1pPclQwL1dlZkFKNjJxeWFYSG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im4yU2NYZ2dkTld6OXFvOStoM2JxZHB2VlplbU01VGsrVmZzMTNLM0xnbm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0dBcFlGOEZOZ0EwMHlKU09EU1ZTZVZaSFJzdkVKNzM4SUdZSzVycTVtZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWDhIMWFPMHNJNnY4cmNmQ2dPUnFNK0dVeXNCK0ZlZ2tFNXJFN2ZXbUZ3UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJab1hMZUczK25USFRialliL25tcGtMWTdURU9BaG9Uc3hlN0FwejVTdmE2OG41dHljRWUzRStLdFhRRjFxK0gxNkk1K3AzSnpTVm5tYlFyQklPNWd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzUsImFkdlNlY3JldEtleSI6IkdxOHNXZDlXRTh6aW5kaXRKYm1QTVFqVnovc3YxN1FjMWVFNkQxOEExZ2c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NzM3NTc1MDVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkE1NEM4MEQ4ODMyNUQ4OEU0RDlFNUIzOUQ4NjBEMzM5IiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjE3MjMzNTZ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzczNzU3NTA1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBNURCNjdGQTkyRTg2Qjk4OUFGNDA3MzJDOEUzQ0Y3RCIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYxNzIzMzU2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5NDc3Mzc1NzUwNUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQTVGMTFCQzQ5NjU4NjJDMUFBRENCNTRGNzM3MzE3OEIiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MTcyMzM1Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NzM3NTc1MDVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkE1Q0QyMTI4NDk0NDI3NEIyRTE2RTA3NTQ4MTM2OTlGIiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjE3MjMzNTd9XSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MywiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiWUFTSVlBTUQiLCJtZSI6eyJpZCI6Ijk0NzczNzU3NTA1OjExQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuqqkfCdk7LhpbTwnZis6qqXIiwibGlkIjoiMTk0MjI3NjQ4NjMwOTAxOjExQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS09IOE5vRkVNbUhoOGdHR0FZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMGFHSmI2OGJFSDRSM3kwZitwZzY2czhnK1VVd0VxemJscDFxb1QvWTlETT0iLCJhY2NvdW50U2lnbmF0dXJlIjoid1paNU95U0xsTjN3REhEK1FKRGlIeWxGbFhHRHB2emswLzdMclB6NG5KM0huZEwvUi9TMFA1MkROckZFNWJ5M1FsZjdxNlVYRFQ2anR6eCtVVGJGRHc9PSIsImRldmljZVNpZ25hdHVyZSI6ImdkZk1rYzhIZi9hWWw3Z1pxN1pGbi9XTHVhSFdxZWlRUlF0NmlsbUFkbTZySFIxdmdMZVp6R0NHM0RPalZhUDhmSjBkemZZbHptYWVwZzRYb0ZSQmhRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTk0MjI3NjQ4NjMwOTAxOjExQGxpZCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkR2hpVyt2R3hCK0VkOHRIL3FZT3VyUElQbEZNQktzMjVhZGFxRS8yUFF6In19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjE3MjMzNTEsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNV1UifQ",
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
