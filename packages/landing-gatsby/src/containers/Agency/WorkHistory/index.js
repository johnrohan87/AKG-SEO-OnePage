import React from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import Box from 'common/components/Box';
import Card from 'common/components/Card';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
//import Image from 'common/components/Image';
//import Button from 'common/components/Button';
import FeatureBlock from 'common/components/FeatureBlock';
import Container from 'common/components/UI/Container';
import WorkHistoryWrapper, { CounterUpArea } from './workHistory.style';
//import YoungJoe from 'common/assets/image/agency/young_joe_hernandez.jpg';

const WorkHistory = ({
  row,
  col,
  cardStyle,
  title,
  description,
  btnStyle,
  cardImageStyle,
}) => {
  return (
    <WorkHistoryWrapper id="workHistorySection">
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <FeatureBlock
              title={
                <Heading
                  content="Working With Knowledge, Passion, Heart & Soul "
                  {...title}
                />
              }
              description={
                <Text
                  content="We have worked with some leading agencies around the globe and their appreciation is our main strength ."
                  {...description}
                />
              }
            />
            {/*button={<Button title="WORK HISTORY" {...btnStyle} />}*/}
          </Box>
          <Box className="col" {...col}>
            <CounterUpArea>
              <Card className="card" {...cardStyle}>
                <h3>
                  <CountUp start={0} end={75000} duration={5} />+
                </h3>
                <Text content="Roofs Repaired by AKG" />
              </Card>
              <Card className="card" {...cardStyle}>
                <h3>
                  <CountUp start={0} end={100000} duration={5} />+
                </h3>
                <Text content="Happy Customers" />
              </Card>
              <Card className="card" {...cardStyle}>
                <h3>
                  <CountUp start={0} end={39} duration={5} />+
                </h3>
                <Text content="Years of Experience" />
              </Card>
              <Card className="card" {...cardStyle}>
                <h3>
                  <Text content="Servicing FL since 1977" />
                </h3>

                {/*<Image src={YoungJoe} alt="Joe Hernandez" />
                <a href="#1">View work history</a>*/}
              </Card>
            </CounterUpArea>
          </Box>
        </Box>
      </Container>
    </WorkHistoryWrapper>
  );
};

// WorkHistory style props
WorkHistory.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  cardStyle: PropTypes.object,
  cardImageStyle: PropTypes.object,
};

// WorkHistory default style
WorkHistory.defaultProps = {
  // WorkHistory section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // WorkHistory section col default style
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, 1, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: 'center',
  },
  // Card default style
  cardStyle: {
    p: ['20px 20px', '30px 20px', '30px 20px', '53px 40px'],
    borderRadius: '10px',
    boxShadow: '0px 8px 20px 0px rgba(16, 66, 97, 0.07)',
  },
  cardImageStyle: {
    boxShadow: '0px 8px 20px 0px rgba(16, 66, 97, 0.07)',
  },
  // WorkHistory section title default style
  title: {
    fontSize: ['26px', '26px', '30px', '40px'],
    lineHeight: '1.5',
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '20px',
  },
  // WorkHistory section description default style
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
  },
  // Button default style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export default WorkHistory;
