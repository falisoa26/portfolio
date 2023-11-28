import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Text from '../../../general/text/Text';

export default function LinearDeterminate() {
  const [progressfigma, setProgressfigma] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgressfigma((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 90);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  const [progresshtml, setProgresshtml] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgresshtml((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 70);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="mySkill">
        <div className="mySkillOne">
          <div className="linear">
            <div className="descriSkill">
              <Text
                tag='h3'
                className='h3Skill'
                weight={200}
              >
                FIGMA
              </Text>
              <Text
               tag='h3'
               className='h3Skill'
               weight={200}

              >
                90%
              </Text>
            </div>
            <Box sx={{ width: '100%' }}>
              <LinearProgress variant="determinate" value={progressfigma} color='warning' style={{ height: 10 }} />
            </Box>
          </div>
          <div className="linear">
            <div className="descriSkill">
              <Text
               tag='h3'
               className='h3Skill'
               weight={200}
              >
                HTML
              </Text>
              <Text
               tag='h3'
               className='h3Skill'
               weight={200}

              >
                90%
              </Text>
            </div>
            <Box sx={{ width: '100%' }}>
              <LinearProgress variant="determinate" value={progressfigma} color='warning' style={{ height: 10 }} />
            </Box>
          </div>
          <div className="linear">
            <div className="descriSkill">
              <Text
                 tag='h3'
                 className='h3Skill'
                 weight={200}
              >
                CSS
              </Text>
              <Text
                tag='h3'
                className='h3Skill'
                weight={200}

              >
                90%
              </Text>
            </div>
            <Box sx={{ width: '100%' }}>
              <LinearProgress variant="determinate" value={progressfigma} color='warning' style={{ height: 10 }} />
            </Box>
          </div>
          <div className="linear">
            <div className="descriSkill">
              <Text
              tag='h3'
              className='h3Skill'
              weight={200}
              >
                SASS
              </Text>
              <Text
              tag='h3'
              className='h3Skill'
              weight={200}

              >
                90%
              </Text>
            </div>
            <Box sx={{ width: '100%' }}>
              <LinearProgress variant="determinate" value={progressfigma} color='warning' style={{ height: 10 }} />
            </Box>
          </div>
        </div>
        <div className="mySkillTwo">
          <div className="linear">
            <div className="descriSkill">
              <Text
                tag='h3'
                className='h3Skill'
                weight={200}
              >
                JS
              </Text>
              <Text
               tag='h3'
               className='h3Skill'
               weight={200}
              >
                70%
              </Text>
            </div>
            <Box sx={{ width: '100%' }}>
              <LinearProgress variant="determinate" value={progresshtml} color='warning' style={{ height: 10 }} />
            </Box>
          </div>
          <div className="linear">
            <div className="descriSkill">
              <Text
              tag='h3'
              className='h3Skill'
              weight={200}
              >
                REACT
              </Text>
              <Text
                 tag='h3'
                 className='h3Skill'
                 weight={200}

              >
                70%
              </Text>
            </div>
            <Box sx={{ width: '100%' }}>
              <LinearProgress variant="determinate" value={progresshtml} color='warning' style={{ height: 10 }} />
            </Box>
          </div>
        </div>
      </div>



    </>



  );
}
