<?php

/*
 * This file is part of walsgit/custom-headers.
 *
 * Copyright (c) 2021 Marco Colia. https://flarum.it
 * Copyright (c) 2025 Wa!id.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Walsgit\CustomHeaders;

use Flarum\Extend;
use Flarum\Api\Event\Serializing;


return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),
    new Extend\Locales(__DIR__.'/resources/locale'),
    (new Extend\Settings())
        ->serializeToForum('walsgit-custom-headers.headerBackgroundImage', 'walsgit-custom-headers.headerBackgroundImage')
        ->serializeToForum('headerTitle', 'walsgit-custom-headers.headerTitle')
        ->serializeToForum('headerTagline', 'walsgit-custom-headers.headerTagline')
        ->serializeToForum('twitterIcon', 'walsgit-custom-headers.twitterIcon')
        ->serializeToForum('facebookIcon', 'walsgit-custom-headers.facebookIcon')
        ->serializeToForum('youtubeIcon', 'walsgit-custom-headers.youtubeIcon')
        ->serializeToForum('githubIcon', 'walsgit-custom-headers.githubIcon')
        ->serializeToForum('buttonText', 'walsgit-custom-headers.buttonText')
        ->serializeToForum('button2Text', 'walsgit-custom-headers.button2Text')
        ->serializeToForum('LinkButtonOne', 'walsgit-custom-headers.LinkButtonOne')
        ->serializeToForum('LinkButtonTwo', 'walsgit-custom-headers.LinkButtonTwo')
        ->serializeToForum('showOnRoutes', 'walsgit-custom-headers.showOnRoutes'),
];
