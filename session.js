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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVBYdkNrcTcxbnhxcFg2czR1SVFrVHRuU0VJbVgwdExEdFNTRjFPVUNYcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib3RucEhOOHcrVURVT2o5OHdYMnVEelB0eXNaK0JxdkkvRm02Y2Mwck1Ycz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyRmFaeE9UZE9YM20yUURrMmJtMjA3VWhxQ3lQY3pFb1RFeC9UMEFaWmtJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNRTY4R2ZEbDNOZ2NUNVVNSzdWR2x2TUphcnFWbGRBS2d6TVBHSU1DY0VjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZOUjlMa0lTRWVnVVFuT1RDTEEzcEJBcEdmOFNlZkhzZlpVVHZZSUdjSGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9ncjJ3TnFEL0M5endaYzNPY0lrQlBqTjVvZ3ZxY1FlUno0QlNHeUQwWDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUNVdVNDdFhHazFmb2dVeWJmYnk0SUlSRjMwd0x1ZllzbytoUjJVRDVuZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiajZvNVZDazk3SGFkTVJFSTVpNVllL051TDg2dzZEN09UZXJKODh4S1MxQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVKR3FPK2N4Rm9BaklNRFVOVE5SL2hCcWVYTG5WSi80dTcyQkE2ZzFYMlJMai9oVzV4QkN1V3AzR2djRU1WSjMyalI3TGdMaEptR0lpWVVENDB6eGhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIxLCJhZHZTZWNyZXRLZXkiOiJtZ3FIOGNTS2UzR0dLTUZCbEJCL0VqeHNaUXR6RWVXbndvU2ZESFd2SFJJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiItc2dhMlA0VFJVV1VZT0pHNl81S1Z3IiwicGhvbmVJZCI6Ijc1YWM0MTMzLWVlNjAtNDdiOS1iYjkyLTA5NTIyNDMxNGIyMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPaVlKYzI3Qy8reWlySXhMWkhMU0s5MGRhVEE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFJUZks5RlZTd2ZHbGRLem5RS040c005ZXhvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IktCNkJFWjRXIiwibWUiOnsiaWQiOiI5NDc3Mzc1NzUwNTo3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuqqkfCdk7LhpbTwnZis6qqXIiwibGlkIjoiMTk0MjI3NjQ4NjMwOTAxOjdAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLT0g4Tm9GRVBEaS9NY0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIwYUdKYjY4YkVINFIzeTBmK3BnNjZzOGcrVVV3RXF6YmxwMXFvVC9ZOURNPSIsImFjY291bnRTaWduYXR1cmUiOiI2eDFESnJKM3dKVGZFQ1RJN3Z1YWxmSzF0WW0yb25qSjliZGdJWXlvYW5mVnRLVDRhUlRqeXZUYzFtdXJvckpkdHg0cGJ0L0NNOWRvc3BlNS9ZMHJCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiT2Zjdlh1L3ZxL1QycGdUNDNuRkU4UERxLzE4R0FCeVg1Q2tYS3A5TDd4T0xtM1lkUzRhalN1NXJnTkFCMFZXNTFjZmFUdWNhT044V0hteTcxQVBkaGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc3Mzc1NzUwNTo3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRHaGlXK3ZHeEIrRWQ4dEgvcVlPdXJQSVBsRk1CS3MyNWFkYXFFLzJQUXoifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MTU1NDgxMywibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1XUyJ9",
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
