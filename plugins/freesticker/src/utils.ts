import { logger } from "@vendetta";
import { findByStoreName } from "@vendetta/metro";
import { storage } from "@vendetta/plugin";

const { getChannel } = findByStoreName("ChannelStore");

const baseStickerURL =
  "[⠀](https://media.discordapp.net/stickers/{stickerId}.{format})";

export function isStickerAvailable(sticker, channelId) {
  if (!sticker.guild_id) return true; // Not from a guild, default sticker.
  const channelGuildId = getChannel(channelId).guild_id;
  return sticker.guild_id == channelGuildId;
}

export function buildStickerURL(sticker) {
  const format = (sticker.format_type === 4) ? "gif" : "png";
  return baseStickerURL
    .replace("{stickerId}", sticker.id)
    .replace("{format}", format);
}

export async function convertToGIF(stickerUrl) {
  try {
    // Upload APNG and get its ID
    let form = new FormData();
    form.append("new-image-url", stickerUrl);
    let response = await fetch(`https://ezgif.com/apng-to-gif`, {
      method: "POST",
      body: form
    });
    const fileId = response.url.split("/").pop().replace(/\.html$/, '');

    // Convert uploaded APNG to GIF
    form = new FormData();
    form.append("file", fileId);
    response = await
      fetch(`https://ezgif.com/apng-to-gif/${fileId}.html?ajax=true`, {
      method: "POST",
      body: form
    });
    const content = await response.text();
    return `https:${content.split('<img src="')[1].split('" style=')[0]}`;
  } catch (e) {
    logger.error(`Failed to convert ${stickerUrl} to GIF: `, e);
    return null;
  }
}
