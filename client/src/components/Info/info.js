import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import {requestInfoToken} from '../../store/block/actions';
import Loading from '../Loading';
const InfoBlock = lazy(() => import('../../containers/BlockInfo'));
const Info = () => {
    const dispatch = useDispatch();
    const { hash } = useParams();
    useEffect(() => {
        if (hash) {
            dispatch(requestInfoToken(hash));
        }
    });
 
    return hash ? (
        <Suspense fallback={<Loading />}>
            <InfoBlock />
        </Suspense>
    ) : (
        <span>Error</span>
    );
};

export default Info;
