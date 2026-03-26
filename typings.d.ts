declare module 'react-native-ico-social-icons-rounded' {
    import { ReactNode } from 'react';
    import { SvgProps } from 'react-native-svg';

    type AdditionalProps = {
      onError?: (error: Error) => void;
      onLoad?: () => void;
      fallback?: ReactNode;
    };

    type iconNames = 'stumbleupon-logo' |
      'ravelry-logo' |
      'reddit-social-logo-character' |
      'widbook-logo' |
      'classmates-logotype-symbol' |
      'cafemom-logo' |
      'tadaa-logotype' |
      'gaiaonline-logo' |
      'yupoo-logo' |
      'bitacoras-logo' |
      'ads-of-the-world-logo' |
      'flixster-logo' |
      'viadeo-logo' |
      'my-life-social-logo' |
      'symbaloo-logotype' |
      'my-life-logo' |
      'sina-logo' |
      'studivz-social-logo' |
      'etsy-logo' |
      'heello-logo' |
      'viddy-logotype' |
      'xing-social-logotype' |
      'divoblogger-logo' |
      'reverbnation-logo' |
      'inside-the-hotel-logotype' |
      'my-space-logo' |
      'zorpia-logo' |
      'panamo-logo' |
      'ashley-madison-social-logo' |
      'pictify-logo' |
      'socialcam-logo' |
      'linkedin-logo' |
      'jiepang-logotype' |
      'bola-a-logo' |
      'wayn-social-network-logo' |
      'twitpic-symbol' |
      'itsmy-logo' |
      'itsmy-logo-1' |
      'ushi-logo' |
      'spotbros-logo' |
      'hexun-logo' |
      'skyrock-logo' |
      'questionity-logotype' |
      'twitter-logo' |
      'sonico-social-logo' |
      '500px-logo' |
      'xanga-symbol' |
      'deviantart-logo' |
      '51-on-social-logo' |
      'doodle-ly-logotype' |
      'grooveshark-logotype' |
      'wikiloc-logo' |
      'tuenti-social-logo' |
      'baidu-logo' |
      'pinstagram-logo' |
      'path-social-logotype' |
      'last-fm-logo' |
      'tencent-weibo-logo' |
      'geni-social-logo' |
      'grou-ps-logo' |
      'flickr-logo' |
      'wikipedia-logo' |
      'gather-logo' |
      'blackplanet-logotype' |
      'taringa-logo' |
      'google-plus-social-logotype' |
      'orkut-logo' |
      'deezer-logo' |
      'bisquits-logo' |
      'tu-tv-logo' |
      'coderwall-logo' |
      'douban-logo' |
      'digg-logotype' |
      'spotify-logo' |
      'kaixin101-logotype-of-a-smiling-star' |
      'badoo-social-logotype' |
      'youtube-symbol' |
      'fotki-logo' |
      'vampirefreaks-logo' |
      'tianji-logotype-symbol' |
      'weheartit-logo' |
      'habbo-logotype-1' |
      'redalyc-logo' |
      'youtube-logotype' |
      'digg-logo' |
      'researchgate-logo' |
      'bettercodes-logo' |
      'weibo-social-logo' |
      'telly-social-symbol' |
      'podio-social-logo' |
      'sina-social-logo-of-an-eye' |
      'vine-logo-1' |
      'colourlovers-logo' |
      'flipkart-logo' |
      'wikipedia-logotype-of-earth-puzzle' |
      'fontli-logo' |
      'nk-social-symbol' |
      'slideshare-logo' |
      'xiami-social-symbol' |
      'rendezvous-logo' |
      'travbuddy-social-logotype' |
      'ads-scuttlepad-logo' |
      'caringbridge-logo' |
      'vk-social-logotype' |
      'scoop-it-logo' |
      'bloson-logo' |
      'designrelated-logotype' |
      'ravelry-logo-1' |
      'scoop-it-logo-1' |
      'myspace-logotype' |
      'cellufun-logo' |
      'p1-social-logotype' |
      'glipho-logo' |
      'xanga-logo' |
      'reddit-logo' |
      'buzznet-logo' |
      'my-heritage-logo' |
      'iqyi-logo' |
      'everloop-logo' |
      'tagged-logotype' |
      'hi5-social-logo' |
      'meetup-logo' |
      'twitter-social-logotype' |
      'delicious-logotype-of-squares' |
      'weeworld-logo' |
      'asmallworld-logo' |
      'tumblr-logo' |
      'qzone-logo' |
      'hubbub-logo' |
      'bananity-social-logo' |
      'glogster-logo' |
      'threadless-logotype' |
      'dailymotion-logo' |
      'literatura-nova-logo' |
      'vine-logo' |
      'hipstamatic-logo' |
      '56-social-logo' |
      'tripadvisor-logotype' |
      'metacafe-logo' |
      'meetme-logo' |
      'funny-or-die-logo' |
      'pinterest-social-logo' |
      'tribe-social-logotype' |
      'fotolog-social-network-logo' |
      'care2-logo' |
      'arte10-logo' |
      'blogger-logotype' |
      'twoo-logo' |
      'creattica-logo' |
      'foursquare-logo' |
      'mocospace-logo' |
      'mixi-logo' |
      'geonick-logo' |
      'meetic-logo' |
      'bitacoras-symbol' |
      'pinspire-logo-symbol' |
      'habbo-logotype' |
      'typophile-logo' |
      'instagram-social-network-logo-of-photo-camera' |
      'meneame-social-network-logo-of-an-elephant' |
      'friendster-logo' |
      'yoursphere-logo' |
      'club-dante-social-logotype' |
      'ex-fm-logo' |
      'ku6-logo' |
      'pengyu-logotype' |
      'tv-tag-logotype-symbol' |
      'citeulike-logo' |
      'behance-logo' |
      'qq-social-logo-of-a-penguin' |
      'bebo-social-logotype' |
      'vimeo-social-logo' |
      'soundcloud-logo' |
      'eyeem-logo' |
      'ning-social-logo' |
      'ryze-logo' |
      'sonico-logo' |
      'myfolio-logo' |
      'ryze-social-logo' |
      'scribd-logo' |
      'tagworld-logotype-symbol' |
      'fod-social-logo' |
      '500px-logo-1' |
      'cross-tv-logo' |
      'tudou-logo' |
      'odnoklassniki-logo' |
      'bandcamp-logo' |
      'desarrollo-web-or-web-development-logo' |
      'yelp-logo' |
      'renren-logo' |
      'intellectconnect-logo' |
      'wordpress-logo' |
      'meetyourfriends-logotype' |
      'pheed-logo' |
      'couchsurfing-logo' |
      'notasweb-logo' |
      'fanlala-logo' |
      'youku-logo' |
      'facebook-logo' |
      'blogbus-logo' |
      'dribbble-logo' |
      'kiwibox-logo' |
      'coroflot' |
      'jux-logo';

    type iconColors = ;

    type backgroundType = 'circle' | 'rect' | 'button';

    type colorsType = Record<iconColors, string>;

    type positionType = 'top' | 'bottom' | 'right' | 'left' |
      'top_right' | 'top_left' | 'bottom_right' | 'bottom_left';

    type backgroundTypeObj = {
      type?: backgroundType;
      color?: string;
      radius?: number;
      borderRadius?: number;
    };

    type badgeTypeObj = {
      value?: number | string;
      fontSize?: string;
      position?: positionType;
      color?: string;
      colors: colorsType;
      backgroundColor?: string;
      radius?: number;
    };

    interface IconProps {
      name: iconNames;
      width?: number;
      height?: number;
      color?: string;
      colors?: colorsType;
      stroke?: number;
      background?: backgroundType | backgroundTypeObj;
      badge?: number | string | badgeTypeObj;
    }

    const Icon: (props: IconProps & SvgProps & AdditionalProps) => ReactNode;

    export { iconNames };
    export default Icon;
}
