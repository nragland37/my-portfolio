import React from 'react';
import PropTypes from 'prop-types';
import {
  IconAppStore,
  IconBookmark,
  IconCircle,
  IconCodepen,
  IconCursor,
  IconExternal,
  IconFolder,
  IconFork,
  IconGitHub,
  IconInstagram,
  IconLeetCode,
  IconLight,
  IconLinkedin,
  IconLogo,
  IconPlayStore,
  IconStar,
  IconTwitter,
} from '@components/icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'AppStore':
      return <IconAppStore />;
    case 'Bookmark':
      return <IconBookmark />;
    case 'Circle':
      return <IconCircle />;
    case 'Codepen':
      return <IconCodepen />;
    case 'Cursor':
      return <IconCursor />;
    case 'External':
      return <IconExternal />;
    case 'Folder':
      return <IconFolder />;
    case 'Fork':
      return <IconFork />;
    case 'GitHub':
      return <IconGitHub />;
    case 'Instagram':
      return <IconInstagram />;
    case 'LeetCode':
      return <IconLeetCode />;
    case 'Light':
      return <IconLight />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Logo':
      return <IconLogo />;
    case 'PlayStore':
      return <IconPlayStore />;
    case 'Star':
      return <IconStar />;
    case 'Twitter':
      return <IconTwitter />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
