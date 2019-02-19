import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

/** Renders the Card component. */
class Card extends Component {
  /** @inheritdoc */
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.openCard = this.openCard.bind(this);
  }

  /** Toggles the card open/close
   * @returns {undefined}
   */
  openCard() {
    this.setState({open: !this.state.open});
  }

  /** @inheritdoc */
  render() {
    const {
      title,
      subtitle,
      color,
      items,
      emoji,
      imgSrc,
      expandableContent,
    } = this.props;

    return (
      <div className="card">
        {imgSrc && <img src={imgSrc} alt={title || ''} />}
        <div className="card-inner">
          {title && (
            <h2 className={color}>
              {title}
              {emoji && (
                <span
                  className="margin single left"
                  role="img"
                  aria-label={title}
                >
                  {emoji}
                </span>
              )}
            </h2>
          )}
          {subtitle && <div className="description">{subtitle}</div>}
          {items && (
            <ul className="list">
              {items.map((item, index) => (
                <li key={index}>
                  <span className="list-title block">
                    {item.link ? (
                      <a href={item.link} rel="noopener">
                        {item.title}
                      </a>
                    ) : (
                      item.title
                    )}
                  </span>
                  <span className="list-description">{item.description}</span>
                </li>
              ))}
            </ul>
          )}

          {expandableContent && (
            <Fragment>
              <div class="card-action">
                <div class="action-list text-center">
                  <button className="expand-button" onClick={this.openCard}>
                    {this.state.open ? 'View Less' : 'View More'}
                  </button>
                </div>
              </div>

              <div
                className={`card-expandable collapse ${
                  this.state.open ? 'open' : ''
                }`}
              >
                <div className="card-expandable-inner">{expandableContent}</div>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  color: PropTypes.string,
  items: PropTypes.array,
  emoji: PropTypes.string,
  imgSrc: PropTypes.string,
  expandableContent: PropTypes.object,
};

Card.defaultProps = {
  color: 'yellow',
};

export default Card;
