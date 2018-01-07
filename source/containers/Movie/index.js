// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cn from 'bem-classname-builder';
import Swipe from 'react-swipeable';

/* Components */
import TextBlock from '../../components/TextBlock/index';
import TextHeader from '../../components/TextHeader/index';
import Image from '../../components/Image/index';
import Rating from '../../components/Rating/index';
import Button from '../../components/Button/index';

/* Constants */
import { MOVIE_NO, MOVIE_YES } from '../../constants/acceptTypes';

import style from './style.scss';
import { BUTTON_DECLINE } from '../../constants/buttonTypes';
import { LARGE_HEADER } from '../../constants/headerTypes';

const bem = new Cn(style, 'Movie');

export default class Movie extends Component {
  constructor() {
    super();

    this.state = {
      mainClassName: bem.get()
    };

    // Bindings
    this.sendMovie = this.sendMovie.bind(this);
  }

  static get propTypes() {
    return {
      cover: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
      title: PropTypes.string,
      description: PropTypes.string,
      rating: PropTypes.string
    }
  }

  static get defaultProps() {
    return {
      cover: false
    }
  }

  sendMovie(type, dir = true) {
    let m;

    switch (type) {
      case MOVIE_YES: { m = 'Accepted'; break; }
      case MOVIE_NO: {
        if (dir) {
          m = 'Rejected'; break;
        } else {
          m = 'RejectedLeft'; break;
        }
      }
    }

    this.setState({
      mainClassName: `${bem.get()} ${bem.get({ m })}`
    }, () => {
      setTimeout(this.props.onRemove, 500);
    });
  }

  /**
   * Due to lack of posters in the API, I had to mock the resources. And yes, I just kinda return what I found through
   * Google.
   *
   * @param {string} movie - name of the movie
   * @returns {string} url of the poster
   */
  getCover(movie) {
    switch (movie) {
      case 'Castle in the Sky': { return 'https://www.awn.com/sites/default/files/image/featured/1035364-giveaway-win-free-tickets-see-studio-ghiblis-castle-sky.jpg'; }
      case 'Grave of the Fireflies': { return 'https://1.bp.blogspot.com/-ubdH4DNrQkc/WIED1g-7oRI/AAAAAAAABHc/kv5O9DVAvC0ty8OhJnyXms-SxMqo9iTxgCLcB/s1600/Grave-of-the-Fireflies.jpg'; }
      case 'My Neighbor Totoro': { return 'https://www.animenewsnetwork.com/thumbnails/hotlink-full/encyc/A534-7.jpg'; }
      case 'Kiki\'s Delivery Service': { return 'https://quinlan.it/upload/images/2004/10/kiki-consegne-a-domicilio-1989-hayao-miyazaki-09.jpg'; }
      case 'Only Yesterday': { return 'http://cdn1.cliver.tv/img/peliculas/portadas/2298_5372d.jpg'; }
      case 'Porco Rosso': { return 'http://2.bp.blogspot.com/-Res_3BW0C6s/VAoOke4qaTI/AAAAAAAAAfQ/fFkB3Tkj0Z8/s1600/206767.jpg'; }
      case 'Pom Poko': { return 'https://i.pinimg.com/originals/e8/84/17/e88417dbfd9880d60556ae8d1173d3b3.png'; }
      case 'Whisper of the Heart': { return 'https://images6.alphacoders.com/831/831830.jpg'; }
      case 'Princess Mononoke': { return 'https://fesapusewebsite.blob.core.windows.net/fathom/pm-7-2120ad0f35f64224093b111302910263.jpeg'; }
      case 'My Neighbors the Yamadas': { return 'https://cineffect.files.wordpress.com/2014/02/yamadas-1.jpg'; }
      case 'Spirited Away': { return 'https://wenwenb.files.wordpress.com/2016/06/e7a59ee99ab1e5b091e5a5b3.jpg'; }
      case 'The Cat Returns': { return 'http://blog.bamilo.com/wp-content/uploads/2017/08/cat-return-anime.jpg'; }
      case 'Howl\'s Moving Castle': { return 'http://film110.pbworks.com/f/1260336766/howlscastle.jpg'; }
      case 'Tales from Earthsea': { return 'http://gioggg.ge/uploads/posts/2014-05/1455351921_tales-from-earthsea-background.jpg'; }
      case 'Ponyo': { return 'https://d21ehp1kf1k9m9.cloudfront.net/wp-content/uploads/2017/02/08213903/ponyo-still.jpg'; }
      case 'Arrietty': { return 'http://kpischannel.com/wp-content/uploads/2017/07/maxresdefault-20160627224135.jpg'; }
      case 'From Up on Poppy Hill': { return 'https://projectedrealities.files.wordpress.com/2014/05/poppyhill.jpg'; }
      case 'The Wind Rises': { return 'http://www.bfi.org.uk/sites/bfi.org.uk/files/styles/full/public/image/wind-rises-the-2013-013-jiro-and-queue-at-water-tap-after-quake.jpg?itok=IMy7CKoH'; }
      case 'The Tale of the Princess Kaguya': { return 'http://www.9emeart.fr/uploads/images_files/Alfro/Juillet%202014/conte_de_la_princesse_6_1600x1200_.jpg'; }
      case 'When Marnie Was There': { return 'https://madisonmovie.files.wordpress.com/2015/09/whenmarnie.jpg'; }
      default: { return 'https://33hpwq10j9luq8gl43e62q4e-wpengine.netdna-ssl.com/wp-content/uploads/2015/06/studio_ghibli_logo.jpg'; }
    }
  }

  render() {
    return <Swipe nodeName="article" onSwipedLeft={() => { this.sendMovie(MOVIE_NO, false)} } onSwipedRight={() => { this.sendMovie(MOVIE_NO)} } className={this.state.mainClassName}>
      <Image src={this.getCover(this.props.title)} alt={this.props.title} title={this.props.title} className={bem.get({ e: 'Image' })} />
      <div className={bem.get({ e: 'Inner' })}>
        <TextHeader size={LARGE_HEADER} input={this.props.title} additionalClassNames={bem.get({ e: 'Header' })} />
        <TextBlock input={this.props.description} truncate={150} />
        <div className={bem.get({ e: 'Rating' })}>
          <Rating number={Number(this.props.rating)} />
        </div>
        <div className={bem.get({ e: 'Buttons' })}>
          <Button onClick={() => { this.sendMovie(MOVIE_NO)} } type={BUTTON_DECLINE}>Nah</Button>
          <Button onClick={() => { this.sendMovie(MOVIE_YES)} }>Wanna watch!</Button>
        </div>
      </div>
    </Swipe>;
  }
}
