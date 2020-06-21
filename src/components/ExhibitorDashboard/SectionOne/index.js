import React from 'react';
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
import heroImage1 from 'images/page-layout/section-1/layout-1.jpg';
import heroImage2 from 'images/page-layout/section-1/layout-2.jpg';
import heroImage3 from 'images/page-layout/section-1/layout-3.jpg';
import heroImage4 from 'images/page-layout/section-1/layout-4.jpg';
import {
  useCommonStyles,
  ExhibitorContentWrapper,
  HeroHeadingWrapper,
  StyledFormCard,
  FormHelpText,
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
          Section-1 Image
        </Typography>
        <TextField
          type="file"
          className={classes.textFileUploadStyle}
          variant="outlined"
        />
      </StyledFormCard>
      <StyledFormCard>
        <Typography variant="body1" component="label">
          Section-1 heading
        </Typography>
        <TextField
          variant="outlined"
          className={classes.textFieldStyle}
          placeholder="Enter section heading..."
        />
      </StyledFormCard>
      <StyledFormCard>
        <Typography variant="body1" component="label">
          Section-1 description first paragraph
        </Typography>
        <TextField
          variant="outlined"
          multiline
          rows="3"
          className={classes.textFieldStyle}
          placeholder="Enter section description..."
        />
      </StyledFormCard>
      <StyledFormCard>
        <Typography variant="body1" component="label">
          Section-1 description second paragraph
        </Typography>
        <TextField
          variant="outlined"
          multiline
          rows="3"
          className={classes.textFieldStyle}
          placeholder="Enter section description..."
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
          Section-1 heading
        </Typography>
        <TextField
          variant="outlined"
          className={classes.textFieldStyle}
          placeholder="Enter section heading..."
        />
      </StyledFormCard>
      <StyledFormCard>
        <Typography variant="body1" component="label">
          Section-1 description first paragraph
        </Typography>
        <TextField
          variant="outlined"
          multiline
          rows="3"
          className={classes.textFieldStyle}
          placeholder="Enter section description..."
        />
      </StyledFormCard>
      <StyledFormCard>
        <Typography variant="body1" component="label">
          Section-1 Image
        </Typography>
        <TextField
          type="file"
          className={classes.textFileUploadStyle}
          variant="outlined"
        />
      </StyledFormCard>
      <StyledFormCard>
        <Typography variant="body1" component="label">
          Section-1 heading
        </Typography>
        <TextField
          variant="outlined"
          className={classes.textFieldStyle}
          placeholder="Enter section heading..."
        />
      </StyledFormCard>
      <StyledFormCard>
        <Typography variant="body1" component="label">
          Section-1 description first paragraph
        </Typography>
        <TextField
          variant="outlined"
          multiline
          rows="3"
          className={classes.textFieldStyle}
          placeholder="Enter section description..."
        />
      </StyledFormCard>
      <StyledFormCard>
        <Typography variant="body1" component="label">
          Section-1 Image
        </Typography>
        <TextField
          type="file"
          className={classes.textFileUploadStyle}
          variant="outlined"
        />
      </StyledFormCard>
      <StyledFormCard>
        <Typography variant="body1" component="label">
          Section-1 heading
        </Typography>
        <TextField
          variant="outlined"
          className={classes.textFieldStyle}
          placeholder="Enter section heading..."
        />
      </StyledFormCard>
      <StyledFormCard>
        <Typography variant="body1" component="label">
          Section-1 description first paragraph
        </Typography>
        <TextField
          variant="outlined"
          multiline
          rows="3"
          className={classes.textFieldStyle}
          placeholder="Enter section description..."
        />
      </StyledFormCard>
      <StyledFormCard>
        <Typography variant="body1" component="label">
          Section-1 Image
        </Typography>
        <TextField
          type="file"
          className={classes.textFileUploadStyle}
          variant="outlined"
        />
      </StyledFormCard>
      <StyledFormCard>
        <Typography variant="body1" component="label">
          Section-1 heading
        </Typography>
        <TextField
          variant="outlined"
          className={classes.textFieldStyle}
          placeholder="Enter section heading..."
        />
      </StyledFormCard>
      <StyledFormCard>
        <Typography variant="body1" component="label">
          Section-1 description first paragraph
        </Typography>
        <TextField
          variant="outlined"
          multiline
          rows="3"
          className={classes.textFieldStyle}
          placeholder="Enter section description..."
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

  return (
    <TemplateFormWrapper>
      <StyledFormCard>
        <Typography variant="body1" component="label">
          Section-1 heading
        </Typography>
        <TextField
          variant="outlined"
          className={classes.textFieldStyle}
          placeholder="Enter section heading..."
        />
      </StyledFormCard>
      <StyledFormCard>
        <Typography variant="body1" component="label">
          Section-1 description first paragraph
        </Typography>
        <TextField
          variant="outlined"
          multiline
          rows="3"
          className={classes.textFieldStyle}
          placeholder="Enter section description..."
        />
      </StyledFormCard>
      <StyledFormCard>
        <Typography variant="body1" component="label">
          Section-1 description second paragraph
        </Typography>
        <TextField
          variant="outlined"
          multiline
          rows="3"
          className={classes.textFieldStyle}
          placeholder="Enter section description..."
        />
      </StyledFormCard>
      <StyledFormCard>
        <Typography variant="body1" component="label">
          Section-1 Image
        </Typography>
        <TextField
          type="file"
          className={classes.textFileUploadStyle}
          variant="outlined"
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

function Template4() {
  const classes = useCommonStyles();
  return (
    <TemplateFormWrapper>
      <StyledFormCard>
        <Typography variant="body1" component="label">
          Section-1 heading
        </Typography>
        <TextField
          variant="outlined"
          className={classes.textFieldStyle}
          placeholder="Enter section heading..."
        />
      </StyledFormCard>
      <StyledFormCard>
        <Typography variant="body1" component="label">
          Section-1 description first paragraph
        </Typography>
        <TextField
          variant="outlined"
          multiline
          rows="3"
          className={classes.textFieldStyle}
          placeholder="Enter section description..."
        />
      </StyledFormCard>
      <StyledFormCard>
        <Typography variant="body1" component="label">
          Section-1 description second paragraph
        </Typography>
        <TextField
          variant="outlined"
          multiline
          rows="3"
          className={classes.textFieldStyle}
          placeholder="Enter section description..."
        />
      </StyledFormCard>
      <StyledFormCard>
        <Typography variant="body1" component="label">
          Section-1 video background Image
        </Typography>
        <TextField
          type="file"
          className={classes.textFileUploadStyle}
          variant="outlined"
        />
      </StyledFormCard>
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

export default function ExhibitorSectionOne(props) {
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
                    <img src={heroImage1} alt="section-1 template 1" />
                    <span>Template 1</span>
                  </RadioLabelWrapper>
                }
              />
              <FormControlLabel
                value="template-2"
                control={<StyledRadio />}
                label={
                  <RadioLabelWrapper>
                    <img src={heroImage2} alt="section-1 template 2" />
                    <span>Template 2</span>
                  </RadioLabelWrapper>
                }
              />
              <FormControlLabel
                value="template-3"
                control={<StyledRadio />}
                label={
                  <RadioLabelWrapper>
                    <img src={heroImage3} alt="section-1 template 3" />
                    <span>Template 3</span>
                  </RadioLabelWrapper>
                }
              />
              <FormControlLabel
                value="template-4"
                control={<StyledRadio />}
                label={
                  <RadioLabelWrapper>
                    <img src={heroImage4} alt="section-1 template 4" />
                    <span>Template 4</span>
                  </RadioLabelWrapper>
                }
              />
            </RadioGroup>
          </RadioButtonGroupWrapper>
          {templateName === 'template-1' && <Template1 />}
          {templateName === 'template-2' && <Template2 />}
          {templateName === 'template-3' && <Template3 />}
          {templateName === 'template-4' && <Template4 />}
        </ContentWrapper>
      </ExhibitorContentWrapper>
    </ThemeProvider>
  );
}
