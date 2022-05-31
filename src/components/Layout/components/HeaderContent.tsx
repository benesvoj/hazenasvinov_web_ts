import {useLocation} from "react-router-dom";
import {Heading} from "@chakra-ui/react";

interface HeaderContent {
    title?: string;
}

function HeaderContent(props: HeaderContent) {
    const location = useLocation();

    return (
        <Heading size="sm" data-testid="layout-headerTitle">
            {props.title ?? ''}
        </Heading>
    );
}

export default HeaderContent;