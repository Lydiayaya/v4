import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Featured, Projects, Contact } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;
export interface propTypes {
  location: object;
}

const IndexPage = ({ location }: propTypes) => (
  //主界面
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Hero />
      <About />
      <Jobs />
      <Featured />
      <Projects />
      <Contact />
    </StyledMainContainer>
  </Layout>
);
//类型检查
// IndexPage.propTypes = {
//   location: PropTypes.object.isRequired,
// };

export default IndexPage;
