import { ReactNative as RN } from "@vendetta/metro/common";
import { Forms } from "@vendetta/ui/components";
import { useProxy } from "@vendetta/storage";
import { getAssetIDByName } from "@vendetta/ui/assets"
import { storage } from "@vendetta/plugin";

const { FormSection, FormRadioRow, FormSwitchRow } = Forms;

export default () => {
    useProxy(storage);

    return (
        <RN.ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 38 }}>
            <FormSection title="Settings" titleStyleType="no_border">
                <FormSwitchRow
                    label="Hide Emoji Link"
                    subLabel="Hides emoji link to be less distractive"
                    leading={<Forms.FormIcon source={getAssetIDByName("ic_link")} />}
                    value={storage.hyperlink}
                    onValueChange={ () => {storage.hyperlink = !storage.hyperlink;}}
                    note=""
                />
                <FormSwitchRow
                    label="Force Freemoji"
                    subLabel="Explicitly force Freemoji even if you have nitro (useful for testing)"
                    leading={<Forms.FormIcon source={getAssetIDByName("img_nitro_emojis")} />}
                    value={storage.forceMoji}
                    onValueChange={ () => {storage.forceMoji = !storage.forceMoji;}}
                    note=""
                />
            </FormSection>
        </RN.ScrollView>
    )
}
