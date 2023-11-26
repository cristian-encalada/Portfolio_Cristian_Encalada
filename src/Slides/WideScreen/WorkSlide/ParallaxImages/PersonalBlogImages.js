import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import personalBlogImg from '../../../../Assets/Images/PersonalBlog/PersonalBlog.gif';


const Mobile = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 12}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-60vh;
left: 0vw;
/* border: 1px dashed red; */
height: 60vh;
`;

const PC = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.94)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -20vh;
right:0vw;
/* border: 1px dashed red; */
height: 60vh; 
filter: blur(0.6px);
`;

class PersonalBlogImages extends Component {
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
        <PC src={personalBlogImg} scroll={scrollPercent} alt="personalBlogPC" />
        <Mobile src={personalBlogImg} scroll={scrollPercent} alt="personalBlogMobile" />
      </React.Fragment>
    );
  }
}

PersonalBlogImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default PersonalBlogImages;
