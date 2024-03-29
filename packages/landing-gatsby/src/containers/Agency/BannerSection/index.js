import React from 'react'; //, { Fragment }
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import FeatureBlock from 'common/components/FeatureBlock';
import Container from 'common/components/UI/Container';
//import Particles from '../../Agency/Particle';
import BannerWrapper, {
  DiscountLabel,
  FormTopper,
} from './bannerSection.style';
import Link from 'common/components/Link';

const BannerSection = ({
  row,
  col,
  title,
  btnStyle,
  description,
  discountText,
  discountAmount,
  outlineBtnStyle,
  inputBar,
}) => {
  const [nameInput, setNameInput] = React.useState('');
  const [emailInput, setEmailInput] = React.useState('');
  const [messageInput, setMessageInput] = React.useState('');

  {
    /*const ButtonGroup = () => (
    <Fragment>
      <Button title="LEARN MORE" {...btnStyle} />
      <Button
        title="WATCH WORKS"
        variant="textButton"
        icon={<i className="flaticon-next" />}
        {...outlineBtnStyle}
  />
    </Fragment>
  );*/
  }
  return (
    <BannerWrapper>
      {/*<Particles />*/}
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <DiscountLabel style={{ marginTop: '100px' }}>
              <Text content="Free Estimates!" {...discountAmount} />
              <Text
                content="All residential and commercial roofs!"
                {...discountText}
              />
            </DiscountLabel>
            <FeatureBlock
              title={
                <DiscountLabel>
                  <Heading
                    as={'h1'}
                    content="AKG Roofing and Specialty Services, INC"
                    {...title}
                  />
                </DiscountLabel>
              }
              description={
                <DiscountLabel>
                  <Text
                    content="Repairs, Replaces, and Maintains 
                   YOUR Life Investment!"
                    {...description}
                  />
                </DiscountLabel>
              }
              button={
                //<ButtonGroup />
                <Container>
                  <form
                    action="#"
                    data-netlify="true"
                    name="contact"
                    method="post"
                  >
                    <FormTopper>
                      <Text {...description} content="Contact Us at" />
                      <Link className="smallPadding" href="tel:+13055498081">
                        (305) 549-8081
                      </Link>
                      <Link
                        className="smallPadding"
                        href="mailto:coordinator@akgspecialtyinc.com"
                      >
                        coordinator@akgspecialtyinc.com
                      </Link>
                      <Text
                        {...description}
                        content="or Submit a message below"
                      />
                    </FormTopper>
                    <input type="hidden" name="form-name" value="contact" />
                    <input
                      inputType="text"
                      isMaterial={false}
                      placeholder="Name"
                      name="name"
                      aria-label="name"
                      onChange={(e) => setNameInput(e)}
                    />
                    <input
                      inputType="email"
                      isMaterial={false}
                      placeholder="Email Address"
                      name="email"
                      aria-label="email"
                      onChange={(e) => setEmailInput(e)}
                    />
                    <input
                      inputType="phone"
                      isMaterial={false}
                      placeholder="Phone Number"
                      name="phone"
                      aria-label="phone number"
                      onChange={(e) => setMessageInput(e)}
                    />
                    <input
                      inputType="address"
                      isMaterial={false}
                      placeholder="Address, City/Town, Zip"
                      name="message"
                      aria-label="address"
                      onChange={(e) => setMessageInput(e)}
                    />
                    <input
                      inputType="textarea"
                      isMaterial={false}
                      placeholder="Reason For Inquiry"
                      name="message"
                      aria-label="message"
                      onChange={(e) => setMessageInput(e)}
                    />
                    <Button
                      type="submit"
                      title="SEND MESSAGE"
                      {...btnStyle}
                      onClick={(e) => {
                        console.log(nameInput, emailInput, messageInput);
                      }}
                    />
                  </form>
                </Container>
              }
            />
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
  discountText: PropTypes.object,
  discountAmount: PropTypes.object,
  outlineBtnStyle: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '70%', '60%', '50%'],
  },
  title: {
    fontSize: ['26px', '34px', '42px', '55px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px'],
    lineHeight: '1.31',
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '2.1',
    mb: '0',
  },
  btnStyle: {
    minWidth: ['120px', '156px'],
    fontSize: '14px',
    fontWeight: '500',
    width: '100%',
  },
  outlineBtnStyle: {
    minWidth: ['130px', '156px'],
    fontSize: '14px',
    fontWeight: '500',
    color: '#0f2137',
    p: '5px 10px',
  },
  discountAmount: {
    fontSize: '14px',
    color: '#10AC84',
    mb: 0,
    as: 'span',
    mr: '0.4em',
  },
  discountText: {
    fontSize: '14px',
    color: '#0f2137',
    mb: 0,
    as: 'span',
  },
  inputBar: {
    minWidth: ['120px', '156px'],
    fontSize: '14px',
    fontWeight: '500',
    width: '100%',
  },
};

export default BannerSection;
