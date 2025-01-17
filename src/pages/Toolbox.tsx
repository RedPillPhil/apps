import { Tabs } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ConvertAddress } from '../components/toolbox/address';
import { Withdraw } from '../components/toolbox/withdraw';
// import { Deposits } from '../components/toolbox/deposits/';
// import { Faucet } from '../components/toolbox/faucet';
import { useApi } from '../hooks';
import { EVMChainConfig, SearchParamsKey } from '../model';
import { MetamaskProvider } from '../providers/metamask';
import SubkeyMigration from '../components/migration';

type ActiveTab = 'address' | 'withdraw' | 'migration';

export function Toolbox() {
  const { t } = useTranslation();
  const { network } = useApi();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<ActiveTab>('address');

  const { name, evm: supportEvm } = network as EVMChainConfig;
  // const supportFaucet = useMemo(() => name === 'pangolin' || name === 'pangoro', [name]);

  const handleChange = useCallback(
    (tab: string) => {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set(SearchParamsKey.TAB, tab);
      setActiveTab(tab as ActiveTab);
      navigate(`${location.pathname}?${searchParams.toString()}`);
    },
    [navigate, location]
  );

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setActiveTab((searchParams.get(SearchParamsKey.TAB) as ActiveTab) || 'address');
  }, []);

  return (
    <MetamaskProvider>
      <Tabs
        activeKey={activeTab}
        onChange={handleChange}
        className={`lg:px-8 px-4 w-full mx-auto dark:shadow-none dark:border-transparent pb-5 page-account-tabs page-account-tabs-${name}`}
      >
        {supportEvm && (
          <Tabs.TabPane tab={t('EVM Address')} key="address">
            <ConvertAddress />
          </Tabs.TabPane>
        )}

        {supportEvm && (
          <Tabs.TabPane tab={t('EVM Withdraw')} key="withdraw">
            <Withdraw />
          </Tabs.TabPane>
        )}
        {supportEvm && (
          <Tabs.TabPane tab={t('Local Subkey Migration')} key="migration">
            <SubkeyMigration />
          </Tabs.TabPane>
        )}
      </Tabs>
    </MetamaskProvider>
  );
}
