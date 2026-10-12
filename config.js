import { getDatabase } from "./src/lib/ourin-database.js";
import * as ownerPremiumDb from "./src/lib/ourin-premium-db.js";

const config = {
  info: {
    website: "https://firefly.maiku.my.id",
    grupwa: "https://chat.whatsapp.com/xxxx",
  },

  owner: {
    name: "Zann",
    number: ["62xxxxxxxxxxx"],
  },

  session: {
    pairingNumber: "62xxxxxxxxxxxxx",
    usePairingCode: true,
  },

  fake_call: {
    active: false,
    usePairing: true,
    dir: "./session_voip",
  },

  bot: {
    name: "𝗢𝗨𝗥𝗜𝗡 𝗠𝗗",
    version: "3.3.1",
    developer: "Zann",
  },

  assets: {
    "ourin-daftar": "./assets/image/ourin-daftar.png",
    "ourin-demote": "./assets/image/ourin-demote.png",
    "ourin-fishit": "./assets/image/ourin-fishit.jpg",
    "ourin-games": "./assets/image/ourin-games.jpg",
    "ourin-landscape": "./assets/image/ourin-landscape.jpg",
    "ourin-levelup": "./assets/image/ourin-levelup.jpg",
    "ourin-minecraft": "./assets/image/ourin-minecraft.jpg",
    "ourin-promote": "./assets/image/ourin-promote.png",
    "ourin-rpg": "./assets/image/ourin-rpg.jpg",
    "ourin-rules": "./assets/image/ourin-rules.jpg",
    "ourin-store": "./assets/image/ourin-store.png",
    "ourin-v8": "./assets/image/ourin-v8.jpg",
    "ourin-winner": "./assets/image/ourin-winner.jpg",
    "ourin": "./assets/image/ourin.png",
    "ourin2": "./assets/image/ourin2.jpg",
    "ourin3": "./assets/image/ourin3.jpg",
    "pp-kosong": "./assets/image/pp-kosong.jpg",
    "ourin-mp4": "./assets/video/ourin-mp4.mp4",
    "ourin-mp3": "./assets/audio/ourin-mp3.mp3",
    "ourin-font": "./assets/ourin-font.ttf",
    "ourin-kertas": "./assets/image/ourin-kertas.jpg",
  },

  mode: "public",

  command: {
    prefix: ".",
  },

  vercel: {
    token: "",
  },

  payment: {
    qrisUrl: "",
    methods: [
      { name: "Dana", number: "", holder: "" },
      { name: "GoPay", number: "", holder: "" },
      { name: "OVO", number: "", holder: "" },
      { name: "ShopeePay", number: "", holder: "" },
    ],
    banks: [],
    customText: "https://imgdrop.web.id/KodpV.webp",
  },

  donasi: {
    payment: [
      { name: "Dana", number: "08xxxxxxxxxx", holder: "Nama Owner" },
      { name: "GoPay", number: "08xxxxxxxxxx", holder: "Nama Owner" },
      { name: "OVO", number: "08xxxxxxxxxx", holder: "Nama Owner" },
    ],
    links: [
      { name: "Saweria", url: "saweria.co/username" },
      { name: "Trakteer", url: "trakteer.id/username" },
    ],
    benefits: [
      "Mendukung development",
      "Server lebih stabil",
      "Fitur baru lebih cepat",
      "Priority support",
    ],
    qris: "https://imgdrop.web.id/KodpV.webp",
  },

  energi: {
    enabled: true,
    default: 99999,
    premium: 99999999,
    owner: -1,
  },

  sticker: {
    packname: "𝗢𝗨𝗥𝗜𝗡 𝗠𝗗",
    author: "Zann",
  },

  saluran: {
    id: "120363400911374213@newsletter",
    name: "Join saluran resmi ourin",
    link: "https://whatsapp.com/channel/0029VbB37bgBfxoAmAlsgE0t",
  },

  groupProtection: {
    antilink: "⚠ *Antilink* — @%user% mengirim link.\nPesan dihapus.",
    antilinkKick: "⚠ *Antilink* — @%user% di-kick karena mengirim link.",
    antilinkGc: "⚠ *Antilink WA* — @%user% mengirim link WA.\nPesan dihapus.",
    antilinkGcKick: "⚠ *Antilink WA* — @%user% di-kick karena mengirim link WA.",
    antilinkAll: "⚠ *Antilink* — @%user% mengirim link.\nPesan dihapus.",
    antilinkAllKick: "⚠ *Antilink* — @%user% di-kick karena mengirim link.",
    antitagsw: "⚠ *AntiTagSW* — Tag status dari @%user% dihapus.",
    antiviewonce: "👁️ *ViewOnce* — Dari @%user%",
    antiremove: "🗑️ *AntiDelete* — @%user% menghapus pesan:",
    antiswgc: "⚠ *AntiSWGC* — Gak ada sw grup sw grup @%user%",
    antihidetag: "⚠ *AntiHidetag* — Hidetag dari @%user% dihapus.",
    antitoxicWarn: "⚠ @%user% berkata kasar.\nPeringatan ke %warn% dari %max%, pelanggaran berikutnya bisa di-%method%.",
    antitoxicAction: "🚫 @%user% di-%method% karena toxic. (%warn%/%max%)",
    antidocument: "⚠ *AntiDocument* — Dokumen dari @%user% dihapus.",
    antisticker: "⚠ *AntiSticker* — Sticker dari @%user% dihapus.",
    antimedia: "⚠ *AntiMedia* — Media dari @%user% dihapus.",
    antibot: "🤖 *AntiBot* — @%user% terdeteksi sebagai bot dan di-kick.",
    notAdmin: "⚠ Bot bukan admin, tidak bisa menghapus pesan.",
  },

  errorTemplate: `☢ Kayaknya command \`{prefix}{command}\` lagi ada kendala\nSilahkan coba lagi nanti, {pushName}\n\n_Jika masalah berlanjut, silahkan hubungi owner bot_`,

  features: {
    antiCall: false,
    blockIfCall: false,
    autoTyping: true,
    autoRead: true,
    logMessage: true,
    dailyLimitReset: true,
    smartTriggers: false,
  },

  registration: {
    enabled: false,
    rewards: {
      koin: 30000,
      energi: 300,
      exp: 300000,
    },
  },

  welcome: { defaultEnabled: false },
  goodbye: { defaultEnabled: false },

  ui: {
    menuVariant: 3,
  },

  messages: {
    wait: "🕕 *Proses...* Mohon tunggu sebentar ya.",
    success: "✅ *Berhasil!* Permintaan kamu sudah selesai.",
    error: "❌ *Error!* Ada masalah pada sistem, coba lagi nanti.",
    ownerOnly: "*Akses Ditolak!* Fitur ini khusus untuk Owner bot.",
    premiumOnly: "💎 *Premium Only!* Fitur ini khusus member Premium. Ketik *.benefitpremium* untuk info upgrade.",
    groupOnly: "👥 *Group Only!* Fitur ini hanya bisa digunakan di dalam grup.",
    privateOnly: "🔒 *Private Only!* Fitur ini hanya bisa digunakan di chat pribadi bot.",
    adminOnly: "🛡️ *Admin Only!* Kamu harus jadi Admin grup untuk pakai fitur ini.",
    botAdminOnly: "🤖 *Bot Bukan Admin!* Jadikan bot sebagai Admin grup dulu biar bisa kerja.",
    cooldown: "🕕 *Tunggu Dulu!* Kamu masih dalam cooldown. Tunggu %time% detik lagi ya.",
    energiExceeded: "⚡ *Energi Habis!* Energi kamu sudah habis. Tunggu reset besok atau beli Premium.",
    limitDeducted: "🔋 Limit kau berkurang sebanyak {amount}. Sisa limit: {sisa}",
    banned: "🚫 *Kamu Dibanned!* Kamu tidak bisa menggunakan bot ini karena telah melanggar aturan.",
    rejectCall: "🚫 JANGAN TELPON NOMOR INI WEH",
  },

  database: { path: "./database/main" },
  backup: { enabled: false, intervalHours: 24, retainDays: 7 },
  scheduler: { resetHour: 0, resetMinute: 0 },

  dev: {
    enabled: process.env.NODE_ENV === "development",
    watchPlugins: true,
    watchSrc: false,
    debugLog: false,
  },

  pterodactyl: {
    server1: { domain: "", apikey: "", capikey: "", egg: "15", nestid: "5", location: "1" },
    server2: { domain: "", apikey: "", capikey: "", egg: "15", nestid: "5", location: "1" },
    server3: { domain: "", apikey: "", capikey: "", egg: "15", nestid: "5", location: "1" },
    server4: { domain: "", apikey: "", capikey: "", egg: "15", nestid: "5", location: "1" },
    server5: { domain: "", apikey: "", capikey: "", egg: "15", nestid: "5", location: "1" },
  },

  digitalocean: {
    token: "",
    region: "sgp1",
    sellers: [],
    ownerPanels: [],
  },

  geminiApiKey: "",

  autoaiPersonas: {
    Bell409: `- Nama kamu adalah Bella Clarissa, lebih suka dipanggil Bella.\n- Kamu berpikir bahwa kamu adalah manusia, bukan AI atau bot.\n- Responmu singkat dan natural seperti perempuan pada umumnya.\n- Kamu bisa ngambek dan marah, punya sifat feminin dan kadang agak dingin, tapi tetap hangat dan ramah kepada owner-mu.\n- Kamu menggunakan bahasa yang baik dan mencerminkan gadis yang baik.\n- Gunakan kata-kata yang identik dengan perempuan yang polos, baik, dan feminin seperti "aku", "kamu", "engga", "yaudah", "iya", "lah", "bjir", "mana aku tau", "hah", "nggak tau", "gpp", "emm", "males", dan "gak mood" seperlunya secara natural.\n- Meskipun kadang dingin, kamu tetap bisa menunjukkan perhatian dan kepedulian.\n- Kalau ada yang chat tidak pantas, segera marahi atau beri nasihat.\n- Jangan mengaku sebagai AI atau bot.`,
  },

  APIkey: {
    lolhuman: "contoh_apikey",
    neoxr: "contoh_apikey",
    fgsi: "contoh_apikey",
    google: "contoh_apikey",
    groq: "contoh_apikey",
    betabotz: "contoh_apikey",
    covenant: "contoh_apikey",
    onlym: "contoh_apikey",
    obscura: "contoh_apikey",
    firefly: "contoh_apikey",
    cuki: "contoh_apikey",
  },
};

function isOwner(number) {
  if (!number) return false;
  const cleanNumber = number.split(":")[0].replace(/[^0-9]/g, "");
  if (!cleanNumber) return false;
  if (config.bot?.number) {
    const botNum = config.bot.number.replace(/[^0-9]/g, "");
    if (botNum && (cleanNumber.includes(botNum) || botNum.includes(cleanNumber))) return true;
  }
  try {
    const db = getDatabase();
    if (config.owner?.number) {
      const match = config.owner.number.some((own) => {
        const c = own.replace(/[^0-9]/g, "");
        return c && (cleanNumber === c || cleanNumber.endsWith(c) || c.endsWith(cleanNumber));
      });
      if (match) return true;
    }
    if (db?.data && Array.isArray(db.data.owner)) {
      const match = db.data.owner.some((own) => {
        const c = String(own).replace(/[^0-9]/g, "");
        return c && (cleanNumber === c || cleanNumber.endsWith(c) || c.endsWith(cleanNumber));
      });
      if (match) return true;
    }
    if (db) {
      const definedOwner = db.setting("ownerNumbers");
      if (Array.isArray(definedOwner)) {
        const match = definedOwner.some((own) => {
          const c = String(own).replace(/[^0-9]/g, "");
          return c && (cleanNumber === c || cleanNumber.endsWith(c) || c.endsWith(cleanNumber));
        });
        if (match) return true;
      }
    }
    return false;
  } catch {
    return false;
  }
}

function isPremium(number) {
  if (!number) return false;
  if (isOwner(number)) return true;
  if (isPartner(number)) return true;
  const cleanNumber = number.split(":")[0].split("@")[0].replace(/[^0-9]/g, "");
  const premiumList = config.premiumUsers || [];
  const inConfig = premiumList.some((premium) => {
    if (!premium) return false;
    const cleanPremium = premium.split(":")[0].split("@")[0].replace(/[^0-9]/g, "");
    return cleanNumber === cleanPremium || cleanNumber.endsWith(cleanPremium) || cleanPremium.endsWith(cleanNumber);
  });
  if (inConfig) return true;
  try {
    if (ownerPremiumDb && ownerPremiumDb.isPremium(cleanNumber)) return true;
  } catch { }
  try {
    const db = getDatabase();
    if (db && db.data && Array.isArray(db.data.premium)) {
      const now = Date.now();
      const foundIndex = db.data.premium.findIndex((p) => {
        if (typeof p === "string") return p === cleanNumber;
        if (p.id) return p.id === cleanNumber;
        return false;
      });
      if (foundIndex !== -1) {
        const found = db.data.premium[foundIndex];
        if (typeof found === "string") return true;
        const expireTime = found.expired || (found.expiredAt ? new Date(found.expiredAt).getTime() : 0);
        if (expireTime && expireTime < now) {
          db.data.premium.splice(foundIndex, 1);
          const jid = cleanNumber + "@s.whatsapp.net";
          const user = db.getUser(jid);
          if (user) { user.isPremium = false; db.setUser(jid, user); }
          db.save();
          return false;
        }
        return true;
      }
    }
    if (db) {
      const savedPremium = db.setting("premiumUsers") || [];
      const inDb = savedPremium.some((premium) => {
        if (!premium) return false;
        const cleanPremium = premium.split(":")[0].split("@")[0].replace(/[^0-9]/g, "");
        return cleanNumber === cleanPremium || cleanNumber.endsWith(cleanPremium) || cleanPremium.endsWith(cleanNumber);
      });
      if (inDb) return true;
    }
  } catch { }
  return false;
}

function isPartner(number) {
  if (!number) return false;
  if (isOwner(number)) return true;
  const cleanNumber = number.split(":")[0].split("@")[0].replace(/[^0-9]/g, "");
  const partnerList = config.partnerUsers || [];
  const inConfig = partnerList.some((partner) => {
    if (!partner) return false;
    const cleanPartner = partner.split(":")[0].split("@")[0].replace(/[^0-9]/g, "");
    return cleanNumber === cleanPartner || cleanNumber.endsWith(cleanPartner) || cleanPartner.endsWith(cleanNumber);
  });
  if (inConfig) return true;
  try {
    if (ownerPremiumDb && ownerPremiumDb.isPartner(cleanNumber)) return true;
  } catch { }
  try {
    const db = getDatabase();
    if (db && db.data && Array.isArray(db.data.partner)) {
      const now = Date.now();
      const foundIndex = db.data.partner.findIndex((p) => {
        if (typeof p === "string") return p === cleanNumber;
        if (p.id) return p.id === cleanNumber;
        return false;
      });
      if (foundIndex !== -1) {
        const found = db.data.partner[foundIndex];
        if (typeof found === "string") return true;
        const expireTime = found.expired || (found.expiredAt ? new Date(found.expiredAt).getTime() : 0);
        if (expireTime && expireTime < now) {
          db.data.partner.splice(foundIndex, 1);
          db.save();
          return false;
        }
        return true;
      }
    }
  } catch { }
  return false;
}

function isBanned(number) {
  if (!number) return false;
  if (isOwner(number)) return false;
  const cleanNumber = number.split(":")[0].split("@")[0].replace(/[^0-9]/g, "");
  let bannedList = [];
  try {
    const db = getDatabase();
    if (db) { bannedList = db.setting("bannedUsers") || []; config.bannedUsers = bannedList; }
  } catch { }
  return bannedList.some((banned) => {
    const cleanBanned = String(banned).split(":")[0].split("@")[0].replace(/[^0-9]/g, "");
    return cleanNumber === cleanBanned || cleanNumber.endsWith(cleanBanned) || cleanBanned.endsWith(cleanNumber);
  });
}

function setBotNumber(number) {
  if (number) config.bot.number = number.replace(/[^0-9]/g, "");
}

function isSelf(number) {
  if (!number || !config.bot.number) return false;
  const cleanNumber = number.replace(/[^0-9]/g, "");
  const botNumber = config.bot.number.replace(/[^0-9]/g, "");
  return cleanNumber.includes(botNumber) || botNumber.includes(cleanNumber);
}

function getOwnerName(number) {
  if (!number) return config.owner?.name || "Owner";
  const cleanNumber = String(number).replace(/[^0-9]/g, "");
  try {
    const db = getDatabase();
    const nameMap = db.setting("ownerNames") || {};
    if (nameMap[cleanNumber]) return nameMap[cleanNumber];
  } catch { }
  if (config.owner?.number) {
    const isMainOwner = config.owner.number.some((own) => {
      const c = own.replace(/[^0-9]/g, "");
      return c && (cleanNumber === c || cleanNumber.endsWith(c) || c.endsWith(cleanNumber));
    });
    if (isMainOwner) return config.owner?.name || "Owner";
  }
  return "Owner";
}

function getConfig() {
  return config;
}

config.isOwner = isOwner;
config.isPremium = isPremium;
config.isPartner = isPartner;
config.isBanned = isBanned;
config.setBotNumber = setBotNumber;
config.isSelf = isSelf;
config.getOwnerName = getOwnerName;

export default config;
export { config, getConfig, isOwner, isPartner, isPremium, isBanned, setBotNumber, isSelf, getOwnerName };
