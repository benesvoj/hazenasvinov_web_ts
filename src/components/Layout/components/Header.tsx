import {HStack, Box, MenuItemProps} from "@chakra-ui/react";
import HeaderContent from "./HeaderContent";
import MyProfileAndSettings from "./MyProfileAndSettings";

interface HeaderProps {
    module?: MenuItemProps;
}


function Header(props: HeaderProps) {
    return (
        <HStack align="center">
            <Box flex={1}>
                {/*<HeaderContent title={props.module ? (props.module.layoutProps.title) : undefined} />*/}
            </Box>
            <MyProfileAndSettings />
        </HStack>
    );
}

export default Header;