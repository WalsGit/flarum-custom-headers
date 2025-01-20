/*
 * This file is part of walsgit/custom-headers.
 *
 * Copyright (c) 2021 Marco Colia. https://flarum.it
 * Copyright (c) 2025 Wa!id.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/app';
import Settings from './components/Settings';

app.initializers.add('walsgit/custom-headers', () => {
  app.extensionData
    .for('walsgit-custom-headers')
    .registerPage(Settings)
    .registerSetting({
      setting: 'walsgit-custom-headers.headerBackgroundImage',
      name: 'walsgit-custom-headers.headerBackgroundImage',
      type: 'url',
      label: app.translator.trans('custom-headers.admin.headerBackgroundImage'),
      help: app.translator.trans('custom-headers.admin.headerBackgroundImage-help'),
    })
    .registerSetting({
      setting: 'walsgit-custom-headers.headerTitle',
      name: 'headerTitle',
      type: 'text',
      label: app.translator.trans('custom-headers.admin.headerTitle'),
      help: app.translator.trans('custom-headers.admin.headerTitle-help'),
    })
    .registerSetting({
      setting: 'walsgit-custom-headers.headerTagline',
      name: 'headerTagline',
      type: 'text',
      label: app.translator.trans('custom-headers.admin.headerTagline'),
      help: app.translator.trans('custom-headers.admin.headerTagline-help'),
    })
    .registerSetting({
      setting: 'walsgit-custom-headers.twitterIcon',
      name: 'twitterIcon',
      type: 'text',
      label: app.translator.trans('custom-headers.admin.twitterIcon'),
      help: app.translator.trans('custom-headers.admin.twitterIcon-help'),
    })
    .registerSetting({
      setting: 'walsgit-custom-headers.facebookIcon',
      name: 'facebookIcon',
      type: 'text',
      label: app.translator.trans('custom-headers.admin.facebookIcon'),
      help: app.translator.trans('custom-headers.admin.facebookIcon-help'),
    })
    .registerSetting({
      setting: 'walsgit-custom-headers.youtubeIcon',
      name: 'youtubeIcon',
      type: 'text',
      label: app.translator.trans('custom-headers.admin.youtubeIcon'),
      help: app.translator.trans('custom-headers.admin.youtubeIcon-help'),
    })
    .registerSetting({
      setting: 'walsgit-custom-headers.githubIcon',
      name: 'githubIcon',
      type: 'text',
      label: app.translator.trans('custom-headers.admin.githubIcon'),
      help: app.translator.trans('custom-headers.admin.githubIcon-help'),
    })
    .registerSetting({
      setting: 'walsgit-custom-headers.buttonText',
      name: 'buttonText',
      type: 'text',
      label: app.translator.trans('custom-headers.admin.button-text'),
      help: app.translator.trans('custom-headers.admin.button-text-help'),
    })
    .registerSetting({
      setting: 'walsgit-custom-headers.LinkButtonOne',
      name: 'LinkButtonOne',
      type: 'URL',
      label: app.translator.trans('custom-headers.admin.link-button-one'),
      help: app.translator.trans('custom-headers.admin.link-button-one-help'),
    })
    .registerSetting({
      setting: 'walsgit-custom-headers.button2Text',
      name: 'button2Text',
      type: 'text',
      label: app.translator.trans('custom-headers.admin.button2-text'),
      help: app.translator.trans('custom-headers.admin.button2-text-help'),
    })
    .registerSetting({
      setting: 'walsgit-custom-headers.LinkButtonTwo',
      name: 'LinkButtonTwo',
      type: 'URL',
      label: app.translator.trans('custom-headers.admin.link-button-two'),
      help: app.translator.trans('custom-headers.admin.link-button-two-help'),
    })
    .registerSetting({
      setting: 'walsgit-custom-headers.showOnRoutes',
      name: 'showOnRoutes',
      type: 'test',
      label: app.translator.trans('custom-headers.admin.show-on-routes'),
      help: app.translator.trans('custom-headers.admin.show-on-routes-help'),
    });
});
