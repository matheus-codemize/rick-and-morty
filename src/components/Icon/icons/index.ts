import Close from './close.svg';
import FilterOff from './filter-off.svg';
import Filter from './filter.svg';
import HeartOutline from './heart-outline.svg';
import Heart from './heart.svg';
import Left from './left.svg';
import Right from './right.svg';

const icons = {
  close: Close,
  left: Left,
  heart: Heart,
  'heart-outline': HeartOutline,
  filter: Filter,
  'filter-off': FilterOff,
  right: Right,
};

export type IconName = keyof typeof icons;

export default icons;
