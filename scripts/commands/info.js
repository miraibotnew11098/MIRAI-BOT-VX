module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
--------------------------------------------
𝐍𝐚𝐦𝐞       : 𝗞𝗔𝗠𝗥𝗨𝗟 𝗛𝗔𝗦𝗔𝗡
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : ‎〲𝗧𝗢𝗠 卝 চৌধুরীヅ࿐
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : 𝗜𝗦𝗟𝗔𝗠
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝗥𝗔𝗡𝗚𝗣𝗨𝗥
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝗗𝗛𝗔𝗞𝗔 𝗞𝗛𝗘𝗟 𝗞𝗛𝗘𝗧
𝐆𝐞𝐧𝐝𝐞𝐫.   : 𝗠𝗔𝗟𝗘
𝐀𝐠𝐞           : 17+
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : 𝗠𝗔𝗥𝗥𝗜𝗘𝗗
𝐖𝐨𝐫𝐤        : 𝗟𝗨𝗖𝗖𝗛𝗔 𝗢𝗞𝗛
𝐆𝐦𝐚𝐢𝐥       : 𝗘𝗪𝗥𝗣𝗜𝗫𝗫𝗜@𝗚𝗠𝗔𝗜𝗟.𝗖𝗢𝗠
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: wa.me/+8801328955648
𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦  : t.me/𝗣𝗜𝗫𝗫𝗜𝗧𝗔𝗛
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/pixxi0`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://i.imgur.com/1Zsaiq4.jpeg`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
