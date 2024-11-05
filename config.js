const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923144147125";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923144147125";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923144147125";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_07_11_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMixcbiAgICAgICAgMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDQyLFxuICAgICAgICAzMyxcbiAgICAgICAgODQsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDMwLFxuICAgICAgICAxODksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA3MixcbiAgICAgICAgNjYsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTMxLFxuICAgICAgICA5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE4LFxuICAgICAgICA5NixcbiAgICAgICAgMzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA3MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE2LFxuICAgICAgICA3LFxuICAgICAgICA5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDkyLFxuICAgICAgICA5NixcbiAgICAgICAgMTU4LFxuICAgICAgICA0NSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDExNixcbiAgICAgICAgMzcsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjUxLFxuICAgICAgICA2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMwLFxuICAgICAgICA4OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjI4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA4MixcbiAgICAgICAgMTg0LFxuICAgICAgICAyNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzIsXG4gICAgICAgIDc1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDgzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTEyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDYyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgODcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg5LFxuICAgICAgICA0MCxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjFuK0tmQmo3MVUyeUUxZlFSOUlkVkhUejZoZmY3ejhvdDRNbThDaGpYQjA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTQ0MTQ3MTI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDNjBCNjk0QTcyRUZFQjBGOUQyNkMxNjBCQjdGQ0EyN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzA4MjI4NDJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS1R4UTd0b0RTUG1fRHlGM0pjenNTZ1wiLFxuICBcInBob25lSWRcIjogXCJiZTY3OGIzMy02Yjg3LTQ1MDktYTYwYi03YTYxMjgxOTM5NWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAzLFxuICAgICAgMjAyLFxuICAgICAgMTEwLFxuICAgICAgMjIxLFxuICAgICAgMTkyLFxuICAgICAgMjIyLFxuICAgICAgMTA2LFxuICAgICAgMTQ5LFxuICAgICAgMjAxLFxuICAgICAgMTIxLFxuICAgICAgMjQ2LFxuICAgICAgMTcyLFxuICAgICAgNTMsXG4gICAgICA1MyxcbiAgICAgIDMwLFxuICAgICAgMTMsXG4gICAgICA2MCxcbiAgICAgIDIxOSxcbiAgICAgIDEwNSxcbiAgICAgIDgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MixcbiAgICAgIDIzOSxcbiAgICAgIDEzMixcbiAgICAgIDU3LFxuICAgICAgMTU3LFxuICAgICAgMTA5LFxuICAgICAgOTYsXG4gICAgICAxMTIsXG4gICAgICAxNjEsXG4gICAgICA5NCxcbiAgICAgIDEyMSxcbiAgICAgIDI0NyxcbiAgICAgIDE4NixcbiAgICAgIDEyMixcbiAgICAgIDUyLFxuICAgICAgMTIxLFxuICAgICAgNjUsXG4gICAgICA2NSxcbiAgICAgIDIyMyxcbiAgICAgIDE2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEVzQ1VFdBOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTQ0MTQ3MTI1OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzg4NjQzOTk2MDE4NzI6MTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTlhtNDdNREVMQ0ZxYmtHR0FvZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJORHQxTWQwNW5ldDhiazIwZVU5Q21wR2I4YkdvM2FmRzVVTEpDam5rUlMwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInNwSURvcVNRM01GQU5ucmNmWVAyeXlVYi9kcDNFWGFRenR6Zkd0TGVxTHo0RERWTE1ZdXpEdXhtbVdFc2pGSXZ6VXM3a0lOazNIRGgzV1U3S21Mb0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIitNS1VqUlE0bjVGaWJnalRkYUdQT0NIS2xEWGkrdEVicXFpdGN4Ni9GOFptL1NDSVd3MEgrUm04R2VYZW9rcXlSTmVPZzFBdytZR0dPejdGU1Z3RUNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzE0NDE0NzEyNToxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDgyMjgzNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQU1BQUhwbFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBTUFBSHBsLmpzb24iOiAie1wia2V5RGF0YVwiOlwibC9tR2RLL3dVMkFnZ0I3c1pMdTM2RzhacFhHOE1vWVRzYnVDYjhrendPQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MTM4OTYyNzcsXCJjdXJyZW50SW5kZXhcIjo5LFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzA0OTAzNDM4MDhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
