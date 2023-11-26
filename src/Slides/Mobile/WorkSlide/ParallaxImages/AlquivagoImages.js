import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import alquivagoImg from '../../../../Assets/Images/Alquivago/Alquivago.gif';

const Mobile = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 22}%) scale(0.65)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -390vh;
transform-origin: left center;
left:2vw;
/* border: 1px dashed red; */
height: 100vh; 
`;

const PC = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 6}%) scale(0.65)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -180vh;
transform-origin: right center;
right:2vw;
/* border: 1px dashed red; */
height: 100vh; 
`;

class AlquivagoImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
    scrollPercent -= scrollOffsetInPercent;

    return (
      <React.Fragment>
        <PC src={alquivagoImg} scroll={scrollPercent} alt="alquivagoPC" />
        <Mobile src={alquivagoImg} scroll={scrollPercent} alt="alquivagoPC" />
      </React.Fragment>
    );
  }
}

AlquivagoImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default AlquivagoImages;
