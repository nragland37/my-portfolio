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

const DEFAULT_SIZE = {
  width: '24px', // Default width
  height: '24px', // Default height
};

const Icon = ({ name, width, height }) => {
  const IconComponent = iconMap[name.toLowerCase()] || IconExternal;
  return (
    <IconComponent
      width={width || DEFAULT_SIZE.width}
      height={height || DEFAULT_SIZE.height}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Icon;
