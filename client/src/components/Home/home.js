import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { requestAllBlocks } from '../../store/blocks/actions';
import Loading from '../Loading';
const BlockList = lazy(() => import('../../containers/BlockList'));

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(requestAllBlocks());
    });
    return (
        <Suspense fallback={<Loading />}>
            <BlockList />
        </Suspense>
    );
};

export default Home;
