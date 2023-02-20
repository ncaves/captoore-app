import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'repositories',
    title: 'Repositories',
    type: 'item',
    icon: 'feather:git-branch',
    url: '/academy',
  },
  {
    id: 'members',
    title: 'Members',
    type: 'item',
    icon: 'heroicons-outline:user',
    url: '/members',
  },
];

export default navigationConfig;
