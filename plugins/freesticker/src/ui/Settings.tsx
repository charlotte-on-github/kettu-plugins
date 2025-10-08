import { findByName, findByProps } from "@vendetta/metro";
import { storage } from "@vendetta/plugin";
import { useProxy } from "@vendetta/storage";
import { General } from "@vendetta/ui/components";

const { Stack, TableRadioGroup, TableRadioRow, TableSwitchRow, TableRowGroup }
  = findByProps("TableRow", "TableRowGroup");
const { ScrollView } = General;
const HelpMessage = findByName("HelpMessage");

storage.convertApng ??= true;
storage.hyperlink ??= true;

export default function Settings() {
  useProxy(storage);

  return <ScrollView style={{ flex: 1 }}
    contentContainerStyle={{ paddingBottom: 38 }}>
    <Stack style={{ paddingVertical: 24, paddingHorizontal: 12 }} spacing={24}>
      <TableRowGroup title="General">
        <TableSwitchRow
          label="Hyperlink stickers"
          value={storage.hyperlink}
          onValueChange={v => storage.hyperlink = v} />
        <TableSwitchRow
          label="Ignore Nitro"
          subLabel="Force FreeStickers even when you have Nitro"
          value={storage.ignoreNitro}
          onValueChange={v => storage.ignoreNitro = v} />
      </TableRowGroup>
      <TableRowGroup title="APNG Stickers">
        <TableSwitchRow
          label="Convert APNG stickers to GIF"
          subLabel="This is needed for stickers to be animated (uses Ezgif)."
          value={storage.convertApng}
          onValueChange={v => storage.convertApng = v} />
        <TableSwitchRow
          label="Send static sticker if APNG conversion fails"
          value={storage.staticApngOnFail}
          onValueChange={v => storage.staticApngOnFail = v} />
        <TableSwitchRow
          label="Show warning dialog for APNG stickers"
          subLabel="This will only appear once"
          value={!storage.ackedApng}
          onValueChange={v => storage.ackedApng = !v} />
      </TableRowGroup>
    </Stack>
  </ScrollView>
}
