import {Heading} from "@chakra-ui/react";

interface HeaderContent {
    title?: string;
}

function HeaderContent(props: HeaderContent) {

    return (
        <Heading size="sm" data-testid="layout-headerTitle">
            {props.title ?? ''}
        </Heading>
    );
}

export default HeaderContent;