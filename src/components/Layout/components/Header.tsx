import {HStack, Box, MenuItemProps, Menu, MenuButton, Portal, MenuList, MenuItem} from "@chakra-ui/react";
import HeaderContent from "./HeaderContent";
import Logo from './Logo';

interface HeaderProps {
    module?: MenuItemProps;
}


function Header(props: HeaderProps) {
    return (
        <HStack align="center">
            <Box flex={1}>
                {/*<HeaderContent title={props.module ? (props.module.layoutProps.title) : undefined} />*/}
                <Menu>
                    <MenuButton>Oddil</MenuButton>
                    <MenuButton>Kontakt</MenuButton>
                    <MenuButton>Kronika</MenuButton>
                    <Logo />
                    <Portal>
                        <MenuList>
                            <MenuItem>oddil</MenuItem>
                        </MenuList>
                    </Portal>
                </Menu>
            </Box>
        </HStack>
    );
}

export default Header;