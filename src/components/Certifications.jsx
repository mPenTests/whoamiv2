import React from 'react';
import { Card, CardBody, CardFooter, Stack, Heading, Text} from '@chakra-ui/react'
import { Fade } from 'react-reveal';


const Certifications = () => {
    return (
        <div className='certs'>
        <Fade right>
                <Card maxW='sm'>
                  <CardBody>
                    <img
                      src='https://www.freecodecamp.org/news/content/images/2020/06/harvard-cs50-certificate-sample.png'
                      alt='Green double couch with wooden legs'
                      borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                      <Heading size='md'>CS50W</Heading>
                      <Text>
                            The official Web Development course with Django and JavaScript from Harvard
                      </Text>
                    </Stack>
                  </CardBody>
                  <CardFooter>
                  </CardFooter>
                </Card>
            </Fade>
            <Fade left>
            <Card maxW='sm' style={{marginTop:30+'px'}}>
              <CardBody>
                <img
                  src='https://www.youtube.com/img/desktop/yt_1200.png'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>YouTube</Heading>
                  <Text>
                        The best place to learn for free. No tutorials only courses
                  </Text>
                </Stack>
              </CardBody>
              <CardFooter>
              </CardFooter>
            </Card>
            </Fade>
            <Fade right>
            <Card maxW='sm' style={{marginTop:30+'px', marginBottom:50+'px'}}>
              <CardBody>
                <img
                  src='https://www.classcentral.com/report/wp-content/uploads/2022/06/cs50p-python-certificate-of-completion.png'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>CS50P</Heading>
                  <Text>
                        The official programming with python Harvard online course.
                  </Text>
                </Stack>
              </CardBody>
              <CardFooter>
              </CardFooter>
            </Card>
            </Fade>     
        </div>
    );
}

export default Certifications;
