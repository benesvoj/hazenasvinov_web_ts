import React from 'react';
import {VStack, Box, Stack, Menu} from "@chakra-ui/react";
import {Outlet} from 'react-router-dom';
import {Header} from "./components";
import Card from "../Card/Card";

function Layout() {
    return (
        <VStack height="100vh" width="100vw">
            <Box
                position="fixed"
                width="100%"
                top={0}
                backgroundColor="palettes.neutral.10.100"
                borderBottom="1px solid"
                borderColor="general.separator"
                // contain="layout"
                zIndex="MAIN_MENU"
                data-testid="layout-headerWrapper"
            >
                <Stack width="100%" height="100%">
                    {/*<Hamburger menuItems={menuItems} pinnedMenuItems={pinnedMenuItems} />*/}
                    {/*<Space horizontal={4} />*/}
                    <Box flex={1}>
                        <Header />
                    </Box>
                </Stack>
            </Box>
            <Box
                position="fixed"
                width={12}
                height="100%"
                top={12}
                left={0}
                // contain="layout"
                zIndex="MAIN_MENU"
                backgroundColor="palettes.neutral.10.100"
                data-testid="layout-menuWrapper"
            >
                {/*<Menu*/}
                {/*    // menuItems={menuItems}*/}
                {/*    // createMenuItems={createMenuItems}*/}
                {/*    // pinnedMenuItems={pinnedMenuItems}*/}
                {/*/>*/}
            </Box>
            <Box
                flex={1}
                paddingTop={12}
                paddingLeft={12}
                backgroundColor="palettes.neutral.10.100"
                data-testid="layout-content"
            >
                <Outlet />
            </Box>
            <Box>
                <Card />
            </Box>
        </VStack>
    );
}

export default Layout;