import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.module.css';

import umeaImage from './images/location_umea.jpg';
import stockholmImage from './images/location_stockholm.jpg';
import malmoImage from './images/location_malmo.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Umeå',
          umeaImage,
          '?address=Umeå%2C%20Västerbotten&bounds=63.97767591%2C20.47000108%2C63.64188897%2C20.04602559'
        )}
        {locationLink(
          'Stockholm',
          stockholmImage,
          '?address=Stockholm%2C%20Södermanland&bounds=59.4988979%2C18.26806001%2C59.16249845%2C17.90054401'
        )}
        {locationLink(
          'Malmö',
          malmoImage,
          '?address=Malmö%2C%20Skåne&bounds=55.66933501%2C13.08615451%2C55.51374506%2C12.93272021'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
