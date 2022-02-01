import { QuestionCircleFilled } from '@ant-design/icons';
import { Card, Col, Row, Tooltip } from 'antd';
import BN from 'bn.js';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAccount, usePower, useStaking } from '../../../hooks';
import { assetToPower } from '../../../utils';
import { PrettyAccount } from '../../widget/PrettyAccount';
import { AssetOverview } from '../AssetOverview';
import { Actions } from './Actions';
import { Earnings } from './Earnings';

export function Power() {
  const { t } = useTranslation();
  const [eraSelectionIndex, setEraSelectionIndex] = useState(0);
  const { accountWithMeta, assets, getBalances } = useAccount();
  const { stakingDerive } = useStaking();
  const { pool } = usePower();

  const power = useMemo(() => {
    if (!stakingDerive || stakingDerive.stakingLedger.isEmpty) {
      return assetToPower(new BN(0), new BN(0), pool.ring, pool.kton);
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { active, activeKton } = stakingDerive.stakingLedger;

    return assetToPower(new BN(active.toString()), new BN(activeKton.toString()), pool.ring, pool.kton);
  }, [pool, stakingDerive]);

  return (
    <>
      <Card>
        <div className="flex justify-between items-center">
          <PrettyAccount account={accountWithMeta} />

          <Actions eraSelectionIndex={eraSelectionIndex} />
        </div>
      </Card>

      <Row gutter={32} className="mt-8">
        <Col span={8}>
          <div
            className="relative rounded-xl bg-white"
            style={{
              background: 'linear-gradient(-45deg, #fe3876 0%, #7c30dd 71%, #3a30dd 100%)',
            }}
          >
            <div className="flex justify-between items-center p-6">
              <div className="text-white font-bold pl-4">
                <h2 className="text-white text-lg mb-4">{t('Power')}</h2>
                <b className="text-xl">{power.toString()}</b>
              </div>
              <img src="/image/lightning.png" className="w-20" />
            </div>

            <Tooltip className="absolute top-4 right-4" title={t('POWER = your stake / total stake')}>
              <QuestionCircleFilled className="cursor-pointer text-white" />
            </Tooltip>
          </div>
        </Col>

        {assets.map((item, index) => (
          <Col span={8} key={item.token?.symbol || index}>
            <AssetOverview asset={item} key={index} refresh={getBalances}></AssetOverview>
          </Col>
        ))}
      </Row>
      <Earnings updateEraIndex={(idx) => setEraSelectionIndex(idx)} />
    </>
  );
}
