import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import {
  Radio,
  FormControlLabel,
  RadioGroup,
  TextField,
  Typography,
  Button,
} from '@material-ui/core';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { muiTheme } from 'common/Style/mui-theme';
import heroImage1 from 'images/hero-t1.jpg';
import heroImage2 from 'images/hero-t2.jpg';
import heroImage3 from 'images/hero-t3.jpg';
import {
  useCommonStyles,
  ExhibitorContentWrapper,
  HeroHeadingWrapper,
  StyledFormCard,
  FormHelpText,
  CarouselContentWrapper,
  CarouselHeading,
} from '../style';
import {
  useStyles,
  ContentWrapper,
  RadioButtonGroupWrapper,
  RadioLabelWrapper,
  TemplateFormWrapper,
} from './style';

function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      classes={{ root: classes.radioBtnRoot }}
      checkedIcon={<CheckBoxIcon />}
      disableRipple
      {...props}
    />
  );
}

function Template1() {
  const classes = useCommonStyles();
  return (
    <TemplateFormWrapper>
      <StyledFormCard>
        <Typography variant="body1" component="label">
          Hero section background Image
        </Typography>
        <TextField
          type="file"
          className={classes.textFileUploadStyle}
          variant="outlined"
        />
      </StyledFormCard>
      <StyledFormCard>
        <Typography variant="body1" component="label">
          Hero section heading
        </Typography>
        <TextField
          variant="outlined"
          className={classes.textFieldStyle}
          placeholder="Enter Hero section heading..."
        />
      </StyledFormCard>
      <StyledFormCard>
        <Typography variant="body1" component="label">
          Hero section description
        </Typography>
        <TextField
          variant="outlined"
          multiline
          rows="3"
          className={classes.textFieldStyle}
          placeholder="Enter Hero section description..."
        />
      </StyledFormCard>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        className={classes.actionBtn}
      >
        Submit
      </Button>
    </TemplateFormWrapper>
  );
}

function Template2() {
  const classes = useCommonStyles();
  return (
    <TemplateFormWrapper>
      <StyledFormCard>
        <Typography variant="body1" component="label">
          Hero section video link
        </Typography>
        <TextField
          variant="outlined"
          className={classes.textFieldStyle}
          placeholder="https://momento360.com/e/u/29c5330ec79048479c878633371728b8?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=100"
        />
      </StyledFormCard>

      <Button
        variant="contained"
        color="primary"
        disableElevation
        className={classes.actionBtn}
      >
        Submit
      </Button>
    </TemplateFormWrapper>
  );
}

function Template3() {
  const classes = useCommonStyles();
  const [carouselFields, setCarouselFields] = useState([{ value: null }]);
  function handleAddMoreCarousel() {
    const values = [...carouselFields];
    values.push({ value: null });
    setCarouselFields(values);
  }

  function handleRemoveMoreCarousel(i) {
    const values = [...carouselFields];
    values.splice(i, 1);
    setCarouselFields(values);
  }
  return (
    <TemplateFormWrapper>
      {carouselFields.map((items, idx) => {
        return (
          <CarouselContentWrapper>
            <CarouselHeading>
              Carousel {idx + 1}
              {idx > 0 && (
                <Button
                  variant="outlined"
                  color="primary"
                  disableElevation
                  onClick={() => handleRemoveMoreCarousel(idx)}
                >
                  Remove Carousel
                </Button>
              )}
            </CarouselHeading>
            <StyledFormCard>
              <Typography variant="body1" component="label">
                Hero section carousel Image
              </Typography>
              <TextField type="file" variant="outlined" />
            </StyledFormCard>
            <StyledFormCard>
              <Typography variant="body1" component="label">
                Hero section carousel Heading
              </Typography>
              <TextField
                variant="outlined"
                className={classes.textFieldStyle}
                placeholder="Enter Hero section heading..."
              />
            </StyledFormCard>
            <StyledFormCard>
              <Typography variant="body1" component="label">
                Hero banner description
              </Typography>
              <TextField
                variant="outlined"
                multiline
                rows="3"
                className={classes.textFieldStyle}
                placeholder="Enter Hero section description..."
              />
            </StyledFormCard>
          </CarouselContentWrapper>
        );
      })}

      <div>
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          className={classes.addMoreCarousel}
          onClick={() => handleAddMoreCarousel()}
        >
          Add More Carousel
        </Button>
      </div>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        className={classes.actionBtn}
      >
        Submit
      </Button>
    </TemplateFormWrapper>
  );
}

export default function ExhibitorHeroSection(props) {
  const [templateName, setTemplateName] = React.useState('template-1');

  const handleChange = (event) => {
    setTemplateName(event.target.value);
  };
  return (
    <ThemeProvider theme={muiTheme}>
      <ExhibitorContentWrapper>
        <HeroHeadingWrapper>{props.title}</HeroHeadingWrapper>
        <ContentWrapper>
          <FormHelpText> You can choose any one from below </FormHelpText>
          <RadioButtonGroupWrapper>
            <RadioGroup
              aria-label="Hero Section"
              name="heroSection"
              value={templateName}
              onChange={handleChange}
            >
              <FormControlLabel
                value="template-1"
                control={<StyledRadio />}
                label={
                  <RadioLabelWrapper>
                    <img src={heroImage1} alt="hero template 1" />
                    <span>Template 1</span>
                  </RadioLabelWrapper>
                }
              />
              <FormControlLabel
                value="template-2"
                control={<StyledRadio />}
                label={
                  <RadioLabelWrapper>
                    <img src={heroImage2} alt="hero template 2" />
                    <span>Video Template</span>
                  </RadioLabelWrapper>
                }
              />
              <FormControlLabel
                value="template-3"
                control={<StyledRadio />}
                label={
                  <RadioLabelWrapper>
                    <img src={heroImage3} alt="hero template 1" />
                    <span>Carousel Template</span>
                  </RadioLabelWrapper>
                }
              />
            </RadioGroup>
          </RadioButtonGroupWrapper>
          {templateName === 'template-1' && <Template1 />}
          {templateName === 'template-2' && <Template2 />}
          {templateName === 'template-3' && <Template3 />}
        </ContentWrapper>
      </ExhibitorContentWrapper>
    </ThemeProvider>
  );
}
