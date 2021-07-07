import styled from "styled-components";

 // AN - App Name
 // TB - Top Bar
 // AL - App Links
 // CA - Content Area
 // BB - Bottom Bar
 // MN - MessageNotification

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 280px auto 70px;
    grid-template-rows: 64px auto;

    grid-template-areas: 
    'AN TB TB'
    'AL CA CA'
    ;
`;