import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const ModalDiv = styled.div`
    display: ${p => p.block && p.block};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
`

const ContentDiv = styled.div`
    position: fixed;
    background: white;
    width: 50%;
    height: auto;
    top: 50%;
    left: 50%;
    padding: 2rem;
    transform: translate(-50%, -50%);
`
export const StyledModal = (
    {
        handleClose,
        show,
        children
    }

) => {
    return (
        <ModalDiv block={show ? 'block' : 'none'}>
            <ContentDiv>
                {children}
                <Button
                    onClick={handleClose}
                >Close</Button>
            </ContentDiv>
        </ModalDiv>
    )
}


export const StyledModal2 = (
    {
        handleClose,
        show,
        children
    }

) => {
    return (
        <ModalDiv block={show ? 'block' : 'none'}>
            <ContentDiv>
                {children}
                {/* <Button
                    onClick={handleClose}
                >Cancel</Button> */}
            </ContentDiv>
        </ModalDiv>
    )
}