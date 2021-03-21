import React, { Suspense } from 'react';
import moment from 'moment';
import { ContainerBlockCard, DataBlock, Data } from './styled';
import Loading from '../Loading';
import { Link } from 'react-router-dom';

const BlockCard = ({ block }) => {
    const date = new Date(parseInt(block.time) * 1000);
    const dateFmt = moment(date).format('llll');
    return (
        <Suspense fallback={<Loading />}>
            <ContainerBlockCard>
                <DataBlock>
                    <Data>
                        <p>Block time:</p>
                        <span>{dateFmt}</span>
                    </Data>
                    <Data>
                        <p>Block height:</p>
                        <span>{block.height}</span>
                    </Data>
                </DataBlock>
                <Data>
                    <p>Block hash:</p>
                    <Link to={`/info/${block.hash}`}>{block.hash}</Link>
                </Data>
            </ContainerBlockCard>
        </Suspense>
    );
};

export default BlockCard;
