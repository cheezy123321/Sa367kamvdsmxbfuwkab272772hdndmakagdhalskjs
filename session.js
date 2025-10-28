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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVBEK1dTK1JWRy9LUmZNYlFPeWRVVmhRYjEwayt2YTFZbHhkckRVVEEyQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUWFScHJNS3N6VzFDQjd0a05YRElyUEovNmZvNW9UeDJvbk9zaW9vcC9RZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTjk3MVJHbFNvVmtkN3VpZkZSTC9qZUY5YUpCV2RwY251TXcyUE5PS0dnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCdGc1ZGFGdU5vUUU3djRPN1VabldPZXBkTjl0SVFPREZkSXdSQUdaNkRnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdCdXk0Z3hGemhnanBqQzBGa0JjeUdzOXIxTllKelBrVWNNODExQXRjbGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikl5MUtDbXN2KzFhWnVRaGR6bTdhVVpFRVUyc3Y3NG1ndk5vanRPM1JkMjg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0h1K3k0Z2g5ZlhsRlR3dVB0ZDVVYnk0Zm96SWZLNDcwNE81QXRwWjZHYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1Y0cmFlSWp6MERIZGpsTjV6VXM0Nk53WS9vZXA0Nkh1dWM1RGoxcy9qWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlQwVXZjOTEvcVNoKzBCSUQyU2tDSXh5NEZqdTZ6cjFYdEE3MDZ5NnJKTkg5b0gxTHdyeS96N2JqcWZsZVo5c0JxOHErbmJwODZtUmJOZjQ4Z1cxR2dRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkxLCJhZHZTZWNyZXRLZXkiOiJnMTI3clppUDNPT1o2dFZtbloxM2ZIMjVJbGtFcithSTlxTnRuUHdWK3ZRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzczNzU3NTA1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBNTdGRTZCMzBDMEJBQTUxQTc3QzhGNTU1QzM3MTFCRSIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYxNjQzMDcyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5NDc3Mzc1NzUwNUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQTU5NkMyRUQ4N0M0MzA5QTkyRkVCNThCMTQ1NjE2OUEiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MTY0MzA3M30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NzM3NTc1MDVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkE1MTk2NzYwNkMzQkNGQkQ3QkQxOUE5MTlFNUM0RDcyIiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjE2NDMwNzR9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzczNzU3NTA1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBNThENkU3RkYzMEVBNkEwNDgyRjQ2M0QyMTlGMEFDMiIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYxNjQzMDc0fV0sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjIsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IllBU0lZQU1EIiwibWUiOnsiaWQiOiI5NDc3Mzc1NzUwNToxMEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLqqpHwnZOy4aW08J2YrOqqlyIsImxpZCI6IjE5NDIyNzY0ODYzMDkwMToxMEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tPSDhOb0ZFSzZVZ3NnR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjBhR0piNjhiRUg0UjN5MGYrcGc2NnM4ZytVVXdFcXpibHAxcW9UL1k5RE09IiwiYWNjb3VudFNpZ25hdHVyZSI6InE2M3B5K3F5UzE3SVYvM3BuejlZTFo3UEp1dm9JQWkyaTlEVU4vUUdnNGdFdWVodnBIZ2FTRHFQdlM0K2NPaWs4VDlncENvMC9NMiswSktXYUM5bUJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJVU0pzQ1Jwb0dkUHZYanM5eFFwYWdpUTNmcUlhemZXSHI5M3hBYnhBMUI2TzZkbjdsbFNyRS9tbGx2NysyNlZPV1lLSzYvY29nSUFZMVNDeW5Ub3VoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE5NDIyNzY0ODYzMDkwMToxMEBsaWQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZEdoaVcrdkd4QitFZDh0SC9xWU91clBJUGxGTUJLczI1YWRhcUUvMlBReiJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYxNjQzMDY4LCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTVdVIn0",
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
