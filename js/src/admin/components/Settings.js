import app from "flarum/admin/app";
import ExtensionPage from "flarum/admin/components/ExtensionPage";
import UploadImageButton from 'flarum/admin/components/UploadImageButton';
import icon from "flarum/common/helpers/icon";

export default class Settings extends ExtensionPage {
	content() {
		return (
			<div className="DiscussionCardsSettings">
				<div className="container">
					<div className="DiscussionCardsSettings--content">
						<div className="Section">
							<div className="DC-DefaultImageSettings">
								<h4>titre</h4>
								<p className="helpText">
									help
								</p>
								{m(UploadImageButton, {name: "walsgit_discussion_cards_default_image", class: "DC-UploadImageBtn"})}

                                {this.buildSettingComponent({
                                    setting: 'justoverclock-custom-header.useRemotImage',
                                    name: 'justoverclock-custom-header.useRemoteImage',
                                    type: 'switch',
                                    label: app.translator.trans('custom-header.admin.useRemoteImage'),
                                    help: app.translator.trans('custom-header.admin.useRemoteImage-help'),
                                })}
                                {this.buildSettingComponent({
                                    setting: 'justoverclock-custom-header.headerBackgroundImage',
                                    name: 'justoverclock-custom-header.headerBackgroundImage',
                                    type: 'url',
                                    label: app.translator.trans('custom-header.admin.headerBackgroundImage'),
                                    help: app.translator.trans('custom-header.admin.headerBackgroundImage-help'),
                                })}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
