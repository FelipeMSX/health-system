import { TextField } from '@material-ui/core';
import React from 'react';

import {Container, Input} from './styles'

const TextBox: React.FC = () => {
    return (
    <Container>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </Container>
    )
};

export default TextBox;