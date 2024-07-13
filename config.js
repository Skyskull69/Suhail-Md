const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://ahill:

787191784abhi@ahil1

.kzr1tt3.mongodb.net/

?retrywrites=true&w= majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꪶꪮ𝘳ᦔ 𝘴𝘬ꪗꫝ🖤" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "91797361139";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_57_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDUzLFxuICAgICAgICA2MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDczLFxuICAgICAgICAyNixcbiAgICAgICAgMjQzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYxLFxuICAgICAgICA3OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDU0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTU1LFxuICAgICAgICA4OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDUzLFxuICAgICAgICA4MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDkyLFxuICAgICAgICA0OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE5LFxuICAgICAgICA2MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgODIsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAzMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjksXG4gICAgICAgIDU0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjEzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIyLFxuICAgICAgICA0NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDcxLFxuICAgICAgICAyNixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAxLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDYyLFxuICAgICAgICA0MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICAxMjcsXG4gICAgICAgIDYyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDc4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDk2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMzLFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDksXG4gICAgICAgIDg3LFxuICAgICAgICAyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTgzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTIzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA0MyxcbiAgICAgICAgNCxcbiAgICAgICAgODIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDg5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAzMixcbiAgICAgICAgMTE5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAzNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiV1hCa1BBUGMxTTBhMXljYytzcXFsRGlhZXF5cVRsL3dLNWJYWTlFSHZQbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMyLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMyLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZlRDYmFyVk1SSnFMQS1JQUpobWFpQVwiLFxuICBcInBob25lSWRcIjogXCIzMDExMTYwNy05YmM2LTQ3Y2MtOTk2Yy1lZTdiOWM0MTdlNWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDUsXG4gICAgICAwLFxuICAgICAgMTM1LFxuICAgICAgMjE1LFxuICAgICAgMjgsXG4gICAgICA2NCxcbiAgICAgIDEyMixcbiAgICAgIDI0MCxcbiAgICAgIDEyMixcbiAgICAgIDg5LFxuICAgICAgMjQ3LFxuICAgICAgMTkzLFxuICAgICAgMTg3LFxuICAgICAgMjI0LFxuICAgICAgMTcwLFxuICAgICAgMixcbiAgICAgIDI4LFxuICAgICAgMjE1LFxuICAgICAgNjEsXG4gICAgICA5NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTUsXG4gICAgICA1MCxcbiAgICAgIDQyLFxuICAgICAgNDAsXG4gICAgICA1NyxcbiAgICAgIDIzOSxcbiAgICAgIDEyOSxcbiAgICAgIDExOSxcbiAgICAgIDIwOCxcbiAgICAgIDQwLFxuICAgICAgOTksXG4gICAgICAyMDgsXG4gICAgICAxNixcbiAgICAgIDEzNixcbiAgICAgIDQyLFxuICAgICAgMjksXG4gICAgICAxNzAsXG4gICAgICAxODAsXG4gICAgICA5MixcbiAgICAgIDE1NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNU0VFMVo3QVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE3OTczNjExMzkzOjQyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1MTQ5NjY1Nzg5MTUwNjo0MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLkuLl6zaXguJlyzaNlzavwn5akXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSjJtOFpZQ0VPKzZ5YlFHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJvOTZvUFNteVNKMTdOTC9oTDJkSXc5K2daT3ZsOGZwcDBHSkIrYkd6NEdZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImpDeUFKdHlPaUZuMmxldXRZK0MwRkF5U3oveWlidUJJTVNVVmg5MGJiUFlUUzR0dXBGWmlRTXBMaXZURE5WWHRWbWtsZDk2UkpRWWFZU3F2Wk5tekR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm0zeWRiMXVjK2RoWGx6UGdrYkk4MXJyN2cybE9ZaENMY3dDTTNjNTMzSHNWVnlHblNZZUthNlZ0bXBNNWh5UzMyMXVKZk13NkJQbDgwbVpmRGRyMGhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNzk3MzYxMTM5Mzo0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA4NjgyMTJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "丹zͥนrͣeͫ🖤",
  packname: process.env.PACK_NAME || "丹zͥนrͣeͫ🖤",
  botname : process.env.BOT_NAME  || "ˡᵒʳᵈ𝐒𝐊𝐘𝐇",
  ownername:process.env.OWNER_NAME|| "ꪶꪮ𝘳ᦔ 𝘴𝘬ꪗꫝ🖤",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "EyqbCCWYTc8b49cmW MOKT3BlbKFJONRSCTK 1BITJo3ikuriW",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
