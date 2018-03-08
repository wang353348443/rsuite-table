import _ from 'lodash';
import classNames from 'classnames';

export const globalKey = 'rs-';
export const defaultClassPrefix = name => `${globalKey}${name}`;
export const prefix = _.curry((pre: string, className: string | Array<string>) => {
  if (!pre || !className) {
    return '';
  }

  if (_.isArray(className)) {
    return classNames(className.filter(name => !!name).map(name => `${pre}-${name}`));
  }

  return `${pre}-${className}`;
});
