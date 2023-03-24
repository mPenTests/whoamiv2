import React from 'react';
import { Link, Button, Heading, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, } from '@chakra-ui/react';
import { Fade } from 'react-reveal';
import { useDisclosure, useMediaQuery } from '@chakra-ui/react';

  
const NavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [isLargerThan300] = useMediaQuery('(min-width: 770px)')

    const buttonStyle = {
      backgroundColor: 'inherit',
      marginTop: '10px',
      marginBottom: '10px',
      marginRight: '10px',
    }

    const drawerStyle = {
      backgroundColor: 'rgb(59, 54, 54)',
      color: 'white',
    }

    return (
        <nav>
            <div className="heading-fade">
                <Fade top delay={1050}>
                    <Heading as='h6' style={isLargerThan300 ? {} : {fontSize:'20px'}}>developer(name='Marko')</Heading>
                </Fade>
            </div>
            <Fade top>
                <Button sx={buttonStyle} _hover={{backgroundColor: 'rgb(109, 184, 35)'}} style={isLargerThan300 ? {display:'block'} : {display:'none'}}><Link href='/'>Home</Link></Button>
                <Button sx={buttonStyle} _hover={{backgroundColor: 'rgb(109, 184, 35)'}} style={isLargerThan300 ? {display:'block'} : {display:'none'}}><Link href='/certifications'>Certifications</Link></Button>
                <Button sx={buttonStyle} _hover={{backgroundColor: 'rgb(109, 184, 35)'}} style={isLargerThan300 ? {display:'block'} : {display:'none'}}><Link href='/projects'>Projects</Link></Button>
                <Button sx={buttonStyle} _hover={{backgroundColor: 'rgb(109, 184, 35)'}} style={isLargerThan300 ? {display:'block'} : {display:'none'}}><Link href='/contact'>Contact</Link></Button>
                <Button sx={buttonStyle}ref={btnRef} colorScheme='teal' onClick={onOpen} className='nav-menu' style={isLargerThan300 ? {display:'none'} : {display:'block'}}>
                    Menu
                </Button>
                <Drawer
                  isOpen={isOpen}
                  placement='top'
                  onClose={onClose}
                  finalFocusRef={btnRef}
                  size={'xs'}
                >
                  <DrawerOverlay />
                  <DrawerContent sx={drawerStyle}>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>
                
                    <DrawerBody>
                        <Button sx={buttonStyle} _hover={{backgroundColor: 'rgb(109, 184, 35)'}}><Link href='/'>Home</Link></Button>
                        <Button sx={buttonStyle} _hover={{backgroundColor: 'rgb(109, 184, 35)'}}><Link href='/certifications'>Certifications</Link></Button>
                        <Button sx={buttonStyle} _hover={{backgroundColor: 'rgb(109, 184, 35)'}}><Link href='/projects'>Projects</Link></Button>
                        <Button sx={buttonStyle} _hover={{backgroundColor: 'rgb(109, 184, 35)'}}><Link href='/contact'>Contact</Link></Button>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
            </Fade>
        </nav>
    );
}

export default NavBar;
