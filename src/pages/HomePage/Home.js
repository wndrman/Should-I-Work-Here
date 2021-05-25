import React from 'react';
import { homeObjOne } from './Data';
import { InfoSection } from '../../components';
import { ReviewSection } from '../../components'

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <ReviewSection />
        </>
    )
}


export default Home
