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


// O(1) lookup using object as a hash map for icon components
const iconMap = {
  appstore: IconAppStore,
  bookmark: IconBookmark,
  circle: IconCircle,
  codepen: IconCodepen,
  cursor: IconCursor,
  external: IconExternal,
  folder: IconFolder,
  fork: IconFork,
  github: IconGitHub,
  instagram: IconInstagram,
  leetcode: IconLeetCode,
  light: IconLight,
  linkedin: IconLinkedin,
  logo: IconLogo,
  playstore: IconPlayStore,
  star: IconStar,
  twitter: IconTwitter,
};

// Retrieves icon component by name, defaults to IconExternal if not found
const Icon = ({ name }) => {
  const IconComponent = iconMap[name.toLowerCase()] || IconExternal;
  return <IconComponent />;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
