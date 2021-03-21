import React, { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading';
const BlockCard = lazy(() => import('../../components/BlockCard'));

const BlockList = () => {
    const blockListData = useSelector((state) => state.blocks.data);
    const blocksLoading = useSelector((state) => state.blocks.loading);
    const blocksError = useSelector((state) => state.blocks.error);
    return !blocksLoading && !blocksError ? (
        <Suspense fallback={<Loading />}>
            <h1>List of available blocks:</h1>
            {blockListData.length
                ? blockListData.map((block) => (
                      <BlockCard key={block.hash} block={block} />
                  ))
                : null}
        </Suspense>
    ) : blocksError ? (
        <h1>Error:</h1>
    ) : null;
};

export default BlockList;
