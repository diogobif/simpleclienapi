import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { DataBlock, BackBlock } from './styled';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';
import { Data } from '../../components/BlockCard/styled';

const BlockInfo = () => {
    const infoBlock = useSelector((state) => state.blockInfo.data);
    const infoBlockLoading = useSelector((state) => state.blockInfo.loading);
    const infoBlockError = useSelector((state) => state.blockInfo.error);
    return (
        <Suspense fallback={<Loading />}>
            {
                !infoBlockLoading && !infoBlockError ? 
                    <>
                    <h1>Block Info:</h1>
                    <DataBlock>
                        <Data>
                            <p>Size:</p>
                            <span>{infoBlock.bits}</span>
                        </Data>
        
                        <Data>
                            <p>Block index:</p>
                            <span>{infoBlock.block_index}</span>
                        </Data>
                        
                        <Data>
                            <p>Prev.:</p>
                            <span>{infoBlock.prev_block}</span>
                        </Data>
                    </DataBlock>
                    <BackBlock>
                        <Link to={'/home'}>Back</Link>
                    </BackBlock>
                    </>
            : infoBlockError ? (
            <span>error</span>
            ) : null
            }
        </Suspense>
    )
};

export default BlockInfo;
